// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BadRequest } from '../models/BadRequest';
import { GetPolicyKey403Response } from '../models/GetPolicyKey403Response';
import { NotAcceptable } from '../models/NotAcceptable';
import { PostAccountKeyRequest } from '../models/PostAccountKeyRequest';
import { PostPolicyId202Response } from '../models/PostPolicyId202Response';
import { PostPolicyId403Response } from '../models/PostPolicyId403Response';
import { PostPolicyIdRequest } from '../models/PostPolicyIdRequest';
import { PostPolicyKeyRequest } from '../models/PostPolicyKeyRequest';
import { SignMetadata415Response } from '../models/SignMetadata415Response';

/**
 * no description
 */
export class KeysApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> Retrieve the account public key of this wallet.  To get an extended public key, instead of the public key, use query parameter `format=extended`. For non-extended public key use `format=non_extended` or omit query parameter. 
     * Get Account Public Key
     * @param walletId 
     */
    public async getAccountKey(walletId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("KeysApi", "getAccountKey", "walletId");
        }


        // Path Params
        const localVarPath = '/wallets/{walletId}/keys'
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
     * <p align=\"right\">status: <strong>stable</strong></p> Return a policy key for a derivation index = 0.  To get a hash of the policy key instead of the policy key, use query parameter `hash=true`. 
     * Get Policy Key
     * @param walletId 
     */
    public async getPolicyKey(walletId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("KeysApi", "getPolicyKey", "walletId");
        }


        // Path Params
        const localVarPath = '/wallets/{walletId}/policy-key'
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
     * <p align=\"right\">status: <strong>stable</strong></p> Return a public key for a given role and derivation index.  To get a hash of the public key, instead of the public key, use query parameter `hash=true`.  <b>Note:</b> Only `Soft` indexes are supported by this endpoint. 
     * Get Public Key
     * @param walletId 
     * @param role 
     * @param index 
     */
    public async getWalletKey(walletId: string, role: 'utxo_external' | 'utxo_internal' | 'mutable_account', index: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("KeysApi", "getWalletKey", "walletId");
        }


        // verify required parameter 'role' is not null or undefined
        if (role === null || role === undefined) {
            throw new RequiredError("KeysApi", "getWalletKey", "role");
        }


        // verify required parameter 'index' is not null or undefined
        if (index === null || index === undefined) {
            throw new RequiredError("KeysApi", "getWalletKey", "index");
        }


        // Path Params
        const localVarPath = '/wallets/{walletId}/keys/{role}/{index}'
            .replace('{' + 'walletId' + '}', encodeURIComponent(String(walletId)))
            .replace('{' + 'role' + '}', encodeURIComponent(String(role)))
            .replace('{' + 'index' + '}', encodeURIComponent(String(index)));

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
     * <p align=\"right\">status: <strong>stable</strong></p> Derive an account public key for any account index. For this key derivation to be possible, the wallet must have been created from mnemonic.  It is possible to use the optional `purpose` field to override that branch of the derivation path with different hardened derivation index. If that field is omitted, the default purpose for Cardano wallets (`1852H`) will be used.  <b>Note:</b> Only _Hardened_ indexes are supported by this endpoint. 
     * Create Account Public Key
     * @param walletId 
     * @param index 
     * @param postAccountKeyRequest 
     */
    public async postAccountKey(walletId: string, index: string, postAccountKeyRequest: PostAccountKeyRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("KeysApi", "postAccountKey", "walletId");
        }


        // verify required parameter 'index' is not null or undefined
        if (index === null || index === undefined) {
            throw new RequiredError("KeysApi", "postAccountKey", "index");
        }


        // verify required parameter 'postAccountKeyRequest' is not null or undefined
        if (postAccountKeyRequest === null || postAccountKeyRequest === undefined) {
            throw new RequiredError("KeysApi", "postAccountKey", "postAccountKeyRequest");
        }


        // Path Params
        const localVarPath = '/wallets/{walletId}/keys/{index}'
            .replace('{' + 'walletId' + '}', encodeURIComponent(String(walletId)))
            .replace('{' + 'index' + '}', encodeURIComponent(String(index)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(postAccountKeyRequest, "PostAccountKeyRequest", ""),
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
     * <p align=\"right\">status: <strong>stable</strong></p>  Create policy id for the wallet and a given mint/burn script. 
     * Create Policy Id
     * @param walletId 
     * @param postPolicyIdRequest 
     */
    public async postPolicyId(walletId: string, postPolicyIdRequest: PostPolicyIdRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("KeysApi", "postPolicyId", "walletId");
        }


        // verify required parameter 'postPolicyIdRequest' is not null or undefined
        if (postPolicyIdRequest === null || postPolicyIdRequest === undefined) {
            throw new RequiredError("KeysApi", "postPolicyId", "postPolicyIdRequest");
        }


        // Path Params
        const localVarPath = '/wallets/{walletId}/policy-id'
            .replace('{' + 'walletId' + '}', encodeURIComponent(String(walletId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(postPolicyIdRequest, "PostPolicyIdRequest", ""),
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
     * <p align=\"right\">status: <strong>stable</strong></p>  Create policy key for the wallet.  In order to be able to mint/burn assets with `POST Construct` endpoint there needs to be a policy key set for the wallet. Invoking this endpoint would be required for all wallets instantiated before introducing mint/burn feature prior to making a mint/burn transaction from them.  To get a hash of the policy key instead of the policy key, use query parameter `hash=true`. 
     * Create Policy Key
     * @param walletId 
     * @param postPolicyKeyRequest 
     */
    public async postPolicyKey(walletId: string, postPolicyKeyRequest: PostPolicyKeyRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("KeysApi", "postPolicyKey", "walletId");
        }


        // verify required parameter 'postPolicyKeyRequest' is not null or undefined
        if (postPolicyKeyRequest === null || postPolicyKeyRequest === undefined) {
            throw new RequiredError("KeysApi", "postPolicyKey", "postPolicyKeyRequest");
        }


        // Path Params
        const localVarPath = '/wallets/{walletId}/policy-key'
            .replace('{' + 'walletId' + '}', encodeURIComponent(String(walletId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(postPolicyKeyRequest, "PostPolicyKeyRequest", ""),
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

export class KeysApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccountKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAccountKey(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequest", "bech32"
            ) as BadRequest;
            throw new ApiException<BadRequest>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: SignMetadata415Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SignMetadata415Response", "bech32"
            ) as SignMetadata415Response;
            throw new ApiException<SignMetadata415Response>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("406", response.httpStatusCode)) {
            const body: NotAcceptable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotAcceptable", "bech32"
            ) as NotAcceptable;
            throw new ApiException<NotAcceptable>(response.httpStatusCode, "Not Acceptable", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "bech32"
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "bech32"
            ) as string;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPolicyKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPolicyKey(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequest", "bech32"
            ) as BadRequest;
            throw new ApiException<BadRequest>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: GetPolicyKey403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPolicyKey403Response", "bech32"
            ) as GetPolicyKey403Response;
            throw new ApiException<GetPolicyKey403Response>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: SignMetadata415Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SignMetadata415Response", "bech32"
            ) as SignMetadata415Response;
            throw new ApiException<SignMetadata415Response>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("406", response.httpStatusCode)) {
            const body: NotAcceptable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotAcceptable", "bech32"
            ) as NotAcceptable;
            throw new ApiException<NotAcceptable>(response.httpStatusCode, "Not Acceptable", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "bech32"
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "bech32"
            ) as string;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWalletKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWalletKey(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequest", "bech32"
            ) as BadRequest;
            throw new ApiException<BadRequest>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: SignMetadata415Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SignMetadata415Response", "bech32"
            ) as SignMetadata415Response;
            throw new ApiException<SignMetadata415Response>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("406", response.httpStatusCode)) {
            const body: NotAcceptable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotAcceptable", "bech32"
            ) as NotAcceptable;
            throw new ApiException<NotAcceptable>(response.httpStatusCode, "Not Acceptable", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "bech32"
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "bech32"
            ) as string;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postAccountKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postAccountKey(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequest", "bech32"
            ) as BadRequest;
            throw new ApiException<BadRequest>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("406", response.httpStatusCode)) {
            const body: NotAcceptable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotAcceptable", "bech32"
            ) as NotAcceptable;
            throw new ApiException<NotAcceptable>(response.httpStatusCode, "Not Acceptable", body, response.headers);
        }
        if (isCodeInRange("415", response.httpStatusCode)) {
            const body: SignMetadata415Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SignMetadata415Response", "bech32"
            ) as SignMetadata415Response;
            throw new ApiException<SignMetadata415Response>(response.httpStatusCode, "Unsupported Media Type", body, response.headers);
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "bech32"
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "bech32"
            ) as string;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postPolicyId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postPolicyId(response: ResponseContext): Promise<PostPolicyId202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequest", ""
            ) as BadRequest;
            throw new ApiException<BadRequest>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: PostPolicyId403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostPolicyId403Response", ""
            ) as PostPolicyId403Response;
            throw new ApiException<PostPolicyId403Response>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("406", response.httpStatusCode)) {
            const body: NotAcceptable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotAcceptable", ""
            ) as NotAcceptable;
            throw new ApiException<NotAcceptable>(response.httpStatusCode, "Not Acceptable", body, response.headers);
        }
        if (isCodeInRange("415", response.httpStatusCode)) {
            const body: SignMetadata415Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SignMetadata415Response", ""
            ) as SignMetadata415Response;
            throw new ApiException<SignMetadata415Response>(response.httpStatusCode, "Unsupported Media Type", body, response.headers);
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: PostPolicyId202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostPolicyId202Response", ""
            ) as PostPolicyId202Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PostPolicyId202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostPolicyId202Response", ""
            ) as PostPolicyId202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postPolicyKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postPolicyKey(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequest", "bech32"
            ) as BadRequest;
            throw new ApiException<BadRequest>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("406", response.httpStatusCode)) {
            const body: NotAcceptable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotAcceptable", "bech32"
            ) as NotAcceptable;
            throw new ApiException<NotAcceptable>(response.httpStatusCode, "Not Acceptable", body, response.headers);
        }
        if (isCodeInRange("415", response.httpStatusCode)) {
            const body: SignMetadata415Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SignMetadata415Response", "bech32"
            ) as SignMetadata415Response;
            throw new ApiException<SignMetadata415Response>(response.httpStatusCode, "Unsupported Media Type", body, response.headers);
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "bech32"
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "bech32"
            ) as string;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
