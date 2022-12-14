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

import { ListWallets200ResponseInnerStateProgress } from './ListWallets200ResponseInnerStateProgress';
import { HttpFile } from '../http/http';

/**
* Estimated synchronization progress of the node with the underlying network. Note that this may change quite arbitrarily as the node may switch to shorter or longer chain forks. 
*/
export class GetNetworkInformation200ResponseSyncProgress {
    'status': GetNetworkInformation200ResponseSyncProgressStatusEnum;
    'progress'?: ListWallets200ResponseInnerStateProgress;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "GetNetworkInformation200ResponseSyncProgressStatusEnum",
            "format": ""
        },
        {
            "name": "progress",
            "baseName": "progress",
            "type": "ListWallets200ResponseInnerStateProgress",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetNetworkInformation200ResponseSyncProgress.attributeTypeMap;
    }

    public constructor() {
    }
}


export type GetNetworkInformation200ResponseSyncProgressStatusEnum = "ready" | "syncing" | "not_responding" ;

