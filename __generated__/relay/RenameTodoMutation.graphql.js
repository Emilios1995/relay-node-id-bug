/**
 * @generated SignedSource<<8f1d127101f899187a9ce0c2542f1e6d>>
 * @relayHash 012c3d489b4ddc17d1af59834cd28ab8
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @relayRequestID 66283ae3ac541b9e9cc5db26966aa0f639c3f3ca

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type RenameTodoInput = {|
  id: string,
  text: string,
  clientMutationId?: ?string,
|};
export type RenameTodoMutation$variables = {|
  input: RenameTodoInput,
|};
export type RenameTodoMutation$data = {|
  +renameTodo: ?{|
    +todo: {|
      +id: string,
      +text: string,
    |},
  |},
|};
export type RenameTodoMutation = {|
  variables: RenameTodoMutation$variables,
  response: RenameTodoMutation$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "text",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RenameTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RenameTodoPayload",
        "kind": "LinkedField",
        "name": "renameTodo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "todo",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RenameTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RenameTodoPayload",
        "kind": "LinkedField",
        "name": "renameTodo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "todo",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "nodeId",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "66283ae3ac541b9e9cc5db26966aa0f639c3f3ca",
    "metadata": {},
    "name": "RenameTodoMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node/*: any*/).hash = "de4aa1639055c2e6a78ee22cce29870a";

module.exports = ((node/*: any*/)/*: Mutation<
  RenameTodoMutation$variables,
  RenameTodoMutation$data,
>*/);
