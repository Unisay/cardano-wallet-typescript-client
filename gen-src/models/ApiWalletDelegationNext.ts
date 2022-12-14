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

import { ListWallets200ResponseInnerDelegationNextInnerChangesAt } from './ListWallets200ResponseInnerDelegationNextInnerChangesAt';
import { HttpFile } from '../http/http';

/**
* Next delegation status becomes active at the start of the second epoch after the corresponding delegation certificate was discovered. The exact moment is specified by changes_at
*/
export class ApiWalletDelegationNext {
    'status': ApiWalletDelegationNextStatusEnum;
    /**
    * A unique Stake-Pool identifier (present only if status = `delegating`)
    */
    'target'?: string;
    'changesAt': ListWallets200ResponseInnerDelegationNextInnerChangesAt;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "ApiWalletDelegationNextStatusEnum",
            "format": ""
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "string",
            "format": "hex|bech32"
        },
        {
            "name": "changesAt",
            "baseName": "changes_at",
            "type": "ListWallets200ResponseInnerDelegationNextInnerChangesAt",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiWalletDelegationNext.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApiWalletDelegationNextStatusEnum = "not_delegating" | "delegating" ;

