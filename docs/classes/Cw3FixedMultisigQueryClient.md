[terra-clients](../README.md) / Cw3FixedMultisigQueryClient

# Class: Cw3FixedMultisigQueryClient

## Hierarchy

- **`Cw3FixedMultisigQueryClient`**

  ↳ [`Cw3FixedMultisigClient`](Cw3FixedMultisigClient.md)

## Implements

- `Cw3FixedMultisigReadOnlyInterface`

## Table of contents

### Constructors

- [constructor](Cw3FixedMultisigQueryClient.md#constructor)

### Properties

- [client](Cw3FixedMultisigQueryClient.md#client)
- [contractAddress](Cw3FixedMultisigQueryClient.md#contractaddress)

### Methods

- [getVote](Cw3FixedMultisigQueryClient.md#getvote)
- [listProposals](Cw3FixedMultisigQueryClient.md#listproposals)
- [listVoters](Cw3FixedMultisigQueryClient.md#listvoters)
- [listVotes](Cw3FixedMultisigQueryClient.md#listvotes)
- [proposal](Cw3FixedMultisigQueryClient.md#proposal)
- [reverseProposals](Cw3FixedMultisigQueryClient.md#reverseproposals)
- [threshold](Cw3FixedMultisigQueryClient.md#threshold)
- [voter](Cw3FixedMultisigQueryClient.md#voter)

## Constructors

### constructor

• **new Cw3FixedMultisigQueryClient**(`client`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `LCDClient` |
| `contractAddress` | `string` |

## Properties

### client

• **client**: `LCDClient`

#### Defined in

clients/Cw3FixedMultisigClient.ts:375

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

Cw3FixedMultisigReadOnlyInterface.contractAddress

#### Defined in

clients/Cw3FixedMultisigClient.ts:376

## Methods

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

Cw3FixedMultisigReadOnlyInterface.getVote

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

Cw3FixedMultisigReadOnlyInterface.listProposals

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

Cw3FixedMultisigReadOnlyInterface.listVoters

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

Cw3FixedMultisigReadOnlyInterface.listVotes

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

Cw3FixedMultisigReadOnlyInterface.proposal

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

Cw3FixedMultisigReadOnlyInterface.reverseProposals

___

### threshold

▸ **threshold**(): `Promise`<`ThresholdResponse`\>

#### Returns

`Promise`<`ThresholdResponse`\>

#### Implementation of

Cw3FixedMultisigReadOnlyInterface.threshold

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

Cw3FixedMultisigReadOnlyInterface.voter
