[terra-clients](../README.md) / Cw20BaseInterface

# Interface: Cw20BaseInterface

## Hierarchy

- [`Cw20BaseReadOnlyInterface`](Cw20BaseReadOnlyInterface.md)

  ↳ **`Cw20BaseInterface`**

## Implemented by

- [`Cw20BaseClient`](../classes/Cw20BaseClient.md)

## Table of contents

### Properties

- [allAccounts](Cw20BaseInterface.md#allaccounts)
- [allAllowances](Cw20BaseInterface.md#allallowances)
- [allowance](Cw20BaseInterface.md#allowance)
- [balance](Cw20BaseInterface.md#balance)
- [burn](Cw20BaseInterface.md#burn)
- [burnFrom](Cw20BaseInterface.md#burnfrom)
- [contractAddress](Cw20BaseInterface.md#contractaddress)
- [decreaseAllowance](Cw20BaseInterface.md#decreaseallowance)
- [downloadLogo](Cw20BaseInterface.md#downloadlogo)
- [increaseAllowance](Cw20BaseInterface.md#increaseallowance)
- [marketingInfo](Cw20BaseInterface.md#marketinginfo)
- [mint](Cw20BaseInterface.md#mint)
- [minter](Cw20BaseInterface.md#minter)
- [send](Cw20BaseInterface.md#send)
- [sendFrom](Cw20BaseInterface.md#sendfrom)
- [tokenInfo](Cw20BaseInterface.md#tokeninfo)
- [transfer](Cw20BaseInterface.md#transfer)
- [transferFrom](Cw20BaseInterface.md#transferfrom)
- [updateMarketing](Cw20BaseInterface.md#updatemarketing)
- [uploadLogo](Cw20BaseInterface.md#uploadlogo)

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

#### Inherited from

[Cw20BaseReadOnlyInterface](Cw20BaseReadOnlyInterface.md).[allAccounts](Cw20BaseReadOnlyInterface.md#allaccounts)

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

#### Inherited from

[Cw20BaseReadOnlyInterface](Cw20BaseReadOnlyInterface.md).[allAllowances](Cw20BaseReadOnlyInterface.md#allallowances)

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

#### Inherited from

[Cw20BaseReadOnlyInterface](Cw20BaseReadOnlyInterface.md).[allowance](Cw20BaseReadOnlyInterface.md#allowance)

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

#### Inherited from

[Cw20BaseReadOnlyInterface](Cw20BaseReadOnlyInterface.md).[balance](Cw20BaseReadOnlyInterface.md#balance)

#### Defined in

clients/Cw20BaseClient.ts:237

___

### burn

• **burn**: (`__namedParameters`: { `amount`: `string`  }, `funds?`: `Coins`) => `Promise`<`any`\>

#### Type declaration

▸ (`__namedParameters`, `funds?`): `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | `string` |
| `funds?` | `Coins` |

##### Returns

`Promise`<`any`\>

#### Defined in

clients/Cw20BaseClient.ts:373

___

### burnFrom

• **burnFrom**: (`__namedParameters`: { `amount`: `string` ; `owner`: `string`  }, `funds?`: `Coins`) => `Promise`<`any`\>

#### Type declaration

▸ (`__namedParameters`, `funds?`): `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | `string` |
| `__namedParameters.owner` | `string` |
| `funds?` | `Coins` |

##### Returns

`Promise`<`any`\>

#### Defined in

clients/Cw20BaseClient.ts:425

___

### contractAddress

• **contractAddress**: `string`

#### Overrides

[Cw20BaseReadOnlyInterface](Cw20BaseReadOnlyInterface.md).[contractAddress](Cw20BaseReadOnlyInterface.md#contractaddress)

#### Defined in

clients/Cw20BaseClient.ts:365

___

### decreaseAllowance

• **decreaseAllowance**: (`__namedParameters`: { `amount`: `string` ; `expires?`: [`Expiration`](../README.md#expiration) ; `spender`: `string`  }, `funds?`: `Coins`) => `Promise`<`any`\>

#### Type declaration

▸ (`__namedParameters`, `funds?`): `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | `string` |
| `__namedParameters.expires?` | [`Expiration`](../README.md#expiration) |
| `__namedParameters.spender` | `string` |
| `funds?` | `Coins` |

##### Returns

`Promise`<`any`\>

#### Defined in

clients/Cw20BaseClient.ts:396

___

### downloadLogo

• **downloadLogo**: () => `Promise`<[`DownloadLogoResponse`](DownloadLogoResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`DownloadLogoResponse`](DownloadLogoResponse.md)\>

##### Returns

`Promise`<[`DownloadLogoResponse`](DownloadLogoResponse.md)\>

#### Inherited from

[Cw20BaseReadOnlyInterface](Cw20BaseReadOnlyInterface.md).[downloadLogo](Cw20BaseReadOnlyInterface.md#downloadlogo)

#### Defined in

clients/Cw20BaseClient.ts:268

___

### increaseAllowance

• **increaseAllowance**: (`__namedParameters`: { `amount`: `string` ; `expires?`: [`Expiration`](../README.md#expiration) ; `spender`: `string`  }, `funds?`: `Coins`) => `Promise`<`any`\>

#### Type declaration

▸ (`__namedParameters`, `funds?`): `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | `string` |
| `__namedParameters.expires?` | [`Expiration`](../README.md#expiration) |
| `__namedParameters.spender` | `string` |
| `funds?` | `Coins` |

##### Returns

`Promise`<`any`\>

#### Defined in

clients/Cw20BaseClient.ts:387

___

### marketingInfo

• **marketingInfo**: () => `Promise`<[`MarketingInfoResponse`](MarketingInfoResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`MarketingInfoResponse`](MarketingInfoResponse.md)\>

##### Returns

`Promise`<[`MarketingInfoResponse`](MarketingInfoResponse.md)\>

#### Inherited from

[Cw20BaseReadOnlyInterface](Cw20BaseReadOnlyInterface.md).[marketingInfo](Cw20BaseReadOnlyInterface.md#marketinginfo)

#### Defined in

clients/Cw20BaseClient.ts:267

___

### mint

• **mint**: (`__namedParameters`: { `amount`: `string` ; `recipient`: `string`  }, `funds?`: `Coins`) => `Promise`<`any`\>

#### Type declaration

▸ (`__namedParameters`, `funds?`): `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | `string` |
| `__namedParameters.recipient` | `string` |
| `funds?` | `Coins` |

##### Returns

`Promise`<`any`\>

#### Defined in

clients/Cw20BaseClient.ts:432

___

### minter

• **minter**: () => `Promise`<[`MinterResponse`](MinterResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`MinterResponse`](MinterResponse.md)\>

##### Returns

`Promise`<[`MinterResponse`](MinterResponse.md)\>

#### Inherited from

[Cw20BaseReadOnlyInterface](Cw20BaseReadOnlyInterface.md).[minter](Cw20BaseReadOnlyInterface.md#minter)

#### Defined in

clients/Cw20BaseClient.ts:243

___

### send

• **send**: (`__namedParameters`: { `amount`: `string` ; `contract`: `string` ; `msg`: `string`  }, `funds?`: `Coins`) => `Promise`<`any`\>

#### Type declaration

▸ (`__namedParameters`, `funds?`): `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | `string` |
| `__namedParameters.contract` | `string` |
| `__namedParameters.msg` | `string` |
| `funds?` | `Coins` |

##### Returns

`Promise`<`any`\>

#### Defined in

clients/Cw20BaseClient.ts:378

___

### sendFrom

• **sendFrom**: (`__namedParameters`: { `amount`: `string` ; `contract`: `string` ; `msg`: `string` ; `owner`: `string`  }, `funds?`: `Coins`) => `Promise`<`any`\>

#### Type declaration

▸ (`__namedParameters`, `funds?`): `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | `string` |
| `__namedParameters.contract` | `string` |
| `__namedParameters.msg` | `string` |
| `__namedParameters.owner` | `string` |
| `funds?` | `Coins` |

##### Returns

`Promise`<`any`\>

#### Defined in

clients/Cw20BaseClient.ts:414

___

### tokenInfo

• **tokenInfo**: () => `Promise`<[`TokenInfoResponse`](TokenInfoResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`TokenInfoResponse`](TokenInfoResponse.md)\>

##### Returns

`Promise`<[`TokenInfoResponse`](TokenInfoResponse.md)\>

#### Inherited from

[Cw20BaseReadOnlyInterface](Cw20BaseReadOnlyInterface.md).[tokenInfo](Cw20BaseReadOnlyInterface.md#tokeninfo)

#### Defined in

clients/Cw20BaseClient.ts:242

___

### transfer

• **transfer**: (`__namedParameters`: { `amount`: `string` ; `recipient`: `string`  }, `funds?`: `Coins`) => `Promise`<`any`\>

#### Type declaration

▸ (`__namedParameters`, `funds?`): `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | `string` |
| `__namedParameters.recipient` | `string` |
| `funds?` | `Coins` |

##### Returns

`Promise`<`any`\>

#### Defined in

clients/Cw20BaseClient.ts:366

___

### transferFrom

• **transferFrom**: (`__namedParameters`: { `amount`: `string` ; `owner`: `string` ; `recipient`: `string`  }, `funds?`: `Coins`) => `Promise`<`any`\>

#### Type declaration

▸ (`__namedParameters`, `funds?`): `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | `string` |
| `__namedParameters.owner` | `string` |
| `__namedParameters.recipient` | `string` |
| `funds?` | `Coins` |

##### Returns

`Promise`<`any`\>

#### Defined in

clients/Cw20BaseClient.ts:405

___

### updateMarketing

• **updateMarketing**: (`__namedParameters`: { `description?`: `string` ; `marketing?`: `string` ; `project?`: `string`  }, `funds?`: `Coins`) => `Promise`<`any`\>

#### Type declaration

▸ (`__namedParameters`, `funds?`): `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.description?` | `string` |
| `__namedParameters.marketing?` | `string` |
| `__namedParameters.project?` | `string` |
| `funds?` | `Coins` |

##### Returns

`Promise`<`any`\>

#### Defined in

clients/Cw20BaseClient.ts:439

___

### uploadLogo

• **uploadLogo**: (`funds?`: `Coins`) => `Promise`<`any`\>

#### Type declaration

▸ (`funds?`): `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `funds?` | `Coins` |

##### Returns

`Promise`<`any`\>

#### Defined in

clients/Cw20BaseClient.ts:448
