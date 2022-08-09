// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BadRequest } from '../models/BadRequest';
import { InspectAddress200Response } from '../models/InspectAddress200Response';
import { ListAddresses200ResponseInner } from '../models/ListAddresses200ResponseInner';
import { NoSuchWallet } from '../models/NoSuchWallet';
import { NotAcceptable } from '../models/NotAcceptable';
import { PostAnyAddress202Response } from '../models/PostAnyAddress202Response';
import { PostAnyAddressRequest } from '../models/PostAnyAddressRequest';
import { SignMetadata415Response } from '../models/SignMetadata415Response';

/**
 * no description
 */
export class AddressesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Give useful information about the structure of a given address. 
     * Inspect Address
     * @param addressId 
     */
    public async inspectAddress(addressId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'addressId' is not null or undefined
        if (addressId === null || addressId === undefined) {
            throw new RequiredError("AddressesApi", "inspectAddress", "addressId");
        }


        // Path Params
        const localVarPath = '/addresses/{addressId}'
            .replace('{' + 'addressId' + '}', encodeURIComponent(String(addressId)));

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
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known addresses, ordered from newest to oldest 
     * List
     * @param walletId 
     * @param state An optional filter on the address state.
     */
    public async listAddresses(walletId: string, state?: 'used' | 'unused', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("AddressesApi", "listAddresses", "walletId");
        }



        // Path Params
        const localVarPath = '/wallets/{walletId}/addresses'
            .replace('{' + 'walletId' + '}', encodeURIComponent(String(walletId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (state !== undefined) {
            requestContext.setQueryParam("state", ObjectSerializer.serialize(state, "'used' | 'unused'", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Construct any address by specyfying credential for payment or delegation.  In Cardano, Addresses are made of three parts:  ``` *---------*---------*-----------* | NETWORK | PAYMENT | DELEGATION | *---------*---------*-----------* ```  The `NETWORK` part allows for distinguishing addresses between different networks like the mainnet or the testnet. It is implicitly handled by the server without you having to worry about it. The `PAYMENT` and `DELEGATION` parts however can be constructed similarly, using either:  - A public key - A script  The script itself is either constructed out of a public key, one of two timelocks, or one of the three following primitives:  - all - any - some  The timelock can determine validity as respect to the slot. `active_from slot` means the script is valid from the specified slot and onward. `active_until slot` means the script is valid until (not included) the specified slot.  Each of which contains one or more script(s) that can be either keys or primitives, and so on. Schematically:  ```                                    ┏─────────┓ SCRIPT = ──┬───────────────────────┤ pub key ├─────────────────────┬──            │                       ┗─────────┛                     │            │                       ┏──────────────────┓            │            ├───────────────────────┤ ACTIVE_FROM slot ├──── ───────┤            │                       ┗──────────────────┛            │            │                       ┏───────────────────┓           │            ├───────────────────────┤ ACTIVE_UNTIL slot ├───────────┤            │                       ┗───────────────────┛           │            │                                                       │            │  ╭─────╮   ╭────────╮                                 │            ├──┤ ALL ├───┤ SCRIPT ├─┬───────────────────────────────┤            │  ╰─────╯ ^ ╰────────╯ │                               │            │          │   ╭───╮    │                               │            │          └───┤ , ├────┘                               │            │              ╰───╯                                    │            │  ╭─────╮   ╭────────╮                                 │            ├──┤ ANY ├───┤ SCRIPT ├─┬───────────────────────────────┤            │  ╰─────╯ ^ ╰────────╯ │                               │            │          │   ╭───╮    │                               │            │          └───┤ , ├────┘                               │            │              ╰───╯                                    │            │  ╭──────╮ ╭──────────╮ ┏───┓ ╭──────╮   ╭────────╮    │            └──┤ SOME ├─┤ AT_LEAST ├─┤ n ├─┤ FROM ├───┤ SCRIPT ├─┬──┘               ╰──────╯ ╰──────────╯ ┗───┛ ╰──────╯ ^ ╰────────╯ │                                                    │   ╭───╮    │                                                    └───┤ , ├────┘                                                        ╰───╯ ``` 
     * Construct Address
     * @param postAnyAddressRequest 
     */
    public async postAnyAddress(postAnyAddressRequest?: PostAnyAddressRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/addresses';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(postAnyAddressRequest, "PostAnyAddressRequest", ""),
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

export class AddressesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to inspectAddress
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async inspectAddress(response: ResponseContext): Promise<InspectAddress200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequest", ""
            ) as BadRequest;
            throw new ApiException<BadRequest>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InspectAddress200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InspectAddress200Response", ""
            ) as InspectAddress200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InspectAddress200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InspectAddress200Response", ""
            ) as InspectAddress200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAddresses
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listAddresses(response: ResponseContext): Promise<Array<ListAddresses200ResponseInner> > {
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
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ListAddresses200ResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ListAddresses200ResponseInner>", ""
            ) as Array<ListAddresses200ResponseInner>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ListAddresses200ResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ListAddresses200ResponseInner>", ""
            ) as Array<ListAddresses200ResponseInner>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postAnyAddress
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postAnyAddress(response: ResponseContext): Promise<PostAnyAddress202Response > {
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
        if (isCodeInRange("415", response.httpStatusCode)) {
            const body: SignMetadata415Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SignMetadata415Response", ""
            ) as SignMetadata415Response;
            throw new ApiException<SignMetadata415Response>(response.httpStatusCode, "Unsupported Media Type", body, response.headers);
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: PostAnyAddress202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostAnyAddress202Response", ""
            ) as PostAnyAddress202Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PostAnyAddress202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostAnyAddress202Response", ""
            ) as PostAnyAddress202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
