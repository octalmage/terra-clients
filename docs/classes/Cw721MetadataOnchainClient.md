[terra-clients](../README.md) / Cw721MetadataOnchainClient

# Class: Cw721MetadataOnchainClient

## Hierarchy

- [`Cw721MetadataOnchainQueryClient`](Cw721MetadataOnchainQueryClient.md)

  ↳ **`Cw721MetadataOnchainClient`**

## Implements

- `Cw721MetadataOnchainInterface`

## Table of contents

### Constructors

- [constructor](Cw721MetadataOnchainClient.md#constructor)

### Properties

- [client](Cw721MetadataOnchainClient.md#client)
- [contractAddress](Cw721MetadataOnchainClient.md#contractaddress)
- [wallet](Cw721MetadataOnchainClient.md#wallet)

### Methods

- [allNftInfo](Cw721MetadataOnchainClient.md#allnftinfo)
- [allTokens](Cw721MetadataOnchainClient.md#alltokens)
- [approve](Cw721MetadataOnchainClient.md#approve)
- [approveAll](Cw721MetadataOnchainClient.md#approveall)
- [approvedForall](Cw721MetadataOnchainClient.md#approvedforall)
- [contractInfo](Cw721MetadataOnchainClient.md#contractinfo)
- [mint](Cw721MetadataOnchainClient.md#mint)
- [minter](Cw721MetadataOnchainClient.md#minter)
- [nftInfo](Cw721MetadataOnchainClient.md#nftinfo)
- [numTokens](Cw721MetadataOnchainClient.md#numtokens)
- [ownerOf](Cw721MetadataOnchainClient.md#ownerof)
- [revoke](Cw721MetadataOnchainClient.md#revoke)
- [revokeAll](Cw721MetadataOnchainClient.md#revokeall)
- [sendNft](Cw721MetadataOnchainClient.md#sendnft)
- [tokens](Cw721MetadataOnchainClient.md#tokens)
- [transferNft](Cw721MetadataOnchainClient.md#transfernft)

## Constructors

### constructor

• **new Cw721MetadataOnchainClient**(`client`, `wallet`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `LCDClient` |
| `wallet` | `Wallet` \| `ConnectedWallet` |
| `contractAddress` | `string` |

#### Overrides

[Cw721MetadataOnchainQueryClient](Cw721MetadataOnchainQueryClient.md).[constructor](Cw721MetadataOnchainQueryClient.md#constructor)

## Properties

### client

• **client**: `LCDClient`

#### Overrides

[Cw721MetadataOnchainQueryClient](Cw721MetadataOnchainQueryClient.md).[client](Cw721MetadataOnchainQueryClient.md#client)

#### Defined in

[clients/Cw721MetadataOnchainClient.ts:445](https://github.com/octalmage/terra-clients/blob/fbc54ed/clients/Cw721MetadataOnchainClient.ts#L445)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

Cw721MetadataOnchainInterface.contractAddress

#### Overrides

[Cw721MetadataOnchainQueryClient](Cw721MetadataOnchainQueryClient.md).[contractAddress](Cw721MetadataOnchainQueryClient.md#contractaddress)

#### Defined in

[clients/Cw721MetadataOnchainClient.ts:447](https://github.com/octalmage/terra-clients/blob/fbc54ed/clients/Cw721MetadataOnchainClient.ts#L447)

___

### wallet

• **wallet**: `Wallet` \| `ConnectedWallet`

#### Defined in

[clients/Cw721MetadataOnchainClient.ts:446](https://github.com/octalmage/terra-clients/blob/fbc54ed/clients/Cw721MetadataOnchainClient.ts#L446)

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

Cw721MetadataOnchainInterface.allNftInfo

#### Inherited from

[Cw721MetadataOnchainQueryClient](Cw721MetadataOnchainQueryClient.md).[allNftInfo](Cw721MetadataOnchainQueryClient.md#allnftinfo)

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

Cw721MetadataOnchainInterface.allTokens

#### Inherited from

[Cw721MetadataOnchainQueryClient](Cw721MetadataOnchainQueryClient.md).[allTokens](Cw721MetadataOnchainQueryClient.md#alltokens)

___

### approve

▸ **approve**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.expires?` | `Expiration` |
| `__namedParameters.spender` | `string` |
| `__namedParameters.tokenId` | `string` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw721MetadataOnchainInterface.approve

___

### approveAll

▸ **approveAll**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.expires?` | `Expiration` |
| `__namedParameters.operator` | `string` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw721MetadataOnchainInterface.approveAll

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

Cw721MetadataOnchainInterface.approvedForall

#### Inherited from

[Cw721MetadataOnchainQueryClient](Cw721MetadataOnchainQueryClient.md).[approvedForall](Cw721MetadataOnchainQueryClient.md#approvedforall)

___

### contractInfo

▸ **contractInfo**(): `Promise`<`ContractInfoResponse`\>

#### Returns

`Promise`<`ContractInfoResponse`\>

#### Implementation of

Cw721MetadataOnchainInterface.contractInfo

#### Inherited from

[Cw721MetadataOnchainQueryClient](Cw721MetadataOnchainQueryClient.md).[contractInfo](Cw721MetadataOnchainQueryClient.md#contractinfo)

___

### mint

▸ **mint**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.extension?` | `Metadata` |
| `__namedParameters.owner` | `string` |
| `__namedParameters.tokenId` | `string` |
| `__namedParameters.tokenUri?` | `string` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw721MetadataOnchainInterface.mint

___

### minter

▸ **minter**(): `Promise`<`MinterResponse`\>

#### Returns

`Promise`<`MinterResponse`\>

#### Implementation of

Cw721MetadataOnchainInterface.minter

#### Inherited from

[Cw721MetadataOnchainQueryClient](Cw721MetadataOnchainQueryClient.md).[minter](Cw721MetadataOnchainQueryClient.md#minter)

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

Cw721MetadataOnchainInterface.nftInfo

#### Inherited from

[Cw721MetadataOnchainQueryClient](Cw721MetadataOnchainQueryClient.md).[nftInfo](Cw721MetadataOnchainQueryClient.md#nftinfo)

___

### numTokens

▸ **numTokens**(): `Promise`<`NumTokensResponse`\>

#### Returns

`Promise`<`NumTokensResponse`\>

#### Implementation of

Cw721MetadataOnchainInterface.numTokens

#### Inherited from

[Cw721MetadataOnchainQueryClient](Cw721MetadataOnchainQueryClient.md).[numTokens](Cw721MetadataOnchainQueryClient.md#numtokens)

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

Cw721MetadataOnchainInterface.ownerOf

#### Inherited from

[Cw721MetadataOnchainQueryClient](Cw721MetadataOnchainQueryClient.md).[ownerOf](Cw721MetadataOnchainQueryClient.md#ownerof)

___

### revoke

▸ **revoke**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.spender` | `string` |
| `__namedParameters.tokenId` | `string` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw721MetadataOnchainInterface.revoke

___

### revokeAll

▸ **revokeAll**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.operator` | `string` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw721MetadataOnchainInterface.revokeAll

___

### sendNft

▸ **sendNft**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.contract` | `string` |
| `__namedParameters.msg` | `string` |
| `__namedParameters.tokenId` | `string` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw721MetadataOnchainInterface.sendNft

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

Cw721MetadataOnchainInterface.tokens

#### Inherited from

[Cw721MetadataOnchainQueryClient](Cw721MetadataOnchainQueryClient.md).[tokens](Cw721MetadataOnchainQueryClient.md#tokens)

___

### transferNft

▸ **transferNft**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.recipient` | `string` |
| `__namedParameters.tokenId` | `string` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw721MetadataOnchainInterface.transferNft
