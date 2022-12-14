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

import { PostAnyAddressRequestPayment } from './PostAnyAddressRequestPayment';
import { PostAnyAddressRequestStake } from './PostAnyAddressRequestStake';
import { HttpFile } from '../http/http';

export class PostAnyAddressRequest {
    'payment'?: PostAnyAddressRequestPayment;
    'stake'?: PostAnyAddressRequestStake;
    /**
    * Script validation level. Required validation sifts off scripts that would not be accepted by the ledger. Recommended level filters out scripts that do not pass required validation and additionally when:   * 'all' is non-empty   * there are redundant timelocks in a given level   * there are no duplicated verification keys in a given level   * 'at_least' coefficient is positive   * 'all', 'any' are non-empty and `'at_least' has no less elements in the list      than the coefficient after timelocks are filtered out. 
    */
    'validation'?: PostAnyAddressRequestValidationEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "payment",
            "baseName": "payment",
            "type": "PostAnyAddressRequestPayment",
            "format": ""
        },
        {
            "name": "stake",
            "baseName": "stake",
            "type": "PostAnyAddressRequestStake",
            "format": ""
        },
        {
            "name": "validation",
            "baseName": "validation",
            "type": "PostAnyAddressRequestValidationEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PostAnyAddressRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PostAnyAddressRequestValidationEnum = "required" | "recommended" ;

