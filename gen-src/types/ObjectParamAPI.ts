import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ActiveFromSlot } from '../models/ActiveFromSlot';
import { ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected } from '../models/ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected';
import { ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected1 } from '../models/ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected1';
import { ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected1Delegation } from '../models/ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected1Delegation';
import { ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected1DelegationActive } from '../models/ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected1DelegationActive';
import { ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected1DelegationNext } from '../models/ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected1DelegationNext';
import { ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected1State } from '../models/ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected1State';
import { ActiveUntilSlot } from '../models/ActiveUntilSlot';
import { All } from '../models/All';
import { All1 } from '../models/All1';
import { AlreadyWithdrawing } from '../models/AlreadyWithdrawing';
import { Any } from '../models/Any';
import { Any1 } from '../models/Any1';
import { AnyAddress } from '../models/AnyAddress';
import { AnyScript } from '../models/AnyScript';
import { AnyScriptOneOf } from '../models/AnyScriptOneOf';
import { ApiAccountPostData } from '../models/ApiAccountPostData';
import { ApiActiveSharedWallet } from '../models/ApiActiveSharedWallet';
import { ApiAddress } from '../models/ApiAddress';
import { ApiAddressData } from '../models/ApiAddressData';
import { ApiAddressInspect } from '../models/ApiAddressInspect';
import { ApiAsset } from '../models/ApiAsset';
import { ApiAssetMintBurn } from '../models/ApiAssetMintBurn';
import { ApiBalanceTransactionPostData } from '../models/ApiBalanceTransactionPostData';
import { ApiBurnData } from '../models/ApiBurnData';
import { ApiByronSelectCoinsData } from '../models/ApiByronSelectCoinsData';
import { ApiByronWallet } from '../models/ApiByronWallet';
import { ApiByronWalletIcarusPostData } from '../models/ApiByronWalletIcarusPostData';
import { ApiByronWalletLedgerPostData } from '../models/ApiByronWalletLedgerPostData';
import { ApiByronWalletMigrationPostData } from '../models/ApiByronWalletMigrationPostData';
import { ApiByronWalletPutPassphraseData } from '../models/ApiByronWalletPutPassphraseData';
import { ApiByronWalletRandomPostData } from '../models/ApiByronWalletRandomPostData';
import { ApiByronWalletRandomXPrvPostData } from '../models/ApiByronWalletRandomXPrvPostData';
import { ApiByronWalletTrezorPostData } from '../models/ApiByronWalletTrezorPostData';
import { ApiCertificate } from '../models/ApiCertificate';
import { ApiCoinSelection } from '../models/ApiCoinSelection';
import { ApiConstructTransaction } from '../models/ApiConstructTransaction';
import { ApiConstructTransactionData } from '../models/ApiConstructTransactionData';
import { ApiCredential } from '../models/ApiCredential';
import { ApiDecodedTransaction } from '../models/ApiDecodedTransaction';
import { ApiDeregisterPool } from '../models/ApiDeregisterPool';
import { ApiEra } from '../models/ApiEra';
import { ApiEraInfo } from '../models/ApiEraInfo';
import { ApiFee } from '../models/ApiFee';
import { ApiForeignStakeKey } from '../models/ApiForeignStakeKey';
import { ApiGCStatus } from '../models/ApiGCStatus';
import { ApiGetSettings } from '../models/ApiGetSettings';
import { ApiHealthCheck } from '../models/ApiHealthCheck';
import { ApiMaintenanceAction } from '../models/ApiMaintenanceAction';
import { ApiMaintenanceActionPostData } from '../models/ApiMaintenanceActionPostData';
import { ApiMintBurnData } from '../models/ApiMintBurnData';
import { ApiMintBurnOperation } from '../models/ApiMintBurnOperation';
import { ApiMintData } from '../models/ApiMintData';
import { ApiNetworkClock } from '../models/ApiNetworkClock';
import { ApiNetworkInformation } from '../models/ApiNetworkInformation';
import { ApiNetworkParameters } from '../models/ApiNetworkParameters';
import { ApiNetworkTip } from '../models/ApiNetworkTip';
import { ApiNullStakeKey } from '../models/ApiNullStakeKey';
import { ApiOurStakeKey } from '../models/ApiOurStakeKey';
import { ApiPaymentDestination } from '../models/ApiPaymentDestination';
import { ApiPendingSharedWallet } from '../models/ApiPendingSharedWallet';
import { ApiPolicyId } from '../models/ApiPolicyId';
import { ApiPostAccountKeyData } from '../models/ApiPostAccountKeyData';
import { ApiPostAccountKeyDataWithPurpose } from '../models/ApiPostAccountKeyDataWithPurpose';
import { ApiPostPolicyIdData } from '../models/ApiPostPolicyIdData';
import { ApiPostPolicyKeyData } from '../models/ApiPostPolicyKeyData';
import { ApiPostRandomAddressData } from '../models/ApiPostRandomAddressData';
import { ApiPostRedemptionData } from '../models/ApiPostRedemptionData';
import { ApiPostRedemptionFeeData } from '../models/ApiPostRedemptionFeeData';
import { ApiPostTransactionData } from '../models/ApiPostTransactionData';
import { ApiPostTransactionDataByron } from '../models/ApiPostTransactionDataByron';
import { ApiPostTransactionFeeData } from '../models/ApiPostTransactionFeeData';
import { ApiPostTransactionFeeDataByron } from '../models/ApiPostTransactionFeeDataByron';
import { ApiPutAddressesData } from '../models/ApiPutAddressesData';
import { ApiRedeemer } from '../models/ApiRedeemer';
import { ApiRedeemerMinting } from '../models/ApiRedeemerMinting';
import { ApiRedeemerRewarding } from '../models/ApiRedeemerRewarding';
import { ApiRedeemerSpending } from '../models/ApiRedeemerSpending';
import { ApiRegisterPool } from '../models/ApiRegisterPool';
import { ApiScript } from '../models/ApiScript';
import { ApiSelectCoinsAction } from '../models/ApiSelectCoinsAction';
import { ApiSelectCoinsData } from '../models/ApiSelectCoinsData';
import { ApiSelectCoinsPayments } from '../models/ApiSelectCoinsPayments';
import { ApiSelectCoinsRedemption } from '../models/ApiSelectCoinsRedemption';
import { ApiSerialisedTransaction } from '../models/ApiSerialisedTransaction';
import { ApiSerialisedTransactionEncoded } from '../models/ApiSerialisedTransactionEncoded';
import { ApiSettingsPutData } from '../models/ApiSettingsPutData';
import { ApiSharedWallet } from '../models/ApiSharedWallet';
import { ApiSharedWalletPostData } from '../models/ApiSharedWalletPostData';
import { ApiSharedWalletPostDataFromAccountPubX } from '../models/ApiSharedWalletPostDataFromAccountPubX';
import { ApiSharedWalletPostDataFromMnemonics } from '../models/ApiSharedWalletPostDataFromMnemonics';
import { ApiShelleyWalletMigrationPostData } from '../models/ApiShelleyWalletMigrationPostData';
import { ApiSignTransactionPostData } from '../models/ApiSignTransactionPostData';
import { ApiSignedTransaction } from '../models/ApiSignedTransaction';
import { ApiSignedTransactionEncoded } from '../models/ApiSignedTransactionEncoded';
import { ApiStakeKeys } from '../models/ApiStakeKeys';
import { ApiStakePool } from '../models/ApiStakePool';
import { ApiStakePoolMetadata } from '../models/ApiStakePoolMetadata';
import { ApiTokenAmountFingerprint } from '../models/ApiTokenAmountFingerprint';
import { ApiTokens } from '../models/ApiTokens';
import { ApiTransaction } from '../models/ApiTransaction';
import { ApiTxId } from '../models/ApiTxId';
import { ApiValidityInterval } from '../models/ApiValidityInterval';
import { ApiValidityIntervalExplicit } from '../models/ApiValidityIntervalExplicit';
import { ApiWallet } from '../models/ApiWallet';
import { ApiWalletDelegation } from '../models/ApiWalletDelegation';
import { ApiWalletDelegationNext } from '../models/ApiWalletDelegationNext';
import { ApiWalletMigrationBalance } from '../models/ApiWalletMigrationBalance';
import { ApiWalletMigrationPlan } from '../models/ApiWalletMigrationPlan';
import { ApiWalletMigrationPlanPostData } from '../models/ApiWalletMigrationPlanPostData';
import { ApiWalletOrAccountPostData } from '../models/ApiWalletOrAccountPostData';
import { ApiWalletPassphrase } from '../models/ApiWalletPassphrase';
import { ApiWalletPostData } from '../models/ApiWalletPostData';
import { ApiWalletPutData } from '../models/ApiWalletPutData';
import { ApiWalletPutPassphraseData } from '../models/ApiWalletPutPassphraseData';
import { ApiWalletPutPassphraseMnemonicData } from '../models/ApiWalletPutPassphraseMnemonicData';
import { ApiWalletPutPassphraseOldPassphraseData } from '../models/ApiWalletPutPassphraseOldPassphraseData';
import { ApiWalletSignData } from '../models/ApiWalletSignData';
import { ApiWalletUTxOsStatistics } from '../models/ApiWalletUTxOsStatistics';
import { ApiWalletUtxoSnapshot } from '../models/ApiWalletUtxoSnapshot';
import { ApiWalletUtxoSnapshotEntry } from '../models/ApiWalletUtxoSnapshotEntry';
import { AssetNameTooLong } from '../models/AssetNameTooLong';
import { AssetNotPresent } from '../models/AssetNotPresent';
import { BadRequest } from '../models/BadRequest';
import { BalanceTransaction202Response } from '../models/BalanceTransaction202Response';
import { BalanceTransaction400Response } from '../models/BalanceTransaction400Response';
import { BalanceTransaction403Response } from '../models/BalanceTransaction403Response';
import { BalanceTransactionRequest } from '../models/BalanceTransactionRequest';
import { BalanceTransactionRequestInputsInner } from '../models/BalanceTransactionRequestInputsInner';
import { BalanceTransactionRequestRedeemersInner } from '../models/BalanceTransactionRequestRedeemersInner';
import { BalanceTxByronNotSupported } from '../models/BalanceTxByronNotSupported';
import { BalanceTxConflictingNetworks } from '../models/BalanceTxConflictingNetworks';
import { BalanceTxExistingCollateral } from '../models/BalanceTxExistingCollateral';
import { BalanceTxExistingCollateralReturnOutputs } from '../models/BalanceTxExistingCollateralReturnOutputs';
import { BalanceTxExistingKeyWitnesses } from '../models/BalanceTxExistingKeyWitnesses';
import { BalanceTxExistingTotalCollateral } from '../models/BalanceTxExistingTotalCollateral';
import { BalanceTxInternalError } from '../models/BalanceTxInternalError';
import { BalanceTxMaxSizeLimitExceeded } from '../models/BalanceTxMaxSizeLimitExceeded';
import { Burn } from '../models/Burn';
import { BurnBurn } from '../models/BurnBurn';
import { ByteString } from '../models/ByteString';
import { CannotCoverFee } from '../models/CannotCoverFee';
import { ConstructTransaction202Response } from '../models/ConstructTransaction202Response';
import { ConstructTransaction202ResponseCoinSelection } from '../models/ConstructTransaction202ResponseCoinSelection';
import { ConstructTransaction202ResponseCoinSelectionCertificatesInner } from '../models/ConstructTransaction202ResponseCoinSelectionCertificatesInner';
import { ConstructTransaction202ResponseCoinSelectionChangeInner } from '../models/ConstructTransaction202ResponseCoinSelectionChangeInner';
import { ConstructTransaction202ResponseCoinSelectionCollateralInner } from '../models/ConstructTransaction202ResponseCoinSelectionCollateralInner';
import { ConstructTransaction202ResponseCoinSelectionInputsInner } from '../models/ConstructTransaction202ResponseCoinSelectionInputsInner';
import { ConstructTransaction202ResponseCoinSelectionWithdrawalsInner } from '../models/ConstructTransaction202ResponseCoinSelectionWithdrawalsInner';
import { ConstructTransaction403Response } from '../models/ConstructTransaction403Response';
import { ConstructTransactionRequest } from '../models/ConstructTransactionRequest';
import { ConstructTransactionRequestDelegationsInner } from '../models/ConstructTransactionRequestDelegationsInner';
import { ConstructTransactionRequestDelegationsInnerOneOf } from '../models/ConstructTransactionRequestDelegationsInnerOneOf';
import { ConstructTransactionRequestDelegationsInnerOneOf1 } from '../models/ConstructTransactionRequestDelegationsInnerOneOf1';
import { ConstructTransactionRequestDelegationsInnerOneOf1Quit } from '../models/ConstructTransactionRequestDelegationsInnerOneOf1Quit';
import { ConstructTransactionRequestDelegationsInnerOneOfJoin } from '../models/ConstructTransactionRequestDelegationsInnerOneOfJoin';
import { ConstructTransactionRequestMintBurnInner } from '../models/ConstructTransactionRequestMintBurnInner';
import { ConstructTransactionRequestMintBurnInnerOperation } from '../models/ConstructTransactionRequestMintBurnInnerOperation';
import { ConstructTransactionRequestMintBurnInnerPolicyScriptTemplate } from '../models/ConstructTransactionRequestMintBurnInnerPolicyScriptTemplate';
import { ConstructTransactionRequestPayments } from '../models/ConstructTransactionRequestPayments';
import { ConstructTransactionRequestValidityInterval } from '../models/ConstructTransactionRequestValidityInterval';
import { ConstructTransactionRequestValidityIntervalInvalidBefore } from '../models/ConstructTransactionRequestValidityIntervalInvalidBefore';
import { CreateAddressRequest } from '../models/CreateAddressRequest';
import { CreateSharedWalletFromAccountPublicKey } from '../models/CreateSharedWalletFromAccountPublicKey';
import { CreateSharedWalletFromAccountPublicKey1 } from '../models/CreateSharedWalletFromAccountPublicKey1';
import { CreateSharedWalletFromMnemonics } from '../models/CreateSharedWalletFromMnemonics';
import { CreateSharedWalletFromMnemonics1 } from '../models/CreateSharedWalletFromMnemonics1';
import { CreateSharedWalletFromMnemonics1PaymentScriptTemplate } from '../models/CreateSharedWalletFromMnemonics1PaymentScriptTemplate';
import { CreateSharedWalletFromMnemonicsPaymentScriptTemplate } from '../models/CreateSharedWalletFromMnemonicsPaymentScriptTemplate';
import { CreateSharedWalletFromMnemonicsPaymentScriptTemplateCosignersValue } from '../models/CreateSharedWalletFromMnemonicsPaymentScriptTemplateCosignersValue';
import { CreateShelleyWalletMigrationPlan202Response } from '../models/CreateShelleyWalletMigrationPlan202Response';
import { CreateShelleyWalletMigrationPlan202ResponseBalanceLeftover } from '../models/CreateShelleyWalletMigrationPlan202ResponseBalanceLeftover';
import { CreateShelleyWalletMigrationPlan202ResponseBalanceSelected } from '../models/CreateShelleyWalletMigrationPlan202ResponseBalanceSelected';
import { CreateShelleyWalletMigrationPlan202ResponseTotalFee } from '../models/CreateShelleyWalletMigrationPlan202ResponseTotalFee';
import { CreateShelleyWalletMigrationPlanRequest } from '../models/CreateShelleyWalletMigrationPlanRequest';
import { CreatedMultiaccountTransaction } from '../models/CreatedMultiaccountTransaction';
import { CreatedMultidelegationTransaction } from '../models/CreatedMultidelegationTransaction';
import { CreatedWrongPolicyScriptTemplate } from '../models/CreatedWrongPolicyScriptTemplate';
import { CredentialValue } from '../models/CredentialValue';
import { DecodeTransaction202Response } from '../models/DecodeTransaction202Response';
import { DecodeTransaction202ResponseCertificatesInner } from '../models/DecodeTransaction202ResponseCertificatesInner';
import { DecodeTransaction202ResponseInputsInner } from '../models/DecodeTransaction202ResponseInputsInner';
import { DecodeTransaction202ResponseMint } from '../models/DecodeTransaction202ResponseMint';
import { DecodeTransaction202ResponseMintTokensInner } from '../models/DecodeTransaction202ResponseMintTokensInner';
import { DecodeTransaction202ResponseMintTokensInnerAssetsInner } from '../models/DecodeTransaction202ResponseMintTokensInnerAssetsInner';
import { DecodeTransaction202ResponseMintTokensInnerPolicyScript } from '../models/DecodeTransaction202ResponseMintTokensInnerPolicyScript';
import { DecodeTransaction202ResponseMintTokensInnerPolicyScriptOneOf } from '../models/DecodeTransaction202ResponseMintTokensInnerPolicyScriptOneOf';
import { DecodeTransaction202ResponseMintTokensInnerPolicyScriptOneOf1 } from '../models/DecodeTransaction202ResponseMintTokensInnerPolicyScriptOneOf1';
import { DecodeTransaction202ResponseMintTokensInnerPolicyScriptOneOfScript } from '../models/DecodeTransaction202ResponseMintTokensInnerPolicyScriptOneOfScript';
import { DecodeTransaction202ResponseOutputsInner } from '../models/DecodeTransaction202ResponseOutputsInner';
import { DecodeTransaction202ResponseValidityInterval } from '../models/DecodeTransaction202ResponseValidityInterval';
import { DecodeTransaction202ResponseValidityIntervalInvalidBefore } from '../models/DecodeTransaction202ResponseValidityIntervalInvalidBefore';
import { DecodeTransaction202ResponseWithdrawalsInner } from '../models/DecodeTransaction202ResponseWithdrawalsInner';
import { DecodeTransactionRequest } from '../models/DecodeTransactionRequest';
import { Delegation } from '../models/Delegation';
import { DelegationCertificateBelongingToTheWallet } from '../models/DelegationCertificateBelongingToTheWallet';
import { DelegationCertificateNotBelongingToTheWallet } from '../models/DelegationCertificateNotBelongingToTheWallet';
import { DelegationDelegationAction } from '../models/DelegationDelegationAction';
import { GenesisOrMIRCertificate } from '../models/GenesisOrMIRCertificate';
import { GetCurrentSmashHealth200Response } from '../models/GetCurrentSmashHealth200Response';
import { GetMaintenanceActions200Response } from '../models/GetMaintenanceActions200Response';
import { GetMaintenanceActions200ResponseGcStakePools } from '../models/GetMaintenanceActions200ResponseGcStakePools';
import { GetNetworkClock200Response } from '../models/GetNetworkClock200Response';
import { GetNetworkClock200ResponseOffset } from '../models/GetNetworkClock200ResponseOffset';
import { GetNetworkInformation200Response } from '../models/GetNetworkInformation200Response';
import { GetNetworkInformation200ResponseNetworkInfo } from '../models/GetNetworkInformation200ResponseNetworkInfo';
import { GetNetworkInformation200ResponseNetworkTip } from '../models/GetNetworkInformation200ResponseNetworkTip';
import { GetNetworkInformation200ResponseNodeTip } from '../models/GetNetworkInformation200ResponseNodeTip';
import { GetNetworkInformation200ResponseSyncProgress } from '../models/GetNetworkInformation200ResponseSyncProgress';
import { GetNetworkParameters200Response } from '../models/GetNetworkParameters200Response';
import { GetNetworkParameters200ResponseActiveSlotCoefficient } from '../models/GetNetworkParameters200ResponseActiveSlotCoefficient';
import { GetNetworkParameters200ResponseEras } from '../models/GetNetworkParameters200ResponseEras';
import { GetNetworkParameters200ResponseErasByron } from '../models/GetNetworkParameters200ResponseErasByron';
import { GetNetworkParameters200ResponseExecutionUnitPrices } from '../models/GetNetworkParameters200ResponseExecutionUnitPrices';
import { GetNetworkParameters200ResponseExecutionUnitPricesStepPrice } from '../models/GetNetworkParameters200ResponseExecutionUnitPricesStepPrice';
import { GetNetworkParameters200ResponseMaximumTokenBundleSize } from '../models/GetNetworkParameters200ResponseMaximumTokenBundleSize';
import { GetNetworkParameters200ResponseMinimumUtxoValue } from '../models/GetNetworkParameters200ResponseMinimumUtxoValue';
import { GetNetworkParameters200ResponseSlotLength } from '../models/GetNetworkParameters200ResponseSlotLength';
import { GetPolicyKey403Response } from '../models/GetPolicyKey403Response';
import { GetSettings200Response } from '../models/GetSettings200Response';
import { GetTransaction404Response } from '../models/GetTransaction404Response';
import { GetUTxOsStatistics200Response } from '../models/GetUTxOsStatistics200Response';
import { GetUTxOsStatistics200ResponseTotal } from '../models/GetUTxOsStatistics200ResponseTotal';
import { GetWalletUtxoSnapshot200Response } from '../models/GetWalletUtxoSnapshot200Response';
import { GetWalletUtxoSnapshot200ResponseEntriesInner } from '../models/GetWalletUtxoSnapshot200ResponseEntriesInner';
import { GetWalletUtxoSnapshot200ResponseEntriesInnerAda } from '../models/GetWalletUtxoSnapshot200ResponseEntriesInnerAda';
import { GetWalletUtxoSnapshot200ResponseEntriesInnerAdaMinimum } from '../models/GetWalletUtxoSnapshot200ResponseEntriesInnerAdaMinimum';
import { Icarus } from '../models/Icarus';
import { IcarusTrezorLedgerFromXpub } from '../models/IcarusTrezorLedgerFromXpub';
import { ImportAddressesRequest } from '../models/ImportAddressesRequest';
import { InputsDepleted } from '../models/InputsDepleted';
import { InspectAddress200Response } from '../models/InspectAddress200Response';
import { InspectAddress200ResponsePointer } from '../models/InspectAddress200ResponsePointer';
import { InsufficientCollateral } from '../models/InsufficientCollateral';
import { Int } from '../models/Int';
import { InvalidCoinSelection } from '../models/InvalidCoinSelection';
import { InvalidValidityBounds } from '../models/InvalidValidityBounds';
import { InvalidWalletType } from '../models/InvalidWalletType';
import { JoinStakePool403Response } from '../models/JoinStakePool403Response';
import { JoinStakePool404Response } from '../models/JoinStakePool404Response';
import { Ledger } from '../models/Ledger';
import { List } from '../models/List';
import { ListAddresses200ResponseInner } from '../models/ListAddresses200ResponseInner';
import { ListAssets200ResponseInner } from '../models/ListAssets200ResponseInner';
import { ListByronWallets200ResponseInner } from '../models/ListByronWallets200ResponseInner';
import { ListByronWallets200ResponseInnerBalance } from '../models/ListByronWallets200ResponseInnerBalance';
import { ListByronWallets200ResponseInnerBalanceAvailable } from '../models/ListByronWallets200ResponseInnerBalanceAvailable';
import { ListByronWallets200ResponseInnerBalanceTotal } from '../models/ListByronWallets200ResponseInnerBalanceTotal';
import { ListSharedWallets200ResponseInner } from '../models/ListSharedWallets200ResponseInner';
import { ListStakeKeys200Response } from '../models/ListStakeKeys200Response';
import { ListStakeKeys200ResponseForeignInner } from '../models/ListStakeKeys200ResponseForeignInner';
import { ListStakeKeys200ResponseNone } from '../models/ListStakeKeys200ResponseNone';
import { ListStakeKeys200ResponseOursInner } from '../models/ListStakeKeys200ResponseOursInner';
import { ListStakePools200ResponseInner } from '../models/ListStakePools200ResponseInner';
import { ListStakePools200ResponseInnerMetadata } from '../models/ListStakePools200ResponseInnerMetadata';
import { ListStakePools200ResponseInnerMetrics } from '../models/ListStakePools200ResponseInnerMetrics';
import { ListStakePools200ResponseInnerMetricsNonMyopicMemberRewards } from '../models/ListStakePools200ResponseInnerMetricsNonMyopicMemberRewards';
import { ListStakePools200ResponseInnerMetricsProducedBlocks } from '../models/ListStakePools200ResponseInnerMetricsProducedBlocks';
import { ListStakePools200ResponseInnerMetricsRelativeStake } from '../models/ListStakePools200ResponseInnerMetricsRelativeStake';
import { ListStakePools200ResponseInnerRetirement } from '../models/ListStakePools200ResponseInnerRetirement';
import { ListTransactions200ResponseInner } from '../models/ListTransactions200ResponseInner';
import { ListTransactions200ResponseInnerAmount } from '../models/ListTransactions200ResponseInnerAmount';
import { ListTransactions200ResponseInnerCollateralInner } from '../models/ListTransactions200ResponseInnerCollateralInner';
import { ListTransactions200ResponseInnerDepth } from '../models/ListTransactions200ResponseInnerDepth';
import { ListTransactions200ResponseInnerExpiresAt } from '../models/ListTransactions200ResponseInnerExpiresAt';
import { ListTransactions200ResponseInnerInputsInner } from '../models/ListTransactions200ResponseInnerInputsInner';
import { ListTransactions200ResponseInnerInsertedAt } from '../models/ListTransactions200ResponseInnerInsertedAt';
import { ListTransactions200ResponseInnerPendingSince } from '../models/ListTransactions200ResponseInnerPendingSince';
import { ListTransactions200ResponseInnerWithdrawalsInner } from '../models/ListTransactions200ResponseInnerWithdrawalsInner';
import { ListTransactions400Response } from '../models/ListTransactions400Response';
import { ListWallets200ResponseInner } from '../models/ListWallets200ResponseInner';
import { ListWallets200ResponseInnerAssets } from '../models/ListWallets200ResponseInnerAssets';
import { ListWallets200ResponseInnerAssetsAvailableInner } from '../models/ListWallets200ResponseInnerAssetsAvailableInner';
import { ListWallets200ResponseInnerBalance } from '../models/ListWallets200ResponseInnerBalance';
import { ListWallets200ResponseInnerBalanceAvailable } from '../models/ListWallets200ResponseInnerBalanceAvailable';
import { ListWallets200ResponseInnerBalanceReward } from '../models/ListWallets200ResponseInnerBalanceReward';
import { ListWallets200ResponseInnerBalanceTotal } from '../models/ListWallets200ResponseInnerBalanceTotal';
import { ListWallets200ResponseInnerDelegation } from '../models/ListWallets200ResponseInnerDelegation';
import { ListWallets200ResponseInnerDelegationActive } from '../models/ListWallets200ResponseInnerDelegationActive';
import { ListWallets200ResponseInnerDelegationNextInner } from '../models/ListWallets200ResponseInnerDelegationNextInner';
import { ListWallets200ResponseInnerDelegationNextInnerChangesAt } from '../models/ListWallets200ResponseInnerDelegationNextInnerChangesAt';
import { ListWallets200ResponseInnerPassphrase } from '../models/ListWallets200ResponseInnerPassphrase';
import { ListWallets200ResponseInnerState } from '../models/ListWallets200ResponseInnerState';
import { ListWallets200ResponseInnerStateProgress } from '../models/ListWallets200ResponseInnerStateProgress';
import { ListWallets200ResponseInnerTip } from '../models/ListWallets200ResponseInnerTip';
import { ListWallets200ResponseInnerTipHeight } from '../models/ListWallets200ResponseInnerTipHeight';
import { MapMap } from '../models/MapMap';
import { MigrateByronWalletRequest } from '../models/MigrateByronWalletRequest';
import { MigrateShelleyWallet403Response } from '../models/MigrateShelleyWallet403Response';
import { MigrateShelleyWalletRequest } from '../models/MigrateShelleyWalletRequest';
import { MinWithdrawalWrong } from '../models/MinWithdrawalWrong';
import { Mint } from '../models/Mint';
import { MintMint } from '../models/MintMint';
import { MintOrBurnAssetQuantityOutOfBounds } from '../models/MintOrBurnAssetQuantityOutOfBounds';
import { Minting } from '../models/Minting';
import { MissingPolicyPublicKey } from '../models/MissingPolicyPublicKey';
import { ModelMap } from '../models/ModelMap';
import { ModelString } from '../models/ModelString';
import { NativeAssetsMetadata } from '../models/NativeAssetsMetadata';
import { NetworkInfo } from '../models/NetworkInfo';
import { NoRootKey } from '../models/NoRootKey';
import { NoSuchPool } from '../models/NoSuchPool';
import { NoSuchTransaction } from '../models/NoSuchTransaction';
import { NoSuchWallet } from '../models/NoSuchWallet';
import { NonNullRewards } from '../models/NonNullRewards';
import { NormalPayment } from '../models/NormalPayment';
import { NormalPayment1 } from '../models/NormalPayment1';
import { NotAcceptable } from '../models/NotAcceptable';
import { NotDelegatingTo } from '../models/NotDelegatingTo';
import { NotEnoughMoney } from '../models/NotEnoughMoney';
import { NothingToMigrate } from '../models/NothingToMigrate';
import { NullableEpochInfo } from '../models/NullableEpochInfo';
import { NumberOfSeconds } from '../models/NumberOfSeconds';
import { NumberOfSlots } from '../models/NumberOfSlots';
import { OutputTokenBundleSizeExceedsLimit } from '../models/OutputTokenBundleSizeExceedsLimit';
import { OutputTokenQuantityExceedsLimit } from '../models/OutputTokenQuantityExceedsLimit';
import { PatchSharedWalletInPayment403Response } from '../models/PatchSharedWalletInPayment403Response';
import { Payment } from '../models/Payment';
import { Payment1 } from '../models/Payment1';
import { PaymentPaymentsInner } from '../models/PaymentPaymentsInner';
import { PaymentTimeToLive } from '../models/PaymentTimeToLive';
import { PendingSharedWalletCollectingAccountPublicKeysForEachCoSigner } from '../models/PendingSharedWalletCollectingAccountPublicKeysForEachCoSigner';
import { PendingSharedWalletCollectingAccountPublicKeysForEachCoSigner1 } from '../models/PendingSharedWalletCollectingAccountPublicKeysForEachCoSigner1';
import { PendingSharedWalletCollectingAccountPublicKeysForEachCoSigner1PaymentScriptTemplate } from '../models/PendingSharedWalletCollectingAccountPublicKeysForEachCoSigner1PaymentScriptTemplate';
import { PendingSharedWalletCollectingAccountPublicKeysForEachCoSignerPaymentScriptTemplate } from '../models/PendingSharedWalletCollectingAccountPublicKeysForEachCoSignerPaymentScriptTemplate';
import { PendingSharedWalletCollectingAccountPublicKeysForEachCoSignerState } from '../models/PendingSharedWalletCollectingAccountPublicKeysForEachCoSignerState';
import { PoolAlreadyJoined } from '../models/PoolAlreadyJoined';
import { PoolDeregistrationCertificate } from '../models/PoolDeregistrationCertificate';
import { PoolRegistrationCertificate } from '../models/PoolRegistrationCertificate';
import { PoolRegistrationCertificatePoolCost } from '../models/PoolRegistrationCertificatePoolCost';
import { PoolRegistrationCertificatePoolMargin } from '../models/PoolRegistrationCertificatePoolMargin';
import { PoolRegistrationCertificatePoolMetadata } from '../models/PoolRegistrationCertificatePoolMetadata';
import { PoolRegistrationCertificatePoolPledge } from '../models/PoolRegistrationCertificatePoolPledge';
import { PostAccountKeyRequest } from '../models/PostAccountKeyRequest';
import { PostAccountKeySharedRequest } from '../models/PostAccountKeySharedRequest';
import { PostAnyAddress202Response } from '../models/PostAnyAddress202Response';
import { PostAnyAddressRequest } from '../models/PostAnyAddressRequest';
import { PostAnyAddressRequestPayment } from '../models/PostAnyAddressRequestPayment';
import { PostAnyAddressRequestStake } from '../models/PostAnyAddressRequestStake';
import { PostByronTransactionFeeRequest } from '../models/PostByronTransactionFeeRequest';
import { PostByronTransactionRequest } from '../models/PostByronTransactionRequest';
import { PostByronWalletRequest } from '../models/PostByronWalletRequest';
import { PostMaintenanceActionRequest } from '../models/PostMaintenanceActionRequest';
import { PostPolicyId202Response } from '../models/PostPolicyId202Response';
import { PostPolicyId403Response } from '../models/PostPolicyId403Response';
import { PostPolicyIdRequest } from '../models/PostPolicyIdRequest';
import { PostPolicyKeyRequest } from '../models/PostPolicyKeyRequest';
import { PostSharedWallet403Response } from '../models/PostSharedWallet403Response';
import { PostSharedWalletRequest } from '../models/PostSharedWalletRequest';
import { PostTransaction403Response } from '../models/PostTransaction403Response';
import { PostTransactionFee202Response } from '../models/PostTransactionFee202Response';
import { PostTransactionFee400Response } from '../models/PostTransactionFee400Response';
import { PostTransactionFee403Response } from '../models/PostTransactionFee403Response';
import { PostTransactionFeeRequest } from '../models/PostTransactionFeeRequest';
import { PostTransactionRequest } from '../models/PostTransactionRequest';
import { PostWalletRequest } from '../models/PostWalletRequest';
import { ProvidingMnemonic } from '../models/ProvidingMnemonic';
import { ProvidingOldPassphrase } from '../models/ProvidingOldPassphrase';
import { PutByronWalletPassphraseRequest } from '../models/PutByronWalletPassphraseRequest';
import { PutSettingsRequest } from '../models/PutSettingsRequest';
import { PutSettingsRequestSettings } from '../models/PutSettingsRequestSettings';
import { PutWalletPassphrase403Response } from '../models/PutWalletPassphrase403Response';
import { PutWalletPassphraseRequest } from '../models/PutWalletPassphraseRequest';
import { PutWalletRequest } from '../models/PutWalletRequest';
import { QueryParamMissing } from '../models/QueryParamMissing';
import { QuitStakePool403Response } from '../models/QuitStakePool403Response';
import { QuitStakePoolRequest } from '../models/QuitStakePoolRequest';
import { Random } from '../models/Random';
import { RandomFromXprv } from '../models/RandomFromXprv';
import { RationalAsDenominatorAndNumerator } from '../models/RationalAsDenominatorAndNumerator';
import { RedeemerInvalidData } from '../models/RedeemerInvalidData';
import { RedeemerScriptFailure } from '../models/RedeemerScriptFailure';
import { RedeemerTargetNotFound } from '../models/RedeemerTargetNotFound';
import { Redemption } from '../models/Redemption';
import { Redemption1 } from '../models/Redemption1';
import { RewardRedemption } from '../models/RewardRedemption';
import { RewardRedemption1 } from '../models/RewardRedemption1';
import { Rewarding } from '../models/Rewarding';
import { Script } from '../models/Script';
import { ScriptTemplateValue } from '../models/ScriptTemplateValue';
import { ScriptValue } from '../models/ScriptValue';
import { SelectCoins403Response } from '../models/SelectCoins403Response';
import { SelectCoinsRequest } from '../models/SelectCoinsRequest';
import { Self } from '../models/Self';
import { SharedWalletCannotUpdateKey } from '../models/SharedWalletCannotUpdateKey';
import { SharedWalletKeyAlreadyExists } from '../models/SharedWalletKeyAlreadyExists';
import { SharedWalletNoDelegationTemplate } from '../models/SharedWalletNoDelegationTemplate';
import { SharedWalletNoSuchCosigner } from '../models/SharedWalletNoSuchCosigner';
import { SharedWalletNotPending } from '../models/SharedWalletNotPending';
import { SharedWalletPending } from '../models/SharedWalletPending';
import { SharedWalletScriptTemplateInvalid } from '../models/SharedWalletScriptTemplateInvalid';
import { Shelley } from '../models/Shelley';
import { ShelleyFromXpub } from '../models/ShelleyFromXpub';
import { SignMetadata415Response } from '../models/SignMetadata415Response';
import { SignMetadataRequest } from '../models/SignMetadataRequest';
import { SignMetadataRequestMetadata } from '../models/SignMetadataRequestMetadata';
import { SignTransaction202Response } from '../models/SignTransaction202Response';
import { SignTransaction403Response } from '../models/SignTransaction403Response';
import { SignTransactionRequest } from '../models/SignTransactionRequest';
import { Some } from '../models/Some';
import { Some1 } from '../models/Some1';
import { Some1Some } from '../models/Some1Some';
import { SomeByronWalletPostData } from '../models/SomeByronWalletPostData';
import { SomeSome } from '../models/SomeSome';
import { Spending } from '../models/Spending';
import { SpendingInput } from '../models/SpendingInput';
import { StartTimeLaterThanEndTime } from '../models/StartTimeLaterThanEndTime';
import { SubmitTransaction202Response } from '../models/SubmitTransaction202Response';
import { SubmitTransactionRequest } from '../models/SubmitTransactionRequest';
import { TransactionAlreadyBalanced } from '../models/TransactionAlreadyBalanced';
import { TransactionAlreadyInLedger } from '../models/TransactionAlreadyInLedger';
import { TransactionIsTooBig } from '../models/TransactionIsTooBig';
import { TransactionMetadataValue } from '../models/TransactionMetadataValue';
import { TransactionMetadataValueNoSchema } from '../models/TransactionMetadataValueNoSchema';
import { TranslationError } from '../models/TranslationError';
import { Trezor } from '../models/Trezor';
import { TxInputsBelongingToAGivenWallet } from '../models/TxInputsBelongingToAGivenWallet';
import { TxInputsWithoutSourceNotBelongingToAGivenWallet } from '../models/TxInputsWithoutSourceNotBelongingToAGivenWallet';
import { TxOutputsBelongingToAGivenWallet } from '../models/TxOutputsBelongingToAGivenWallet';
import { TxOutputsNotBelongingToAGivenWallet } from '../models/TxOutputsNotBelongingToAGivenWallet';
import { UnresolvedInputs } from '../models/UnresolvedInputs';
import { UnsupportedMediaType } from '../models/UnsupportedMediaType';
import { UtxoTooSmall } from '../models/UtxoTooSmall';
import { ValidityIntervalNotInsideScriptTimelock } from '../models/ValidityIntervalNotInsideScriptTimelock';
import { WalletAlreadyExists } from '../models/WalletAlreadyExists';
import { WrongEncryptionPassphrase } from '../models/WrongEncryptionPassphrase';
import { WrongMnemonics } from '../models/WrongMnemonics';
import { XTxBody } from '../models/XTxBody';

