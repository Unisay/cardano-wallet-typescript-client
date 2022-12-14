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

export class ProvidingMnemonic {
    /**
    * An optional passphrase used to encrypt the mnemonic sentence.
    */
    'mnemonicSecondFactor'?: Array<string>;
    /**
    * The mnemonic list of words to restore the wallet
    */
    'mnemonicSentence': Array<string>;
    /**
    * The new master passphrase to lock and protect the wallet for sensitive operation (e.g. sending funds)
    */
    'newPassphrase': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "mnemonicSecondFactor",
            "baseName": "mnemonic_second_factor",
            "type": "Array<string>",
            "format": "bip-0039-mnemonic-word{english}"
        },
        {
            "name": "mnemonicSentence",
            "baseName": "mnemonic_sentence",
            "type": "Array<string>",
            "format": "bip-0039-mnemonic-word{english}"
        },
        {
            "name": "newPassphrase",
            "baseName": "new_passphrase",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProvidingMnemonic.attributeTypeMap;
    }

    public constructor() {
    }
}

