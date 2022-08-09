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

import { ConstructTransactionRequestMintBurnInnerPolicyScriptTemplate } from './ConstructTransactionRequestMintBurnInnerPolicyScriptTemplate';
import { HttpFile } from '../http/http';

export class PendingSharedWalletCollectingAccountPublicKeysForEachCoSignerPaymentScriptTemplate {
    /**
    * Map of cosigners and their account public keys. Use key as in &cosigner, eg. \"cosigner#\"
    */
    'cosigners': { [key: string]: string; };
    'template': ConstructTransactionRequestMintBurnInnerPolicyScriptTemplate;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cosigners",
            "baseName": "cosigners",
            "type": "{ [key: string]: string; }",
            "format": "hex"
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "ConstructTransactionRequestMintBurnInnerPolicyScriptTemplate",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PendingSharedWalletCollectingAccountPublicKeysForEachCoSignerPaymentScriptTemplate.attributeTypeMap;
    }

    public constructor() {
    }
}
