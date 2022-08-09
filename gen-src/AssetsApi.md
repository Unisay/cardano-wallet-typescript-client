# .AssetsApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAsset**](AssetsApi.md#getAsset) | **GET** /wallets/{walletId}/assets/{policyId}/{assetName} | Get Asset
[**getAssetDefault**](AssetsApi.md#getAssetDefault) | **GET** /wallets/{walletId}/assets/{policyId} | Get Asset (empty name)
[**listAssets**](AssetsApi.md#listAssets) | **GET** /wallets/{walletId}/assets | List Assets


# **getAsset**
> ListAssets200ResponseInner getAsset()

Fetch a single asset from its `policy_id` and `asset_name`, with its metadata if any.  The asset must be associated with the wallet. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiGetAssetRequest = {
  // string
  walletId: "walletId_example",
  // string
  policyId: "policyId_example",
  // string
  assetName: "assetName_example",
};

apiInstance.getAsset(body).then((data:any) => {
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

# **getAssetDefault**
> ListAssets200ResponseInner getAssetDefault()

Fetch the asset from `policy_id` with an empty name.  The asset must be associated with the wallet. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiGetAssetDefaultRequest = {
  // string
  walletId: "walletId_example",
  // string
  policyId: "policyId_example",
};

apiInstance.getAssetDefault(body).then((data:any) => {
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

# **listAssets**
> Array<ListAssets200ResponseInner> listAssets()

List all assets associated with the wallet, and their metadata if known.  An asset is _associated_ with a wallet if, at one point in history, it was spendable by the wallet. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiListAssetsRequest = {
  // string
  walletId: "walletId_example",
};

apiInstance.listAssets(body).then((data:any) => {
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