import { ObservableAddressesApi } from "./ObservableAPI";
import { AddressesApiRequestFactory, AddressesApiResponseProcessor} from "../apis/AddressesApi";

export interface AddressesApiInspectAddressRequest {
    /**
     * 
     * @type string
     * @memberof AddressesApiinspectAddress
     */
    addressId: string
}

export interface AddressesApiListAddressesRequest {
    /**
     * 
     * @type string
     * @memberof AddressesApilistAddresses
     */
    walletId: string
    /**
     * An optional filter on the address state.
     * @type &#39;used&#39; | &#39;unused&#39;
     * @memberof AddressesApilistAddresses
     */
    state?: 'used' | 'unused'
}

export interface AddressesApiPostAnyAddressRequest {
    /**
     * 
     * @type PostAnyAddressRequest
     * @memberof AddressesApipostAnyAddress
     */
    postAnyAddressRequest?: PostAnyAddressRequest
}

export class ObjectAddressesApi {
    private api: ObservableAddressesApi

    public constructor(configuration: Configuration, requestFactory?: AddressesApiRequestFactory, responseProcessor?: AddressesApiResponseProcessor) {
        this.api = new ObservableAddressesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Give useful information about the structure of a given address. 
     * Inspect Address
     * @param param the request object
     */
    public inspectAddress(param: AddressesApiInspectAddressRequest, options?: Configuration): Promise<InspectAddress200Response> {
        return this.api.inspectAddress(param.addressId,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known addresses, ordered from newest to oldest 
     * List
     * @param param the request object
     */
    public listAddresses(param: AddressesApiListAddressesRequest, options?: Configuration): Promise<Array<ListAddresses200ResponseInner>> {
        return this.api.listAddresses(param.walletId, param.state,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Construct any address by specyfying credential for payment or delegation.  In Cardano, Addresses are made of three parts:  ``` *---------*---------*-----------* | NETWORK | PAYMENT | DELEGATION | *---------*---------*-----------* ```  The `NETWORK` part allows for distinguishing addresses between different networks like the mainnet or the testnet. It is implicitly handled by the server without you having to worry about it. The `PAYMENT` and `DELEGATION` parts however can be constructed similarly, using either:  - A public key - A script  The script itself is either constructed out of a public key, one of two timelocks, or one of the three following primitives:  - all - any - some  The timelock can determine validity as respect to the slot. `active_from slot` means the script is valid from the specified slot and onward. `active_until slot` means the script is valid until (not included) the specified slot.  Each of which contains one or more script(s) that can be either keys or primitives, and so on. Schematically:  ```                                    ┏─────────┓ SCRIPT = ──┬───────────────────────┤ pub key ├─────────────────────┬──            │                       ┗─────────┛                     │            │                       ┏──────────────────┓            │            ├───────────────────────┤ ACTIVE_FROM slot ├──── ───────┤            │                       ┗──────────────────┛            │            │                       ┏───────────────────┓           │            ├───────────────────────┤ ACTIVE_UNTIL slot ├───────────┤            │                       ┗───────────────────┛           │            │                                                       │            │  ╭─────╮   ╭────────╮                                 │            ├──┤ ALL ├───┤ SCRIPT ├─┬───────────────────────────────┤            │  ╰─────╯ ^ ╰────────╯ │                               │            │          │   ╭───╮    │                               │            │          └───┤ , ├────┘                               │            │              ╰───╯                                    │            │  ╭─────╮   ╭────────╮                                 │            ├──┤ ANY ├───┤ SCRIPT ├─┬───────────────────────────────┤            │  ╰─────╯ ^ ╰────────╯ │                               │            │          │   ╭───╮    │                               │            │          └───┤ , ├────┘                               │            │              ╰───╯                                    │            │  ╭──────╮ ╭──────────╮ ┏───┓ ╭──────╮   ╭────────╮    │            └──┤ SOME ├─┤ AT_LEAST ├─┤ n ├─┤ FROM ├───┤ SCRIPT ├─┬──┘               ╰──────╯ ╰──────────╯ ┗───┛ ╰──────╯ ^ ╰────────╯ │                                                    │   ╭───╮    │                                                    └───┤ , ├────┘                                                        ╰───╯ ``` 
     * Construct Address
     * @param param the request object
     */
    public postAnyAddress(param: AddressesApiPostAnyAddressRequest = {}, options?: Configuration): Promise<PostAnyAddress202Response> {
        return this.api.postAnyAddress(param.postAnyAddressRequest,  options).toPromise();
    }

}

import { ObservableAssetsApi } from "./ObservableAPI";
import { AssetsApiRequestFactory, AssetsApiResponseProcessor} from "../apis/AssetsApi";

export interface AssetsApiGetAssetRequest {
    /**
     * 
     * @type string
     * @memberof AssetsApigetAsset
     */
    walletId: string
    /**
     * 
     * @type string
     * @memberof AssetsApigetAsset
     */
    policyId: string
    /**
     * 
     * @type string
     * @memberof AssetsApigetAsset
     */
    assetName: string
}

export interface AssetsApiGetAssetDefaultRequest {
    /**
     * 
     * @type string
     * @memberof AssetsApigetAssetDefault
     */
    walletId: string
    /**
     * 
     * @type string
     * @memberof AssetsApigetAssetDefault
     */
    policyId: string
}

export interface AssetsApiListAssetsRequest {
    /**
     * 
     * @type string
     * @memberof AssetsApilistAssets
     */
    walletId: string
}

export class ObjectAssetsApi {
    private api: ObservableAssetsApi

    public constructor(configuration: Configuration, requestFactory?: AssetsApiRequestFactory, responseProcessor?: AssetsApiResponseProcessor) {
        this.api = new ObservableAssetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch a single asset from its `policy_id` and `asset_name`, with its metadata if any.  The asset must be associated with the wallet. 
     * Get Asset
     * @param param the request object
     */
    public getAsset(param: AssetsApiGetAssetRequest, options?: Configuration): Promise<ListAssets200ResponseInner> {
        return this.api.getAsset(param.walletId, param.policyId, param.assetName,  options).toPromise();
    }

    /**
     * Fetch the asset from `policy_id` with an empty name.  The asset must be associated with the wallet. 
     * Get Asset (empty name)
     * @param param the request object
     */
    public getAssetDefault(param: AssetsApiGetAssetDefaultRequest, options?: Configuration): Promise<ListAssets200ResponseInner> {
        return this.api.getAssetDefault(param.walletId, param.policyId,  options).toPromise();
    }

    /**
     * List all assets associated with the wallet, and their metadata if known.  An asset is _associated_ with a wallet if, at one point in history, it was spendable by the wallet. 
     * List Assets
     * @param param the request object
     */
    public listAssets(param: AssetsApiListAssetsRequest, options?: Configuration): Promise<Array<ListAssets200ResponseInner>> {
        return this.api.listAssets(param.walletId,  options).toPromise();
    }

}

import { ObservableByronAddressesApi } from "./ObservableAPI";
import { ByronAddressesApiRequestFactory, ByronAddressesApiResponseProcessor} from "../apis/ByronAddressesApi";

export interface ByronAddressesApiCreateAddressRequest {
    /**
     * 
     * @type string
     * @memberof ByronAddressesApicreateAddress
     */
    walletId: string
    /**
     * 
     * @type CreateAddressRequest
     * @memberof ByronAddressesApicreateAddress
     */
    createAddressRequest: CreateAddressRequest
}

export interface ByronAddressesApiImportAddressRequest {
    /**
     * 
     * @type string
     * @memberof ByronAddressesApiimportAddress
     */
    walletId: string
    /**
     * 
     * @type string
     * @memberof ByronAddressesApiimportAddress
     */
    addressId: string
}

export interface ByronAddressesApiImportAddressesRequest {
    /**
     * 
     * @type string
     * @memberof ByronAddressesApiimportAddresses
     */
    walletId: string
    /**
     * 
     * @type ImportAddressesRequest
     * @memberof ByronAddressesApiimportAddresses
     */
    importAddressesRequest: ImportAddressesRequest
}

export interface ByronAddressesApiListByronAddressesRequest {
    /**
     * 
     * @type string
     * @memberof ByronAddressesApilistByronAddresses
     */
    walletId: string
    /**
     * An optional filter on the address state.
     * @type &#39;used&#39; | &#39;unused&#39;
     * @memberof ByronAddressesApilistByronAddresses
     */
    state?: 'used' | 'unused'
}

export class ObjectByronAddressesApi {
    private api: ObservableByronAddressesApi

    public constructor(configuration: Configuration, requestFactory?: ByronAddressesApiRequestFactory, responseProcessor?: ByronAddressesApiResponseProcessor) {
        this.api = new ObservableByronAddressesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server. 
     * Create Address
     * @param param the request object
     */
    public createAddress(param: ByronAddressesApiCreateAddressRequest, options?: Configuration): Promise<ListAddresses200ResponseInner> {
        return this.api.createAddress(param.walletId, param.createAddressRequest,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server. 
     * Import Address
     * @param param the request object
     */
    public importAddress(param: ByronAddressesApiImportAddressRequest, options?: Configuration): Promise<void> {
        return this.api.importAddress(param.walletId, param.addressId,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server. 
     * Import Addresses
     * @param param the request object
     */
    public importAddresses(param: ByronAddressesApiImportAddressesRequest, options?: Configuration): Promise<void> {
        return this.api.importAddresses(param.walletId, param.importAddressesRequest,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known addresses, ordered from newest to oldest for sequential wallets. Arbitrarily ordered for random wallets. 
     * List
     * @param param the request object
     */
    public listByronAddresses(param: ByronAddressesApiListByronAddressesRequest, options?: Configuration): Promise<Array<ListAddresses200ResponseInner>> {
        return this.api.listByronAddresses(param.walletId, param.state,  options).toPromise();
    }

}

import { ObservableByronAssetsApi } from "./ObservableAPI";
import { ByronAssetsApiRequestFactory, ByronAssetsApiResponseProcessor} from "../apis/ByronAssetsApi";

export interface ByronAssetsApiGetByronAssetRequest {
    /**
     * 
     * @type string
     * @memberof ByronAssetsApigetByronAsset
     */
    walletId: string
    /**
     * 
     * @type string
     * @memberof ByronAssetsApigetByronAsset
     */
    policyId: string
    /**
     * 
     * @type string
     * @memberof ByronAssetsApigetByronAsset
     */
    assetName: string
}

export interface ByronAssetsApiGetByronAssetDefaultRequest {
    /**
     * 
     * @type string
     * @memberof ByronAssetsApigetByronAssetDefault
     */
    walletId: string
    /**
     * 
     * @type string
     * @memberof ByronAssetsApigetByronAssetDefault
     */
    policyId: string
}

export interface ByronAssetsApiListByronAssetsRequest {
    /**
     * 
     * @type string
     * @memberof ByronAssetsApilistByronAssets
     */
    walletId: string
}

export class ObjectByronAssetsApi {
    private api: ObservableByronAssetsApi

    public constructor(configuration: Configuration, requestFactory?: ByronAssetsApiRequestFactory, responseProcessor?: ByronAssetsApiResponseProcessor) {
        this.api = new ObservableByronAssetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch a single asset from its `policy_id` and `asset_name`, with its metadata if any.  The asset must be associated with the wallet. 
     * Get Asset
     * @param param the request object
     */
    public getByronAsset(param: ByronAssetsApiGetByronAssetRequest, options?: Configuration): Promise<ListAssets200ResponseInner> {
        return this.api.getByronAsset(param.walletId, param.policyId, param.assetName,  options).toPromise();
    }

    /**
     * Fetch the asset from `policy_id` with an empty name.  The asset must be associated with the wallet. 
     * Get Asset (empty name)
     * @param param the request object
     */
    public getByronAssetDefault(param: ByronAssetsApiGetByronAssetDefaultRequest, options?: Configuration): Promise<ListAssets200ResponseInner> {
        return this.api.getByronAssetDefault(param.walletId, param.policyId,  options).toPromise();
    }

    /**
     * List all assets associated with the wallet, and their metadata if known.  An asset is _associated_ with a wallet if it is involved in a transaction of the wallet. 
     * List Assets
     * @param param the request object
     */
    public listByronAssets(param: ByronAssetsApiListByronAssetsRequest, options?: Configuration): Promise<Array<ListAssets200ResponseInner>> {
        return this.api.listByronAssets(param.walletId,  options).toPromise();
    }

}

import { ObservableByronCoinSelectionsApi } from "./ObservableAPI";
import { ByronCoinSelectionsApiRequestFactory, ByronCoinSelectionsApiResponseProcessor} from "../apis/ByronCoinSelectionsApi";

export interface ByronCoinSelectionsApiByronSelectCoinsRequest {
    /**
     * 
     * @type string
     * @memberof ByronCoinSelectionsApibyronSelectCoins
     */
    walletId: string
    /**
     * 
     * @type PostByronTransactionFeeRequest
     * @memberof ByronCoinSelectionsApibyronSelectCoins
     */
    postByronTransactionFeeRequest: PostByronTransactionFeeRequest
}

export class ObjectByronCoinSelectionsApi {
    private api: ObservableByronCoinSelectionsApi

    public constructor(configuration: Configuration, requestFactory?: ByronCoinSelectionsApiRequestFactory, responseProcessor?: ByronCoinSelectionsApiResponseProcessor) {
        this.api = new ObservableByronCoinSelectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Select coins to cover the given set of payments.  Uses the <a href=\"https://iohk.io/blog/self-organisation-in-coin-selection/\"> Random-Improve coin selection algorithm</a>.  <b>Note: </b> Not supported for Byron random wallets. 
     * Random
     * @param param the request object
     */
    public byronSelectCoins(param: ByronCoinSelectionsApiByronSelectCoinsRequest, options?: Configuration): Promise<ConstructTransaction202ResponseCoinSelection> {
        return this.api.byronSelectCoins(param.walletId, param.postByronTransactionFeeRequest,  options).toPromise();
    }

}

import { ObservableByronMigrationsApi } from "./ObservableAPI";
import { ByronMigrationsApiRequestFactory, ByronMigrationsApiResponseProcessor} from "../apis/ByronMigrationsApi";

export interface ByronMigrationsApiCreateByronWalletMigrationPlanRequest {
    /**
     * 
     * @type string
     * @memberof ByronMigrationsApicreateByronWalletMigrationPlan
     */
    walletId: string
    /**
     * 
     * @type CreateShelleyWalletMigrationPlanRequest
     * @memberof ByronMigrationsApicreateByronWalletMigrationPlan
     */
    createShelleyWalletMigrationPlanRequest: CreateShelleyWalletMigrationPlanRequest
}

export interface ByronMigrationsApiMigrateByronWalletRequest {
    /**
     * 
     * @type string
     * @memberof ByronMigrationsApimigrateByronWallet
     */
    walletId: string
    /**
     * 
     * @type MigrateByronWalletRequest
     * @memberof ByronMigrationsApimigrateByronWallet
     */
    migrateByronWalletRequest: MigrateByronWalletRequest
}

export class ObjectByronMigrationsApi {
    private api: ObservableByronMigrationsApi

    public constructor(configuration: Configuration, requestFactory?: ByronMigrationsApiRequestFactory, responseProcessor?: ByronMigrationsApiResponseProcessor) {
        this.api = new ObservableByronMigrationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generate a plan for migrating the UTxO balance of this wallet to another wallet, without executing the plan.  This operation generates a plan that transfers as much of the wallet's balance as possible, by creating as many selections as may be necessary to migrate the entire balance.  Each selection created is the basis for a transaction.  In order to minimize the total transaction fee required, UTxO entries are coalesced together to the greatest extent possible in the resulting selections. No attempt is made to preserve the wallet's UTxO distribution.  The plan is generated on a best-effort basis. If there is insufficient ada available to pay for the entire UTxO set to be migrated, then only a subset of the wallet's UTxO set will be included in the resultant plan. 
     * Create a migration plan
     * @param param the request object
     */
    public createByronWalletMigrationPlan(param: ByronMigrationsApiCreateByronWalletMigrationPlanRequest, options?: Configuration): Promise<CreateShelleyWalletMigrationPlan202Response> {
        return this.api.createByronWalletMigrationPlan(param.walletId, param.createShelleyWalletMigrationPlanRequest,  options).toPromise();
    }

    /**
     * Migrate the UTxO balance of this wallet to the given set of addresses.  This operation will attempt to transfer as much of the wallet's balance as possible to the given set of addresses, by creating and submitting as many transactions as may be necessary to migrate the entire balance.  In order to minimize the total transaction fee required, UTxO entries are coalesced together to the greatest extent possible in the resulting transactions. No attempt is made to preserve the wallet's UTxO distribution.  This operation is performed on a best-effort basis. If there is insufficient ada available to pay for the entire UTxO set to be migrated, then only a subset of the wallet's UTxO set will be migrated.  A typical use of this operation would be to move all funds from an old wallet to a new wallet, by providing addresses that belong to the new wallet. 
     * Migrate
     * @param param the request object
     */
    public migrateByronWallet(param: ByronMigrationsApiMigrateByronWalletRequest, options?: Configuration): Promise<Array<ListTransactions200ResponseInner>> {
        return this.api.migrateByronWallet(param.walletId, param.migrateByronWalletRequest,  options).toPromise();
    }

}

import { ObservableByronTransactionsApi } from "./ObservableAPI";
import { ByronTransactionsApiRequestFactory, ByronTransactionsApiResponseProcessor} from "../apis/ByronTransactionsApi";

export interface ByronTransactionsApiDeleteByronTransactionRequest {
    /**
     * 
     * @type string
     * @memberof ByronTransactionsApideleteByronTransaction
     */
    walletId: string
    /**
     * 
     * @type string
     * @memberof ByronTransactionsApideleteByronTransaction
     */
    transactionId: string
}

export interface ByronTransactionsApiGetByronTransactionRequest {
    /**
     * 
     * @type string
     * @memberof ByronTransactionsApigetByronTransaction
     */
    walletId: string
    /**
     * 
     * @type string
     * @memberof ByronTransactionsApigetByronTransaction
     */
    transactionId: string
}

export interface ByronTransactionsApiListByronTransactionsRequest {
    /**
     * 
     * @type string
     * @memberof ByronTransactionsApilistByronTransactions
     */
    walletId: string
    /**
     * An optional start time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: &#x60;2008-08-08T08:08:08Z&#x60; 
     * @type string
     * @memberof ByronTransactionsApilistByronTransactions
     */
    start?: string
    /**
     * An optional end time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: &#x60;2008-08-08T08:08:08Z&#x60; 
     * @type string
     * @memberof ByronTransactionsApilistByronTransactions
     */
    end?: string
    /**
     * An optional sort order.
     * @type &#39;ascending&#39; | &#39;descending&#39;
     * @memberof ByronTransactionsApilistByronTransactions
     */
    order?: 'ascending' | 'descending'
}

export interface ByronTransactionsApiPostByronTransactionRequest {
    /**
     * 
     * @type string
     * @memberof ByronTransactionsApipostByronTransaction
     */
    walletId: string
    /**
     * 
     * @type PostByronTransactionRequest
     * @memberof ByronTransactionsApipostByronTransaction
     */
    postByronTransactionRequest: PostByronTransactionRequest
}

export interface ByronTransactionsApiPostByronTransactionFeeRequest {
    /**
     * 
     * @type string
     * @memberof ByronTransactionsApipostByronTransactionFee
     */
    walletId: string
    /**
     * 
     * @type PostByronTransactionFeeRequest
     * @memberof ByronTransactionsApipostByronTransactionFee
     */
    postByronTransactionFeeRequest: PostByronTransactionFeeRequest
}

export class ObjectByronTransactionsApi {
    private api: ObservableByronTransactionsApi

    public constructor(configuration: Configuration, requestFactory?: ByronTransactionsApiRequestFactory, responseProcessor?: ByronTransactionsApiResponseProcessor) {
        this.api = new ObservableByronTransactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Forget pending Byron transaction. Importantly, a transaction, when sent, cannot be cancelled. One can only request forgetting about it in order to try spending (concurrently) the same UTxO in another transaction. But, the transaction may still show up later in a block and therefore, appear in the wallet. 
     * Forget
     * @param param the request object
     */
    public deleteByronTransaction(param: ByronTransactionsApiDeleteByronTransactionRequest, options?: Configuration): Promise<void> {
        return this.api.deleteByronTransaction(param.walletId, param.transactionId,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Get transaction by id. 
     * Get
     * @param param the request object
     */
    public getByronTransaction(param: ByronTransactionsApiGetByronTransactionRequest, options?: Configuration): Promise<ListTransactions200ResponseInner> {
        return this.api.getByronTransaction(param.walletId, param.transactionId,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  List all incoming and outgoing transactions for the given wallet. 
     * List
     * @param param the request object
     */
    public listByronTransactions(param: ByronTransactionsApiListByronTransactionsRequest, options?: Configuration): Promise<Array<ListTransactions200ResponseInner>> {
        return this.api.listByronTransactions(param.walletId, param.start, param.end, param.order,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Create and send transaction from the wallet. 
     * Create
     * @param param the request object
     */
    public postByronTransaction(param: ByronTransactionsApiPostByronTransactionRequest, options?: Configuration): Promise<ListTransactions200ResponseInner> {
        return this.api.postByronTransaction(param.walletId, param.postByronTransactionRequest,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Estimate fee for the transaction. 
     * Estimate Fee
     * @param param the request object
     */
    public postByronTransactionFee(param: ByronTransactionsApiPostByronTransactionFeeRequest, options?: Configuration): Promise<PostTransactionFee202Response> {
        return this.api.postByronTransactionFee(param.walletId, param.postByronTransactionFeeRequest,  options).toPromise();
    }

}

import { ObservableByronTransactionsNewApi } from "./ObservableAPI";
import { ByronTransactionsNewApiRequestFactory, ByronTransactionsNewApiResponseProcessor} from "../apis/ByronTransactionsNewApi";

export interface ByronTransactionsNewApiConstructByronTransactionRequest {
    /**
     * 
     * @type string
     * @memberof ByronTransactionsNewApiconstructByronTransaction
     */
    walletId: string
    /**
     * 
     * @type ConstructTransactionRequest
     * @memberof ByronTransactionsNewApiconstructByronTransaction
     */
    constructTransactionRequest: ConstructTransactionRequest
}

export interface ByronTransactionsNewApiSignByronTransactionRequest {
    /**
     * 
     * @type string
     * @memberof ByronTransactionsNewApisignByronTransaction
     */
    walletId: string
    /**
     * 
     * @type SignTransactionRequest
     * @memberof ByronTransactionsNewApisignByronTransaction
     */
    signTransactionRequest: SignTransactionRequest
}

export class ObjectByronTransactionsNewApi {
    private api: ObservableByronTransactionsNewApi

    public constructor(configuration: Configuration, requestFactory?: ByronTransactionsNewApiRequestFactory, responseProcessor?: ByronTransactionsNewApiResponseProcessor) {
        this.api = new ObservableByronTransactionsNewApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>unstable</strong></p>  Create a transaction to be signed from the wallet. 
     * Construct
     * @param param the request object
     */
    public constructByronTransaction(param: ByronTransactionsNewApiConstructByronTransactionRequest, options?: Configuration): Promise<ConstructTransaction202Response> {
        return this.api.constructByronTransaction(param.walletId, param.constructTransactionRequest,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>under development</strong></p>  Signs a serialised transaction, returning the modified transaction.  This endpoint will add new witnesses using the keys available to this wallet. Any existing witnesses will remain in the witness set. 
     * Sign
     * @param param the request object
     */
    public signByronTransaction(param: ByronTransactionsNewApiSignByronTransactionRequest, options?: Configuration): Promise<SignTransaction202Response> {
        return this.api.signByronTransaction(param.walletId, param.signTransactionRequest,  options).toPromise();
    }

}

import { ObservableByronWalletsApi } from "./ObservableAPI";
import { ByronWalletsApiRequestFactory, ByronWalletsApiResponseProcessor} from "../apis/ByronWalletsApi";

export interface ByronWalletsApiDeleteByronWalletRequest {
    /**
     * 
     * @type string
     * @memberof ByronWalletsApideleteByronWallet
     */
    walletId: string
}

export interface ByronWalletsApiGetByronUTxOsStatisticsRequest {
    /**
     * 
     * @type string
     * @memberof ByronWalletsApigetByronUTxOsStatistics
     */
    walletId: string
}

export interface ByronWalletsApiGetByronWalletRequest {
    /**
     * 
     * @type string
     * @memberof ByronWalletsApigetByronWallet
     */
    walletId: string
}

export interface ByronWalletsApiGetByronWalletUtxoSnapshotRequest {
    /**
     * 
     * @type string
     * @memberof ByronWalletsApigetByronWalletUtxoSnapshot
     */
    walletId: string
}

export interface ByronWalletsApiListByronWalletsRequest {
}

export interface ByronWalletsApiPostByronWalletRequest {
    /**
     * 
     * @type PostByronWalletRequest
     * @memberof ByronWalletsApipostByronWallet
     */
    postByronWalletRequest: PostByronWalletRequest
}

export interface ByronWalletsApiPutByronWalletRequest {
    /**
     * 
     * @type string
     * @memberof ByronWalletsApiputByronWallet
     */
    walletId: string
    /**
     * 
     * @type PutWalletRequest
     * @memberof ByronWalletsApiputByronWallet
     */
    putWalletRequest: PutWalletRequest
}

export interface ByronWalletsApiPutByronWalletPassphraseRequest {
    /**
     * 
     * @type string
     * @memberof ByronWalletsApiputByronWalletPassphrase
     */
    walletId: string
    /**
     * 
     * @type PutByronWalletPassphraseRequest
     * @memberof ByronWalletsApiputByronWalletPassphrase
     */
    putByronWalletPassphraseRequest: PutByronWalletPassphraseRequest
}

export class ObjectByronWalletsApi {
    private api: ObservableByronWalletsApi

    public constructor(configuration: Configuration, requestFactory?: ByronWalletsApiRequestFactory, responseProcessor?: ByronWalletsApiResponseProcessor) {
        this.api = new ObservableByronWalletsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Delete a Byron wallet. 
     * Delete
     * @param param the request object
     */
    public deleteByronWallet(param: ByronWalletsApiDeleteByronWalletRequest, options?: Configuration): Promise<void> {
        return this.api.deleteByronWallet(param.walletId,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return the UTxOs distribution across the whole wallet, in the form of a histogram.  ```      │  100 ─      │      │                                 ┌───┐   10 ─                         ┌───┐   │   │                   ┌───┐      │                 ┌───┐   │   │   │   │                   │   │      │                 │   │   │   │   │   │   ┌───┐           │   │    1 ─ ┌───┐           │   │   │   │   │   │   │   │           │   │      │ │   │           │   │   │   │   │   │   │   │           │   │      │ │   │ │       │ │   │ │ │   │ ╷ │   │ ╷ │   │ ╷       ╷ │   │      └─┘   └─│───────│─┘   └─│─┘   └─│─┘   └─│─┘   └─│───────│─┘   └────            10μ₳    100μ₳   1000μ₳   0.1₳    1₳      10₳     100₳ ``` 
     * UTxO Statistics
     * @param param the request object
     */
    public getByronUTxOsStatistics(param: ByronWalletsApiGetByronUTxOsStatisticsRequest, options?: Configuration): Promise<GetUTxOsStatistics200Response> {
        return this.api.getByronUTxOsStatistics(param.walletId,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return information about a Byron wallet. 
     * Get
     * @param param the request object
     */
    public getByronWallet(param: ByronWalletsApiGetByronWalletRequest, options?: Configuration): Promise<ListByronWallets200ResponseInner> {
        return this.api.getByronWallet(param.walletId,  options).toPromise();
    }

    /**
     * Generate a snapshot of the wallet's UTxO set.  This endpoint is intended for debugging purposes. 
     * A snapshot of the wallet's UTxO set
     * @param param the request object
     */
    public getByronWalletUtxoSnapshot(param: ByronWalletsApiGetByronWalletUtxoSnapshotRequest, options?: Configuration): Promise<GetWalletUtxoSnapshot200Response> {
        return this.api.getByronWalletUtxoSnapshot(param.walletId,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known Byron wallets, ordered from oldest to newest. 
     * List
     * @param param the request object
     */
    public listByronWallets(param: ByronWalletsApiListByronWalletsRequest = {}, options?: Configuration): Promise<Array<ListByronWallets200ResponseInner>> {
        return this.api.listByronWallets( options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Restore a Byron wallet from a mnemonic sentence or encrypted root private key (deprecated).    **⚠️ WARNING ⚠️**    The construction of random wallet in itself is **deprecated**, in particular the restoration from an encrypted root private key.   These endpoints exist to ease migrations from legacy software such as `cardano-sl` but should be avoided by new applications. 
     * Restore
     * @param param the request object
     */
    public postByronWallet(param: ByronWalletsApiPostByronWalletRequest, options?: Configuration): Promise<ListByronWallets200ResponseInner> {
        return this.api.postByronWallet(param.postByronWalletRequest,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * Update Metadata
     * @param param the request object
     */
    public putByronWallet(param: ByronWalletsApiPutByronWalletRequest, options?: Configuration): Promise<ListWallets200ResponseInner> {
        return this.api.putByronWallet(param.walletId, param.putWalletRequest,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * Update Passphrase
     * @param param the request object
     */
    public putByronWalletPassphrase(param: ByronWalletsApiPutByronWalletPassphraseRequest, options?: Configuration): Promise<void> {
        return this.api.putByronWalletPassphrase(param.walletId, param.putByronWalletPassphraseRequest,  options).toPromise();
    }

}

import { ObservableCoinSelectionsApi } from "./ObservableAPI";
import { CoinSelectionsApiRequestFactory, CoinSelectionsApiResponseProcessor} from "../apis/CoinSelectionsApi";

export interface CoinSelectionsApiSelectCoinsRequest {
    /**
     * 
     * @type string
     * @memberof CoinSelectionsApiselectCoins
     */
    walletId: string
    /**
     * 
     * @type SelectCoinsRequest
     * @memberof CoinSelectionsApiselectCoins
     */
    selectCoinsRequest: SelectCoinsRequest
}

export class ObjectCoinSelectionsApi {
    private api: ObservableCoinSelectionsApi

    public constructor(configuration: Configuration, requestFactory?: CoinSelectionsApiRequestFactory, responseProcessor?: CoinSelectionsApiResponseProcessor) {
        this.api = new ObservableCoinSelectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Select coins to cover the given set of payments.  Uses the <a href=\"https://iohk.io/blog/self-organisation-in-coin-selection/\"> Random-Improve coin selection algorithm</a>. 
     * Random
     * @param param the request object
     */
    public selectCoins(param: CoinSelectionsApiSelectCoinsRequest, options?: Configuration): Promise<ConstructTransaction202ResponseCoinSelection> {
        return this.api.selectCoins(param.walletId, param.selectCoinsRequest,  options).toPromise();
    }

}

import { ObservableExperimentalApi } from "./ObservableAPI";
import { ExperimentalApiRequestFactory, ExperimentalApiResponseProcessor} from "../apis/ExperimentalApi";

export interface ExperimentalApiSignMetadataRequest {
    /**
     * 
     * @type string
     * @memberof ExperimentalApisignMetadata
     */
    walletId: string
    /**
     * 
     * @type &#39;utxo_external&#39; | &#39;utxo_internal&#39; | &#39;mutable_account&#39;
     * @memberof ExperimentalApisignMetadata
     */
    role: 'utxo_external' | 'utxo_internal' | 'mutable_account'
    /**
     * 
     * @type string
     * @memberof ExperimentalApisignMetadata
     */
    index: string
    /**
     * 
     * @type SignMetadataRequest
     * @memberof ExperimentalApisignMetadata
     */
    signMetadataRequest: SignMetadataRequest
}

export class ObjectExperimentalApi {
    private api: ObservableExperimentalApi

    public constructor(configuration: Configuration, requestFactory?: ExperimentalApiRequestFactory, responseProcessor?: ExperimentalApiResponseProcessor) {
        this.api = new ObservableExperimentalApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>experimental</strong></p>  **⚠️ WARNING ⚠️**  This endpoint is experimental and for internal use in the Catalyst project. This functionality will be refined in the forthcoming future and the interface is likely to change in **NON-BACKWARD COMPATIBLE WAYS**.  <b>Note:</b> Only `Soft` indexes are supported by this endpoint. 
     * Sign Metadata
     * @param param the request object
     */
    public signMetadata(param: ExperimentalApiSignMetadataRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.signMetadata(param.walletId, param.role, param.index, param.signMetadataRequest,  options).toPromise();
    }

}

import { ObservableKeysApi } from "./ObservableAPI";
import { KeysApiRequestFactory, KeysApiResponseProcessor} from "../apis/KeysApi";

export interface KeysApiGetAccountKeyRequest {
    /**
     * 
     * @type string
     * @memberof KeysApigetAccountKey
     */
    walletId: string
}

export interface KeysApiGetPolicyKeyRequest {
    /**
     * 
     * @type string
     * @memberof KeysApigetPolicyKey
     */
    walletId: string
}

export interface KeysApiGetWalletKeyRequest {
    /**
     * 
     * @type string
     * @memberof KeysApigetWalletKey
     */
    walletId: string
    /**
     * 
     * @type &#39;utxo_external&#39; | &#39;utxo_internal&#39; | &#39;mutable_account&#39;
     * @memberof KeysApigetWalletKey
     */
    role: 'utxo_external' | 'utxo_internal' | 'mutable_account'
    /**
     * 
     * @type string
     * @memberof KeysApigetWalletKey
     */
    index: string
}

export interface KeysApiPostAccountKeyRequest {
    /**
     * 
     * @type string
     * @memberof KeysApipostAccountKey
     */
    walletId: string
    /**
     * 
     * @type string
     * @memberof KeysApipostAccountKey
     */
    index: string
    /**
     * 
     * @type PostAccountKeyRequest
     * @memberof KeysApipostAccountKey
     */
    postAccountKeyRequest: PostAccountKeyRequest
}

export interface KeysApiPostPolicyIdRequest {
    /**
     * 
     * @type string
     * @memberof KeysApipostPolicyId
     */
    walletId: string
    /**
     * 
     * @type PostPolicyIdRequest
     * @memberof KeysApipostPolicyId
     */
    postPolicyIdRequest: PostPolicyIdRequest
}

export interface KeysApiPostPolicyKeyRequest {
    /**
     * 
     * @type string
     * @memberof KeysApipostPolicyKey
     */
    walletId: string
    /**
     * 
     * @type PostPolicyKeyRequest
     * @memberof KeysApipostPolicyKey
     */
    postPolicyKeyRequest: PostPolicyKeyRequest
}

export class ObjectKeysApi {
    private api: ObservableKeysApi

    public constructor(configuration: Configuration, requestFactory?: KeysApiRequestFactory, responseProcessor?: KeysApiResponseProcessor) {
        this.api = new ObservableKeysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> Retrieve the account public key of this wallet.  To get an extended public key, instead of the public key, use query parameter `format=extended`. For non-extended public key use `format=non_extended` or omit query parameter. 
     * Get Account Public Key
     * @param param the request object
     */
    public getAccountKey(param: KeysApiGetAccountKeyRequest, options?: Configuration): Promise<string> {
        return this.api.getAccountKey(param.walletId,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> Return a policy key for a derivation index = 0.  To get a hash of the policy key instead of the policy key, use query parameter `hash=true`. 
     * Get Policy Key
     * @param param the request object
     */
    public getPolicyKey(param: KeysApiGetPolicyKeyRequest, options?: Configuration): Promise<string> {
        return this.api.getPolicyKey(param.walletId,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> Return a public key for a given role and derivation index.  To get a hash of the public key, instead of the public key, use query parameter `hash=true`.  <b>Note:</b> Only `Soft` indexes are supported by this endpoint. 
     * Get Public Key
     * @param param the request object
     */
    public getWalletKey(param: KeysApiGetWalletKeyRequest, options?: Configuration): Promise<string> {
        return this.api.getWalletKey(param.walletId, param.role, param.index,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> Derive an account public key for any account index. For this key derivation to be possible, the wallet must have been created from mnemonic.  It is possible to use the optional `purpose` field to override that branch of the derivation path with different hardened derivation index. If that field is omitted, the default purpose for Cardano wallets (`1852H`) will be used.  <b>Note:</b> Only _Hardened_ indexes are supported by this endpoint. 
     * Create Account Public Key
     * @param param the request object
     */
    public postAccountKey(param: KeysApiPostAccountKeyRequest, options?: Configuration): Promise<string> {
        return this.api.postAccountKey(param.walletId, param.index, param.postAccountKeyRequest,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Create policy id for the wallet and a given mint/burn script. 
     * Create Policy Id
     * @param param the request object
     */
    public postPolicyId(param: KeysApiPostPolicyIdRequest, options?: Configuration): Promise<PostPolicyId202Response> {
        return this.api.postPolicyId(param.walletId, param.postPolicyIdRequest,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Create policy key for the wallet.  In order to be able to mint/burn assets with `POST Construct` endpoint there needs to be a policy key set for the wallet. Invoking this endpoint would be required for all wallets instantiated before introducing mint/burn feature prior to making a mint/burn transaction from them.  To get a hash of the policy key instead of the policy key, use query parameter `hash=true`. 
     * Create Policy Key
     * @param param the request object
     */
    public postPolicyKey(param: KeysApiPostPolicyKeyRequest, options?: Configuration): Promise<string> {
        return this.api.postPolicyKey(param.walletId, param.postPolicyKeyRequest,  options).toPromise();
    }

}

import { ObservableMigrationsApi } from "./ObservableAPI";
import { MigrationsApiRequestFactory, MigrationsApiResponseProcessor} from "../apis/MigrationsApi";

export interface MigrationsApiCreateShelleyWalletMigrationPlanRequest {
    /**
     * 
     * @type string
     * @memberof MigrationsApicreateShelleyWalletMigrationPlan
     */
    walletId: string
    /**
     * 
     * @type CreateShelleyWalletMigrationPlanRequest
     * @memberof MigrationsApicreateShelleyWalletMigrationPlan
     */
    createShelleyWalletMigrationPlanRequest: CreateShelleyWalletMigrationPlanRequest
}

export interface MigrationsApiMigrateShelleyWalletRequest {
    /**
     * 
     * @type string
     * @memberof MigrationsApimigrateShelleyWallet
     */
    walletId: string
    /**
     * 
     * @type MigrateShelleyWalletRequest
     * @memberof MigrationsApimigrateShelleyWallet
     */
    migrateShelleyWalletRequest: MigrateShelleyWalletRequest
}

export class ObjectMigrationsApi {
    private api: ObservableMigrationsApi

    public constructor(configuration: Configuration, requestFactory?: MigrationsApiRequestFactory, responseProcessor?: MigrationsApiResponseProcessor) {
        this.api = new ObservableMigrationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generate a plan for migrating the UTxO balance of this wallet to another wallet, without executing the plan.  This operation generates a plan that transfers as much of the wallet's balance as possible, by creating as many selections as may be necessary to migrate the entire balance.  Each selection created is the basis for a transaction.  In order to minimize the total transaction fee required, UTxO entries are coalesced together to the greatest extent possible in the resulting selections. No attempt is made to preserve the wallet's UTxO distribution.  The plan is generated on a best-effort basis. If there is insufficient ada available to pay for the entire UTxO set to be migrated, then only a subset of the wallet's UTxO set will be included in the resultant plan. 
     * Create a migration plan
     * @param param the request object
     */
    public createShelleyWalletMigrationPlan(param: MigrationsApiCreateShelleyWalletMigrationPlanRequest, options?: Configuration): Promise<CreateShelleyWalletMigrationPlan202Response> {
        return this.api.createShelleyWalletMigrationPlan(param.walletId, param.createShelleyWalletMigrationPlanRequest,  options).toPromise();
    }

    /**
     * Migrate the UTxO balance of this wallet to the given set of addresses.  This operation will attempt to transfer as much of the wallet's balance as possible to the given set of addresses, by creating and submitting as many transactions as may be necessary to migrate the entire balance.  In order to minimize the total transaction fee required, UTxO entries are coalesced together to the greatest extent possible in the resulting transactions. No attempt is made to preserve the wallet's UTxO distribution.  This operation is performed on a best-effort basis. If there is insufficient ada available to pay for the entire UTxO set to be migrated, then only a subset of the wallet's UTxO set will be migrated.  A typical use of this operation would be to move all funds from an old wallet to a new wallet, by providing addresses that belong to the new wallet. 
     * Migrate
     * @param param the request object
     */
    public migrateShelleyWallet(param: MigrationsApiMigrateShelleyWalletRequest, options?: Configuration): Promise<Array<ListTransactions200ResponseInner>> {
        return this.api.migrateShelleyWallet(param.walletId, param.migrateShelleyWalletRequest,  options).toPromise();
    }

}

import { ObservableNetworkApi } from "./ObservableAPI";
import { NetworkApiRequestFactory, NetworkApiResponseProcessor} from "../apis/NetworkApi";

export interface NetworkApiGetNetworkClockRequest {
    /**
     * NTP checks are cached for short duration to avoid sending too many queries to the central NTP servers. In some cases however, a client may want to force a new check.  When this flag is set, the request **will block** until NTP server responds or will timeout after a while without any answer from the NTP server. 
     * @type boolean
     * @memberof NetworkApigetNetworkClock
     */
    forceNtpCheck?: boolean
}

export interface NetworkApiGetNetworkInformationRequest {
}

export interface NetworkApiGetNetworkParametersRequest {
}

export class ObjectNetworkApi {
    private api: ObservableNetworkApi

    public constructor(configuration: Configuration, requestFactory?: NetworkApiRequestFactory, responseProcessor?: NetworkApiResponseProcessor) {
        this.api = new ObservableNetworkApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * Clock
     * @param param the request object
     */
    public getNetworkClock(param: NetworkApiGetNetworkClockRequest = {}, options?: Configuration): Promise<GetNetworkClock200Response> {
        return this.api.getNetworkClock(param.forceNtpCheck,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * Information
     * @param param the request object
     */
    public getNetworkInformation(param: NetworkApiGetNetworkInformationRequest = {}, options?: Configuration): Promise<GetNetworkInformation200Response> {
        return this.api.getNetworkInformation( options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Returns the set of network parameters for the current epoch. 
     * Parameters
     * @param param the request object
     */
    public getNetworkParameters(param: NetworkApiGetNetworkParametersRequest = {}, options?: Configuration): Promise<GetNetworkParameters200Response> {
        return this.api.getNetworkParameters( options).toPromise();
    }

}

import { ObservableProxyApi } from "./ObservableAPI";
import { ProxyApiRequestFactory, ProxyApiResponseProcessor} from "../apis/ProxyApi";

export interface ProxyApiPostExternalTransactionRequest {
    /**
     * 
     * @type HttpFile
     * @memberof ProxyApipostExternalTransaction
     */
    body?: HttpFile
}

export class ObjectProxyApi {
    private api: ObservableProxyApi

    public constructor(configuration: Configuration, requestFactory?: ProxyApiRequestFactory, responseProcessor?: ProxyApiResponseProcessor) {
        this.api = new ObservableProxyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Submits a transaction that was created and signed outside of cardano-wallet.  NOTE: Unlike the `submitTransaction` endpoint, there are no guarantees that a transaction accepted by this endpoint will actually be included in the chain. It's up to the caller to retry submission until the transaction is confirmed. 
     * Submit External Transaction
     * @param param the request object
     */
    public postExternalTransaction(param: ProxyApiPostExternalTransactionRequest = {}, options?: Configuration): Promise<SubmitTransaction202Response> {
        return this.api.postExternalTransaction(param.body,  options).toPromise();
    }

}

import { ObservableSettingsApi } from "./ObservableAPI";
import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";

export interface SettingsApiGetSettingsRequest {
}

export interface SettingsApiPutSettingsRequest {
    /**
     * 
     * @type PutSettingsRequest
     * @memberof SettingsApiputSettings
     */
    putSettingsRequest: PutSettingsRequest
}

export class ObjectSettingsApi {
    private api: ObservableSettingsApi

    public constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return the current settings. 
     * Get settings
     * @param param the request object
     */
    public getSettings(param: SettingsApiGetSettingsRequest = {}, options?: Configuration): Promise<GetSettings200Response> {
        return this.api.getSettings( options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Overwrite current settings. 
     * Update settings
     * @param param the request object
     */
    public putSettings(param: SettingsApiPutSettingsRequest, options?: Configuration): Promise<void> {
        return this.api.putSettings(param.putSettingsRequest,  options).toPromise();
    }

}

import { ObservableSharedAddressesApi } from "./ObservableAPI";
import { SharedAddressesApiRequestFactory, SharedAddressesApiResponseProcessor} from "../apis/SharedAddressesApi";

export interface SharedAddressesApiListSharedAddressesRequest {
    /**
     * 
     * @type string
     * @memberof SharedAddressesApilistSharedAddresses
     */
    walletId: string
    /**
     * An optional filter on the address state.
     * @type &#39;used&#39; | &#39;unused&#39;
     * @memberof SharedAddressesApilistSharedAddresses
     */
    state?: 'used' | 'unused'
}

export class ObjectSharedAddressesApi {
    private api: ObservableSharedAddressesApi

    public constructor(configuration: Configuration, requestFactory?: SharedAddressesApiRequestFactory, responseProcessor?: SharedAddressesApiResponseProcessor) {
        this.api = new ObservableSharedAddressesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known addresses, ordered from newest to oldest 
     * List
     * @param param the request object
     */
    public listSharedAddresses(param: SharedAddressesApiListSharedAddressesRequest, options?: Configuration): Promise<Array<ListAddresses200ResponseInner>> {
        return this.api.listSharedAddresses(param.walletId, param.state,  options).toPromise();
    }

}

import { ObservableSharedKeysApi } from "./ObservableAPI";
import { SharedKeysApiRequestFactory, SharedKeysApiResponseProcessor} from "../apis/SharedKeysApi";

export interface SharedKeysApiDecodeSharedTransactionRequest {
    /**
     * 
     * @type string
     * @memberof SharedKeysApidecodeSharedTransaction
     */
    walletId: string
    /**
     * 
     * @type DecodeTransactionRequest
     * @memberof SharedKeysApidecodeSharedTransaction
     */
    decodeTransactionRequest: DecodeTransactionRequest
}

export interface SharedKeysApiGetAccountKeySharedRequest {
    /**
     * 
     * @type string
     * @memberof SharedKeysApigetAccountKeyShared
     */
    walletId: string
}

export interface SharedKeysApiGetSharedWalletKeyRequest {
    /**
     * 
     * @type string
     * @memberof SharedKeysApigetSharedWalletKey
     */
    walletId: string
    /**
     * 
     * @type &#39;utxo_external&#39; | &#39;utxo_internal&#39; | &#39;mutable_account&#39;
     * @memberof SharedKeysApigetSharedWalletKey
     */
    role: 'utxo_external' | 'utxo_internal' | 'mutable_account'
    /**
     * 
     * @type string
     * @memberof SharedKeysApigetSharedWalletKey
     */
    index: string
    /**
     * Whether to return the key hash instead of the key. 
     * @type boolean
     * @memberof SharedKeysApigetSharedWalletKey
     */
    hash?: boolean
}

export interface SharedKeysApiPostAccountKeySharedRequest {
    /**
     * 
     * @type string
     * @memberof SharedKeysApipostAccountKeyShared
     */
    walletId: string
    /**
     * 
     * @type string
     * @memberof SharedKeysApipostAccountKeyShared
     */
    index: string
    /**
     * 
     * @type PostAccountKeySharedRequest
     * @memberof SharedKeysApipostAccountKeyShared
     */
    postAccountKeySharedRequest: PostAccountKeySharedRequest
}

export class ObjectSharedKeysApi {
    private api: ObservableSharedKeysApi

    public constructor(configuration: Configuration, requestFactory?: SharedKeysApiRequestFactory, responseProcessor?: SharedKeysApiResponseProcessor) {
        this.api = new ObservableSharedKeysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>unstable</strong></p>  Decode a serialized transaction. 
     * Decode
     * @param param the request object
     */
    public decodeSharedTransaction(param: SharedKeysApiDecodeSharedTransactionRequest, options?: Configuration): Promise<DecodeTransaction202Response> {
        return this.api.decodeSharedTransaction(param.walletId, param.decodeTransactionRequest,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> Retrieve the account public key of this shared wallet.  To get an extended public key, instead of the public key, use query parameter `format=extended`. For non-extended public key use `format=non_extended` or omit query parameter. 
     * Get Account Public Key
     * @param param the request object
     */
    public getAccountKeyShared(param: SharedKeysApiGetAccountKeySharedRequest, options?: Configuration): Promise<string> {
        return this.api.getAccountKeyShared(param.walletId,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> Return a public key for a given role and derivation index for a shared wallet.  To get a hash of the public key, instead of the public key, use query parameter `hash=true`.  <b>Note:</b> Only `Soft` indexes are supported by this endpoint. 
     * Get Public Key
     * @param param the request object
     */
    public getSharedWalletKey(param: SharedKeysApiGetSharedWalletKeyRequest, options?: Configuration): Promise<string> {
        return this.api.getSharedWalletKey(param.walletId, param.role, param.index, param.hash,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> Derive an account public key for any account index. For this key derivation to be possible, the wallet must have been created from mnemonic.  <b>Note:</b> Only _Hardened_ indexes are supported by this endpoint. 
     * Create Account Public Key
     * @param param the request object
     */
    public postAccountKeyShared(param: SharedKeysApiPostAccountKeySharedRequest, options?: Configuration): Promise<string> {
        return this.api.postAccountKeyShared(param.walletId, param.index, param.postAccountKeySharedRequest,  options).toPromise();
    }

}

import { ObservableSharedTransactionsApi } from "./ObservableAPI";
import { SharedTransactionsApiRequestFactory, SharedTransactionsApiResponseProcessor} from "../apis/SharedTransactionsApi";

export interface SharedTransactionsApiConstructSharedTransactionRequest {
    /**
     * 
     * @type string
     * @memberof SharedTransactionsApiconstructSharedTransaction
     */
    walletId: string
    /**
     * 
     * @type ConstructTransactionRequest
     * @memberof SharedTransactionsApiconstructSharedTransaction
     */
    constructTransactionRequest: ConstructTransactionRequest
}

export class ObjectSharedTransactionsApi {
    private api: ObservableSharedTransactionsApi

    public constructor(configuration: Configuration, requestFactory?: SharedTransactionsApiRequestFactory, responseProcessor?: SharedTransactionsApiResponseProcessor) {
        this.api = new ObservableSharedTransactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>under development</strong></p>  Create a transaction to be signed from the shared wallet.  Works for the following fields:   - payments   - metadata   - validity_interval 
     * Construct
     * @param param the request object
     */
    public constructSharedTransaction(param: SharedTransactionsApiConstructSharedTransactionRequest, options?: Configuration): Promise<ConstructTransaction202Response> {
        return this.api.constructSharedTransaction(param.walletId, param.constructTransactionRequest,  options).toPromise();
    }

}

import { ObservableSharedWalletsApi } from "./ObservableAPI";
import { SharedWalletsApiRequestFactory, SharedWalletsApiResponseProcessor} from "../apis/SharedWalletsApi";

export interface SharedWalletsApiDeleteSharedWalletRequest {
    /**
     * 
     * @type string
     * @memberof SharedWalletsApideleteSharedWallet
     */
    walletId: string
}

export interface SharedWalletsApiGetSharedWalletRequest {
    /**
     * 
     * @type string
     * @memberof SharedWalletsApigetSharedWallet
     */
    walletId: string
}

export interface SharedWalletsApiListSharedWalletsRequest {
}

export interface SharedWalletsApiPatchSharedWalletInDelegationRequest {
    /**
     * 
     * @type string
     * @memberof SharedWalletsApipatchSharedWalletInDelegation
     */
    walletId: string
    /**
     * 
     * @type { [key: string]: string; }
     * @memberof SharedWalletsApipatchSharedWalletInDelegation
     */
    requestBody: { [key: string]: string; }
}

export interface SharedWalletsApiPatchSharedWalletInPaymentRequest {
    /**
     * 
     * @type string
     * @memberof SharedWalletsApipatchSharedWalletInPayment
     */
    walletId: string
    /**
     * 
     * @type { [key: string]: string; }
     * @memberof SharedWalletsApipatchSharedWalletInPayment
     */
    requestBody: { [key: string]: string; }
}

export interface SharedWalletsApiPostSharedWalletRequest {
    /**
     * 
     * @type PostSharedWalletRequest
     * @memberof SharedWalletsApipostSharedWallet
     */
    postSharedWalletRequest: PostSharedWalletRequest
}

export class ObjectSharedWalletsApi {
    private api: ObservableSharedWalletsApi

    public constructor(configuration: Configuration, requestFactory?: SharedWalletsApiRequestFactory, responseProcessor?: SharedWalletsApiResponseProcessor) {
        this.api = new ObservableSharedWalletsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * Delete
     * @param param the request object
     */
    public deleteSharedWallet(param: SharedWalletsApiDeleteSharedWalletRequest, options?: Configuration): Promise<void> {
        return this.api.deleteSharedWallet(param.walletId,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>⚠ under development</strong></p> Get a shared wallet for a given wallet id. 
     * Get
     * @param param the request object
     */
    public getSharedWallet(param: SharedWalletsApiGetSharedWalletRequest, options?: Configuration): Promise<ListSharedWallets200ResponseInner> {
        return this.api.getSharedWallet(param.walletId,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>⚠ under development</strong></p>  Return a list of known shared wallets, ordered from oldest to newest. 
     * List
     * @param param the request object
     */
    public listSharedWallets(param: SharedWalletsApiListSharedWalletsRequest = {}, options?: Configuration): Promise<Array<ListSharedWallets200ResponseInner>> {
        return this.api.listSharedWallets( options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>⚠ under development</strong></p> Update delegation script template for a given shared wallet by updating/adding account public key for cosigner. Updating the shared wallet account key results in an error. Also updating is enabled only for pending shared wallet, ie., the wallet that has a missing account public key for any cosigner. 
     * Update Delegation
     * @param param the request object
     */
    public patchSharedWalletInDelegation(param: SharedWalletsApiPatchSharedWalletInDelegationRequest, options?: Configuration): Promise<ListSharedWallets200ResponseInner> {
        return this.api.patchSharedWalletInDelegation(param.walletId, param.requestBody,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>⚠ under development</strong></p> Update payment script template for a given shared wallet by updating/adding account public key for cosigner. Updating the shared wallet account key results in an error. Also updating is enabled only for pending shared wallet, ie., the wallet that has a missing account public key for any cosigner. 
     * Update Payment
     * @param param the request object
     */
    public patchSharedWalletInPayment(param: SharedWalletsApiPatchSharedWalletInPaymentRequest, options?: Configuration): Promise<ListSharedWallets200ResponseInner> {
        return this.api.patchSharedWalletInPayment(param.walletId, param.requestBody,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>⚠ under development</strong></p> Create a shared wallet from either an account public key and script templates or mnemonic and script templates. 
     * Create
     * @param param the request object
     */
    public postSharedWallet(param: SharedWalletsApiPostSharedWalletRequest, options?: Configuration): Promise<ListSharedWallets200ResponseInner> {
        return this.api.postSharedWallet(param.postSharedWalletRequest,  options).toPromise();
    }

}

import { ObservableStakePoolsApi } from "./ObservableAPI";
import { StakePoolsApiRequestFactory, StakePoolsApiResponseProcessor} from "../apis/StakePoolsApi";

export interface StakePoolsApiGetDelegationFeeRequest {
    /**
     * 
     * @type string
     * @memberof StakePoolsApigetDelegationFee
     */
    walletId: string
}

export interface StakePoolsApiGetMaintenanceActionsRequest {
}

export interface StakePoolsApiJoinStakePoolRequest {
    /**
     * 
     * @type string
     * @memberof StakePoolsApijoinStakePool
     */
    stakePoolId: string
    /**
     * 
     * @type string
     * @memberof StakePoolsApijoinStakePool
     */
    walletId: string
    /**
     * 
     * @type QuitStakePoolRequest
     * @memberof StakePoolsApijoinStakePool
     */
    quitStakePoolRequest: QuitStakePoolRequest
}

export interface StakePoolsApiListStakeKeysRequest {
    /**
     * 
     * @type string
     * @memberof StakePoolsApilistStakeKeys
     */
    walletId: string
}

export interface StakePoolsApiListStakePoolsRequest {
    /**
     * The stake the user intends to delegate in Lovelace. Required. 
     * @type number
     * @memberof StakePoolsApilistStakePools
     */
    stake: number
}

export interface StakePoolsApiPostMaintenanceActionRequest {
    /**
     * 
     * @type PostMaintenanceActionRequest
     * @memberof StakePoolsApipostMaintenanceAction
     */
    postMaintenanceActionRequest: PostMaintenanceActionRequest
}

export interface StakePoolsApiQuitStakePoolRequest {
    /**
     * 
     * @type string
     * @memberof StakePoolsApiquitStakePool
     */
    walletId: string
    /**
     * 
     * @type QuitStakePoolRequest
     * @memberof StakePoolsApiquitStakePool
     */
    quitStakePoolRequest: QuitStakePoolRequest
}

export class ObjectStakePoolsApi {
    private api: ObservableStakePoolsApi

    public constructor(configuration: Configuration, requestFactory?: StakePoolsApiRequestFactory, responseProcessor?: StakePoolsApiResponseProcessor) {
        this.api = new ObservableStakePoolsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Estimate fee for joining or leaving a stake pool. Note that it is an estimation because a delegation induces a transaction for which coins have to be selected randomly within the wallet. Because of this randomness, fees can only be estimated. 
     * Estimate Fee
     * @param param the request object
     */
    public getDelegationFee(param: StakePoolsApiGetDelegationFeeRequest, options?: Configuration): Promise<PostTransactionFee202Response> {
        return this.api.getDelegationFee(param.walletId,  options).toPromise();
    }

    /**
     * Returns the current status of the stake pools maintenance actions. 
     * View Maintenance Actions
     * @param param the request object
     */
    public getMaintenanceActions(param: StakePoolsApiGetMaintenanceActionsRequest = {}, options?: Configuration): Promise<GetMaintenanceActions200Response> {
        return this.api.getMaintenanceActions( options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Delegate all (current and future) addresses from the given wallet to the given stake pool.  <strong>Note:</strong> Bech32-encoded stake pool identifiers can vary in length. 
     * Join
     * @param param the request object
     */
    public joinStakePool(param: StakePoolsApiJoinStakePoolRequest, options?: Configuration): Promise<ListTransactions200ResponseInner> {
        return this.api.joinStakePool(param.stakePoolId, param.walletId, param.quitStakePoolRequest,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>Experimental</strong></p>  List stake-keys relevant to the wallet, and how much ada is associated with each. 
     * List Stake Keys
     * @param param the request object
     */
    public listStakeKeys(param: StakePoolsApiListStakeKeysRequest, options?: Configuration): Promise<ListStakeKeys200Response> {
        return this.api.listStakeKeys(param.walletId,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  List all known stake pools ordered by descending `non_myopic_member_rewards`. The `non_myopic_member_rewards` — and thus the ordering — depends on the `?stake` query parameter.  Some pools _may_ also have metadata attached to them. 
     * List
     * @param param the request object
     */
    public listStakePools(param: StakePoolsApiListStakePoolsRequest, options?: Configuration): Promise<Array<ListStakePools200ResponseInner>> {
        return this.api.listStakePools(param.stake,  options).toPromise();
    }

    /**
     * Performs maintenance actions on stake pools, such as triggering metadata garbage collection.  Actions may not be instantaneous. 
     * Trigger Maintenance Actions
     * @param param the request object
     */
    public postMaintenanceAction(param: StakePoolsApiPostMaintenanceActionRequest, options?: Configuration): Promise<void> {
        return this.api.postMaintenanceAction(param.postMaintenanceActionRequest,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Stop delegating completely. The wallet's stake will become inactive.  Any current rewards will automatically withdrawn.  > ⚠️  Disclaimer ⚠️ > > This endpoint historically use to take a stake pool id as a path parameter. > However, retiring from delegation is ubiquitous and not tied to a particular > stake pool. For backward-compatibility reasons, sending stake pool ids as path > parameter will still be accepted by the server but new integrations are > encouraged to provide a placeholder asterisk `*` instead. 
     * Quit
     * @param param the request object
     */
    public quitStakePool(param: StakePoolsApiQuitStakePoolRequest, options?: Configuration): Promise<ListTransactions200ResponseInner> {
        return this.api.quitStakePool(param.walletId, param.quitStakePoolRequest,  options).toPromise();
    }

}

import { ObservableTransactionsApi } from "./ObservableAPI";
import { TransactionsApiRequestFactory, TransactionsApiResponseProcessor} from "../apis/TransactionsApi";

export interface TransactionsApiDeleteTransactionRequest {
    /**
     * 
     * @type string
     * @memberof TransactionsApideleteTransaction
     */
    walletId: string
    /**
     * 
     * @type string
     * @memberof TransactionsApideleteTransaction
     */
    transactionId: string
}

export interface TransactionsApiGetTransactionRequest {
    /**
     * 
     * @type string
     * @memberof TransactionsApigetTransaction
     */
    walletId: string
    /**
     * 
     * @type string
     * @memberof TransactionsApigetTransaction
     */
    transactionId: string
    /**
     * When present (or equal to true) in the query, the metadata format for the transaction(s) in the output will be untyped plain json as specified in [CIP 25](https://cips.cardano.org/cips/cip25/) 
     * @type boolean
     * @memberof TransactionsApigetTransaction
     */
    simpleMetadata?: boolean
}

export interface TransactionsApiListTransactionsRequest {
    /**
     * 
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    walletId: string
    /**
     * An optional start time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: &#x60;2008-08-08T08:08:08Z&#x60; 
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    start?: string
    /**
     * An optional end time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: &#x60;2008-08-08T08:08:08Z&#x60; 
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    end?: string
    /**
     * An optional sort order.
     * @type &#39;ascending&#39; | &#39;descending&#39;
     * @memberof TransactionsApilistTransactions
     */
    order?: 'ascending' | 'descending'
    /**
     * Returns only transactions that have at least one withdrawal above the given amount. This is particularly useful when set to &#x60;1&#x60; in order to list the withdrawal history of a wallet. 
     * @type number
     * @memberof TransactionsApilistTransactions
     */
    minWithdrawal?: number
    /**
     * When present (or equal to true) in the query, the metadata format for the transaction(s) in the output will be untyped plain json as specified in [CIP 25](https://cips.cardano.org/cips/cip25/) 
     * @type boolean
     * @memberof TransactionsApilistTransactions
     */
    simpleMetadata?: boolean
}

export interface TransactionsApiPostTransactionRequest {
    /**
     * 
     * @type string
     * @memberof TransactionsApipostTransaction
     */
    walletId: string
    /**
     * 
     * @type PostTransactionRequest
     * @memberof TransactionsApipostTransaction
     */
    postTransactionRequest: PostTransactionRequest
}

export interface TransactionsApiPostTransactionFeeRequest {
    /**
     * 
     * @type string
     * @memberof TransactionsApipostTransactionFee
     */
    walletId: string
    /**
     * 
     * @type PostTransactionFeeRequest
     * @memberof TransactionsApipostTransactionFee
     */
    postTransactionFeeRequest: PostTransactionFeeRequest
}

export class ObjectTransactionsApi {
    private api: ObservableTransactionsApi

    public constructor(configuration: Configuration, requestFactory?: TransactionsApiRequestFactory, responseProcessor?: TransactionsApiResponseProcessor) {
        this.api = new ObservableTransactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Forget pending transaction. Importantly, a transaction, when sent, cannot be cancelled. One can only request forgetting about it in order to try spending (concurrently) the same UTxO in another transaction. But, the transaction may still show up later in a block and therefore, appear in the wallet. 
     * Forget
     * @param param the request object
     */
    public deleteTransaction(param: TransactionsApiDeleteTransactionRequest, options?: Configuration): Promise<void> {
        return this.api.deleteTransaction(param.walletId, param.transactionId,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Get transaction by id. 
     * Get
     * @param param the request object
     */
    public getTransaction(param: TransactionsApiGetTransactionRequest, options?: Configuration): Promise<ListTransactions200ResponseInner> {
        return this.api.getTransaction(param.walletId, param.transactionId, param.simpleMetadata,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Lists all incoming and outgoing wallet's transactions. 
     * List
     * @param param the request object
     */
    public listTransactions(param: TransactionsApiListTransactionsRequest, options?: Configuration): Promise<Array<ListTransactions200ResponseInner>> {
        return this.api.listTransactions(param.walletId, param.start, param.end, param.order, param.minWithdrawal, param.simpleMetadata,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Create and send transaction from the wallet. 
     * Create
     * @param param the request object
     */
    public postTransaction(param: TransactionsApiPostTransactionRequest, options?: Configuration): Promise<ListTransactions200ResponseInner> {
        return this.api.postTransaction(param.walletId, param.postTransactionRequest,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Estimate fee for the transaction. The estimate is made by assembling multiple transactions and analyzing the distribution of their fees. The estimated_max is the highest fee observed, and the estimated_min is the fee which is lower than at least 90% of the fees observed. 
     * Estimate Fee
     * @param param the request object
     */
    public postTransactionFee(param: TransactionsApiPostTransactionFeeRequest, options?: Configuration): Promise<PostTransactionFee202Response> {
        return this.api.postTransactionFee(param.walletId, param.postTransactionFeeRequest,  options).toPromise();
    }

}

import { ObservableTransactionsNewApi } from "./ObservableAPI";
import { TransactionsNewApiRequestFactory, TransactionsNewApiResponseProcessor} from "../apis/TransactionsNewApi";

export interface TransactionsNewApiBalanceTransactionRequest {
    /**
     * 
     * @type string
     * @memberof TransactionsNewApibalanceTransaction
     */
    walletId: string
    /**
     * 
     * @type BalanceTransactionRequest
     * @memberof TransactionsNewApibalanceTransaction
     */
    balanceTransactionRequest: BalanceTransactionRequest
}

export interface TransactionsNewApiConstructTransactionRequest {
    /**
     * 
     * @type string
     * @memberof TransactionsNewApiconstructTransaction
     */
    walletId: string
    /**
     * 
     * @type ConstructTransactionRequest
     * @memberof TransactionsNewApiconstructTransaction
     */
    constructTransactionRequest: ConstructTransactionRequest
}

export interface TransactionsNewApiDecodeTransactionRequest {
    /**
     * 
     * @type string
     * @memberof TransactionsNewApidecodeTransaction
     */
    walletId: string
    /**
     * 
     * @type DecodeTransactionRequest
     * @memberof TransactionsNewApidecodeTransaction
     */
    decodeTransactionRequest: DecodeTransactionRequest
}

export interface TransactionsNewApiSignTransactionRequest {
    /**
     * 
     * @type string
     * @memberof TransactionsNewApisignTransaction
     */
    walletId: string
    /**
     * 
     * @type SignTransactionRequest
     * @memberof TransactionsNewApisignTransaction
     */
    signTransactionRequest: SignTransactionRequest
}

export interface TransactionsNewApiSubmitTransactionRequest {
    /**
     * 
     * @type string
     * @memberof TransactionsNewApisubmitTransaction
     */
    walletId: string
    /**
     * 
     * @type SubmitTransactionRequest
     * @memberof TransactionsNewApisubmitTransaction
     */
    submitTransactionRequest: SubmitTransactionRequest
}

export class ObjectTransactionsNewApi {
    private api: ObservableTransactionsNewApi

    public constructor(configuration: Configuration, requestFactory?: TransactionsNewApiRequestFactory, responseProcessor?: TransactionsNewApiResponseProcessor) {
        this.api = new ObservableTransactionsNewApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>under development</strong></p> Balance a transaction body of a given transaction, add needed inputs/outputs, so as the transaction can be signed from the wallet. 
     * Balance
     * @param param the request object
     */
    public balanceTransaction(param: TransactionsNewApiBalanceTransactionRequest, options?: Configuration): Promise<BalanceTransaction202Response> {
        return this.api.balanceTransaction(param.walletId, param.balanceTransactionRequest,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>under development</strong></p>  Create a transaction to be signed from the wallet. 
     * Construct
     * @param param the request object
     */
    public constructTransaction(param: TransactionsNewApiConstructTransactionRequest, options?: Configuration): Promise<ConstructTransaction202Response> {
        return this.api.constructTransaction(param.walletId, param.constructTransactionRequest,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>unstable</strong></p>  Decode a serialized transaction. 
     * Decode
     * @param param the request object
     */
    public decodeTransaction(param: TransactionsNewApiDecodeTransactionRequest, options?: Configuration): Promise<DecodeTransaction202Response> {
        return this.api.decodeTransaction(param.walletId, param.decodeTransactionRequest,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>under development</strong></p>  Signs a serialised transaction, returning the modified transaction.  This endpoint will add new witnesses using the keys available to this wallet. Any existing witnesses will remain in the witness set. 
     * Sign
     * @param param the request object
     */
    public signTransaction(param: TransactionsNewApiSignTransactionRequest, options?: Configuration): Promise<SignTransaction202Response> {
        return this.api.signTransaction(param.walletId, param.signTransactionRequest,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> Submit a transaction that was already created and signed. Fails for foreign transactions that is transactions which lack the wallet's inputs and withdrawals. 
     * Submit
     * @param param the request object
     */
    public submitTransaction(param: TransactionsNewApiSubmitTransactionRequest, options?: Configuration): Promise<SubmitTransaction202Response> {
        return this.api.submitTransaction(param.walletId, param.submitTransactionRequest,  options).toPromise();
    }

}

import { ObservableUtilsApi } from "./ObservableAPI";
import { UtilsApiRequestFactory, UtilsApiResponseProcessor} from "../apis/UtilsApi";

export interface UtilsApiGetCurrentSmashHealthRequest {
    /**
     * check this url for health instead of the currently configured one
     * @type string
     * @memberof UtilsApigetCurrentSmashHealth
     */
    url?: string
}

export class ObjectUtilsApi {
    private api: ObservableUtilsApi

    public constructor(configuration: Configuration, requestFactory?: UtilsApiRequestFactory, responseProcessor?: UtilsApiResponseProcessor) {
        this.api = new ObservableUtilsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get health status of the currently active SMASH server. 
     * Current SMASH health
     * @param param the request object
     */
    public getCurrentSmashHealth(param: UtilsApiGetCurrentSmashHealthRequest = {}, options?: Configuration): Promise<GetCurrentSmashHealth200Response> {
        return this.api.getCurrentSmashHealth(param.url,  options).toPromise();
    }

}

import { ObservableWalletsApi } from "./ObservableAPI";
import { WalletsApiRequestFactory, WalletsApiResponseProcessor} from "../apis/WalletsApi";

export interface WalletsApiDeleteWalletRequest {
    /**
     * 
     * @type string
     * @memberof WalletsApideleteWallet
     */
    walletId: string
}

export interface WalletsApiGetUTxOsStatisticsRequest {
    /**
     * 
     * @type string
     * @memberof WalletsApigetUTxOsStatistics
     */
    walletId: string
}

export interface WalletsApiGetWalletRequest {
    /**
     * 
     * @type string
     * @memberof WalletsApigetWallet
     */
    walletId: string
}

export interface WalletsApiGetWalletUtxoSnapshotRequest {
    /**
     * 
     * @type string
     * @memberof WalletsApigetWalletUtxoSnapshot
     */
    walletId: string
}

export interface WalletsApiListWalletsRequest {
}

export interface WalletsApiPostWalletRequest {
    /**
     * 
     * @type PostWalletRequest
     * @memberof WalletsApipostWallet
     */
    postWalletRequest: PostWalletRequest
}

export interface WalletsApiPutWalletRequest {
    /**
     * 
     * @type string
     * @memberof WalletsApiputWallet
     */
    walletId: string
    /**
     * 
     * @type PutWalletRequest
     * @memberof WalletsApiputWallet
     */
    putWalletRequest: PutWalletRequest
}

export interface WalletsApiPutWalletPassphraseRequest {
    /**
     * 
     * @type string
     * @memberof WalletsApiputWalletPassphrase
     */
    walletId: string
    /**
     * 
     * @type PutWalletPassphraseRequest
     * @memberof WalletsApiputWalletPassphrase
     */
    putWalletPassphraseRequest: PutWalletPassphraseRequest
}

export class ObjectWalletsApi {
    private api: ObservableWalletsApi

    public constructor(configuration: Configuration, requestFactory?: WalletsApiRequestFactory, responseProcessor?: WalletsApiResponseProcessor) {
        this.api = new ObservableWalletsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * Delete
     * @param param the request object
     */
    public deleteWallet(param: WalletsApiDeleteWalletRequest, options?: Configuration): Promise<void> {
        return this.api.deleteWallet(param.walletId,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return the UTxOs distribution across the whole wallet, in the form of a histogram.  ```      │  100 ─      │      │                                 ┌───┐   10 ─                         ┌───┐   │   │                   ┌───┐      │                 ┌───┐   │   │   │   │                   │   │      │                 │   │   │   │   │   │   ┌───┐           │   │    1 ─ ┌───┐           │   │   │   │   │   │   │   │           │   │      │ │   │           │   │   │   │   │   │   │   │           │   │      │ │   │ │       │ │   │ │ │   │ ╷ │   │ ╷ │   │ ╷       ╷ │   │      └─┘   └─│───────│─┘   └─│─┘   └─│─┘   └─│─┘   └─│───────│─┘   └────            10μ₳    100μ₳   1000μ₳   0.1₳    1₳      10₳     100₳ ``` 
     * UTxO Statistics
     * @param param the request object
     */
    public getUTxOsStatistics(param: WalletsApiGetUTxOsStatisticsRequest, options?: Configuration): Promise<GetUTxOsStatistics200Response> {
        return this.api.getUTxOsStatistics(param.walletId,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * Get
     * @param param the request object
     */
    public getWallet(param: WalletsApiGetWalletRequest, options?: Configuration): Promise<ListWallets200ResponseInner> {
        return this.api.getWallet(param.walletId,  options).toPromise();
    }

    /**
     * Generate a snapshot of the wallet's UTxO set.  This endpoint is intended for debugging purposes. 
     * A snapshot of the wallet's UTxO set
     * @param param the request object
     */
    public getWalletUtxoSnapshot(param: WalletsApiGetWalletUtxoSnapshotRequest, options?: Configuration): Promise<GetWalletUtxoSnapshot200Response> {
        return this.api.getWalletUtxoSnapshot(param.walletId,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known wallets, ordered from oldest to newest. 
     * List
     * @param param the request object
     */
    public listWallets(param: WalletsApiListWalletsRequest = {}, options?: Configuration): Promise<Array<ListWallets200ResponseInner>> {
        return this.api.listWallets( options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Create and restore a wallet from a mnemonic sentence or account public key. 
     * Create / Restore
     * @param param the request object
     */
    public postWallet(param: WalletsApiPostWalletRequest, options?: Configuration): Promise<ListWallets200ResponseInner> {
        return this.api.postWallet(param.postWalletRequest,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * Update Metadata
     * @param param the request object
     */
    public putWallet(param: WalletsApiPutWalletRequest, options?: Configuration): Promise<ListWallets200ResponseInner> {
        return this.api.putWallet(param.walletId, param.putWalletRequest,  options).toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * Update Passphrase
     * @param param the request object
     */
    public putWalletPassphrase(param: WalletsApiPutWalletPassphraseRequest, options?: Configuration): Promise<void> {
        return this.api.putWalletPassphrase(param.walletId, param.putWalletPassphraseRequest,  options).toPromise();
    }

}
