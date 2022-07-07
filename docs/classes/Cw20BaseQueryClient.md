[terra-clients](../README.md) / Cw20BaseQueryClient

# Class: Cw20BaseQueryClient

## Hierarchy

- **`Cw20BaseQueryClient`**

  ↳ [`Cw20BaseClient`](Cw20BaseClient.md)

## Implements

- [`Cw20BaseReadOnlyInterface`](../interfaces/Cw20BaseReadOnlyInterface.md)

## Table of contents

### Constructors

- [constructor](Cw20BaseQueryClient.md#constructor)

### Properties

- [client](Cw20BaseQueryClient.md#client)
- [contractAddress](Cw20BaseQueryClient.md#contractaddress)

### Methods

- [allAccounts](Cw20BaseQueryClient.md#allaccounts)
- [allAllowances](Cw20BaseQueryClient.md#allallowances)
- [allowance](Cw20BaseQueryClient.md#allowance)
- [balance](Cw20BaseQueryClient.md#balance)
- [downloadLogo](Cw20BaseQueryClient.md#downloadlogo)
- [marketingInfo](Cw20BaseQueryClient.md#marketinginfo)
- [minter](Cw20BaseQueryClient.md#minter)
- [tokenInfo](Cw20BaseQueryClient.md#tokeninfo)

## Constructors

### constructor

• **new Cw20BaseQueryClient**(`client`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `LCDClient` |
| `contractAddress` | `string` |

## Properties

### client

• **client**: `LCDClient`

#### Defined in

clients/Cw20BaseClient.ts:271

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[Cw20BaseReadOnlyInterface](../interfaces/Cw20BaseReadOnlyInterface.md).[contractAddress](../interfaces/Cw20BaseReadOnlyInterface.md#contractaddress)

#### Defined in

clients/Cw20BaseClient.ts:272

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

Cw20BaseReadOnlyInterface.allAccounts

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

Cw20BaseReadOnlyInterface.allAllowances

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

Cw20BaseReadOnlyInterface.allowance

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

Cw20BaseReadOnlyInterface.balance

___

### downloadLogo

▸ **downloadLogo**(): `Promise`<[`DownloadLogoResponse`](../interfaces/DownloadLogoResponse.md)\>

#### Returns

`Promise`<[`DownloadLogoResponse`](../interfaces/DownloadLogoResponse.md)\>

#### Implementation of

Cw20BaseReadOnlyInterface.downloadLogo

___

### marketingInfo

▸ **marketingInfo**(): `Promise`<[`MarketingInfoResponse`](../interfaces/MarketingInfoResponse.md)\>

#### Returns

`Promise`<[`MarketingInfoResponse`](../interfaces/MarketingInfoResponse.md)\>

#### Implementation of

Cw20BaseReadOnlyInterface.marketingInfo

___

### minter

▸ **minter**(): `Promise`<[`MinterResponse`](../interfaces/MinterResponse.md)\>

#### Returns

`Promise`<[`MinterResponse`](../interfaces/MinterResponse.md)\>

#### Implementation of

Cw20BaseReadOnlyInterface.minter

___

### tokenInfo

▸ **tokenInfo**(): `Promise`<[`TokenInfoResponse`](../interfaces/TokenInfoResponse.md)\>

#### Returns

`Promise`<[`TokenInfoResponse`](../interfaces/TokenInfoResponse.md)\>

#### Implementation of

Cw20BaseReadOnlyInterface.tokenInfo
