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

import { MinWithdrawalWrong } from './MinWithdrawalWrong';
import { StartTimeLaterThanEndTime } from './StartTimeLaterThanEndTime';
import { HttpFile } from '../http/http';

export class ListTransactions400Response {
    /**
    * May occur when a provided time-range is unsound.
    */
    'message': string;
    'code': ListTransactions400ResponseCodeEnum;

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
            "type": "ListTransactions400ResponseCodeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListTransactions400Response.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ListTransactions400ResponseCodeEnum = "start_time_later_than_end_time" ;

