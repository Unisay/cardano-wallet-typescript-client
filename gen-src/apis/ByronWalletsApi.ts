// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BadRequest } from '../models/BadRequest';
import { GetUTxOsStatistics200Response } from '../models/GetUTxOsStatistics200Response';
import { GetWalletUtxoSnapshot200Response } from '../models/GetWalletUtxoSnapshot200Response';
import { ListByronWallets200ResponseInner } from '../models/ListByronWallets200ResponseInner';
import { ListWallets200ResponseInner } from '../models/ListWallets200ResponseInner';
import { NoSuchWallet } from '../models/NoSuchWallet';
import { NotAcceptable } from '../models/NotAcceptable';
import { PostByronWalletRequest } from '../models/PostByronWalletRequest';
import { PutByronWalletPassphraseRequest } from '../models/PutByronWalletPassphraseRequest';
import { PutWalletPassphrase403Response } from '../models/PutWalletPassphrase403Response';
import { PutWalletRequest } from '../models/PutWalletRequest';
import { SignMetadata415Response } from '../models/SignMetadata415Response';
import { UnsupportedMediaType } from '../models/UnsupportedMediaType';

/**
 * no description
 */
export class ByronWalletsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Delete a Byron wallet. 
     * Delete
     * @param walletId 
     */
    public async deleteByronWallet(walletId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("ByronWalletsApi", "deleteByronWallet", "walletId");
        }


        // Path Params
        const localVarPath = '/byron-wallets/{walletId}'
            .replace('{' + 'walletId' + '}', encodeURIComponent(String(walletId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return the UTxOs distribution across the whole wallet, in the form of a histogram.  ```      │  100 ─      │      │                                 ┌───┐   10 ─                         ┌───┐   │   │                   ┌───┐      │                 ┌───┐   │   │   │   │                   │   │      │                 │   │   │   │   │   │   ┌───┐           │   │    1 ─ ┌───┐           │   │   │   │   │   │   │   │           │   │      │ │   │           │   │   │   │   │   │   │   │           │   │      │ │   │ │       │ │   │ │ │   │ ╷ │   │ ╷ │   │ ╷       ╷ │   │      └─┘   └─│───────│─┘   └─│─┘   └─│─┘   └─│─┘   └─│───────│─┘   └────            10μ₳    100μ₳   1000μ₳   0.1₳    1₳      10₳     100₳ ``` 
     * UTxO Statistics
     * @param walletId 
     */
    public async getByronUTxOsStatistics(walletId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("ByronWalletsApi", "getByronUTxOsStatistics", "walletId");
        }


        // Path Params
        const localVarPath = '/byron-wallets/{walletId}/statistics/utxos'
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
     * <p align=\"right\">status: <strong>stable</strong></p>  Return information about a Byron wallet. 
     * Get
     * @param walletId 
     */
    public async getByronWallet(walletId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("ByronWalletsApi", "getByronWallet", "walletId");
        }


        // Path Params
        const localVarPath = '/byron-wallets/{walletId}'
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
     * Generate a snapshot of the wallet's UTxO set.  This endpoint is intended for debugging purposes. 
     * A snapshot of the wallet's UTxO set
     * @param walletId 
     */
    public async getByronWalletUtxoSnapshot(walletId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("ByronWalletsApi", "getByronWalletUtxoSnapshot", "walletId");
        }


        // Path Params
        const localVarPath = '/byron-wallets/{walletId}/utxo'
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
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known Byron wallets, ordered from oldest to newest. 
     * List
     */
    public async listByronWallets(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/byron-wallets';

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
     * <p align=\"right\">status: <strong>stable</strong></p>  Restore a Byron wallet from a mnemonic sentence or encrypted root private key (deprecated).    **⚠️ WARNING ⚠️**    The construction of random wallet in itself is **deprecated**, in particular the restoration from an encrypted root private key.   These endpoints exist to ease migrations from legacy software such as `cardano-sl` but should be avoided by new applications. 
     * Restore
     * @param postByronWalletRequest 
     */
    public async postByronWallet(postByronWalletRequest: PostByronWalletRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'postByronWalletRequest' is not null or undefined
        if (postByronWalletRequest === null || postByronWalletRequest === undefined) {
            throw new RequiredError("ByronWalletsApi", "postByronWallet", "postByronWalletRequest");
        }


        // Path Params
        const localVarPath = '/byron-wallets';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(postByronWalletRequest, "PostByronWalletRequest", ""),
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
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * Update Metadata
     * @param walletId 
     * @param putWalletRequest 
     */
    public async putByronWallet(walletId: string, putWalletRequest: PutWalletRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("ByronWalletsApi", "putByronWallet", "walletId");
        }


        // verify required parameter 'putWalletRequest' is not null or undefined
        if (putWalletRequest === null || putWalletRequest === undefined) {
            throw new RequiredError("ByronWalletsApi", "putByronWallet", "putWalletRequest");
        }


        // Path Params
        const localVarPath = '/byron-wallets/{walletId}'
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
            ObjectSerializer.serialize(putWalletRequest, "PutWalletRequest", ""),
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
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * Update Passphrase
     * @param walletId 
     * @param putByronWalletPassphraseRequest 
     */
    public async putByronWalletPassphrase(walletId: string, putByronWalletPassphraseRequest: PutByronWalletPassphraseRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("ByronWalletsApi", "putByronWalletPassphrase", "walletId");
        }


        // verify required parameter 'putByronWalletPassphraseRequest' is not null or undefined
        if (putByronWalletPassphraseRequest === null || putByronWalletPassphraseRequest === undefined) {
            throw new RequiredError("ByronWalletsApi", "putByronWalletPassphrase", "putByronWalletPassphraseRequest");
        }


        // Path Params
        const localVarPath = '/byron-wallets/{walletId}/passphrase'
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
            ObjectSerializer.serialize(putByronWalletPassphraseRequest, "PutByronWalletPassphraseRequest", ""),
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

export class ByronWalletsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteByronWallet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteByronWallet(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequest", ""
            ) as BadRequest;
            throw new ApiException<BadRequest>(response.httpStatusCode, "Bad Request", body, response.headers);
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
     * @params response Response returned by the server for a request to getByronUTxOsStatistics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getByronUTxOsStatistics(response: ResponseContext): Promise<GetUTxOsStatistics200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
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
            const body: GetUTxOsStatistics200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetUTxOsStatistics200Response", ""
            ) as GetUTxOsStatistics200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetUTxOsStatistics200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetUTxOsStatistics200Response", ""
            ) as GetUTxOsStatistics200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getByronWallet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getByronWallet(response: ResponseContext): Promise<ListByronWallets200ResponseInner > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: SignMetadata415Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SignMetadata415Response", ""
            ) as SignMetadata415Response;
            throw new ApiException<SignMetadata415Response>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("406", response.httpStatusCode)) {
            const body: NotAcceptable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotAcceptable", ""
            ) as NotAcceptable;
            throw new ApiException<NotAcceptable>(response.httpStatusCode, "Not Acceptable", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListByronWallets200ResponseInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListByronWallets200ResponseInner", ""
            ) as ListByronWallets200ResponseInner;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListByronWallets200ResponseInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListByronWallets200ResponseInner", ""
            ) as ListByronWallets200ResponseInner;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getByronWalletUtxoSnapshot
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getByronWalletUtxoSnapshot(response: ResponseContext): Promise<GetWalletUtxoSnapshot200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
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
            const body: GetWalletUtxoSnapshot200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetWalletUtxoSnapshot200Response", ""
            ) as GetWalletUtxoSnapshot200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetWalletUtxoSnapshot200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetWalletUtxoSnapshot200Response", ""
            ) as GetWalletUtxoSnapshot200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listByronWallets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listByronWallets(response: ResponseContext): Promise<Array<ListByronWallets200ResponseInner> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("406", response.httpStatusCode)) {
            const body: NotAcceptable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotAcceptable", ""
            ) as NotAcceptable;
            throw new ApiException<NotAcceptable>(response.httpStatusCode, "Not Acceptable", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ListByronWallets200ResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ListByronWallets200ResponseInner>", ""
            ) as Array<ListByronWallets200ResponseInner>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ListByronWallets200ResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ListByronWallets200ResponseInner>", ""
            ) as Array<ListByronWallets200ResponseInner>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postByronWallet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postByronWallet(response: ResponseContext): Promise<ListByronWallets200ResponseInner > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequest", ""
            ) as BadRequest;
            throw new ApiException<BadRequest>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("406", response.httpStatusCode)) {
            const body: NotAcceptable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotAcceptable", ""
            ) as NotAcceptable;
            throw new ApiException<NotAcceptable>(response.httpStatusCode, "Not Acceptable", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: SignMetadata415Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SignMetadata415Response", ""
            ) as SignMetadata415Response;
            throw new ApiException<SignMetadata415Response>(response.httpStatusCode, "Conflict", body, response.headers);
        }
        if (isCodeInRange("415", response.httpStatusCode)) {
            const body: SignMetadata415Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SignMetadata415Response", ""
            ) as SignMetadata415Response;
            throw new ApiException<SignMetadata415Response>(response.httpStatusCode, "Unsupported Media Type", body, response.headers);
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ListByronWallets200ResponseInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListByronWallets200ResponseInner", ""
            ) as ListByronWallets200ResponseInner;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListByronWallets200ResponseInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListByronWallets200ResponseInner", ""
            ) as ListByronWallets200ResponseInner;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to putByronWallet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async putByronWallet(response: ResponseContext): Promise<ListWallets200ResponseInner > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequest", ""
            ) as BadRequest;
            throw new ApiException<BadRequest>(response.httpStatusCode, "Bad Request", body, response.headers);
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
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListWallets200ResponseInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListWallets200ResponseInner", ""
            ) as ListWallets200ResponseInner;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListWallets200ResponseInner = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListWallets200ResponseInner", ""
            ) as ListWallets200ResponseInner;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to putByronWalletPassphrase
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async putByronWalletPassphrase(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequest", ""
            ) as BadRequest;
            throw new ApiException<BadRequest>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: PutWalletPassphrase403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PutWalletPassphrase403Response", ""
            ) as PutWalletPassphrase403Response;
            throw new ApiException<PutWalletPassphrase403Response>(response.httpStatusCode, "Forbidden", body, response.headers);
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

}
