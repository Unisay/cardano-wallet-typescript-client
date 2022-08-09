# .NetworkApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkClock**](NetworkApi.md#getNetworkClock) | **GET** /network/clock | Clock
[**getNetworkInformation**](NetworkApi.md#getNetworkInformation) | **GET** /network/information | Information
[**getNetworkParameters**](NetworkApi.md#getNetworkParameters) | **GET** /network/parameters | Parameters


# **getNetworkClock**
> GetNetworkClock200Response getNetworkClock()

<p align=\"right\">status: <strong>stable</strong></p> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkApi(configuration);

let body:.NetworkApiGetNetworkClockRequest = {
  // boolean | NTP checks are cached for short duration to avoid sending too many queries to the central NTP servers. In some cases however, a client may want to force a new check.  When this flag is set, the request **will block** until NTP server responds or will timeout after a while without any answer from the NTP server.  (optional)
  forceNtpCheck: true,
};

apiInstance.getNetworkClock(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forceNtpCheck** | [**boolean**] | NTP checks are cached for short duration to avoid sending too many queries to the central NTP servers. In some cases however, a client may want to force a new check.  When this flag is set, the request **will block** until NTP server responds or will timeout after a while without any answer from the NTP server.  | (optional) defaults to undefined


### Return type

**GetNetworkClock200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**406** | Not Acceptable |  -  |
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getNetworkInformation**
> GetNetworkInformation200Response getNetworkInformation()

<p align=\"right\">status: <strong>stable</strong></p> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkApi(configuration);

let body:any = {};

apiInstance.getNetworkInformation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetNetworkInformation200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**406** | Not Acceptable |  -  |
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getNetworkParameters**
> GetNetworkParameters200Response getNetworkParameters()

<p align=\"right\">status: <strong>stable</strong></p>  Returns the set of network parameters for the current epoch. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkApi(configuration);

let body:any = {};

apiInstance.getNetworkParameters(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetNetworkParameters200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**406** | Not Acceptable |  -  |
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


