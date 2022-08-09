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

/**
* Total Ada balance (available balance plus pending change and reward balance).
*/
export class ListWallets200ResponseInnerBalanceTotal {
    'quantity': number;
    'unit': ListWallets200ResponseInnerBalanceTotalUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": ""
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "ListWallets200ResponseInnerBalanceTotalUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListWallets200ResponseInnerBalanceTotal.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ListWallets200ResponseInnerBalanceTotalUnitEnum = "lovelace" ;
