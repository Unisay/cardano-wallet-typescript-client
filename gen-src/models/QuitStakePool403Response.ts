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

import { CannotCoverFee } from './CannotCoverFee';
import { NoRootKey } from './NoRootKey';
import { NonNullRewards } from './NonNullRewards';
import { NotDelegatingTo } from './NotDelegatingTo';
import { WrongEncryptionPassphrase } from './WrongEncryptionPassphrase';
import { HttpFile } from '../http/http';

export class QuitStakePool403Response {
    /**
    * May occur when trying to unregister a stake key that still has rewards attached to it.
    */
    'message': string;
    'code': QuitStakePool403ResponseCodeEnum;

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
            "type": "QuitStakePool403ResponseCodeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return QuitStakePool403Response.attributeTypeMap;
    }

    public constructor() {
    }
}


export type QuitStakePool403ResponseCodeEnum = "non_null_rewards" ;

