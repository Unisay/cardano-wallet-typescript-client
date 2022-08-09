# .TransactionsNewApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**balanceTransaction**](TransactionsNewApi.md#balanceTransaction) | **POST** /wallets/{walletId}/transactions-balance | Balance
[**constructTransaction**](TransactionsNewApi.md#constructTransaction) | **POST** /wallets/{walletId}/transactions-construct | Construct
[**decodeTransaction**](TransactionsNewApi.md#decodeTransaction) | **POST** /wallets/{walletId}/transactions-decode | Decode
[**signTransaction**](TransactionsNewApi.md#signTransaction) | **POST** /wallets/{walletId}/transactions-sign | Sign
[**submitTransaction**](TransactionsNewApi.md#submitTransaction) | **POST** /wallets/{walletId}/transactions-submit | Submit


# **balanceTransaction**
> BalanceTransaction202Response balanceTransaction(balanceTransactionRequest)

<p align=\"right\">status: <strong>under development</strong></p> Balance a transaction body of a given transaction, add needed inputs/outputs, so as the transaction can be signed from the wallet. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsNewApi(configuration);

let body:.TransactionsNewApiBalanceTransactionRequest = {
  // string
  walletId: "walletId_example",
  // BalanceTransactionRequest
  balanceTransactionRequest: {
    transaction: "transaction_example",
    inputs: [
      {
        id: "1423856bc91c49e928f6f30f4e8d665d53eb4ab6028bd0ac971809d514c92db1",
        index: 0,
        address: "addr1sjck9mdmfyhzvjhydcjllgj9vjvl522w0573ncustrrr2rg7h9azg4cyqd36yyd48t5ut72hgld0fg2xfvz82xgwh7wal6g2xt8n996s3xvu5g",
        amount: {
          quantity: 42000000,
          unit: "lovelace",
        },
        datum: "16f30f4e8d665d53eb4ab6028bd0ac971809d514c92d423856bc91c49e928faf",
        assets: [
          {
            policyId: "65ab82542b0ca20391caaf66a4d4d7897d281f9c136cd3513136945b",
            assetName: "",
            quantity: 0,
          },
        ],
      },
    ],
    redeemers: [
      null,
    ],
  },
};

apiInstance.balanceTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **balanceTransactionRequest** | **BalanceTransactionRequest**|  |
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**BalanceTransaction202Response**

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

# **constructTransaction**
> ConstructTransaction202Response constructTransaction(constructTransactionRequest)

<p align=\"right\">status: <strong>under development</strong></p>  Create a transaction to be signed from the wallet. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsNewApi(configuration);

let body:.TransactionsNewApiConstructTransactionRequest = {
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

apiInstance.constructTransaction(body).then((data:any) => {
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

# **decodeTransaction**
> DecodeTransaction202Response decodeTransaction(decodeTransactionRequest)

<p align=\"right\">status: <strong>unstable</strong></p>  Decode a serialized transaction. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsNewApi(configuration);

let body:.TransactionsNewApiDecodeTransactionRequest = {
  // string
  walletId: "walletId_example",
  // DecodeTransactionRequest
  decodeTransactionRequest: null,
};

apiInstance.decodeTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **decodeTransactionRequest** | **DecodeTransactionRequest**|  |
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**DecodeTransaction202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**406** | Not Acceptable |  -  |
**415** | Unsupported Media Type |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **signTransaction**
> SignTransaction202Response signTransaction(signTransactionRequest)

<p align=\"right\">status: <strong>under development</strong></p>  Signs a serialised transaction, returning the modified transaction.  This endpoint will add new witnesses using the keys available to this wallet. Any existing witnesses will remain in the witness set. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsNewApi(configuration);

let body:.TransactionsNewApiSignTransactionRequest = {
  // string
  walletId: "walletId_example",
  // SignTransactionRequest
  signTransactionRequest: {
    passphrase: "Secure Passphrase",
    transaction: "transaction_example",
  },
};

apiInstance.signTransaction(body).then((data:any) => {
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

# **submitTransaction**
> SubmitTransaction202Response submitTransaction(submitTransactionRequest)

<p align=\"right\">status: <strong>stable</strong></p> Submit a transaction that was already created and signed. Fails for foreign transactions that is transactions which lack the wallet's inputs and withdrawals. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsNewApi(configuration);

let body:.TransactionsNewApiSubmitTransactionRequest = {
  // string
  walletId: "walletId_example",
  // SubmitTransactionRequest
  submitTransactionRequest: null,
};

apiInstance.submitTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitTransactionRequest** | **SubmitTransactionRequest**|  |
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**SubmitTransaction202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Bad Request |  -  |
**406** | Not Acceptable |  -  |
**415** | Unsupported Media Type |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


