// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateShelleyWalletMigrationPlan202Response } from '../models/CreateShelleyWalletMigrationPlan202Response';
import { CreateShelleyWalletMigrationPlanRequest } from '../models/CreateShelleyWalletMigrationPlanRequest';
import { ListTransactions200ResponseInner } from '../models/ListTransactions200ResponseInner';
import { MigrateShelleyWallet403Response } from '../models/MigrateShelleyWallet403Response';
import { MigrateShelleyWalletRequest } from '../models/MigrateShelleyWalletRequest';
import { NoSuchWallet } from '../models/NoSuchWallet';
import { NotAcceptable } from '../models/NotAcceptable';
import { NothingToMigrate } from '../models/NothingToMigrate';
import { UnsupportedMediaType } from '../models/UnsupportedMediaType';

/**
 * no description
 */
export class MigrationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Generate a plan for migrating the UTxO balance of this wallet to another wallet, without executing the plan.  This operation generates a plan that transfers as much of the wallet's balance as possible, by creating as many selections as may be necessary to migrate the entire balance.  Each selection created is the basis for a transaction.  In order to minimize the total transaction fee required, UTxO entries are coalesced together to the greatest extent possible in the resulting selections. No attempt is made to preserve the wallet's UTxO distribution.  The plan is generated on a best-effort basis. If there is insufficient ada available to pay for the entire UTxO set to be migrated, then only a subset of the wallet's UTxO set will be included in the resultant plan. 
     * Create a migration plan
     * @param walletId 
     * @param createShelleyWalletMigrationPlanRequest 
     */
    public async createShelleyWalletMigrationPlan(walletId: string, createShelleyWalletMigrationPlanRequest: CreateShelleyWalletMigrationPlanRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("MigrationsApi", "createShelleyWalletMigrationPlan", "walletId");
        }


        // verify required parameter 'createShelleyWalletMigrationPlanRequest' is not null or undefined
        if (createShelleyWalletMigrationPlanRequest === null || createShelleyWalletMigrationPlanRequest === undefined) {
            throw new RequiredError("MigrationsApi", "createShelleyWalletMigrationPlan", "createShelleyWalletMigrationPlanRequest");
        }


        // Path Params
        const localVarPath = '/wallets/{walletId}/migrations/plan'
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
            ObjectSerializer.serialize(createShelleyWalletMigrationPlanRequest, "CreateShelleyWalletMigrationPlanRequest", ""),
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
     * Migrate the UTxO balance of this wallet to the given set of addresses.  This operation will attempt to transfer as much of the wallet's balance as possible to the given set of addresses, by creating and submitting as many transactions as may be necessary to migrate the entire balance.  In order to minimize the total transaction fee required, UTxO entries are coalesced together to the greatest extent possible in the resulting transactions. No attempt is made to preserve the wallet's UTxO distribution.  This operation is performed on a best-effort basis. If there is insufficient ada available to pay for the entire UTxO set to be migrated, then only a subset of the wallet's UTxO set will be migrated.  A typical use of this operation would be to move all funds from an old wallet to a new wallet, by providing addresses that belong to the new wallet. 
     * Migrate
     * @param walletId 
     * @param migrateShelleyWalletRequest 
     */
    public async migrateShelleyWallet(walletId: string, migrateShelleyWalletRequest: MigrateShelleyWalletRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("MigrationsApi", "migrateShelleyWallet", "walletId");
        }


        // verify required parameter 'migrateShelleyWalletRequest' is not null or undefined
        if (migrateShelleyWalletRequest === null || migrateShelleyWalletRequest === undefined) {
            throw new RequiredError("MigrationsApi", "migrateShelleyWallet", "migrateShelleyWalletRequest");
        }


        // Path Params
        const localVarPath = '/wallets/{walletId}/migrations'
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
            ObjectSerializer.serialize(migrateShelleyWalletRequest, "MigrateShelleyWalletRequest", ""),
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

export class MigrationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createShelleyWalletMigrationPlan
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createShelleyWalletMigrationPlan(response: ResponseContext): Promise<CreateShelleyWalletMigrationPlan202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: NothingToMigrate = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NothingToMigrate", ""
            ) as NothingToMigrate;
            throw new ApiException<NothingToMigrate>(response.httpStatusCode, "Forbidden", body, response.headers);
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
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: CreateShelleyWalletMigrationPlan202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateShelleyWalletMigrationPlan202Response", ""
            ) as CreateShelleyWalletMigrationPlan202Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateShelleyWalletMigrationPlan202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateShelleyWalletMigrationPlan202Response", ""
            ) as CreateShelleyWalletMigrationPlan202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to migrateShelleyWallet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async migrateShelleyWallet(response: ResponseContext): Promise<Array<ListTransactions200ResponseInner> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: MigrateShelleyWallet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MigrateShelleyWallet403Response", ""
            ) as MigrateShelleyWallet403Response;
            throw new ApiException<MigrateShelleyWallet403Response>(response.httpStatusCode, "Forbidden", body, response.headers);
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

}
