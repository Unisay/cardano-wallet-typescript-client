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

export class BadRequest {
    /**
    * May occur when a request is not well-formed; that is, it fails to parse successfully. This could be the case when some required parameters are missing or, when malformed values are provided. 
    */
    'message': string;
    'code': BadRequestCodeEnum;

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
            "type": "BadRequestCodeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BadRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type BadRequestCodeEnum = "bad_request" ;

