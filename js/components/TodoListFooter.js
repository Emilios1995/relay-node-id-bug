// @flow
import type {TodoListFooter_todoConnection$key} from 'relay/TodoListFooter_todoConnection.graphql';
import type {TodoListFooter_user$key} from 'relay/TodoListFooter_user.graphql';

import {useRemoveCompletedTodosMutation} from '../mutations/RemoveCompletedTodosMutation';

import * as React from 'react';
import {graphql, useFragment, useRefetchableFragment} from 'react-relay';

type Props = {|
  todoConnectionRef: TodoListFooter_todoConnection$key,
  userRef: TodoListFooter_user$key,
|};

export default function TodoListFooter({
  userRef,
  todoConnectionRef,
}: Props): React$Element<'footer'> {
  const [user, refetch] = useRefetchableFragment(
    graphql`
      fragment TodoListFooter_user on User
      @refetchable(queryName: "TodoListFooterRefetchQuery") {
        nodeId
        totalCount
        completedCount
        ...RemoveCompletedTodosMutation_user
      }
    `,
    userRef,
  );

  React.useEffect(() => {
    let t = setTimeout(() => {
      refetch({nodeId: user.nodeId})
    }, 2000)
    return () => clearTimeout(t)
  }, [refetch])

  const todoConnection = useFragment(
    graphql`
      fragment TodoListFooter_todoConnection on TodoConnection {
        ...RemoveCompletedTodosMutation_todoConnection
      }
    `,
    todoConnectionRef,
  );

  const commitRemoveCompletedTodosMutation = useRemoveCompletedTodosMutation(
    user,
    todoConnection,
  );

  const numRemainingTodos = user.totalCount - user.completedCount;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{numRemainingTodos}</strong> item
        {numRemainingTodos === 1 ? '' : 's'} left
      </span>

      {user.completedCount > 0 && (
        <button
          className="clear-completed"
          onClick={commitRemoveCompletedTodosMutation}>
          Clear completed
        </button>
      )}
    </footer>
  );
}
