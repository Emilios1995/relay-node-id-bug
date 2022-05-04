/**
 * @generated SignedSource<<c3861abcf1f6adfff0f4215c759e062d>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import type { RemoveCompletedTodosMutation_user$fragmentType } from "./RemoveCompletedTodosMutation_user.graphql";
import type { FragmentType } from "relay-runtime";
declare export opaque type TodoListFooter_user$fragmentType: FragmentType;
import type { TodoListFooterRefetchQuery$variables } from "./TodoListFooterRefetchQuery.graphql";
export type TodoListFooter_user$data = {|
  +nodeId: string,
  +totalCount: number,
  +completedCount: number,
  +$fragmentSpreads: RemoveCompletedTodosMutation_user$fragmentType,
  +$fragmentType: TodoListFooter_user$fragmentType,
|};
export type TodoListFooter_user$key = {
  +$data?: TodoListFooter_user$data,
  +$fragmentSpreads: TodoListFooter_user$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./TodoListFooterRefetchQuery.graphql'),
      "identifierField": "nodeId"
    }
  },
  "name": "TodoListFooter_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "nodeId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "completedCount",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RemoveCompletedTodosMutation_user"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node/*: any*/).hash = "2648ca8b5bd187d335079e9c88906f6b";

module.exports = ((node/*: any*/)/*: RefetchableFragment<
  TodoListFooter_user$fragmentType,
  TodoListFooter_user$data,
  TodoListFooterRefetchQuery$variables,
>*/);
