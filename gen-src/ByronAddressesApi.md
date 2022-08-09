# .ByronAddressesApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAddress**](ByronAddressesApi.md#createAddress) | **POST** /byron-wallets/{walletId}/addresses | Create Address
[**importAddress**](ByronAddressesApi.md#importAddress) | **PUT** /byron-wallets/{walletId}/addresses/{addressId} | Import Address
[**importAddresses**](ByronAddressesApi.md#importAddresses) | **PUT** /byron-wallets/{walletId}/addresses | Import Addresses
[**listByronAddresses**](ByronAddressesApi.md#listByronAddresses) | **GET** /byron-wallets/{walletId}/addresses | List


# **createAddress**
> ListAddresses200ResponseInner createAddress(createAddressRequest)

<p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronAddressesApi(configuration);

let body:.ByronAddressesApiCreateAddressRequest = {
  // string
  walletId: "walletId_example",
  // CreateAddressRequest
  createAddressRequest: {
    passphrase: "Secure Passphrase",
    addressIndex: 0,
  },
};

apiInstance.createAddress(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAddressRequest** | **CreateAddressRequest**|  |
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**ListAddresses200ResponseInner**

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
**406** | Not Acceptable |  -  |
**415** | Unsupported Media Type |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **importAddress**
> void importAddress()

<p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronAddressesApi(configuration);

let body:.ByronAddressesApiImportAddressRequest = {
  // string
  walletId: "walletId_example",
  // string
  addressId: "DdzFFzCqrhtCNjPk5Lei7E1FxnoqMoAYtJ8VjAWbFmDb614nNBWBwv3kt6QHJa59cGezzf6piMWsbK7sWRB5sv325QqWdRuusMqqLdMt",
};

apiInstance.importAddress(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] |  | defaults to undefined
 **addressId** | [**string**] |  | defaults to undefined


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
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **importAddresses**
> void importAddresses(importAddressesRequest)

<p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronAddressesApi(configuration);

let body:.ByronAddressesApiImportAddressesRequest = {
  // string
  walletId: "walletId_example",
  // ImportAddressesRequest
  importAddressesRequest: {
    addresses: [
      "addr1sjck9mdmfyhzvjhydcjllgj9vjvl522w0573ncustrrr2rg7h9azg4cyqd36yyd48t5ut72hgld0fg2xfvz82xgwh7wal6g2xt8n996s3xvu5g",
    ],
  },
};

apiInstance.importAddresses(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **importAddressesRequest** | **ImportAddressesRequest**|  |
 **walletId** | [**string**] |  | defaults to undefined


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
**403** | Forbidden |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listByronAddresses**
> Array<ListAddresses200ResponseInner> listByronAddresses()

<p align=\"right\">status: <strong>stable</strong></p>  Return a list of known addresses, ordered from newest to oldest for sequential wallets. Arbitrarily ordered for random wallets. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronAddressesApi(configuration);

let body:.ByronAddressesApiListByronAddressesRequest = {
  // string
  walletId: "walletId_example",
  // 'used' | 'unused' | An optional filter on the address state. (optional)
  state: "used",
};

apiInstance.listByronAddresses(body).then((data:any) => {
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


