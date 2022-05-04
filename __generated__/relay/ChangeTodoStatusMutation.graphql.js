/**
 * @generated SignedSource<<5c60fa5df4a6776e877303252dc8d445>>
 * @relayHash b7d79c4d40444260dbbea4c5d06b06cc
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @relayRequestID 113558b81f7d067d2f319c085241eebb24042498

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type ChangeTodoStatusInput = {|
  complete: boolean,
  id: string,
  userId: string,
  clientMutationId?: ?string,
|};
export type ChangeTodoStatusMutation$variables = {|
  input: ChangeTodoStatusInput,
|};
export type ChangeTodoStatusMutation$data = {|
  +changeTodoStatus: ?{|
    +todo: {|
      +id: string,
      +complete: boolean,
    |},
    +user: {|
      +id: string,
      +completedCount: number,
    |},
  |},
|};
export type ChangeTodoStatusMutation = {|
  variables: ChangeTodoStatusMutation$variables,
  response: ChangeTodoStatusMutation$data,
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
  "name": "complete",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "completedCount",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ChangeTodoStatusMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ChangeTodoStatusPayload",
        "kind": "LinkedField",
        "name": "changeTodoStatus",
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v4/*: any*/)
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
    "name": "ChangeTodoStatusMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ChangeTodoStatusPayload",
        "kind": "LinkedField",
        "name": "changeTodoStatus",
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
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "113558b81f7d067d2f319c085241eebb24042498",
    "metadata": {},
    "name": "ChangeTodoStatusMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node/*: any*/).hash = "e232227a4f30f0e16f4e1e1a2e0cea75";

module.exports = ((node/*: any*/)/*: Mutation<
  ChangeTodoStatusMutation$variables,
  ChangeTodoStatusMutation$data,
>*/);
