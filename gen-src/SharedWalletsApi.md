# .SharedWalletsApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSharedWallet**](SharedWalletsApi.md#deleteSharedWallet) | **DELETE** /shared-wallets/{walletId} | Delete
[**getSharedWallet**](SharedWalletsApi.md#getSharedWallet) | **GET** /shared-wallets/{walletId} | Get
[**listSharedWallets**](SharedWalletsApi.md#listSharedWallets) | **GET** /shared-wallets | List
[**patchSharedWalletInDelegation**](SharedWalletsApi.md#patchSharedWalletInDelegation) | **PATCH** /shared-wallets/{walletId}/delegation-script-template | Update Delegation
[**patchSharedWalletInPayment**](SharedWalletsApi.md#patchSharedWalletInPayment) | **PATCH** /shared-wallets/{walletId}/payment-script-template | Update Payment
[**postSharedWallet**](SharedWalletsApi.md#postSharedWallet) | **POST** /shared-wallets | Create


# **deleteSharedWallet**
> void deleteSharedWallet()

<p align=\"right\">status: <strong>stable</strong></p> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SharedWalletsApi(configuration);

let body:.SharedWalletsApiDeleteSharedWalletRequest = {
  // string
  walletId: "walletId_example",
};

apiInstance.deleteSharedWallet(body).then((data:any) => {
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

# **getSharedWallet**
> ListSharedWallets200ResponseInner getSharedWallet()

<p align=\"right\">status: <strong>⚠ under development</strong></p> Get a shared wallet for a given wallet id. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SharedWalletsApi(configuration);

let body:.SharedWalletsApiGetSharedWalletRequest = {
  // string
  walletId: "walletId_example",
};

apiInstance.getSharedWallet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**ListSharedWallets200ResponseInner**

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

# **listSharedWallets**
> Array<ListSharedWallets200ResponseInner> listSharedWallets()

<p align=\"right\">status: <strong>⚠ under development</strong></p>  Return a list of known shared wallets, ordered from oldest to newest. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SharedWalletsApi(configuration);

let body:any = {};

apiInstance.listSharedWallets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ListSharedWallets200ResponseInner>**

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

# **patchSharedWalletInDelegation**
> ListSharedWallets200ResponseInner patchSharedWalletInDelegation(requestBody)

<p align=\"right\">status: <strong>⚠ under development</strong></p> Update delegation script template for a given shared wallet by updating/adding account public key for cosigner. Updating the shared wallet account key results in an error. Also updating is enabled only for pending shared wallet, ie., the wallet that has a missing account public key for any cosigner. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SharedWalletsApi(configuration);

let body:.SharedWalletsApiPatchSharedWalletInDelegationRequest = {
  // string
  walletId: "walletId_example",
  // { [key: string]: string; }
  requestBody: {
    "key": "1423856bc91c49e928f6f30f4e8d665d53eb4ab6028bd0ac971809d514c92db11423856bc91c49e928f6f30f4e8d665d53eb4ab6028bd0ac971809d514c92db1",
  },
};

apiInstance.patchSharedWalletInDelegation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **{ [key: string]: string; }**|  |
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**ListSharedWallets200ResponseInner**

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
**403** | Forbidden |  -  |
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchSharedWalletInPayment**
> ListSharedWallets200ResponseInner patchSharedWalletInPayment(requestBody)

<p align=\"right\">status: <strong>⚠ under development</strong></p> Update payment script template for a given shared wallet by updating/adding account public key for cosigner. Updating the shared wallet account key results in an error. Also updating is enabled only for pending shared wallet, ie., the wallet that has a missing account public key for any cosigner. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SharedWalletsApi(configuration);

let body:.SharedWalletsApiPatchSharedWalletInPaymentRequest = {
  // string
  walletId: "walletId_example",
  // { [key: string]: string; }
  requestBody: {
    "key": "1423856bc91c49e928f6f30f4e8d665d53eb4ab6028bd0ac971809d514c92db11423856bc91c49e928f6f30f4e8d665d53eb4ab6028bd0ac971809d514c92db1",
  },
};

apiInstance.patchSharedWalletInPayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **{ [key: string]: string; }**|  |
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**ListSharedWallets200ResponseInner**

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
**403** | Forbidden |  -  |
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postSharedWallet**
> ListSharedWallets200ResponseInner postSharedWallet(postSharedWalletRequest)

<p align=\"right\">status: <strong>⚠ under development</strong></p> Create a shared wallet from either an account public key and script templates or mnemonic and script templates. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SharedWalletsApi(configuration);

let body:.SharedWalletsApiPostSharedWalletRequest = {
  // PostSharedWalletRequest
  postSharedWalletRequest: {
    name: "Alan's Wallet",
    mnemonicSentence: ["squirrel","material","silly","twice","direct","slush","pistol","razor","become","junk","kingdom","flee","squirrel","silly","twice"],
    mnemonicSecondFactor: ["squirrel","material","silly","twice","direct","slush","pistol","razor","become"],
    passphrase: "Secure Passphrase",
    accountIndex: "1852H",
    paymentScriptTemplate: {
      cosigners: {
        "key": null,
      },
      template: null,
    },
    delegationScriptTemplate: {
      cosigners: {
        "key": null,
      },
      template: null,
    },
    scriptValidation: "required",
  },
};

apiInstance.postSharedWallet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postSharedWalletRequest** | **PostSharedWalletRequest**|  |


### Return type

**ListSharedWallets200ResponseInner**

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
**403** | Forbidden |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


