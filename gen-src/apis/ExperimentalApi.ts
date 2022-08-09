// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BadRequest } from '../models/BadRequest';
import { NotAcceptable } from '../models/NotAcceptable';
import { SignMetadata415Response } from '../models/SignMetadata415Response';
import { SignMetadataRequest } from '../models/SignMetadataRequest';

/**
 * no description
 */
export class ExperimentalApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * <p align=\"right\">status: <strong>experimental</strong></p>  **⚠️ WARNING ⚠️**  This endpoint is experimental and for internal use in the Catalyst project. This functionality will be refined in the forthcoming future and the interface is likely to change in **NON-BACKWARD COMPATIBLE WAYS**.  <b>Note:</b> Only `Soft` indexes are supported by this endpoint. 
     * Sign Metadata
     * @param walletId 
     * @param role 
     * @param index 
     * @param signMetadataRequest 
     */
    public async signMetadata(walletId: string, role: 'utxo_external' | 'utxo_internal' | 'mutable_account', index: string, signMetadataRequest: SignMetadataRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("ExperimentalApi", "signMetadata", "walletId");
        }


        // verify required parameter 'role' is not null or undefined
        if (role === null || role === undefined) {
            throw new RequiredError("ExperimentalApi", "signMetadata", "role");
        }


        // verify required parameter 'index' is not null or undefined
        if (index === null || index === undefined) {
            throw new RequiredError("ExperimentalApi", "signMetadata", "index");
        }


        // verify required parameter 'signMetadataRequest' is not null or undefined
        if (signMetadataRequest === null || signMetadataRequest === undefined) {
            throw new RequiredError("ExperimentalApi", "signMetadata", "signMetadataRequest");
        }


        // Path Params
        const localVarPath = '/wallets/{walletId}/signatures/{role}/{index}'
            .replace('{' + 'walletId' + '}', encodeURIComponent(String(walletId)))
            .replace('{' + 'role' + '}', encodeURIComponent(String(role)))
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
            ObjectSerializer.serialize(signMetadataRequest, "SignMetadataRequest", ""),
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

export class ExperimentalApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to signMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async signMetadata(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequest", "binary"
            ) as BadRequest;
            throw new ApiException<BadRequest>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("406", response.httpStatusCode)) {
            const body: NotAcceptable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotAcceptable", "binary"
            ) as NotAcceptable;
            throw new ApiException<NotAcceptable>(response.httpStatusCode, "Not Acceptable", body, response.headers);
        }
        if (isCodeInRange("415", response.httpStatusCode)) {
            const body: SignMetadata415Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SignMetadata415Response", "binary"
            ) as SignMetadata415Response;
            throw new ApiException<SignMetadata415Response>(response.httpStatusCode, "Unsupported Media Type", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
