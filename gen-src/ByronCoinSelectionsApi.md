# .ByronCoinSelectionsApi

All URIs are relative to *https://localhost:8090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**byronSelectCoins**](ByronCoinSelectionsApi.md#byronSelectCoins) | **POST** /byron-wallets/{walletId}/coin-selections/random | Random


# **byronSelectCoins**
> ConstructTransaction202ResponseCoinSelection byronSelectCoins(postByronTransactionFeeRequest)

<p align=\"right\">status: <strong>stable</strong></p>  Select coins to cover the given set of payments.  Uses the <a href=\"https://iohk.io/blog/self-organisation-in-coin-selection/\"> Random-Improve coin selection algorithm</a>.  <b>Note: </b> Not supported for Byron random wallets. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ByronCoinSelectionsApi(configuration);

let body:.ByronCoinSelectionsApiByronSelectCoinsRequest = {
  // string
  walletId: "walletId_example",
  // PostByronTransactionFeeRequest
  postByronTransactionFeeRequest: {
    payments: [
      {
        address: "addr1sjck9mdmfyhzvjhydcjllgj9vjvl522w0573ncustrrr2rg7h9azg4cyqd36yyd48t5ut72hgld0fg2xfvz82xgwh7wal6g2xt8n996s3xvu5g",
        amount: {
          quantity: 42000000,
          unit: "lovelace",
        },
        assets: [
          {
            policyId: "65ab82542b0ca20391caaf66a4d4d7897d281f9c136cd3513136945b",
            assetName: "",
            quantity: 0,
          },
        ],
      },
    ],
  },
};

apiInstance.byronSelectCoins(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postByronTransactionFeeRequest** | **PostByronTransactionFeeRequest**|  |
 **walletId** | [**string**] |  | defaults to undefined


### Return type

**ConstructTransaction202ResponseCoinSelection**

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


