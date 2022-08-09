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

export class ConstructTransaction202ResponseCoinSelectionWithdrawalsInner {
    'stakeAddress': string;
    /**
    * A path for deriving a child key from a parent key.
    */
    'derivationPath': Array<string>;
    'amount': GetUTxOsStatistics200ResponseTotal;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "stakeAddress",
            "baseName": "stake_address",
            "type": "string",
            "format": "bech32"
        },
        {
            "name": "derivationPath",
            "baseName": "derivation_path",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "GetUTxOsStatistics200ResponseTotal",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConstructTransaction202ResponseCoinSelectionWithdrawalsInner.attributeTypeMap;
    }

    public constructor() {
    }
}
