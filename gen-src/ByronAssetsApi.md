# .ByronAssetsApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByronAsset**](ByronAssetsApi.md#getByronAsset) | **GET** /byron-wallets/{walletId}/assets/{policyId}/{assetName} | Get Asset
[**getByronAssetDefault**](ByronAssetsApi.md#getByronAssetDefault) | **GET** /byron-wallets/{walletId}/assets/{policyId} | Get Asset (empty name)
[**listByronAssets**](ByronAssetsApi.md#listByronAssets) | **GET** /byron-wallets/{walletId}/assets | List Assets


# **getByronAsset**
> ListAssets200ResponseInner getByronAsset()

Fetch a single asset from its `policy_id` and `asset_name`, with its metadata if any.  The asset must be associated with the wallet. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronAssetsApi(configuration);

let body:.ByronAssetsApiGetByronAssetRequest = {
  // string
  walletId: "walletId_example",
  // string
  policyId: "policyId_example",
  // string
  assetName: "assetName_example",
};

apiInstance.getByronAsset(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] |  | defaults to undefined
 **policyId** | [**string**] |  | defaults to undefined
 **assetName** | [**string**] |  | defaults to undefined


### Return type

**ListAssets200ResponseInner**

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
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getByronAssetDefault**
> ListAssets200ResponseInner getByronAssetDefault()

Fetch the asset from `policy_id` with an empty name.  The asset must be associated with the wallet. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronAssetsApi(configuration);

let body:.ByronAssetsApiGetByronAssetDefaultRequest = {
  // string
  walletId: "walletId_example",
  // string
  policyId: "policyId_example",
};

apiInstance.getByronAssetDefault(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] |  | defaults to undefined
 **policyId** | [**string**] |  | defaults to undefined


### Return type

**ListAssets200ResponseInner**

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
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listByronAssets**
> Array<ListAssets200ResponseInner> listByronAssets()

List all assets associated with the wallet, and their metadata if known.  An asset is _associated_ with a wallet if it is involved in a transaction of the wallet. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronAssetsApi(configuration);

let body:.ByronAssetsApiListByronAssetsRequest = {
  // string
  walletId: "walletId_example",
};

apiInstance.listByronAssets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**Array<ListAssets200ResponseInner>**

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


