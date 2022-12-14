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

import { ListWallets200ResponseInnerAssetsAvailableInner } from './ListWallets200ResponseInnerAssetsAvailableInner';
import { HttpFile } from '../http/http';

/**
* Current non-Ada asset holdings of the wallet.  The amount of assets available to spend may be less than the total unspent assets due to transaction change amounts which are yet to be fully confirmed (pending). 
*/
export class ListWallets200ResponseInnerAssets {
    /**
    * Available UTxO asset balances (funds that can be spent without condition). 
    */
    'available': Array<ListWallets200ResponseInnerAssetsAvailableInner>;
    /**
    * Total asset balances (available balances plus pending change balances). 
    */
    'total': Array<ListWallets200ResponseInnerAssetsAvailableInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "available",
            "baseName": "available",
            "type": "Array<ListWallets200ResponseInnerAssetsAvailableInner>",
            "format": ""
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "Array<ListWallets200ResponseInnerAssetsAvailableInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListWallets200ResponseInnerAssets.attributeTypeMap;
    }

    public constructor() {
    }
}

