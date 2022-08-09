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

import { URI } from './URI';
import { HttpFile } from '../http/http';

/**
* In the Mary era of Cardano, UTxO may contain native assets. These assets are represented on-chain by opaque identifiers which are meaningless to end-users. Therefore, user-facing metadata regarding each token must be stored off-chain, in a metadata registry.  Token creators may publish metadata into the registry and client applications can consume these metadata for display to end users. This will work in a similar way to how it is done for stake pool metadata. 
*/
export class NativeAssetsMetadata {
    /**
    * A human-readable name for the asset, intended for display in user interfaces. 
    */
    'name': string;
    /**
    * A human-readable description for the asset. Good for display in user interfaces. 
    */
    'description': string;
    /**
    * An optional human-readable very short name or acronym for the asset, intended for display in user interfaces. If `ticker` is not present, then `name` will be used, but it might be truncated to fit within the available space. 
    */
    'ticker'?: string;
    /**
    * Defines a scaling factor for the asset of 10<sup>-n</sup>. The decimals value _n_ is therefore the number of digits after the decimal point for quantities of this token.  It is up to API clients to use this metadata field to decimalize asset quantities before displaying to users. The wallet backend will always return unscaled token quantities as whole numbers. 
    */
    'decimals'?: number;
    /**
    * A URL to the policy's owner(s) or the entity website in charge of the asset. 
    */
    'url'?: URI;
    /**
    * A base64-encoded `image/png` for displaying the asset. The end image can be expected to be smaller than 64KB. 
    */
    'logo'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "ticker",
            "baseName": "ticker",
            "type": "string",
            "format": ""
        },
        {
            "name": "decimals",
            "baseName": "decimals",
            "type": "number",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "URI",
            "format": "uri"
        },
        {
            "name": "logo",
            "baseName": "logo",
            "type": "string",
            "format": "base64"
        }    ];

    static getAttributeTypeMap() {
        return NativeAssetsMetadata.attributeTypeMap;
    }

    public constructor() {
    }
}
