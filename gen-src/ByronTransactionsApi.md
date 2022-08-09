# .ByronTransactionsApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteByronTransaction**](ByronTransactionsApi.md#deleteByronTransaction) | **DELETE** /byron-wallets/{walletId}/transactions/{transactionId} | Forget
[**getByronTransaction**](ByronTransactionsApi.md#getByronTransaction) | **GET** /byron-wallets/{walletId}/transactions/{transactionId} | Get
[**listByronTransactions**](ByronTransactionsApi.md#listByronTransactions) | **GET** /byron-wallets/{walletId}/transactions | List
[**postByronTransaction**](ByronTransactionsApi.md#postByronTransaction) | **POST** /byron-wallets/{walletId}/transactions | Create
[**postByronTransactionFee**](ByronTransactionsApi.md#postByronTransactionFee) | **POST** /byron-wallets/{walletId}/payment-fees | Estimate Fee


# **deleteByronTransaction**
> void deleteByronTransaction()

<p align=\"right\">status: <strong>stable</strong></p>  Forget pending Byron transaction. Importantly, a transaction, when sent, cannot be cancelled. One can only request forgetting about it in order to try spending (concurrently) the same UTxO in another transaction. But, the transaction may still show up later in a block and therefore, appear in the wallet. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronTransactionsApi(configuration);

let body:.ByronTransactionsApiDeleteByronTransactionRequest = {
  // string
  walletId: "walletId_example",
  // string
  transactionId: "transactionId_example",
};

apiInstance.deleteByronTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] |  | defaults to undefined
 **transactionId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**406** | Not Acceptable |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getByronTransaction**
> ListTransactions200ResponseInner getByronTransaction()

<p align=\"right\">status: <strong>stable</strong></p>  Get transaction by id. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronTransactionsApi(configuration);

let body:.ByronTransactionsApiGetByronTransactionRequest = {
  // string
  walletId: "walletId_example",
  // string
  transactionId: "transactionId_example",
};

apiInstance.getByronTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] |  | defaults to undefined
 **transactionId** | [**string**] |  | defaults to undefined


### Return type

**ListTransactions200ResponseInner**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**404** | Not Found |  -  |
**406** | Not Acceptable |  -  |
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listByronTransactions**
> Array<ListTransactions200ResponseInner> listByronTransactions()

<p align=\"right\">status: <strong>stable</strong></p>  List all incoming and outgoing transactions for the given wallet. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronTransactionsApi(configuration);

let body:.ByronTransactionsApiListByronTransactionsRequest = {
  // string
  walletId: "walletId_example",
  // string | An optional start time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: `2008-08-08T08:08:08Z`  (optional)
  start: "start_example",
  // string | An optional end time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: `2008-08-08T08:08:08Z`  (optional)
  end: "end_example",
  // 'ascending' | 'descending' | An optional sort order. (optional)
  order: "descending",
};

apiInstance.listByronTransactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] |  | defaults to undefined
 **start** | [**string**] | An optional start time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: &#x60;2008-08-08T08:08:08Z&#x60;  | (optional) defaults to undefined
 **end** | [**string**] | An optional end time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: &#x60;2008-08-08T08:08:08Z&#x60;  | (optional) defaults to undefined
 **order** | [**&#39;ascending&#39; | &#39;descending&#39;**]**Array<&#39;ascending&#39; &#124; &#39;descending&#39;>** | An optional sort order. | (optional) defaults to 'descending'


### Return type

**Array<ListTransactions200ResponseInner>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**406** | Not Acceptable |  -  |
**200** | Ok |  * Content-Range -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postByronTransaction**
> ListTransactions200ResponseInner postByronTransaction(postByronTransactionRequest)

<p align=\"right\">status: <strong>stable</strong></p>  Create and send transaction from the wallet. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronTransactionsApi(configuration);

let body:.ByronTransactionsApiPostByronTransactionRequest = {
  // string
  walletId: "walletId_example",
  // PostByronTransactionRequest
  postByronTransactionRequest: {
    payments: [
      {
        address: "addr1sjck9mdmfyhzvjhydcjllgj9vjvl522w0573ncustrrr2rg7h9azg4cyqd36yyd48t5ut72hgld0fg2xfvz82xgwh7wal6g2xt8n996s3xvu5g",
        amount: {
          quantity: 42000000,
          unit: "lovelace",
        },
        assets: [
          {
            policyId: "65ab82542b0ca20391caaf66a4d4d7897d281f9c136cd3513136945b",
            assetName: "",
            quantity: 0,
          },
        ],
      },
    ],
    passphrase: "Secure Passphrase",
  },
};

apiInstance.postByronTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postByronTransactionRequest** | **PostByronTransactionRequest**|  |
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**ListTransactions200ResponseInner**

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

# **postByronTransactionFee**
> PostTransactionFee202Response postByronTransactionFee(postByronTransactionFeeRequest)

<p align=\"right\">status: <strong>stable</strong></p>  Estimate fee for the transaction. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronTransactionsApi(configuration);

let body:.ByronTransactionsApiPostByronTransactionFeeRequest = {
  // string
  walletId: "walletId_example",
  // PostByronTransactionFeeRequest
  postByronTransactionFeeRequest: {
    payments: [
      {
        address: "addr1sjck9mdmfyhzvjhydcjllgj9vjvl522w0573ncustrrr2rg7h9azg4cyqd36yyd48t5ut72hgld0fg2xfvz82xgwh7wal6g2xt8n996s3xvu5g",
        amount: {
          quantity: 42000000,
          unit: "lovelace",
        },
        assets: [
          {
            policyId: "65ab82542b0ca20391caaf66a4d4d7897d281f9c136cd3513136945b",
            assetName: "",
            quantity: 0,
          },
        ],
      },
    ],
  },
};

apiInstance.postByronTransactionFee(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postByronTransactionFeeRequest** | **PostByronTransactionFeeRequest**|  |
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**PostTransactionFee202Response**

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


