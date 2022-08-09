# .ByronWalletsApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteByronWallet**](ByronWalletsApi.md#deleteByronWallet) | **DELETE** /byron-wallets/{walletId} | Delete
[**getByronUTxOsStatistics**](ByronWalletsApi.md#getByronUTxOsStatistics) | **GET** /byron-wallets/{walletId}/statistics/utxos | UTxO Statistics
[**getByronWallet**](ByronWalletsApi.md#getByronWallet) | **GET** /byron-wallets/{walletId} | Get
[**getByronWalletUtxoSnapshot**](ByronWalletsApi.md#getByronWalletUtxoSnapshot) | **GET** /byron-wallets/{walletId}/utxo | A snapshot of the wallet&#39;s UTxO set
[**listByronWallets**](ByronWalletsApi.md#listByronWallets) | **GET** /byron-wallets | List
[**postByronWallet**](ByronWalletsApi.md#postByronWallet) | **POST** /byron-wallets | Restore
[**putByronWallet**](ByronWalletsApi.md#putByronWallet) | **PUT** /byron-wallets/{walletId} | Update Metadata
[**putByronWalletPassphrase**](ByronWalletsApi.md#putByronWalletPassphrase) | **PUT** /byron-wallets/{walletId}/passphrase | Update Passphrase


# **deleteByronWallet**
> void deleteByronWallet()

<p align=\"right\">status: <strong>stable</strong></p>  Delete a Byron wallet. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronWalletsApi(configuration);

let body:.ByronWalletsApiDeleteByronWalletRequest = {
  // string
  walletId: "walletId_example",
};

apiInstance.deleteByronWallet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] |  | defaults to undefined


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
**404** | Not Found |  -  |
**406** | Not Acceptable |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getByronUTxOsStatistics**
> GetUTxOsStatistics200Response getByronUTxOsStatistics()

<p align=\"right\">status: <strong>stable</strong></p>  Return the UTxOs distribution across the whole wallet, in the form of a histogram.  ```      │  100 ─      │      │                                 ┌───┐   10 ─                         ┌───┐   │   │                   ┌───┐      │                 ┌───┐   │   │   │   │                   │   │      │                 │   │   │   │   │   │   ┌───┐           │   │    1 ─ ┌───┐           │   │   │   │   │   │   │   │           │   │      │ │   │           │   │   │   │   │   │   │   │           │   │      │ │   │ │       │ │   │ │ │   │ ╷ │   │ ╷ │   │ ╷       ╷ │   │      └─┘   └─│───────│─┘   └─│─┘   └─│─┘   └─│─┘   └─│───────│─┘   └────            10μ₳    100μ₳   1000μ₳   0.1₳    1₳      10₳     100₳ ``` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronWalletsApi(configuration);

let body:.ByronWalletsApiGetByronUTxOsStatisticsRequest = {
  // string
  walletId: "walletId_example",
};

apiInstance.getByronUTxOsStatistics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**GetUTxOsStatistics200Response**

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

# **getByronWallet**
> ListByronWallets200ResponseInner getByronWallet()

<p align=\"right\">status: <strong>stable</strong></p>  Return information about a Byron wallet. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronWalletsApi(configuration);

let body:.ByronWalletsApiGetByronWalletRequest = {
  // string
  walletId: "walletId_example",
};

apiInstance.getByronWallet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**ListByronWallets200ResponseInner**

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

# **getByronWalletUtxoSnapshot**
> GetWalletUtxoSnapshot200Response getByronWalletUtxoSnapshot()

Generate a snapshot of the wallet's UTxO set.  This endpoint is intended for debugging purposes. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronWalletsApi(configuration);

let body:.ByronWalletsApiGetByronWalletUtxoSnapshotRequest = {
  // string
  walletId: "walletId_example",
};

apiInstance.getByronWalletUtxoSnapshot(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**GetWalletUtxoSnapshot200Response**

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

# **listByronWallets**
> Array<ListByronWallets200ResponseInner> listByronWallets()

<p align=\"right\">status: <strong>stable</strong></p>  Return a list of known Byron wallets, ordered from oldest to newest. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronWalletsApi(configuration);

let body:any = {};

apiInstance.listByronWallets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ListByronWallets200ResponseInner>**

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

# **postByronWallet**
> ListByronWallets200ResponseInner postByronWallet(postByronWalletRequest)

<p align=\"right\">status: <strong>stable</strong></p>  Restore a Byron wallet from a mnemonic sentence or encrypted root private key (deprecated).    **⚠️ WARNING ⚠️**    The construction of random wallet in itself is **deprecated**, in particular the restoration from an encrypted root private key.   These endpoints exist to ease migrations from legacy software such as `cardano-sl` but should be avoided by new applications. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronWalletsApi(configuration);

let body:.ByronWalletsApiPostByronWalletRequest = {
  // PostByronWalletRequest
  postByronWalletRequest: null,
};

apiInstance.postByronWallet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postByronWalletRequest** | **PostByronWalletRequest**|  |


### Return type

**ListByronWallets200ResponseInner**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Bad Request |  -  |
**406** | Not Acceptable |  -  |
**409** | Conflict |  -  |
**415** | Unsupported Media Type |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **putByronWallet**
> ListWallets200ResponseInner putByronWallet(putWalletRequest)

<p align=\"right\">status: <strong>stable</strong></p> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronWalletsApi(configuration);

let body:.ByronWalletsApiPutByronWalletRequest = {
  // string
  walletId: "walletId_example",
  // PutWalletRequest
  putWalletRequest: {
    name: "Alan's Wallet",
  },
};

apiInstance.putByronWallet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **putWalletRequest** | **PutWalletRequest**|  |
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**ListWallets200ResponseInner**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**406** | Not Acceptable |  -  |
**415** | Unsupported Media Type |  -  |
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **putByronWalletPassphrase**
> void putByronWalletPassphrase(putByronWalletPassphraseRequest)

<p align=\"right\">status: <strong>stable</strong></p> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronWalletsApi(configuration);

let body:.ByronWalletsApiPutByronWalletPassphraseRequest = {
  // string
  walletId: "walletId_example",
  // PutByronWalletPassphraseRequest
  putByronWalletPassphraseRequest: {
    oldPassphrase: "Secure Passphrase",
    newPassphrase: "Secure Passphrase",
  },
};

apiInstance.putByronWalletPassphrase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **putByronWalletPassphraseRequest** | **PutByronWalletPassphraseRequest**|  |
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
**404** | Not Found |  -  |
**406** | Not Acceptable |  -  |
**415** | Unsupported Media Type |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


