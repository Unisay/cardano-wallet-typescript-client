// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AssetNotPresent } from '../models/AssetNotPresent';
import { ListAssets200ResponseInner } from '../models/ListAssets200ResponseInner';
import { NotAcceptable } from '../models/NotAcceptable';

/**
 * no description
 */
export class ByronAssetsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Fetch a single asset from its `policy_id` and `asset_name`, with its metadata if any.  The asset must be associated with the wallet. 
     * Get Asset
     * @param walletId 
     * @param policyId 
     * @param assetName 
     */
    public async getByronAsset(walletId: string, policyId: string, assetName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("ByronAssetsApi", "getByronAsset", "walletId");
        }


        // verify required parameter 'policyId' is not null or undefined
        if (policyId === null || policyId === undefined) {
            throw new RequiredError("ByronAssetsApi", "getByronAsset", "policyId");
        }


        // verify required parameter 'assetName' is not null or undefined
        if (assetName === null || assetName === undefined) {
            throw new RequiredError("ByronAssetsApi", "getByronAsset", "assetName");
        }


        // Path Params
        const localVarPath = '/byron-wallets/{walletId}/assets/{policyId}/{assetName}'
            .replace('{' + 'walletId' + '}', encodeURIComponent(String(walletId)))
            .replace('{' + 'policyId' + '}', encodeURIComponent(String(policyId)))
            .replace('{' + 'assetName' + '}', encodeURIComponent(String(assetName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Fetch the asset from `policy_id` with an empty name.  The asset must be associated with the wallet. 
     * Get Asset (empty name)
     * @param walletId 
     * @param policyId 
     */
    public async getByronAssetDefault(walletId: string, policyId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("ByronAssetsApi", "getByronAssetDefault", "walletId");
        }


        // verify required parameter 'policyId' is not null or undefined
        if (policyId === null || policyId === undefined) {
            throw new RequiredError("ByronAssetsApi", "getByronAssetDefault", "policyId");
        }


        // Path Params
        const localVarPath = '/byron-wallets/{walletId}/assets/{policyId}'
            .replace('{' + 'walletId' + '}', encodeURIComponent(String(walletId)))
            .replace('{' + 'policyId' + '}', encodeURIComponent(String(policyId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List all assets associated with the wallet, and their metadata if known.  An asset is _associated_ with a wallet if it is involved in a transaction of the wallet. 
     * List Assets
     * @param walletId 
     */
    public async listByronAssets(walletId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("ByronAssetsApi", "listByronAssets", "walletId");
        }


        // Path Params
        const localVarPath = '/byron-wallets/{walletId}/assets'
            .replace('{' + 'walletId' + '}', encodeURIComponent(String(walletId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ByronAssetsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getByronAsset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getByronAsset(response: ResponseContext): Promise<ListAssets200ResponseInner > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: AssetNotPresent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetNotPresent", ""
            ) as AssetNotPresent;
            throw new ApiException<AssetNotPresent>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("406", response.httpStatusCode)) {
            const body: NotAcceptable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotAcceptable", ""
            ) as NotAcceptable;
            throw new ApiException<NotAcceptable>(response.httpStatusCode, "Not Acceptable", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListAssets200ResponseInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAssets200ResponseInner", ""
            ) as ListAssets200ResponseInner;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListAssets200ResponseInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAssets200ResponseInner", ""
            ) as ListAssets200ResponseInner;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getByronAssetDefault
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getByronAssetDefault(response: ResponseContext): Promise<ListAssets200ResponseInner > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: AssetNotPresent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetNotPresent", ""
            ) as AssetNotPresent;
            throw new ApiException<AssetNotPresent>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("406", response.httpStatusCode)) {
            const body: NotAcceptable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotAcceptable", ""
            ) as NotAcceptable;
            throw new ApiException<NotAcceptable>(response.httpStatusCode, "Not Acceptable", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListAssets200ResponseInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAssets200ResponseInner", ""
            ) as ListAssets200ResponseInner;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListAssets200ResponseInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAssets200ResponseInner", ""
            ) as ListAssets200ResponseInner;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listByronAssets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listByronAssets(response: ResponseContext): Promise<Array<ListAssets200ResponseInner> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("406", response.httpStatusCode)) {
            const body: NotAcceptable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotAcceptable", ""
            ) as NotAcceptable;
            throw new ApiException<NotAcceptable>(response.httpStatusCode, "Not Acceptable", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ListAssets200ResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ListAssets200ResponseInner>", ""
            ) as Array<ListAssets200ResponseInner>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ListAssets200ResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ListAssets200ResponseInner>", ""
            ) as Array<ListAssets200ResponseInner>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
