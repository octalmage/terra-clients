[terra-clients](../README.md) / Cw20BaseClient

# Class: Cw20BaseClient

## Hierarchy

- [`Cw20BaseQueryClient`](Cw20BaseQueryClient.md)

  ↳ **`Cw20BaseClient`**

## Implements

- [`Cw20BaseInterface`](../interfaces/Cw20BaseInterface.md)

## Table of contents

### Constructors

- [constructor](Cw20BaseClient.md#constructor)

### Properties

- [client](Cw20BaseClient.md#client)
- [contractAddress](Cw20BaseClient.md#contractaddress)
- [wallet](Cw20BaseClient.md#wallet)

### Methods

- [allAccounts](Cw20BaseClient.md#allaccounts)
- [allAllowances](Cw20BaseClient.md#allallowances)
- [allowance](Cw20BaseClient.md#allowance)
- [balance](Cw20BaseClient.md#balance)
- [burn](Cw20BaseClient.md#burn)
- [burnFrom](Cw20BaseClient.md#burnfrom)
- [decreaseAllowance](Cw20BaseClient.md#decreaseallowance)
- [downloadLogo](Cw20BaseClient.md#downloadlogo)
- [increaseAllowance](Cw20BaseClient.md#increaseallowance)
- [marketingInfo](Cw20BaseClient.md#marketinginfo)
- [mint](Cw20BaseClient.md#mint)
- [minter](Cw20BaseClient.md#minter)
- [send](Cw20BaseClient.md#send)
- [sendFrom](Cw20BaseClient.md#sendfrom)
- [tokenInfo](Cw20BaseClient.md#tokeninfo)
- [transfer](Cw20BaseClient.md#transfer)
- [transferFrom](Cw20BaseClient.md#transferfrom)
- [updateMarketing](Cw20BaseClient.md#updatemarketing)
- [uploadLogo](Cw20BaseClient.md#uploadlogo)

## Constructors

### constructor

• **new Cw20BaseClient**(`client`, `wallet`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `LCDClient` |
| `wallet` | `Wallet` \| `ConnectedWallet` |
| `contractAddress` | `string` |

#### Overrides

[Cw20BaseQueryClient](Cw20BaseQueryClient.md).[constructor](Cw20BaseQueryClient.md#constructor)

## Properties

### client

• **client**: `LCDClient`

#### Overrides

[Cw20BaseQueryClient](Cw20BaseQueryClient.md).[client](Cw20BaseQueryClient.md#client)

#### Defined in

clients/Cw20BaseClient.ts:451

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[Cw20BaseInterface](../interfaces/Cw20BaseInterface.md).[contractAddress](../interfaces/Cw20BaseInterface.md#contractaddress)

#### Overrides

[Cw20BaseQueryClient](Cw20BaseQueryClient.md).[contractAddress](Cw20BaseQueryClient.md#contractaddress)

#### Defined in

clients/Cw20BaseClient.ts:453

___

### wallet

• **wallet**: `Wallet` \| `ConnectedWallet`

#### Defined in

clients/Cw20BaseClient.ts:452

## Methods

### allAccounts

▸ **allAccounts**(`__namedParameters`): `Promise`<[`AllAccountsResponse`](../interfaces/AllAccountsResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.limit?` | `number` |
| `__namedParameters.startAfter?` | `string` |

#### Returns

`Promise`<[`AllAccountsResponse`](../interfaces/AllAccountsResponse.md)\>

#### Implementation of

Cw20BaseInterface.allAccounts

#### Inherited from

[Cw20BaseQueryClient](Cw20BaseQueryClient.md).[allAccounts](Cw20BaseQueryClient.md#allaccounts)

___

### allAllowances

▸ **allAllowances**(`__namedParameters`): `Promise`<[`AllAllowancesResponse`](../interfaces/AllAllowancesResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.limit?` | `number` |
| `__namedParameters.owner` | `string` |
| `__namedParameters.startAfter?` | `string` |

#### Returns

`Promise`<[`AllAllowancesResponse`](../interfaces/AllAllowancesResponse.md)\>

#### Implementation of

Cw20BaseInterface.allAllowances

#### Inherited from

[Cw20BaseQueryClient](Cw20BaseQueryClient.md).[allAllowances](Cw20BaseQueryClient.md#allallowances)

___

### allowance

▸ **allowance**(`__namedParameters`): `Promise`<[`AllowanceResponse`](../interfaces/AllowanceResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.owner` | `string` |
| `__namedParameters.spender` | `string` |

#### Returns

`Promise`<[`AllowanceResponse`](../interfaces/AllowanceResponse.md)\>

#### Implementation of

Cw20BaseInterface.allowance

#### Inherited from

[Cw20BaseQueryClient](Cw20BaseQueryClient.md).[allowance](Cw20BaseQueryClient.md#allowance)

___

### balance

▸ **balance**(`__namedParameters`): `Promise`<[`BalanceResponse`](../interfaces/BalanceResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.address` | `string` |

#### Returns

`Promise`<[`BalanceResponse`](../interfaces/BalanceResponse.md)\>

#### Implementation of

Cw20BaseInterface.balance

#### Inherited from

[Cw20BaseQueryClient](Cw20BaseQueryClient.md).[balance](Cw20BaseQueryClient.md#balance)

___

### burn

▸ **burn**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | `string` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw20BaseInterface.burn

___

### burnFrom

▸ **burnFrom**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | `string` |
| `__namedParameters.owner` | `string` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw20BaseInterface.burnFrom

___

### decreaseAllowance

▸ **decreaseAllowance**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | `string` |
| `__namedParameters.expires?` | [`Expiration`](../README.md#expiration) |
| `__namedParameters.spender` | `string` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw20BaseInterface.decreaseAllowance

___

### downloadLogo

▸ **downloadLogo**(): `Promise`<[`DownloadLogoResponse`](../interfaces/DownloadLogoResponse.md)\>

#### Returns

`Promise`<[`DownloadLogoResponse`](../interfaces/DownloadLogoResponse.md)\>

#### Implementation of

Cw20BaseInterface.downloadLogo

#### Inherited from

[Cw20BaseQueryClient](Cw20BaseQueryClient.md).[downloadLogo](Cw20BaseQueryClient.md#downloadlogo)

___

### increaseAllowance

▸ **increaseAllowance**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | `string` |
| `__namedParameters.expires?` | [`Expiration`](../README.md#expiration) |
| `__namedParameters.spender` | `string` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw20BaseInterface.increaseAllowance

___

### marketingInfo

▸ **marketingInfo**(): `Promise`<[`MarketingInfoResponse`](../interfaces/MarketingInfoResponse.md)\>

#### Returns

`Promise`<[`MarketingInfoResponse`](../interfaces/MarketingInfoResponse.md)\>

#### Implementation of

Cw20BaseInterface.marketingInfo

#### Inherited from

[Cw20BaseQueryClient](Cw20BaseQueryClient.md).[marketingInfo](Cw20BaseQueryClient.md#marketinginfo)

___

### mint

▸ **mint**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | `string` |
| `__namedParameters.recipient` | `string` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw20BaseInterface.mint

___

### minter

▸ **minter**(): `Promise`<[`MinterResponse`](../interfaces/MinterResponse.md)\>

#### Returns

`Promise`<[`MinterResponse`](../interfaces/MinterResponse.md)\>

#### Implementation of

Cw20BaseInterface.minter

#### Inherited from

[Cw20BaseQueryClient](Cw20BaseQueryClient.md).[minter](Cw20BaseQueryClient.md#minter)

___

### send

▸ **send**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | `string` |
| `__namedParameters.contract` | `string` |
| `__namedParameters.msg` | `string` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw20BaseInterface.send

___

### sendFrom

▸ **sendFrom**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | `string` |
| `__namedParameters.contract` | `string` |
| `__namedParameters.msg` | `string` |
| `__namedParameters.owner` | `string` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw20BaseInterface.sendFrom

___

### tokenInfo

▸ **tokenInfo**(): `Promise`<[`TokenInfoResponse`](../interfaces/TokenInfoResponse.md)\>

#### Returns

`Promise`<[`TokenInfoResponse`](../interfaces/TokenInfoResponse.md)\>

#### Implementation of

Cw20BaseInterface.tokenInfo

#### Inherited from

[Cw20BaseQueryClient](Cw20BaseQueryClient.md).[tokenInfo](Cw20BaseQueryClient.md#tokeninfo)

___

### transfer

▸ **transfer**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | `string` |
| `__namedParameters.recipient` | `string` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw20BaseInterface.transfer

___

### transferFrom

▸ **transferFrom**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | `string` |
| `__namedParameters.owner` | `string` |
| `__namedParameters.recipient` | `string` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw20BaseInterface.transferFrom

___

### updateMarketing

▸ **updateMarketing**(`__namedParameters`, `funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.description?` | `string` |
| `__namedParameters.marketing?` | `string` |
| `__namedParameters.project?` | `string` |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw20BaseInterface.updateMarketing

___

### uploadLogo

▸ **uploadLogo**(`funds?`): `Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `funds?` | `Coins` |

#### Returns

`Promise`<`WaitTxBroadcastResult` \| `TxInfo`\>

#### Implementation of

Cw20BaseInterface.uploadLogo
