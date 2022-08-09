// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BadRequest } from '../models/BadRequest';
import { CannotCoverFee } from '../models/CannotCoverFee';
import { GetMaintenanceActions200Response } from '../models/GetMaintenanceActions200Response';
import { JoinStakePool403Response } from '../models/JoinStakePool403Response';
import { JoinStakePool404Response } from '../models/JoinStakePool404Response';
import { ListStakeKeys200Response } from '../models/ListStakeKeys200Response';
import { ListStakePools200ResponseInner } from '../models/ListStakePools200ResponseInner';
import { ListTransactions200ResponseInner } from '../models/ListTransactions200ResponseInner';
import { NoSuchWallet } from '../models/NoSuchWallet';
import { NotAcceptable } from '../models/NotAcceptable';
import { PostMaintenanceActionRequest } from '../models/PostMaintenanceActionRequest';
import { PostTransactionFee202Response } from '../models/PostTransactionFee202Response';
import { QueryParamMissing } from '../models/QueryParamMissing';
import { QuitStakePool403Response } from '../models/QuitStakePool403Response';
import { QuitStakePoolRequest } from '../models/QuitStakePoolRequest';
import { SignMetadata415Response } from '../models/SignMetadata415Response';
import { UnsupportedMediaType } from '../models/UnsupportedMediaType';

/**
 * no description
 */
