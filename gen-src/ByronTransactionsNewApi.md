# .ByronTransactionsNewApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**constructByronTransaction**](ByronTransactionsNewApi.md#constructByronTransaction) | **POST** /byron-wallets/{walletId}/transactions-construct | Construct
[**signByronTransaction**](ByronTransactionsNewApi.md#signByronTransaction) | **POST** /byron-wallets/{walletId}/transactions-sign | Sign


# **constructByronTransaction**
> ConstructTransaction202Response constructByronTransaction(constructTransactionRequest)

<p align=\"right\">status: <strong>unstable</strong></p>  Create a transaction to be signed from the wallet. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronTransactionsNewApi(configuration);

let body:.ByronTransactionsNewApiConstructByronTransactionRequest = {
  // string
  walletId: "walletId_example",
  // ConstructTransactionRequest
  constructTransactionRequest: {
    payments: null,
    withdrawal: "self",
    metadata: null,
    mintBurn: [
      {
        policyScriptTemplate: null,
        assetName: "",
        operation: null,
      },
    ],
    delegations: [
      null,
    ],
    validityInterval: {
      invalidBefore: null,
      invalidHereafter: null,
    },
  },
};

apiInstance.constructByronTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **constructTransactionRequest** | **ConstructTransactionRequest**|  |
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**ConstructTransaction202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**406** | Not Acceptable |  -  |
**415** | Unsupported Media Type |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **signByronTransaction**
> SignTransaction202Response signByronTransaction(signTransactionRequest)

<p align=\"right\">status: <strong>under development</strong></p>  Signs a serialised transaction, returning the modified transaction.  This endpoint will add new witnesses using the keys available to this wallet. Any existing witnesses will remain in the witness set. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronTransactionsNewApi(configuration);

let body:.ByronTransactionsNewApiSignByronTransactionRequest = {
  // string
  walletId: "walletId_example",
  // SignTransactionRequest
  signTransactionRequest: {
    passphrase: "Secure Passphrase",
    transaction: "transaction_example",
  },
};

apiInstance.signByronTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signTransactionRequest** | **SignTransactionRequest**|  |
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**SignTransaction202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**406** | Not Acceptable |  -  |
**415** | Unsupported Media Type |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


