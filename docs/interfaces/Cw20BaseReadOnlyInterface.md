[terra-clients](../README.md) / Cw20BaseReadOnlyInterface

# Interface: Cw20BaseReadOnlyInterface

## Hierarchy

- **`Cw20BaseReadOnlyInterface`**

  ↳ [`Cw20BaseInterface`](Cw20BaseInterface.md)

## Implemented by

- [`Cw20BaseQueryClient`](../classes/Cw20BaseQueryClient.md)

## Table of contents

### Properties

- [allAccounts](Cw20BaseReadOnlyInterface.md#allaccounts)
- [allAllowances](Cw20BaseReadOnlyInterface.md#allallowances)
- [allowance](Cw20BaseReadOnlyInterface.md#allowance)
- [balance](Cw20BaseReadOnlyInterface.md#balance)
- [contractAddress](Cw20BaseReadOnlyInterface.md#contractaddress)
- [downloadLogo](Cw20BaseReadOnlyInterface.md#downloadlogo)
- [marketingInfo](Cw20BaseReadOnlyInterface.md#marketinginfo)
- [minter](Cw20BaseReadOnlyInterface.md#minter)
- [tokenInfo](Cw20BaseReadOnlyInterface.md#tokeninfo)

## Properties

### allAccounts

• **allAccounts**: (`__namedParameters`: { `limit?`: `number` ; `startAfter?`: `string`  }) => `Promise`<[`AllAccountsResponse`](AllAccountsResponse.md)\>

#### Type declaration

▸ (`__namedParameters`): `Promise`<[`AllAccountsResponse`](AllAccountsResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.limit?` | `number` |
| `__namedParameters.startAfter?` | `string` |

##### Returns

`Promise`<[`AllAccountsResponse`](AllAccountsResponse.md)\>

#### Defined in

clients/Cw20BaseClient.ts:260

___

### allAllowances

• **allAllowances**: (`__namedParameters`: { `limit?`: `number` ; `owner`: `string` ; `startAfter?`: `string`  }) => `Promise`<[`AllAllowancesResponse`](AllAllowancesResponse.md)\>

#### Type declaration

▸ (`__namedParameters`): `Promise`<[`AllAllowancesResponse`](AllAllowancesResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.limit?` | `number` |
| `__namedParameters.owner` | `string` |
| `__namedParameters.startAfter?` | `string` |

##### Returns

`Promise`<[`AllAllowancesResponse`](AllAllowancesResponse.md)\>

#### Defined in

clients/Cw20BaseClient.ts:251

___

### allowance

• **allowance**: (`__namedParameters`: { `owner`: `string` ; `spender`: `string`  }) => `Promise`<[`AllowanceResponse`](AllowanceResponse.md)\>

#### Type declaration

▸ (`__namedParameters`): `Promise`<[`AllowanceResponse`](AllowanceResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.owner` | `string` |
| `__namedParameters.spender` | `string` |

##### Returns

`Promise`<[`AllowanceResponse`](AllowanceResponse.md)\>

#### Defined in

clients/Cw20BaseClient.ts:244

___

### balance

• **balance**: (`__namedParameters`: { `address`: `string`  }) => `Promise`<[`BalanceResponse`](BalanceResponse.md)\>

#### Type declaration

▸ (`__namedParameters`): `Promise`<[`BalanceResponse`](BalanceResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.address` | `string` |

##### Returns

`Promise`<[`BalanceResponse`](BalanceResponse.md)\>

#### Defined in

clients/Cw20BaseClient.ts:237

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

clients/Cw20BaseClient.ts:236

___

### downloadLogo

• **downloadLogo**: () => `Promise`<[`DownloadLogoResponse`](DownloadLogoResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`DownloadLogoResponse`](DownloadLogoResponse.md)\>

##### Returns

`Promise`<[`DownloadLogoResponse`](DownloadLogoResponse.md)\>

#### Defined in

clients/Cw20BaseClient.ts:268

___

### marketingInfo

• **marketingInfo**: () => `Promise`<[`MarketingInfoResponse`](MarketingInfoResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`MarketingInfoResponse`](MarketingInfoResponse.md)\>

##### Returns

`Promise`<[`MarketingInfoResponse`](MarketingInfoResponse.md)\>

#### Defined in

clients/Cw20BaseClient.ts:267

___

### minter

• **minter**: () => `Promise`<[`MinterResponse`](MinterResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`MinterResponse`](MinterResponse.md)\>

##### Returns

`Promise`<[`MinterResponse`](MinterResponse.md)\>

#### Defined in

clients/Cw20BaseClient.ts:243

___

### tokenInfo

• **tokenInfo**: () => `Promise`<[`TokenInfoResponse`](TokenInfoResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`TokenInfoResponse`](TokenInfoResponse.md)\>

##### Returns

`Promise`<[`TokenInfoResponse`](TokenInfoResponse.md)\>

#### Defined in

clients/Cw20BaseClient.ts:242
