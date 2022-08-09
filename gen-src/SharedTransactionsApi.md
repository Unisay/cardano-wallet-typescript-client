# .SharedTransactionsApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**constructSharedTransaction**](SharedTransactionsApi.md#constructSharedTransaction) | **POST** /shared-wallets/{walletId}/transactions-construct | Construct


# **constructSharedTransaction**
> ConstructTransaction202Response constructSharedTransaction(constructTransactionRequest)

<p align=\"right\">status: <strong>under development</strong></p>  Create a transaction to be signed from the shared wallet.  Works for the following fields:   - payments   - metadata   - validity_interval 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SharedTransactionsApi(configuration);

let body:.SharedTransactionsApiConstructSharedTransactionRequest = {
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

apiInstance.constructSharedTransaction(body).then((data:any) => {
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


