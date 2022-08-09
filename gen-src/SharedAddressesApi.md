# .SharedAddressesApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listSharedAddresses**](SharedAddressesApi.md#listSharedAddresses) | **GET** /shared-wallets/{walletId}/addresses | List


# **listSharedAddresses**
> Array<ListAddresses200ResponseInner> listSharedAddresses()

<p align=\"right\">status: <strong>stable</strong></p>  Return a list of known addresses, ordered from newest to oldest 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SharedAddressesApi(configuration);

let body:.SharedAddressesApiListSharedAddressesRequest = {
  // string
  walletId: "walletId_example",
  // 'used' | 'unused' | An optional filter on the address state. (optional)
  state: "used",
};

apiInstance.listSharedAddresses(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] |  | defaults to undefined
 **state** | [**&#39;used&#39; | &#39;unused&#39;**]**Array<&#39;used&#39; &#124; &#39;unused&#39;>** | An optional filter on the address state. | (optional) defaults to undefined


### Return type

**Array<ListAddresses200ResponseInner>**

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
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


