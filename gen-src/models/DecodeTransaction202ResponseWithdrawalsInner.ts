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

import { GetUTxOsStatistics200ResponseTotal } from './GetUTxOsStatistics200ResponseTotal';
import { HttpFile } from '../http/http';

export class DecodeTransaction202ResponseWithdrawalsInner {
    'stakeAddress': string;
    'amount': GetUTxOsStatistics200ResponseTotal;
    /**
    * Used when withdrawal or output is ours. 
    */
    'context'?: DecodeTransaction202ResponseWithdrawalsInnerContextEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "stakeAddress",
            "baseName": "stake_address",
            "type": "string",
            "format": "bech32"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "GetUTxOsStatistics200ResponseTotal",
            "format": ""
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "DecodeTransaction202ResponseWithdrawalsInnerContextEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DecodeTransaction202ResponseWithdrawalsInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export type DecodeTransaction202ResponseWithdrawalsInnerContextEnum = "ours" ;

