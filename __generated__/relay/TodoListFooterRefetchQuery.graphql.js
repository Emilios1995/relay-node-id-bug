/**
 * @generated SignedSource<<b7dc45298ff89c93ed85d074ead3a394>>
 * @relayHash b5cc7c6e8b600b5e37f2ea59adb14a30
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @relayRequestID b23419d4b141bd0c1be25b1879b7c37859aade53

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
import type { TodoListFooter_user$fragmentType } from "./TodoListFooter_user.graphql";
export type TodoListFooterRefetchQuery$variables = {|
  nodeId: string,
|};
export type TodoListFooterRefetchQuery$data = {|
  +node: ?{|
    +$fragmentSpreads: TodoListFooter_user$fragmentType,
  |},
|};
export type TodoListFooterRefetchQuery = {|
  variables: TodoListFooterRefetchQuery$variables,
  response: TodoListFooterRefetchQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "nodeId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "nodeId"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListFooterRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TodoListFooter_user"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoListFooterRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "nodeId",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
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
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "userId",
                "storageKey": null
              }
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "b23419d4b141bd0c1be25b1879b7c37859aade53",
    "metadata": {},
    "name": "TodoListFooterRefetchQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node/*: any*/).hash = "2648ca8b5bd187d335079e9c88906f6b";

module.exports = ((node/*: any*/)/*: Query<
  TodoListFooterRefetchQuery$variables,
  TodoListFooterRefetchQuery$data,
>*/);
