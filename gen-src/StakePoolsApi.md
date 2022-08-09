# .StakePoolsApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDelegationFee**](StakePoolsApi.md#getDelegationFee) | **GET** /wallets/{walletId}/delegation-fees | Estimate Fee
[**getMaintenanceActions**](StakePoolsApi.md#getMaintenanceActions) | **GET** /stake-pools/maintenance-actions | View Maintenance Actions
[**joinStakePool**](StakePoolsApi.md#joinStakePool) | **PUT** /stake-pools/{stakePoolId}/wallets/{walletId} | Join
[**listStakeKeys**](StakePoolsApi.md#listStakeKeys) | **GET** /wallets/{walletId}/stake-keys | List Stake Keys
[**listStakePools**](StakePoolsApi.md#listStakePools) | **GET** /stake-pools | List
[**postMaintenanceAction**](StakePoolsApi.md#postMaintenanceAction) | **POST** /stake-pools/maintenance-actions | Trigger Maintenance Actions
[**quitStakePool**](StakePoolsApi.md#quitStakePool) | **DELETE** /stake-pools/*/wallets/{walletId} | Quit


# **getDelegationFee**
> PostTransactionFee202Response getDelegationFee()

<p align=\"right\">status: <strong>stable</strong></p>  Estimate fee for joining or leaving a stake pool. Note that it is an estimation because a delegation induces a transaction for which coins have to be selected randomly within the wallet. Because of this randomness, fees can only be estimated. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StakePoolsApi(configuration);

let body:.StakePoolsApiGetDelegationFeeRequest = {
  // string
  walletId: "walletId_example",
};

apiInstance.getDelegationFee(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**PostTransactionFee202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**406** | Not Acceptable |  -  |
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMaintenanceActions**
> GetMaintenanceActions200Response getMaintenanceActions()

Returns the current status of the stake pools maintenance actions. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StakePoolsApi(configuration);

let body:any = {};

apiInstance.getMaintenanceActions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetMaintenanceActions200Response**

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

# **joinStakePool**
> ListTransactions200ResponseInner joinStakePool(quitStakePoolRequest)

<p align=\"right\">status: <strong>stable</strong></p>  Delegate all (current and future) addresses from the given wallet to the given stake pool.  <strong>Note:</strong> Bech32-encoded stake pool identifiers can vary in length. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StakePoolsApi(configuration);

let body:.StakePoolsApiJoinStakePoolRequest = {
  // string
  stakePoolId: "stakePoolId_example",
  // string
  walletId: "walletId_example",
  // QuitStakePoolRequest
  quitStakePoolRequest: {
    passphrase: "Secure Passphrase",
  },
};

apiInstance.joinStakePool(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quitStakePoolRequest** | **QuitStakePoolRequest**|  |
 **stakePoolId** | [**string**] |  | defaults to undefined
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**ListTransactions200ResponseInner**

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
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listStakeKeys**
> ListStakeKeys200Response listStakeKeys()

<p align=\"right\">status: <strong>Experimental</strong></p>  List stake-keys relevant to the wallet, and how much ada is associated with each. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StakePoolsApi(configuration);

let body:.StakePoolsApiListStakeKeysRequest = {
  // string
  walletId: "walletId_example",
};

apiInstance.listStakeKeys(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**ListStakeKeys200Response**

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

# **listStakePools**
> Array<ListStakePools200ResponseInner> listStakePools()

<p align=\"right\">status: <strong>stable</strong></p>  List all known stake pools ordered by descending `non_myopic_member_rewards`. The `non_myopic_member_rewards` — and thus the ordering — depends on the `?stake` query parameter.  Some pools _may_ also have metadata attached to them. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StakePoolsApi(configuration);

let body:.StakePoolsApiListStakePoolsRequest = {
  // number | The stake the user intends to delegate in Lovelace. Required. 
  stake: 0,
};

apiInstance.listStakePools(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stake** | [**number**] | The stake the user intends to delegate in Lovelace. Required.  | defaults to undefined


### Return type

**Array<ListStakePools200ResponseInner>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Bad Request |  -  |
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postMaintenanceAction**
> void postMaintenanceAction(postMaintenanceActionRequest)

Performs maintenance actions on stake pools, such as triggering metadata garbage collection.  Actions may not be instantaneous. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StakePoolsApi(configuration);

let body:.StakePoolsApiPostMaintenanceActionRequest = {
  // PostMaintenanceActionRequest
  postMaintenanceActionRequest: {
    maintenanceAction: "gc_stake_pools",
  },
};

apiInstance.postMaintenanceAction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postMaintenanceActionRequest** | **PostMaintenanceActionRequest**|  |


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
**404** | Not Found |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **quitStakePool**
> ListTransactions200ResponseInner quitStakePool(quitStakePoolRequest)

<p align=\"right\">status: <strong>stable</strong></p>  Stop delegating completely. The wallet's stake will become inactive.  Any current rewards will automatically withdrawn.  > ⚠️  Disclaimer ⚠️ > > This endpoint historically use to take a stake pool id as a path parameter. > However, retiring from delegation is ubiquitous and not tied to a particular > stake pool. For backward-compatibility reasons, sending stake pool ids as path > parameter will still be accepted by the server but new integrations are > encouraged to provide a placeholder asterisk `*` instead. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StakePoolsApi(configuration);

let body:.StakePoolsApiQuitStakePoolRequest = {
  // string
  walletId: "walletId_example",
  // QuitStakePoolRequest
  quitStakePoolRequest: {
    passphrase: "Secure Passphrase",
  },
};

apiInstance.quitStakePool(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quitStakePoolRequest** | **QuitStakePoolRequest**|  |
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**ListTransactions200ResponseInner**

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
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