export class StakePoolsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Estimate fee for joining or leaving a stake pool. Note that it is an estimation because a delegation induces a transaction for which coins have to be selected randomly within the wallet. Because of this randomness, fees can only be estimated. 
     * Estimate Fee
     * @param walletId 
     */
    public async getDelegationFee(walletId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("StakePoolsApi", "getDelegationFee", "walletId");
        }


        // Path Params
        const localVarPath = '/wallets/{walletId}/delegation-fees'
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

    /**
     * Returns the current status of the stake pools maintenance actions. 
     * View Maintenance Actions
     */
    public async getMaintenanceActions(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/stake-pools/maintenance-actions';

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
     * <p align=\"right\">status: <strong>stable</strong></p>  Delegate all (current and future) addresses from the given wallet to the given stake pool.  <strong>Note:</strong> Bech32-encoded stake pool identifiers can vary in length. 
     * Join
     * @param stakePoolId 
     * @param walletId 
     * @param quitStakePoolRequest 
     */
    public async joinStakePool(stakePoolId: string, walletId: string, quitStakePoolRequest: QuitStakePoolRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'stakePoolId' is not null or undefined
        if (stakePoolId === null || stakePoolId === undefined) {
            throw new RequiredError("StakePoolsApi", "joinStakePool", "stakePoolId");
        }


        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("StakePoolsApi", "joinStakePool", "walletId");
        }


        // verify required parameter 'quitStakePoolRequest' is not null or undefined
        if (quitStakePoolRequest === null || quitStakePoolRequest === undefined) {
            throw new RequiredError("StakePoolsApi", "joinStakePool", "quitStakePoolRequest");
        }


        // Path Params
        const localVarPath = '/stake-pools/{stakePoolId}/wallets/{walletId}'
            .replace('{' + 'stakePoolId' + '}', encodeURIComponent(String(stakePoolId)))
            .replace('{' + 'walletId' + '}', encodeURIComponent(String(walletId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(quitStakePoolRequest, "QuitStakePoolRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * <p align=\"right\">status: <strong>Experimental</strong></p>  List stake-keys relevant to the wallet, and how much ada is associated with each. 
     * List Stake Keys
     * @param walletId 
     */
    public async listStakeKeys(walletId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("StakePoolsApi", "listStakeKeys", "walletId");
        }


        // Path Params
        const localVarPath = '/wallets/{walletId}/stake-keys'
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

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  List all known stake pools ordered by descending `non_myopic_member_rewards`. The `non_myopic_member_rewards` — and thus the ordering — depends on the `?stake` query parameter.  Some pools _may_ also have metadata attached to them. 
     * List
     * @param stake The stake the user intends to delegate in Lovelace. Required. 
     */
    public async listStakePools(stake: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'stake' is not null or undefined
        if (stake === null || stake === undefined) {
            throw new RequiredError("StakePoolsApi", "listStakePools", "stake");
        }


        // Path Params
        const localVarPath = '/stake-pools';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (stake !== undefined) {
            requestContext.setQueryParam("stake", ObjectSerializer.serialize(stake, "number", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Performs maintenance actions on stake pools, such as triggering metadata garbage collection.  Actions may not be instantaneous. 
     * Trigger Maintenance Actions
     * @param postMaintenanceActionRequest 
     */
    public async postMaintenanceAction(postMaintenanceActionRequest: PostMaintenanceActionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'postMaintenanceActionRequest' is not null or undefined
        if (postMaintenanceActionRequest === null || postMaintenanceActionRequest === undefined) {
            throw new RequiredError("StakePoolsApi", "postMaintenanceAction", "postMaintenanceActionRequest");
        }


        // Path Params
        const localVarPath = '/stake-pools/maintenance-actions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(postMaintenanceActionRequest, "PostMaintenanceActionRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Stop delegating completely. The wallet's stake will become inactive.  Any current rewards will automatically withdrawn.  > ⚠️  Disclaimer ⚠️ > > This endpoint historically use to take a stake pool id as a path parameter. > However, retiring from delegation is ubiquitous and not tied to a particular > stake pool. For backward-compatibility reasons, sending stake pool ids as path > parameter will still be accepted by the server but new integrations are > encouraged to provide a placeholder asterisk `*` instead. 
     * Quit
     * @param walletId 
     * @param quitStakePoolRequest 
     */
    public async quitStakePool(walletId: string, quitStakePoolRequest: QuitStakePoolRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("StakePoolsApi", "quitStakePool", "walletId");
        }


        // verify required parameter 'quitStakePoolRequest' is not null or undefined
        if (quitStakePoolRequest === null || quitStakePoolRequest === undefined) {
            throw new RequiredError("StakePoolsApi", "quitStakePool", "quitStakePoolRequest");
        }


        // Path Params
        const localVarPath = '/stake-pools/*/wallets/{walletId}'
            .replace('{' + 'walletId' + '}', encodeURIComponent(String(walletId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(quitStakePoolRequest, "QuitStakePoolRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class StakePoolsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDelegationFee
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDelegationFee(response: ResponseContext): Promise<PostTransactionFee202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: CannotCoverFee = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CannotCoverFee", ""
            ) as CannotCoverFee;
            throw new ApiException<CannotCoverFee>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoSuchWallet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSuchWallet", ""
            ) as NoSuchWallet;
            throw new ApiException<NoSuchWallet>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("406", response.httpStatusCode)) {
            const body: NotAcceptable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotAcceptable", ""
            ) as NotAcceptable;
            throw new ApiException<NotAcceptable>(response.httpStatusCode, "Not Acceptable", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PostTransactionFee202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostTransactionFee202Response", ""
            ) as PostTransactionFee202Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PostTransactionFee202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostTransactionFee202Response", ""
            ) as PostTransactionFee202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMaintenanceActions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMaintenanceActions(response: ResponseContext): Promise<GetMaintenanceActions200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetMaintenanceActions200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMaintenanceActions200Response", ""
            ) as GetMaintenanceActions200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetMaintenanceActions200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMaintenanceActions200Response", ""
            ) as GetMaintenanceActions200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to joinStakePool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async joinStakePool(response: ResponseContext): Promise<ListTransactions200ResponseInner > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequest", ""
            ) as BadRequest;
            throw new ApiException<BadRequest>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: JoinStakePool403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JoinStakePool403Response", ""
            ) as JoinStakePool403Response;
            throw new ApiException<JoinStakePool403Response>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: JoinStakePool404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JoinStakePool404Response", ""
            ) as JoinStakePool404Response;
            throw new ApiException<JoinStakePool404Response>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("406", response.httpStatusCode)) {
            const body: NotAcceptable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotAcceptable", ""
            ) as NotAcceptable;
            throw new ApiException<NotAcceptable>(response.httpStatusCode, "Not Acceptable", body, response.headers);
        }
        if (isCodeInRange("415", response.httpStatusCode)) {
            const body: UnsupportedMediaType = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnsupportedMediaType", ""
            ) as UnsupportedMediaType;
            throw new ApiException<UnsupportedMediaType>(response.httpStatusCode, "Unsupported Media Type", body, response.headers);
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: ListTransactions200ResponseInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListTransactions200ResponseInner", ""
            ) as ListTransactions200ResponseInner;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListTransactions200ResponseInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListTransactions200ResponseInner", ""
            ) as ListTransactions200ResponseInner;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listStakeKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listStakeKeys(response: ResponseContext): Promise<ListStakeKeys200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListStakeKeys200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListStakeKeys200Response", ""
            ) as ListStakeKeys200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListStakeKeys200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListStakeKeys200Response", ""
            ) as ListStakeKeys200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listStakePools
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listStakePools(response: ResponseContext): Promise<Array<ListStakePools200ResponseInner> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: QueryParamMissing = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "QueryParamMissing", ""
            ) as QueryParamMissing;
            throw new ApiException<QueryParamMissing>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ListStakePools200ResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ListStakePools200ResponseInner>", ""
            ) as Array<ListStakePools200ResponseInner>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ListStakePools200ResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ListStakePools200ResponseInner>", ""
            ) as Array<ListStakePools200ResponseInner>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postMaintenanceAction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postMaintenanceAction(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: SignMetadata415Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SignMetadata415Response", ""
            ) as SignMetadata415Response;
            throw new ApiException<SignMetadata415Response>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to quitStakePool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async quitStakePool(response: ResponseContext): Promise<ListTransactions200ResponseInner > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequest", ""
            ) as BadRequest;
            throw new ApiException<BadRequest>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: QuitStakePool403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "QuitStakePool403Response", ""
            ) as QuitStakePool403Response;
            throw new ApiException<QuitStakePool403Response>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoSuchWallet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSuchWallet", ""
            ) as NoSuchWallet;
            throw new ApiException<NoSuchWallet>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("406", response.httpStatusCode)) {
            const body: NotAcceptable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotAcceptable", ""
            ) as NotAcceptable;
            throw new ApiException<NotAcceptable>(response.httpStatusCode, "Not Acceptable", body, response.headers);
        }
        if (isCodeInRange("415", response.httpStatusCode)) {
            const body: UnsupportedMediaType = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnsupportedMediaType", ""
            ) as UnsupportedMediaType;
            throw new ApiException<UnsupportedMediaType>(response.httpStatusCode, "Unsupported Media Type", body, response.headers);
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: ListTransactions200ResponseInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListTransactions200ResponseInner", ""
            ) as ListTransactions200ResponseInner;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListTransactions200ResponseInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListTransactions200ResponseInner", ""
            ) as ListTransactions200ResponseInner;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
