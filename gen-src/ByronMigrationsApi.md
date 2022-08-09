# .ByronMigrationsApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createByronWalletMigrationPlan**](ByronMigrationsApi.md#createByronWalletMigrationPlan) | **POST** /byron-wallets/{walletId}/migrations/plan | Create a migration plan
[**migrateByronWallet**](ByronMigrationsApi.md#migrateByronWallet) | **POST** /byron-wallets/{walletId}/migrations | Migrate


# **createByronWalletMigrationPlan**
> CreateShelleyWalletMigrationPlan202Response createByronWalletMigrationPlan(createShelleyWalletMigrationPlanRequest)

Generate a plan for migrating the UTxO balance of this wallet to another wallet, without executing the plan.  This operation generates a plan that transfers as much of the wallet's balance as possible, by creating as many selections as may be necessary to migrate the entire balance.  Each selection created is the basis for a transaction.  In order to minimize the total transaction fee required, UTxO entries are coalesced together to the greatest extent possible in the resulting selections. No attempt is made to preserve the wallet's UTxO distribution.  The plan is generated on a best-effort basis. If there is insufficient ada available to pay for the entire UTxO set to be migrated, then only a subset of the wallet's UTxO set will be included in the resultant plan. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronMigrationsApi(configuration);

let body:.ByronMigrationsApiCreateByronWalletMigrationPlanRequest = {
  // string
  walletId: "walletId_example",
  // CreateShelleyWalletMigrationPlanRequest
  createShelleyWalletMigrationPlanRequest: {
    addresses: [
      "addr1sjck9mdmfyhzvjhydcjllgj9vjvl522w0573ncustrrr2rg7h9azg4cyqd36yyd48t5ut72hgld0fg2xfvz82xgwh7wal6g2xt8n996s3xvu5g",
    ],
  },
};

apiInstance.createByronWalletMigrationPlan(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createShelleyWalletMigrationPlanRequest** | **CreateShelleyWalletMigrationPlanRequest**|  |
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**CreateShelleyWalletMigrationPlan202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**406** | Not Acceptable |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **migrateByronWallet**
> Array<ListTransactions200ResponseInner> migrateByronWallet(migrateByronWalletRequest)

Migrate the UTxO balance of this wallet to the given set of addresses.  This operation will attempt to transfer as much of the wallet's balance as possible to the given set of addresses, by creating and submitting as many transactions as may be necessary to migrate the entire balance.  In order to minimize the total transaction fee required, UTxO entries are coalesced together to the greatest extent possible in the resulting transactions. No attempt is made to preserve the wallet's UTxO distribution.  This operation is performed on a best-effort basis. If there is insufficient ada available to pay for the entire UTxO set to be migrated, then only a subset of the wallet's UTxO set will be migrated.  A typical use of this operation would be to move all funds from an old wallet to a new wallet, by providing addresses that belong to the new wallet. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronMigrationsApi(configuration);

let body:.ByronMigrationsApiMigrateByronWalletRequest = {
  // string
  walletId: "walletId_example",
  // MigrateByronWalletRequest
  migrateByronWalletRequest: {
    passphrase: "Secure Passphrase",
    addresses: [
      "addr1sjck9mdmfyhzvjhydcjllgj9vjvl522w0573ncustrrr2rg7h9azg4cyqd36yyd48t5ut72hgld0fg2xfvz82xgwh7wal6g2xt8n996s3xvu5g",
    ],
  },
};

apiInstance.migrateByronWallet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **migrateByronWalletRequest** | **MigrateByronWalletRequest**|  |
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**Array<ListTransactions200ResponseInner>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**406** | Not Acceptable |  -  |
**415** | Unsupported Media Type |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


