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

import { NoRootKey } from './NoRootKey';
import { WrongEncryptionPassphrase } from './WrongEncryptionPassphrase';
import { HttpFile } from '../http/http';

export class SignTransaction403Response {
    /**
    * May occur when the given spending passphrase is wrong.
    */
    'message': string;
    'code': SignTransaction403ResponseCodeEnum;

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
            "type": "SignTransaction403ResponseCodeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SignTransaction403Response.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SignTransaction403ResponseCodeEnum = "wrong_encryption_passphrase" ;

