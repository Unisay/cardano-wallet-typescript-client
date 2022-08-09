# .AddressesApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inspectAddress**](AddressesApi.md#inspectAddress) | **GET** /addresses/{addressId} | Inspect Address
[**listAddresses**](AddressesApi.md#listAddresses) | **GET** /wallets/{walletId}/addresses | List
[**postAnyAddress**](AddressesApi.md#postAnyAddress) | **POST** /addresses | Construct Address


# **inspectAddress**
> InspectAddress200Response inspectAddress()

<p align=\"right\">status: <strong>stable</strong></p>  Give useful information about the structure of a given address. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AddressesApi(configuration);

let body:.AddressesApiInspectAddressRequest = {
  // string
  addressId: "DdzFFzCqrhtCNjPk5Lei7E1FxnoqMoAYtJ8VjAWbFmDb614nNBWBwv3kt6QHJa59cGezzf6piMWsbK7sWRB5sv325QqWdRuusMqqLdMt",
};

apiInstance.inspectAddress(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressId** | [**string**] |  | defaults to undefined


### Return type

**InspectAddress200Response**

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

# **listAddresses**
> Array<ListAddresses200ResponseInner> listAddresses()

<p align=\"right\">status: <strong>stable</strong></p>  Return a list of known addresses, ordered from newest to oldest 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AddressesApi(configuration);

let body:.AddressesApiListAddressesRequest = {
  // string
  walletId: "walletId_example",
  // 'used' | 'unused' | An optional filter on the address state. (optional)
  state: "used",
};

apiInstance.listAddresses(body).then((data:any) => {
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

# **postAnyAddress**
> PostAnyAddress202Response postAnyAddress()

<p align=\"right\">status: <strong>stable</strong></p>  Construct any address by specyfying credential for payment or delegation.  In Cardano, Addresses are made of three parts:  ``` *---------*---------*-----------* | NETWORK | PAYMENT | DELEGATION | *---------*---------*-----------* ```  The `NETWORK` part allows for distinguishing addresses between different networks like the mainnet or the testnet. It is implicitly handled by the server without you having to worry about it. The `PAYMENT` and `DELEGATION` parts however can be constructed similarly, using either:  - A public key - A script  The script itself is either constructed out of a public key, one of two timelocks, or one of the three following primitives:  - all - any - some  The timelock can determine validity as respect to the slot. `active_from slot` means the script is valid from the specified slot and onward. `active_until slot` means the script is valid until (not included) the specified slot.  Each of which contains one or more script(s) that can be either keys or primitives, and so on. Schematically:  ```                                    ┏─────────┓ SCRIPT = ──┬───────────────────────┤ pub key ├─────────────────────┬──            │                       ┗─────────┛                     │            │                       ┏──────────────────┓            │            ├───────────────────────┤ ACTIVE_FROM slot ├──── ───────┤            │                       ┗──────────────────┛            │            │                       ┏───────────────────┓           │            ├───────────────────────┤ ACTIVE_UNTIL slot ├───────────┤            │                       ┗───────────────────┛           │            │                                                       │            │  ╭─────╮   ╭────────╮                                 │            ├──┤ ALL ├───┤ SCRIPT ├─┬───────────────────────────────┤            │  ╰─────╯ ^ ╰────────╯ │                               │            │          │   ╭───╮    │                               │            │          └───┤ , ├────┘                               │            │              ╰───╯                                    │            │  ╭─────╮   ╭────────╮                                 │            ├──┤ ANY ├───┤ SCRIPT ├─┬───────────────────────────────┤            │  ╰─────╯ ^ ╰────────╯ │                               │            │          │   ╭───╮    │                               │            │          └───┤ , ├────┘                               │            │              ╰───╯                                    │            │  ╭──────╮ ╭──────────╮ ┏───┓ ╭──────╮   ╭────────╮    │            └──┤ SOME ├─┤ AT_LEAST ├─┤ n ├─┤ FROM ├───┤ SCRIPT ├─┬──┘               ╰──────╯ ╰──────────╯ ┗───┛ ╰──────╯ ^ ╰────────╯ │                                                    │   ╭───╮    │                                                    └───┤ , ├────┘                                                        ╰───╯ ``` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AddressesApi(configuration);

let body:.AddressesApiPostAnyAddressRequest = {
  // PostAnyAddressRequest (optional)
  postAnyAddressRequest: {
    payment: null,
    stake: null,
    validation: "required",
  },
};

apiInstance.postAnyAddress(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postAnyAddressRequest** | **PostAnyAddressRequest**|  |


### Return type

**PostAnyAddress202Response**

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


