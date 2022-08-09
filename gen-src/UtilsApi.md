# .UtilsApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCurrentSmashHealth**](UtilsApi.md#getCurrentSmashHealth) | **GET** /smash/health | Current SMASH health


# **getCurrentSmashHealth**
> GetCurrentSmashHealth200Response getCurrentSmashHealth()

Get health status of the currently active SMASH server. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UtilsApi(configuration);

let body:.UtilsApiGetCurrentSmashHealthRequest = {
  // string | check this url for health instead of the currently configured one (optional)
  url: "https://smash.cardano-mainnet.iohk.io/",
};

apiInstance.getCurrentSmashHealth(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | [**string**] | check this url for health instead of the currently configured one | (optional) defaults to undefined


### Return type

**GetCurrentSmashHealth200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Bad Request |  -  |
**406** | Not Acceptable |  -  |
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


