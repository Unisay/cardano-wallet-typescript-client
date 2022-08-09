# .TransactionsApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTransaction**](TransactionsApi.md#deleteTransaction) | **DELETE** /wallets/{walletId}/transactions/{transactionId} | Forget
[**getTransaction**](TransactionsApi.md#getTransaction) | **GET** /wallets/{walletId}/transactions/{transactionId} | Get
[**listTransactions**](TransactionsApi.md#listTransactions) | **GET** /wallets/{walletId}/transactions | List
[**postTransaction**](TransactionsApi.md#postTransaction) | **POST** /wallets/{walletId}/transactions | Create
[**postTransactionFee**](TransactionsApi.md#postTransactionFee) | **POST** /wallets/{walletId}/payment-fees | Estimate Fee


# **deleteTransaction**
> void deleteTransaction()

<p align=\"right\">status: <strong>stable</strong></p>  Forget pending transaction. Importantly, a transaction, when sent, cannot be cancelled. One can only request forgetting about it in order to try spending (concurrently) the same UTxO in another transaction. But, the transaction may still show up later in a block and therefore, appear in the wallet. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiDeleteTransactionRequest = {
  // string
  walletId: "walletId_example",
  // string
  transactionId: "transactionId_example",
};

apiInstance.deleteTransaction(body).then((data:any) => {
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

# **getTransaction**
> ListTransactions200ResponseInner getTransaction()

<p align=\"right\">status: <strong>stable</strong></p>  Get transaction by id. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiGetTransactionRequest = {
  // string
  walletId: "walletId_example",
  // string
  transactionId: "transactionId_example",
  // boolean | When present (or equal to true) in the query, the metadata format for the transaction(s) in the output will be untyped plain json as specified in [CIP 25](https://cips.cardano.org/cips/cip25/)  (optional)
  simpleMetadata: true,
};

apiInstance.getTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] |  | defaults to undefined
 **transactionId** | [**string**] |  | defaults to undefined
 **simpleMetadata** | [**boolean**] | When present (or equal to true) in the query, the metadata format for the transaction(s) in the output will be untyped plain json as specified in [CIP 25](https://cips.cardano.org/cips/cip25/)  | (optional) defaults to undefined


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

# **listTransactions**
> Array<ListTransactions200ResponseInner> listTransactions()

<p align=\"right\">status: <strong>stable</strong></p>  Lists all incoming and outgoing wallet's transactions. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiListTransactionsRequest = {
  // string
  walletId: "walletId_example",
  // string | An optional start time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: `2008-08-08T08:08:08Z`  (optional)
  start: "start_example",
  // string | An optional end time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: `2008-08-08T08:08:08Z`  (optional)
  end: "end_example",
  // 'ascending' | 'descending' | An optional sort order. (optional)
  order: "descending",
  // number | Returns only transactions that have at least one withdrawal above the given amount. This is particularly useful when set to `1` in order to list the withdrawal history of a wallet.  (optional)
  minWithdrawal: 1,
  // boolean | When present (or equal to true) in the query, the metadata format for the transaction(s) in the output will be untyped plain json as specified in [CIP 25](https://cips.cardano.org/cips/cip25/)  (optional)
  simpleMetadata: true,
};

apiInstance.listTransactions(body).then((data:any) => {
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
 **minWithdrawal** | [**number**] | Returns only transactions that have at least one withdrawal above the given amount. This is particularly useful when set to &#x60;1&#x60; in order to list the withdrawal history of a wallet.  | (optional) defaults to undefined
 **simpleMetadata** | [**boolean**] | When present (or equal to true) in the query, the metadata format for the transaction(s) in the output will be untyped plain json as specified in [CIP 25](https://cips.cardano.org/cips/cip25/)  | (optional) defaults to undefined


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

# **postTransaction**
> ListTransactions200ResponseInner postTransaction(postTransactionRequest)

<p align=\"right\">status: <strong>stable</strong></p>  Create and send transaction from the wallet. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiPostTransactionRequest = {
  // string
  walletId: "walletId_example",
  // PostTransactionRequest
  postTransactionRequest: null,
};

apiInstance.postTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postTransactionRequest** | **PostTransactionRequest**|  |
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

# **postTransactionFee**
> PostTransactionFee202Response postTransactionFee(postTransactionFeeRequest)

<p align=\"right\">status: <strong>stable</strong></p>  Estimate fee for the transaction. The estimate is made by assembling multiple transactions and analyzing the distribution of their fees. The estimated_max is the highest fee observed, and the estimated_min is the fee which is lower than at least 90% of the fees observed. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiPostTransactionFeeRequest = {
  // string
  walletId: "walletId_example",
  // PostTransactionFeeRequest
  postTransactionFeeRequest: null,
};

apiInstance.postTransactionFee(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postTransactionFeeRequest** | **PostTransactionFeeRequest**|  |
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


