# .WalletsApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteWallet**](WalletsApi.md#deleteWallet) | **DELETE** /wallets/{walletId} | Delete
[**getUTxOsStatistics**](WalletsApi.md#getUTxOsStatistics) | **GET** /wallets/{walletId}/statistics/utxos | UTxO Statistics
[**getWallet**](WalletsApi.md#getWallet) | **GET** /wallets/{walletId} | Get
[**getWalletUtxoSnapshot**](WalletsApi.md#getWalletUtxoSnapshot) | **GET** /wallets/{walletId}/utxo | A snapshot of the wallet&#39;s UTxO set
[**listWallets**](WalletsApi.md#listWallets) | **GET** /wallets | List
[**postWallet**](WalletsApi.md#postWallet) | **POST** /wallets | Create / Restore
[**putWallet**](WalletsApi.md#putWallet) | **PUT** /wallets/{walletId} | Update Metadata
[**putWalletPassphrase**](WalletsApi.md#putWalletPassphrase) | **PUT** /wallets/{walletId}/passphrase | Update Passphrase


# **deleteWallet**
> void deleteWallet()

<p align=\"right\">status: <strong>stable</strong></p> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletsApi(configuration);

let body:.WalletsApiDeleteWalletRequest = {
  // string
  walletId: "walletId_example",
};

apiInstance.deleteWallet(body).then((data:any) => {
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

# **getUTxOsStatistics**
> GetUTxOsStatistics200Response getUTxOsStatistics()

<p align=\"right\">status: <strong>stable</strong></p>  Return the UTxOs distribution across the whole wallet, in the form of a histogram.  ```      │  100 ─      │      │                                 ┌───┐   10 ─                         ┌───┐   │   │                   ┌───┐      │                 ┌───┐   │   │   │   │                   │   │      │                 │   │   │   │   │   │   ┌───┐           │   │    1 ─ ┌───┐           │   │   │   │   │   │   │   │           │   │      │ │   │           │   │   │   │   │   │   │   │           │   │      │ │   │ │       │ │   │ │ │   │ ╷ │   │ ╷ │   │ ╷       ╷ │   │      └─┘   └─│───────│─┘   └─│─┘   └─│─┘   └─│─┘   └─│───────│─┘   └────            10μ₳    100μ₳   1000μ₳   0.1₳    1₳      10₳     100₳ ``` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletsApi(configuration);

let body:.WalletsApiGetUTxOsStatisticsRequest = {
  // string
  walletId: "walletId_example",
};

apiInstance.getUTxOsStatistics(body).then((data:any) => {
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

# **getWallet**
> ListWallets200ResponseInner getWallet()

<p align=\"right\">status: <strong>stable</strong></p> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletsApi(configuration);

let body:.WalletsApiGetWalletRequest = {
  // string
  walletId: "walletId_example",
};

apiInstance.getWallet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**ListWallets200ResponseInner**

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

# **getWalletUtxoSnapshot**
> GetWalletUtxoSnapshot200Response getWalletUtxoSnapshot()

Generate a snapshot of the wallet's UTxO set.  This endpoint is intended for debugging purposes. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletsApi(configuration);

let body:.WalletsApiGetWalletUtxoSnapshotRequest = {
  // string
  walletId: "walletId_example",
};

apiInstance.getWalletUtxoSnapshot(body).then((data:any) => {
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

# **listWallets**
> Array<ListWallets200ResponseInner> listWallets()

<p align=\"right\">status: <strong>stable</strong></p>  Return a list of known wallets, ordered from oldest to newest. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletsApi(configuration);

let body:any = {};

apiInstance.listWallets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ListWallets200ResponseInner>**

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

# **postWallet**
> ListWallets200ResponseInner postWallet(postWalletRequest)

<p align=\"right\">status: <strong>stable</strong></p>  Create and restore a wallet from a mnemonic sentence or account public key. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletsApi(configuration);

let body:.WalletsApiPostWalletRequest = {
  // PostWalletRequest
  postWalletRequest: {
    name: "Alan's Wallet",
    mnemonicSentence: ["squirrel","material","silly","twice","direct","slush","pistol","razor","become","junk","kingdom","flee","squirrel","silly","twice"],
    mnemonicSecondFactor: ["squirrel","material","silly","twice","direct","slush","pistol","razor","become"],
    passphrase: "Secure Passphrase",
    addressPoolGap: 20,
  },
};

apiInstance.postWallet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postWalletRequest** | **PostWalletRequest**|  |


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
**406** | Not Acceptable |  -  |
**409** | Conflict |  -  |
**415** | Unsupported Media Type |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **putWallet**
> ListWallets200ResponseInner putWallet(putWalletRequest)

<p align=\"right\">status: <strong>stable</strong></p> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletsApi(configuration);

let body:.WalletsApiPutWalletRequest = {
  // string
  walletId: "walletId_example",
  // PutWalletRequest
  putWalletRequest: {
    name: "Alan's Wallet",
  },
};

apiInstance.putWallet(body).then((data:any) => {
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

# **putWalletPassphrase**
> void putWalletPassphrase(putWalletPassphraseRequest)

<p align=\"right\">status: <strong>stable</strong></p> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletsApi(configuration);

let body:.WalletsApiPutWalletPassphraseRequest = {
  // string
  walletId: "walletId_example",
  // PutWalletPassphraseRequest
  putWalletPassphraseRequest: {
    oldPassphrase: "Secure Passphrase",
    newPassphrase: "Secure Passphrase",
  },
};

apiInstance.putWalletPassphrase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **putWalletPassphraseRequest** | **PutWalletPassphraseRequest**|  |
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


