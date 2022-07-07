[terra-clients](../README.md) / Cw3FixedMultisigClient

# Class: Cw3FixedMultisigClient

## Hierarchy

- [`Cw3FixedMultisigQueryClient`](Cw3FixedMultisigQueryClient.md)

  ↳ **`Cw3FixedMultisigClient`**

## Implements

- `Cw3FixedMultisigInterface`

## Table of contents

### Constructors

- [constructor](Cw3FixedMultisigClient.md#constructor)

### Properties

- [client](Cw3FixedMultisigClient.md#client)
- [contractAddress](Cw3FixedMultisigClient.md#contractaddress)
- [wallet](Cw3FixedMultisigClient.md#wallet)

### Methods

- [close](Cw3FixedMultisigClient.md#close)
- [execute](Cw3FixedMultisigClient.md#execute)
- [getVote](Cw3FixedMultisigClient.md#getvote)
- [listProposals](Cw3FixedMultisigClient.md#listproposals)
- [listVoters](Cw3FixedMultisigClient.md#listvoters)
- [listVotes](Cw3FixedMultisigClient.md#listvotes)
- [proposal](Cw3FixedMultisigClient.md#proposal)
- [propose](Cw3FixedMultisigClient.md#propose)
- [reverseProposals](Cw3FixedMultisigClient.md#reverseproposals)
- [threshold](Cw3FixedMultisigClient.md#threshold)
- [vote](Cw3FixedMultisigClient.md#vote)
- [voter](Cw3FixedMultisigClient.md#voter)

## Constructors

### constructor

• **new Cw3FixedMultisigClient**(`client`, `wallet`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `LCDClient` |
| `wallet` | `Wallet` \| `ConnectedWallet` |
| `contractAddress` | `string` |

#### Overrides

[Cw3FixedMultisigQueryClient](Cw3FixedMultisigQueryClient.md).[constructor](Cw3FixedMultisigQueryClient.md#constructor)

## Properties

### client

• **client**: `LCDClient`

#### Overrides

[Cw3FixedMultisigQueryClient](Cw3FixedMultisigQueryClient.md).[client](Cw3FixedMultisigQueryClient.md#client)

#### Defined in

clients/Cw3FixedMultisigClient.ts:524

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

Cw3FixedMultisigInterface.contractAddress

#### Overrides

[Cw3FixedMultisigQueryClient](Cw3FixedMultisigQueryClient.md).[contractAddress](Cw3FixedMultisigQueryClient.md#contractaddress)

#### Defined in

clients/Cw3FixedMultisigClient.ts:526

___

### wallet

• **wallet**: `Wallet` \| `ConnectedWallet`

#### Defined in

clients/Cw3FixedMultisigClient.ts:525

## Methods

### close

▸ **close**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.proposalId` | `number` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw3FixedMultisigInterface.close

___

### execute

▸ **execute**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.proposalId` | `number` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw3FixedMultisigInterface.execute

___

### getVote

▸ **getVote**(`__namedParameters`): `Promise`<`VoteResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.proposalId` | `number` |
| `__namedParameters.voter` | `string` |

#### Returns

`Promise`<`VoteResponse`\>

#### Implementation of

Cw3FixedMultisigInterface.getVote

#### Inherited from

[Cw3FixedMultisigQueryClient](Cw3FixedMultisigQueryClient.md).[getVote](Cw3FixedMultisigQueryClient.md#getvote)

___

### listProposals

▸ **listProposals**(`__namedParameters`): `Promise`<`ListProposalsResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.limit?` | `number` |
| `__namedParameters.startAfter?` | `number` |

#### Returns

`Promise`<`ListProposalsResponse`\>

#### Implementation of

Cw3FixedMultisigInterface.listProposals

#### Inherited from

[Cw3FixedMultisigQueryClient](Cw3FixedMultisigQueryClient.md).[listProposals](Cw3FixedMultisigQueryClient.md#listproposals)

___

### listVoters

▸ **listVoters**(`__namedParameters`): `Promise`<`ListVotersResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.limit?` | `number` |
| `__namedParameters.startAfter?` | `string` |

#### Returns

`Promise`<`ListVotersResponse`\>

#### Implementation of

Cw3FixedMultisigInterface.listVoters

#### Inherited from

[Cw3FixedMultisigQueryClient](Cw3FixedMultisigQueryClient.md).[listVoters](Cw3FixedMultisigQueryClient.md#listvoters)

___

### listVotes

▸ **listVotes**(`__namedParameters`): `Promise`<`ListVotesResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.limit?` | `number` |
| `__namedParameters.proposalId` | `number` |
| `__namedParameters.startAfter?` | `string` |

#### Returns

`Promise`<`ListVotesResponse`\>

#### Implementation of

Cw3FixedMultisigInterface.listVotes

#### Inherited from

[Cw3FixedMultisigQueryClient](Cw3FixedMultisigQueryClient.md).[listVotes](Cw3FixedMultisigQueryClient.md#listvotes)

___

### proposal

▸ **proposal**(`__namedParameters`): `Promise`<`ProposalResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.proposalId` | `number` |

#### Returns

`Promise`<`ProposalResponse`\>

#### Implementation of

Cw3FixedMultisigInterface.proposal

#### Inherited from

[Cw3FixedMultisigQueryClient](Cw3FixedMultisigQueryClient.md).[proposal](Cw3FixedMultisigQueryClient.md#proposal)

___

### propose

▸ **propose**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.description` | `string` |
| `__namedParameters.latest?` | `Expiration` |
| `__namedParameters.msgs` | `CosmosMsgForEmpty`[] |
| `__namedParameters.title` | `string` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw3FixedMultisigInterface.propose

___

### reverseProposals

▸ **reverseProposals**(`__namedParameters`): `Promise`<`ReverseProposalsResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.limit?` | `number` |
| `__namedParameters.startBefore?` | `number` |

#### Returns

`Promise`<`ReverseProposalsResponse`\>

#### Implementation of

Cw3FixedMultisigInterface.reverseProposals

#### Inherited from

[Cw3FixedMultisigQueryClient](Cw3FixedMultisigQueryClient.md).[reverseProposals](Cw3FixedMultisigQueryClient.md#reverseproposals)

___

### threshold

▸ **threshold**(): `Promise`<`ThresholdResponse`\>

#### Returns

`Promise`<`ThresholdResponse`\>

#### Implementation of

Cw3FixedMultisigInterface.threshold

#### Inherited from

[Cw3FixedMultisigQueryClient](Cw3FixedMultisigQueryClient.md).[threshold](Cw3FixedMultisigQueryClient.md#threshold)

___

### vote

▸ **vote**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.proposalId` | `number` |
| `__namedParameters.vote` | `string` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw3FixedMultisigInterface.vote

___

### voter

▸ **voter**(`__namedParameters`): `Promise`<`VoterResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.address` | `string` |

#### Returns

`Promise`<`VoterResponse`\>

#### Implementation of

Cw3FixedMultisigInterface.voter

#### Inherited from

[Cw3FixedMultisigQueryClient](Cw3FixedMultisigQueryClient.md).[voter](Cw3FixedMultisigQueryClient.md#voter)
