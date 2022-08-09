# .ProxyApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postExternalTransaction**](ProxyApi.md#postExternalTransaction) | **POST** /proxy/transactions | Submit External Transaction


# **postExternalTransaction**
> SubmitTransaction202Response postExternalTransaction()

<p align=\"right\">status: <strong>stable</strong></p>  Submits a transaction that was created and signed outside of cardano-wallet.  NOTE: Unlike the `submitTransaction` endpoint, there are no guarantees that a transaction accepted by this endpoint will actually be included in the chain. It's up to the caller to retry submission until the transaction is confirmed. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProxyApi(configuration);

let body:.ProxyApiPostExternalTransactionRequest = {
  // HttpFile (optional)
  body: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.postExternalTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **HttpFile**|  |


### Return type

**SubmitTransaction202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Bad Request |  -  |
**406** | Not Acceptable |  -  |
**415** | Unsupported Media Type |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


