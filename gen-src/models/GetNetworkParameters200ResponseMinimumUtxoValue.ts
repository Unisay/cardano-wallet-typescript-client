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
* The absolute minimum quantity of ada required for a new transaction output created with the wallet.  Warning: This field may be deprecated or removed in future versions of the wallet.  In general, the ledger rules require that every transaction output has a minimum quantity of ada. This minimum quantity is determined by an era-specific function whose value increases:    - as the number of different assets increases;   - as the quantity of any individual asset increases;   - as the length of the target address increases; and   - if a datum hash is added.  Therefore, the value reported by this field should only be viewed as an absolute minimum, and only applies to outputs that send ada (and no other assets) to addresses of the minimum possible length. (At the time of writing, this corresponds to a 29-byte long Shelley-era address.)  In practice, if an output contains other assets, specifies a datum hash, or sends funds to an address that is longer than the absolute minimum length, then the minimum value required by the ledger (and the wallet) will be higher than the value reported by this field.  When using the wallet to construct or balance a transaction:    - if the caller specifies an output without an ada quantity, then     the wallet will automatically assign a minimal ada quantity to     the output that is guaranteed to be accepted by the ledger;    - if the caller specifes an output with a non-zero ada quantity,     then the wallet will verify that the specified quantity is not     less than the minimum quantity required by the ledger, and if     this verification step fails, return an error that reports the     required minimum.  In the Shelley, Allegra, and Mary eras, the `minimum_utxo_value` field was equivalent to the ledger `minUTxOValue` protocol parameter.  In the Alonzo era, the `minUTxOValue` protocol parameter was replaced by the `coinsPerUTxOWord` protocol parameter. In this era, the minimum ada quantity for an output was determined by multiplying the `coinsPerUTxOWord` parameter by the length (in 8-byte words) of the in-memory representation of that output, which was not dependent on the length of the address. Therefore, in this era, specifying a longer address would not require an increase in the minimum ada quantity.  In the Babbage era, the `coinsPerUTxOWord` protocol parameter was replaced by the `coinsPerUTxOByte` protocol parameter. In this era, the minimum ada quantity for an output is determined by multiplying the `coinsPerUTxOByte` parameter by the length (in bytes) of the serialised representation of the output, which is dependent on the length of the address (among other factors).  Therefore, in this era, specifying a longer address will require an increase in the minimum ada quantity. 
*/
export class GetNetworkParameters200ResponseMinimumUtxoValue {
    'quantity': number;
    'unit': GetNetworkParameters200ResponseMinimumUtxoValueUnitEnum;

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
            "type": "GetNetworkParameters200ResponseMinimumUtxoValueUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetNetworkParameters200ResponseMinimumUtxoValue.attributeTypeMap;
    }

    public constructor() {
    }
}


export type GetNetworkParameters200ResponseMinimumUtxoValueUnitEnum = "lovelace" ;
