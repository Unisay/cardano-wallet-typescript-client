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

import { HttpFile } from '../http/http';

export class ValidityIntervalNotInsideScriptTimelock {
    /**
    * Occurs when attempting to create a transaction with a validity interval that is not a subinterval of an associated script's timelock interval.
    */
    'message': string;
    'code': ValidityIntervalNotInsideScriptTimelockCodeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "ValidityIntervalNotInsideScriptTimelockCodeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ValidityIntervalNotInsideScriptTimelock.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ValidityIntervalNotInsideScriptTimelockCodeEnum = "validity_interval_not_inside_script_timelock" ;

