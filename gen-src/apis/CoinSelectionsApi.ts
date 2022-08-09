// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BadRequest } from '../models/BadRequest';
import { ConstructTransaction202ResponseCoinSelection } from '../models/ConstructTransaction202ResponseCoinSelection';
import { NoSuchWallet } from '../models/NoSuchWallet';
import { NotAcceptable } from '../models/NotAcceptable';
import { SelectCoins403Response } from '../models/SelectCoins403Response';
import { SelectCoinsRequest } from '../models/SelectCoinsRequest';
import { UnsupportedMediaType } from '../models/UnsupportedMediaType';

/**
 * no description
 */
export class CoinSelectionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Select coins to cover the given set of payments.  Uses the <a href=\"https://iohk.io/blog/self-organisation-in-coin-selection/\"> Random-Improve coin selection algorithm</a>. 
     * Random
     * @param walletId 
     * @param selectCoinsRequest 
     */
    public async selectCoins(walletId: string, selectCoinsRequest: SelectCoinsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("CoinSelectionsApi", "selectCoins", "walletId");
        }


        // verify required parameter 'selectCoinsRequest' is not null or undefined
        if (selectCoinsRequest === null || selectCoinsRequest === undefined) {
            throw new RequiredError("CoinSelectionsApi", "selectCoins", "selectCoinsRequest");
        }


        // Path Params
        const localVarPath = '/wallets/{walletId}/coin-selections/random'
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
            ObjectSerializer.serialize(selectCoinsRequest, "SelectCoinsRequest", ""),
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

export class CoinSelectionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to selectCoins
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async selectCoins(response: ResponseContext): Promise<ConstructTransaction202ResponseCoinSelection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequest", ""
            ) as BadRequest;
            throw new ApiException<BadRequest>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: SelectCoins403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SelectCoins403Response", ""
            ) as SelectCoins403Response;
            throw new ApiException<SelectCoins403Response>(response.httpStatusCode, "Forbidden", body, response.headers);
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
            const body: ConstructTransaction202ResponseCoinSelection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConstructTransaction202ResponseCoinSelection", ""
            ) as ConstructTransaction202ResponseCoinSelection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConstructTransaction202ResponseCoinSelection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConstructTransaction202ResponseCoinSelection", ""
            ) as ConstructTransaction202ResponseCoinSelection;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
