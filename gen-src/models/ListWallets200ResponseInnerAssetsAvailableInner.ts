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
* An asset on the Cardano blockchain. An asset is uniquely identified by its `policy_id` and `asset_name` (together, these form the _asset id_).  Two assets with the same `asset_name` and `policy_id` are interchangeable. Yet, different assets with a same `policy_id` but different `asset_name` are treated as separate assets, as are two assets with the same `asset_name` but different `policy_id`. 
*/
export class ListWallets200ResponseInnerAssetsAvailableInner {
    /**
    * A unique identifier of the asset's monetary policy. The policy controls how assets of this kind are created and destroyed.  The contents are the blake2b-224 hash of the monetary policy script, encoded in hexadecimal. 
    */
    'policyId': string;
    /**
    * The asset on-chain type which acts as a sub-identifier within a policy. Although we call it \"asset name\", the value needn't be text, and it could even be empty.  For policies with a single fungible asset item, asset name is typically an empty string.  This value can be up to 32 bytes of arbitrary data (which is 64 hexadecimal digits). 
    */
    'assetName': string;
    /**
    * Number of assets for the given `policy_id` and `asset_name`. 
    */
    'quantity': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "policyId",
            "baseName": "policy_id",
            "type": "string",
            "format": "hex"
        },
        {
            "name": "assetName",
            "baseName": "asset_name",
            "type": "string",
            "format": "hex"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListWallets200ResponseInnerAssetsAvailableInner.attributeTypeMap;
    }

    public constructor() {
    }
}

