# .KeysApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountKey**](KeysApi.md#getAccountKey) | **GET** /wallets/{walletId}/keys | Get Account Public Key
[**getPolicyKey**](KeysApi.md#getPolicyKey) | **GET** /wallets/{walletId}/policy-key | Get Policy Key
[**getWalletKey**](KeysApi.md#getWalletKey) | **GET** /wallets/{walletId}/keys/{role}/{index} | Get Public Key
[**postAccountKey**](KeysApi.md#postAccountKey) | **POST** /wallets/{walletId}/keys/{index} | Create Account Public Key
[**postPolicyId**](KeysApi.md#postPolicyId) | **POST** /wallets/{walletId}/policy-id | Create Policy Id
[**postPolicyKey**](KeysApi.md#postPolicyKey) | **POST** /wallets/{walletId}/policy-key | Create Policy Key


# **getAccountKey**
> string getAccountKey()

<p align=\"right\">status: <strong>stable</strong></p> Retrieve the account public key of this wallet.  To get an extended public key, instead of the public key, use query parameter `format=extended`. For non-extended public key use `format=non_extended` or omit query parameter. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KeysApi(configuration);

let body:.KeysApiGetAccountKeyRequest = {
  // string
  walletId: "walletId_example",
};

apiInstance.getAccountKey(body).then((data:any) => {
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

# **getPolicyKey**
> string getPolicyKey()

<p align=\"right\">status: <strong>stable</strong></p> Return a policy key for a derivation index = 0.  To get a hash of the policy key instead of the policy key, use query parameter `hash=true`. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KeysApi(configuration);

let body:.KeysApiGetPolicyKeyRequest = {
  // string
  walletId: "walletId_example",
};

apiInstance.getPolicyKey(body).then((data:any) => {
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
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**406** | Not Acceptable |  -  |
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWalletKey**
> string getWalletKey()

<p align=\"right\">status: <strong>stable</strong></p> Return a public key for a given role and derivation index.  To get a hash of the public key, instead of the public key, use query parameter `hash=true`.  <b>Note:</b> Only `Soft` indexes are supported by this endpoint. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KeysApi(configuration);

let body:.KeysApiGetWalletKeyRequest = {
  // string
  walletId: "walletId_example",
  // 'utxo_external' | 'utxo_internal' | 'mutable_account'
  role: "utxo_external",
  // string
  index: "1852H",
};

apiInstance.getWalletKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] |  | defaults to undefined
 **role** | [**&#39;utxo_external&#39; | &#39;utxo_internal&#39; | &#39;mutable_account&#39;**]**Array<&#39;utxo_external&#39; &#124; &#39;utxo_internal&#39; &#124; &#39;mutable_account&#39;>** |  | defaults to undefined
 **index** | [**string**] |  | defaults to undefined


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

# **postAccountKey**
> string postAccountKey(postAccountKeyRequest)

<p align=\"right\">status: <strong>stable</strong></p> Derive an account public key for any account index. For this key derivation to be possible, the wallet must have been created from mnemonic.  It is possible to use the optional `purpose` field to override that branch of the derivation path with different hardened derivation index. If that field is omitted, the default purpose for Cardano wallets (`1852H`) will be used.  <b>Note:</b> Only _Hardened_ indexes are supported by this endpoint. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KeysApi(configuration);

let body:.KeysApiPostAccountKeyRequest = {
  // string
  walletId: "walletId_example",
  // string
  index: "1852H",
  // PostAccountKeyRequest
  postAccountKeyRequest: {
    passphrase: "Secure Passphrase",
    format: "extended",
    purpose: "1852H",
  },
};

apiInstance.postAccountKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postAccountKeyRequest** | **PostAccountKeyRequest**|  |
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

# **postPolicyId**
> PostPolicyId202Response postPolicyId(postPolicyIdRequest)

<p align=\"right\">status: <strong>stable</strong></p>  Create policy id for the wallet and a given mint/burn script. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KeysApi(configuration);

let body:.KeysApiPostPolicyIdRequest = {
  // string
  walletId: "walletId_example",
  // PostPolicyIdRequest
  postPolicyIdRequest: {
    policyScriptTemplate: null,
  },
};

apiInstance.postPolicyId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postPolicyIdRequest** | **PostPolicyIdRequest**|  |
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**PostPolicyId202Response**

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
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postPolicyKey**
> string postPolicyKey(postPolicyKeyRequest)

<p align=\"right\">status: <strong>stable</strong></p>  Create policy key for the wallet.  In order to be able to mint/burn assets with `POST Construct` endpoint there needs to be a policy key set for the wallet. Invoking this endpoint would be required for all wallets instantiated before introducing mint/burn feature prior to making a mint/burn transaction from them.  To get a hash of the policy key instead of the policy key, use query parameter `hash=true`. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KeysApi(configuration);

let body:.KeysApiPostPolicyKeyRequest = {
  // string
  walletId: "walletId_example",
  // PostPolicyKeyRequest
  postPolicyKeyRequest: {
    passphrase: "Secure Passphrase",
  },
};

apiInstance.postPolicyKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postPolicyKeyRequest** | **PostPolicyKeyRequest**|  |
 **walletId** | [**string**] |  | defaults to undefined


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


