# .ExperimentalApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**signMetadata**](ExperimentalApi.md#signMetadata) | **POST** /wallets/{walletId}/signatures/{role}/{index} | Sign Metadata


# **signMetadata**
> HttpFile signMetadata(signMetadataRequest)

<p align=\"right\">status: <strong>experimental</strong></p>  **⚠️ WARNING ⚠️**  This endpoint is experimental and for internal use in the Catalyst project. This functionality will be refined in the forthcoming future and the interface is likely to change in **NON-BACKWARD COMPATIBLE WAYS**.  <b>Note:</b> Only `Soft` indexes are supported by this endpoint. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExperimentalApi(configuration);

let body:.ExperimentalApiSignMetadataRequest = {
  // string
  walletId: "walletId_example",
  // 'utxo_external' | 'utxo_internal' | 'mutable_account'
  role: "utxo_external",
  // string
  index: "1852H",
  // SignMetadataRequest
  signMetadataRequest: {
    passphrase: "Secure Passphrase",
    metadata: null,
  },
};

apiInstance.signMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signMetadataRequest** | **SignMetadataRequest**|  |
 **walletId** | [**string**] |  | defaults to undefined
 **role** | [**&#39;utxo_external&#39; | &#39;utxo_internal&#39; | &#39;mutable_account&#39;**]**Array<&#39;utxo_external&#39; &#124; &#39;utxo_internal&#39; &#124; &#39;mutable_account&#39;>** |  | defaults to undefined
 **index** | [**string**] |  | defaults to undefined


### Return type

**HttpFile**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Bad Request |  -  |
**406** | Not Acceptable |  -  |
**415** | Unsupported Media Type |  -  |
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


