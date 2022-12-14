/**
 * Cardano Wallet Backend API
 * <p align=\"right\"><img style=\"position: relative; top: -10em; margin-bottom: -12em;\" width=\"20%\" src=\"https://cardanodocs.com/img/cardano.png\"></img></p> 
 *
 * OpenAPI spec version: v2022-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ConstructTransactionRequestDelegationsInner } from './ConstructTransactionRequestDelegationsInner';
import { ConstructTransactionRequestMintBurnInner } from './ConstructTransactionRequestMintBurnInner';
import { ConstructTransactionRequestPayments } from './ConstructTransactionRequestPayments';
import { ConstructTransactionRequestValidityInterval } from './ConstructTransactionRequestValidityInterval';
import { SignMetadataRequestMetadata } from './SignMetadataRequestMetadata';
import { HttpFile } from '../http/http';

/**
* At least one field needs to be chosen
*/
export class ConstructTransactionRequest {
    'payments'?: ConstructTransactionRequestPayments;
    /**
    * When provided, instruments the server to automatically withdraw rewards from the source wallet when they are deemed sufficient (i.e. they contribute to the balance for at least as much as they cost).  As a consequence, the resulting transaction may or may not have a withdrawal object. Summarizing:  withdrawal field | reward balance | result ---              | ---            | --- `null`           | too small      | ✓ no withdrawals generated `null`           | big enough     | ✓ no withdrawals generated `\"self\"`         | too small      | ✓ no withdrawals generated `\"self\"`         | big enough     | ✓ withdrawal generated 
    */
    'withdrawal'?: ConstructTransactionRequestWithdrawalEnum;
    'metadata'?: SignMetadataRequestMetadata;
    /**
    * An entry for each unique asset to be minted and/or burned, containing helpful information.
    */
    'mintBurn'?: Array<ConstructTransactionRequestMintBurnInner>;
    /**
    * <p>status: <strong>stable</strong></p>  A list of staking actions (joining, rejoining or leaving from stake pools). Using '0H' stake key index is supported at this moment. This will change with multi-account support. Only one delegation action can be used. 
    */
    'delegations'?: Array<ConstructTransactionRequestDelegationsInner>;
    'validityInterval'?: ConstructTransactionRequestValidityInterval;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "payments",
            "baseName": "payments",
            "type": "ConstructTransactionRequestPayments",
            "format": ""
        },
        {
            "name": "withdrawal",
            "baseName": "withdrawal",
            "type": "ConstructTransactionRequestWithdrawalEnum",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "SignMetadataRequestMetadata",
            "format": ""
        },
        {
            "name": "mintBurn",
            "baseName": "mint_burn",
            "type": "Array<ConstructTransactionRequestMintBurnInner>",
            "format": ""
        },
        {
            "name": "delegations",
            "baseName": "delegations",
            "type": "Array<ConstructTransactionRequestDelegationsInner>",
            "format": ""
        },
        {
            "name": "validityInterval",
            "baseName": "validity_interval",
            "type": "ConstructTransactionRequestValidityInterval",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConstructTransactionRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ConstructTransactionRequestWithdrawalEnum = "self" ;

