[terra-clients](../README.md) / Cw721MetadataOnchainQueryClient

# Class: Cw721MetadataOnchainQueryClient

## Hierarchy

- **`Cw721MetadataOnchainQueryClient`**

  ↳ [`Cw721MetadataOnchainClient`](Cw721MetadataOnchainClient.md)

## Implements

- `Cw721MetadataOnchainReadOnlyInterface`

## Table of contents

### Constructors

- [constructor](Cw721MetadataOnchainQueryClient.md#constructor)

### Properties

- [client](Cw721MetadataOnchainQueryClient.md#client)
- [contractAddress](Cw721MetadataOnchainQueryClient.md#contractaddress)

### Methods

- [allNftInfo](Cw721MetadataOnchainQueryClient.md#allnftinfo)
- [allTokens](Cw721MetadataOnchainQueryClient.md#alltokens)
- [approvedForall](Cw721MetadataOnchainQueryClient.md#approvedforall)
- [contractInfo](Cw721MetadataOnchainQueryClient.md#contractinfo)
- [minter](Cw721MetadataOnchainQueryClient.md#minter)
- [nftInfo](Cw721MetadataOnchainQueryClient.md#nftinfo)
- [numTokens](Cw721MetadataOnchainQueryClient.md#numtokens)
- [ownerOf](Cw721MetadataOnchainQueryClient.md#ownerof)
- [tokens](Cw721MetadataOnchainQueryClient.md#tokens)

## Constructors

### constructor

• **new Cw721MetadataOnchainQueryClient**(`client`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `LCDClient` |
| `contractAddress` | `string` |

## Properties

### client

• **client**: `LCDClient`

#### Defined in

[clients/Cw721MetadataOnchainClient.ts:263](https://github.com/octalmage/terra-clients/blob/fbc54ed/clients/Cw721MetadataOnchainClient.ts#L263)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

Cw721MetadataOnchainReadOnlyInterface.contractAddress

#### Defined in

[clients/Cw721MetadataOnchainClient.ts:264](https://github.com/octalmage/terra-clients/blob/fbc54ed/clients/Cw721MetadataOnchainClient.ts#L264)

## Methods

### allNftInfo

▸ **allNftInfo**(`__namedParameters`): `Promise`<`AllNftInfoResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.includeExpired?` | `boolean` |
| `__namedParameters.tokenId` | `string` |

#### Returns

`Promise`<`AllNftInfoResponse`\>

#### Implementation of

Cw721MetadataOnchainReadOnlyInterface.allNftInfo

___

### allTokens

▸ **allTokens**(`__namedParameters`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.limit?` | `number` |
| `__namedParameters.startAfter?` | `string` |

#### Returns

`Promise`<`any`\>

#### Implementation of

Cw721MetadataOnchainReadOnlyInterface.allTokens

___

### approvedForall

▸ **approvedForall**(`__namedParameters`): `Promise`<`ApprovedForallResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.includeExpired?` | `boolean` |
| `__namedParameters.limit?` | `number` |
| `__namedParameters.owner` | `string` |
| `__namedParameters.startAfter?` | `string` |

#### Returns

`Promise`<`ApprovedForallResponse`\>

#### Implementation of

Cw721MetadataOnchainReadOnlyInterface.approvedForall

___

### contractInfo

▸ **contractInfo**(): `Promise`<`ContractInfoResponse`\>

#### Returns

`Promise`<`ContractInfoResponse`\>

#### Implementation of

Cw721MetadataOnchainReadOnlyInterface.contractInfo

___

### minter

▸ **minter**(): `Promise`<`MinterResponse`\>

#### Returns

`Promise`<`MinterResponse`\>

#### Implementation of

Cw721MetadataOnchainReadOnlyInterface.minter

___

### nftInfo

▸ **nftInfo**(`__namedParameters`): `Promise`<`NftInfoResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.tokenId` | `string` |

#### Returns

`Promise`<`NftInfoResponse`\>

#### Implementation of

Cw721MetadataOnchainReadOnlyInterface.nftInfo

___

### numTokens

▸ **numTokens**(): `Promise`<`NumTokensResponse`\>

#### Returns

`Promise`<`NumTokensResponse`\>

#### Implementation of

Cw721MetadataOnchainReadOnlyInterface.numTokens

___

### ownerOf

▸ **ownerOf**(`__namedParameters`): `Promise`<`OwnerOfResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.includeExpired?` | `boolean` |
| `__namedParameters.tokenId` | `string` |

#### Returns

`Promise`<`OwnerOfResponse`\>

#### Implementation of

Cw721MetadataOnchainReadOnlyInterface.ownerOf

___

### tokens

▸ **tokens**(`__namedParameters`): `Promise`<`TokensResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.limit?` | `number` |
| `__namedParameters.owner` | `string` |
| `__namedParameters.startAfter?` | `string` |

#### Returns

`Promise`<`TokensResponse`\>

#### Implementation of

Cw721MetadataOnchainReadOnlyInterface.tokens
