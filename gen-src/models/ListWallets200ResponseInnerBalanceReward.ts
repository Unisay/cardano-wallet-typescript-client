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
* The Ada balance of the reward account for this wallet.
*/
export class ListWallets200ResponseInnerBalanceReward {
    'quantity': number;
    'unit': ListWallets200ResponseInnerBalanceRewardUnitEnum;

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
            "type": "ListWallets200ResponseInnerBalanceRewardUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListWallets200ResponseInnerBalanceReward.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ListWallets200ResponseInnerBalanceRewardUnitEnum = "lovelace" ;

