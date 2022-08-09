# .SettingsApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSettings**](SettingsApi.md#getSettings) | **GET** /settings | Get settings
[**putSettings**](SettingsApi.md#putSettings) | **PUT** /settings | Update settings


# **getSettings**
> GetSettings200Response getSettings()

<p align=\"right\">status: <strong>stable</strong></p>  Return the current settings. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SettingsApi(configuration);

let body:any = {};

apiInstance.getSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetSettings200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **putSettings**
> void putSettings(putSettingsRequest)

<p align=\"right\">status: <strong>stable</strong></p>  Overwrite current settings. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SettingsApi(configuration);

let body:.SettingsApiPutSettingsRequest = {
  // PutSettingsRequest
  putSettingsRequest: {
    settings: {
      poolMetadataSource: "https://smash.cardano-mainnet.iohk.io/",
    },
  },
};

apiInstance.putSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **putSettingsRequest** | **PutSettingsRequest**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Bad Request |  -  |
**415** | Unsupported Media Type |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


