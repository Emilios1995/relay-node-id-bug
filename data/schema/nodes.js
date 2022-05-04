// @flow
/* eslint flowtype/require-return-type: 'off' */

import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInterfaceType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  type GraphQLFieldConfig,
  type GraphQLFieldConfigArgumentMap,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
} from 'graphql-relay';

import {
  Todo,
  User,
  USER_ID,
  getTodoOrThrow,
  getTodos,
  getUserOrThrow,
} from '../database';

function nodeDefinitions(idFetcher, typeResolver) {
  var nodeInterface = new GraphQLInterfaceType({
    name: 'Node',
    description: 'An object with an ID',
    fields: function fields() {
      return {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'The id of the object.',
        },
        nodeId: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'The id of the object.',
        },
      };
    },
    resolveType: typeResolver,
  });

  var nodeField = {
    description: 'Fetches an object given its ID',
    type: nodeInterface,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'The ID of an object',
      },
    },
    resolve: function resolve(obj, _ref, context, info) {
      var id = _ref.id;
      return idFetcher(id, context, info);
    },
  };

  var nodesField = {
    description: 'Fetches objects given their IDs',
    type: new GraphQLNonNull(new GraphQLList(nodeInterface)),
    args: {
      ids: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(GraphQLID)),
        ),
        description: 'The IDs of objects',
      },
    },
    resolve: function resolve(obj, _ref2, context, info) {
      var ids = _ref2.ids;
      return Promise.all(
        ids.map(function (id) {
          return Promise.resolve(idFetcher(id, context, info));
        }),
      );
    },
  };

  return {
    nodeInterface: nodeInterface,
    nodeField: nodeField,
    nodesField: nodesField,
  };
}
// $FlowFixMe graphql-relay types not available in flow-typed, strengthen this typing
const {nodeInterface, nodeField} = (nodeDefinitions(
  (globalId: string): ?{} => {
    const {type, id}: {id: string, type: string} = fromGlobalId(globalId);

    if (type === 'Todo') {
      return (getTodoOrThrow(id): $FlowFixMe);
    } else if (type === 'User') {
      return (getUserOrThrow(id): $FlowFixMe);
    }
    return null;
  },
  (obj: {}): ?GraphQLObjectType => {
    if (obj instanceof Todo) {
      return GraphQLTodo;
    } else if (obj instanceof User) {
      return GraphQLUser;
    }
    return null;
  },
): {
  nodeField: GraphQLFieldConfig<$FlowFixMe, $FlowFixMe>,
  nodeInterface: GraphQLInterfaceType,
  nodesField: GraphQLFieldConfig<$FlowFixMe, $FlowFixMe>,
});

const GraphQLTodo: GraphQLObjectType = new GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: globalIdField('Todo'),
    nodeId: globalIdField('Todo'),
    text: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (todo: Todo): string => todo.text,
    },
    complete: {
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: (todo: Todo): boolean => todo.complete,
    },
  },
  interfaces: [nodeInterface],
});

const {connectionType: TodosConnection, edgeType: GraphQLTodoEdge} =
  (connectionDefinitions({
    name: 'Todo',
    nodeType: GraphQLTodo,
  }): {
    connectionType: GraphQLObjectType,
    edgeType: GraphQLObjectType,
  });

// $FlowFixMe[cannot-spread-indexer]
const todosArgs: GraphQLFieldConfigArgumentMap = {
  status: {
    type: GraphQLString,
    defaultValue: 'any',
  },
  ...connectionArgs,
};

const GraphQLUser: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: globalIdField('User'),
    nodeId: globalIdField('User'),
    userId: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (): string => USER_ID,
    },
    todos: {
      type: TodosConnection,
      args: todosArgs,
      // eslint-disable-next-line flowtype/require-parameter-type
      resolve: (root: {}, {status, after, before, first, last}) =>
        connectionFromArray([...getTodos(status)], {
          after,
          before,
          first,
          last,
        }),
    },
    totalCount: {
      type: new GraphQLNonNull(GraphQLInt),
      resolve: (): number => getTodos().length,
    },
    completedCount: {
      type: new GraphQLNonNull(GraphQLInt),
      resolve: (): number => getTodos('completed').length,
    },
  },
  interfaces: [nodeInterface],
});

export {nodeField, GraphQLTodo, GraphQLTodoEdge, GraphQLUser};
