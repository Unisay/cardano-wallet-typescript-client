# .SharedKeysApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**decodeSharedTransaction**](SharedKeysApi.md#decodeSharedTransaction) | **POST** /shared-wallets/{walletId}/transactions-decode | Decode
[**getAccountKeyShared**](SharedKeysApi.md#getAccountKeyShared) | **GET** /shared-wallets/{walletId}/keys | Get Account Public Key
[**getSharedWalletKey**](SharedKeysApi.md#getSharedWalletKey) | **GET** /shared-wallets/{walletId}/keys/{role}/{index} | Get Public Key
[**postAccountKeyShared**](SharedKeysApi.md#postAccountKeyShared) | **POST** /shared-wallets/{walletId}/keys/{index} | Create Account Public Key


# **decodeSharedTransaction**
> DecodeTransaction202Response decodeSharedTransaction(decodeTransactionRequest)

<p align=\"right\">status: <strong>unstable</strong></p>  Decode a serialized transaction. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SharedKeysApi(configuration);

let body:.SharedKeysApiDecodeSharedTransactionRequest = {
  // string
  walletId: "walletId_example",
  // DecodeTransactionRequest
  decodeTransactionRequest: null,
};

apiInstance.decodeSharedTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **decodeTransactionRequest** | **DecodeTransactionRequest**|  |
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**DecodeTransaction202Response**

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
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccountKeyShared**
> string getAccountKeyShared()

<p align=\"right\">status: <strong>stable</strong></p> Retrieve the account public key of this shared wallet.  To get an extended public key, instead of the public key, use query parameter `format=extended`. For non-extended public key use `format=non_extended` or omit query parameter. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SharedKeysApi(configuration);

let body:.SharedKeysApiGetAccountKeySharedRequest = {
  // string
  walletId: "walletId_example",
};

apiInstance.getAccountKeyShared(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**string**

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

# **getSharedWalletKey**
> string getSharedWalletKey()

<p align=\"right\">status: <strong>stable</strong></p> Return a public key for a given role and derivation index for a shared wallet.  To get a hash of the public key, instead of the public key, use query parameter `hash=true`.  <b>Note:</b> Only `Soft` indexes are supported by this endpoint. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SharedKeysApi(configuration);

let body:.SharedKeysApiGetSharedWalletKeyRequest = {
  // string
  walletId: "walletId_example",
  // 'utxo_external' | 'utxo_internal' | 'mutable_account'
  role: "utxo_external",
  // string
  index: "1852H",
  // boolean | Whether to return the key hash instead of the key.  (optional)
  hash: false,
};

apiInstance.getSharedWalletKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] |  | defaults to undefined
 **role** | [**&#39;utxo_external&#39; | &#39;utxo_internal&#39; | &#39;mutable_account&#39;**]**Array<&#39;utxo_external&#39; &#124; &#39;utxo_internal&#39; &#124; &#39;mutable_account&#39;>** |  | defaults to undefined
 **index** | [**string**] |  | defaults to undefined
 **hash** | [**boolean**] | Whether to return the key hash instead of the key.  | (optional) defaults to undefined


### Return type

**string**

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

# **postAccountKeyShared**
> string postAccountKeyShared(postAccountKeySharedRequest)

<p align=\"right\">status: <strong>stable</strong></p> Derive an account public key for any account index. For this key derivation to be possible, the wallet must have been created from mnemonic.  <b>Note:</b> Only _Hardened_ indexes are supported by this endpoint. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SharedKeysApi(configuration);

let body:.SharedKeysApiPostAccountKeySharedRequest = {
  // string
  walletId: "walletId_example",
  // string
  index: "1852H",
  // PostAccountKeySharedRequest
  postAccountKeySharedRequest: {
    passphrase: "Secure Passphrase",
    format: "extended",
  },
};

apiInstance.postAccountKeyShared(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postAccountKeySharedRequest** | **PostAccountKeySharedRequest**|  |
 **walletId** | [**string**] |  | defaults to undefined
 **index** | [**string**] |  | defaults to undefined


### Return type

**string**

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
**415** | Unsupported Media Type |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


