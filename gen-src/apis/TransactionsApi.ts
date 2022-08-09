// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BadRequest } from '../models/BadRequest';
import { GetTransaction404Response } from '../models/GetTransaction404Response';
import { ListTransactions200ResponseInner } from '../models/ListTransactions200ResponseInner';
import { ListTransactions400Response } from '../models/ListTransactions400Response';
import { NoSuchWallet } from '../models/NoSuchWallet';
import { NotAcceptable } from '../models/NotAcceptable';
import { PostTransaction403Response } from '../models/PostTransaction403Response';
import { PostTransactionFee202Response } from '../models/PostTransactionFee202Response';
import { PostTransactionFee400Response } from '../models/PostTransactionFee400Response';
import { PostTransactionFee403Response } from '../models/PostTransactionFee403Response';
import { PostTransactionFeeRequest } from '../models/PostTransactionFeeRequest';
import { PostTransactionRequest } from '../models/PostTransactionRequest';
import { TransactionAlreadyInLedger } from '../models/TransactionAlreadyInLedger';
import { UnsupportedMediaType } from '../models/UnsupportedMediaType';

/**
 * no description
 */
export class TransactionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Forget pending transaction. Importantly, a transaction, when sent, cannot be cancelled. One can only request forgetting about it in order to try spending (concurrently) the same UTxO in another transaction. But, the transaction may still show up later in a block and therefore, appear in the wallet. 
     * Forget
     * @param walletId 
     * @param transactionId 
     */
    public async deleteTransaction(walletId: string, transactionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("TransactionsApi", "deleteTransaction", "walletId");
        }


        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new RequiredError("TransactionsApi", "deleteTransaction", "transactionId");
        }


        // Path Params
        const localVarPath = '/wallets/{walletId}/transactions/{transactionId}'
            .replace('{' + 'walletId' + '}', encodeURIComponent(String(walletId)))
            .replace('{' + 'transactionId' + '}', encodeURIComponent(String(transactionId)));

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
     * <p align=\"right\">status: <strong>stable</strong></p>  Get transaction by id. 
     * Get
     * @param walletId 
     * @param transactionId 
     * @param simpleMetadata When present (or equal to true) in the query, the metadata format for the transaction(s) in the output will be untyped plain json as specified in [CIP 25](https://cips.cardano.org/cips/cip25/) 
     */
    public async getTransaction(walletId: string, transactionId: string, simpleMetadata?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("TransactionsApi", "getTransaction", "walletId");
        }


        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new RequiredError("TransactionsApi", "getTransaction", "transactionId");
        }



        // Path Params
        const localVarPath = '/wallets/{walletId}/transactions/{transactionId}'
            .replace('{' + 'walletId' + '}', encodeURIComponent(String(walletId)))
            .replace('{' + 'transactionId' + '}', encodeURIComponent(String(transactionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (simpleMetadata !== undefined) {
            requestContext.setQueryParam("simple-metadata", ObjectSerializer.serialize(simpleMetadata, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Lists all incoming and outgoing wallet's transactions. 
     * List
     * @param walletId 
     * @param start An optional start time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: &#x60;2008-08-08T08:08:08Z&#x60; 
     * @param end An optional end time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: &#x60;2008-08-08T08:08:08Z&#x60; 
     * @param order An optional sort order.
     * @param minWithdrawal Returns only transactions that have at least one withdrawal above the given amount. This is particularly useful when set to &#x60;1&#x60; in order to list the withdrawal history of a wallet. 
     * @param simpleMetadata When present (or equal to true) in the query, the metadata format for the transaction(s) in the output will be untyped plain json as specified in [CIP 25](https://cips.cardano.org/cips/cip25/) 
     */
    public async listTransactions(walletId: string, start?: string, end?: string, order?: 'ascending' | 'descending', minWithdrawal?: number, simpleMetadata?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("TransactionsApi", "listTransactions", "walletId");
        }







        // Path Params
        const localVarPath = '/wallets/{walletId}/transactions'
            .replace('{' + 'walletId' + '}', encodeURIComponent(String(walletId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "string", "ISO 8601"));
        }

        // Query Params
        if (end !== undefined) {
            requestContext.setQueryParam("end", ObjectSerializer.serialize(end, "string", "ISO 8601"));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'ascending' | 'descending'", ""));
        }

        // Query Params
        if (minWithdrawal !== undefined) {
            requestContext.setQueryParam("minWithdrawal", ObjectSerializer.serialize(minWithdrawal, "number", ""));
        }

        // Query Params
        if (simpleMetadata !== undefined) {
            requestContext.setQueryParam("simple-metadata", ObjectSerializer.serialize(simpleMetadata, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Create and send transaction from the wallet. 
     * Create
     * @param walletId 
     * @param postTransactionRequest 
     */
    public async postTransaction(walletId: string, postTransactionRequest: PostTransactionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("TransactionsApi", "postTransaction", "walletId");
        }


        // verify required parameter 'postTransactionRequest' is not null or undefined
        if (postTransactionRequest === null || postTransactionRequest === undefined) {
            throw new RequiredError("TransactionsApi", "postTransaction", "postTransactionRequest");
        }


        // Path Params
        const localVarPath = '/wallets/{walletId}/transactions'
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
            ObjectSerializer.serialize(postTransactionRequest, "PostTransactionRequest", ""),
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
     * <p align=\"right\">status: <strong>stable</strong></p>  Estimate fee for the transaction. The estimate is made by assembling multiple transactions and analyzing the distribution of their fees. The estimated_max is the highest fee observed, and the estimated_min is the fee which is lower than at least 90% of the fees observed. 
     * Estimate Fee
     * @param walletId 
     * @param postTransactionFeeRequest 
     */
    public async postTransactionFee(walletId: string, postTransactionFeeRequest: PostTransactionFeeRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("TransactionsApi", "postTransactionFee", "walletId");
        }


        // verify required parameter 'postTransactionFeeRequest' is not null or undefined
        if (postTransactionFeeRequest === null || postTransactionFeeRequest === undefined) {
            throw new RequiredError("TransactionsApi", "postTransactionFee", "postTransactionFeeRequest");
        }


        // Path Params
        const localVarPath = '/wallets/{walletId}/payment-fees'
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
            ObjectSerializer.serialize(postTransactionFeeRequest, "PostTransactionFeeRequest", ""),
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

export class TransactionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTransaction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteTransaction(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: TransactionAlreadyInLedger = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TransactionAlreadyInLedger", ""
            ) as TransactionAlreadyInLedger;
            throw new ApiException<TransactionAlreadyInLedger>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: GetTransaction404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetTransaction404Response", ""
            ) as GetTransaction404Response;
            throw new ApiException<GetTransaction404Response>(response.httpStatusCode, "Not Found", body, response.headers);
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
     * @params response Response returned by the server for a request to getTransaction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTransaction(response: ResponseContext): Promise<ListTransactions200ResponseInner > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: GetTransaction404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetTransaction404Response", ""
            ) as GetTransaction404Response;
            throw new ApiException<GetTransaction404Response>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("406", response.httpStatusCode)) {
            const body: NotAcceptable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotAcceptable", ""
            ) as NotAcceptable;
            throw new ApiException<NotAcceptable>(response.httpStatusCode, "Not Acceptable", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
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
     * @params response Response returned by the server for a request to listTransactions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listTransactions(response: ResponseContext): Promise<Array<ListTransactions200ResponseInner> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ListTransactions400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListTransactions400Response", ""
            ) as ListTransactions400Response;
            throw new ApiException<ListTransactions400Response>(response.httpStatusCode, "Bad Request", body, response.headers);
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
            const body: Array<ListTransactions200ResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ListTransactions200ResponseInner>", ""
            ) as Array<ListTransactions200ResponseInner>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ListTransactions200ResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ListTransactions200ResponseInner>", ""
            ) as Array<ListTransactions200ResponseInner>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postTransaction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postTransaction(response: ResponseContext): Promise<ListTransactions200ResponseInner > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequest", ""
            ) as BadRequest;
            throw new ApiException<BadRequest>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: PostTransaction403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostTransaction403Response", ""
            ) as PostTransaction403Response;
            throw new ApiException<PostTransaction403Response>(response.httpStatusCode, "Forbidden", body, response.headers);
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postTransactionFee
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postTransactionFee(response: ResponseContext): Promise<PostTransactionFee202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PostTransactionFee400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostTransactionFee400Response", ""
            ) as PostTransactionFee400Response;
            throw new ApiException<PostTransactionFee400Response>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: PostTransactionFee403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostTransactionFee403Response", ""
            ) as PostTransactionFee403Response;
            throw new ApiException<PostTransactionFee403Response>(response.httpStatusCode, "Forbidden", body, response.headers);
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

}
