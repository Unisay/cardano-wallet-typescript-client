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
import { ObservableAddressesApi } from './ObservableAPI';

import { AddressesApiRequestFactory, AddressesApiResponseProcessor} from "../apis/AddressesApi";
export class PromiseAddressesApi {
    private api: ObservableAddressesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AddressesApiRequestFactory,
        responseProcessor?: AddressesApiResponseProcessor
    ) {
        this.api = new ObservableAddressesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Give useful information about the structure of a given address. 
     * Inspect Address
     * @param addressId 
     */
    public inspectAddress(addressId: string, _options?: Configuration): Promise<InspectAddress200Response> {
        const result = this.api.inspectAddress(addressId, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known addresses, ordered from newest to oldest 
     * List
     * @param walletId 
     * @param state An optional filter on the address state.
     */
    public listAddresses(walletId: string, state?: 'used' | 'unused', _options?: Configuration): Promise<Array<ListAddresses200ResponseInner>> {
        const result = this.api.listAddresses(walletId, state, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Construct any address by specyfying credential for payment or delegation.  In Cardano, Addresses are made of three parts:  ``` *---------*---------*-----------* | NETWORK | PAYMENT | DELEGATION | *---------*---------*-----------* ```  The `NETWORK` part allows for distinguishing addresses between different networks like the mainnet or the testnet. It is implicitly handled by the server without you having to worry about it. The `PAYMENT` and `DELEGATION` parts however can be constructed similarly, using either:  - A public key - A script  The script itself is either constructed out of a public key, one of two timelocks, or one of the three following primitives:  - all - any - some  The timelock can determine validity as respect to the slot. `active_from slot` means the script is valid from the specified slot and onward. `active_until slot` means the script is valid until (not included) the specified slot.  Each of which contains one or more script(s) that can be either keys or primitives, and so on. Schematically:  ```                                    ┏─────────┓ SCRIPT = ──┬───────────────────────┤ pub key ├─────────────────────┬──            │                       ┗─────────┛                     │            │                       ┏──────────────────┓            │            ├───────────────────────┤ ACTIVE_FROM slot ├──── ───────┤            │                       ┗──────────────────┛            │            │                       ┏───────────────────┓           │            ├───────────────────────┤ ACTIVE_UNTIL slot ├───────────┤            │                       ┗───────────────────┛           │            │                                                       │            │  ╭─────╮   ╭────────╮                                 │            ├──┤ ALL ├───┤ SCRIPT ├─┬───────────────────────────────┤            │  ╰─────╯ ^ ╰────────╯ │                               │            │          │   ╭───╮    │                               │            │          └───┤ , ├────┘                               │            │              ╰───╯                                    │            │  ╭─────╮   ╭────────╮                                 │            ├──┤ ANY ├───┤ SCRIPT ├─┬───────────────────────────────┤            │  ╰─────╯ ^ ╰────────╯ │                               │            │          │   ╭───╮    │                               │            │          └───┤ , ├────┘                               │            │              ╰───╯                                    │            │  ╭──────╮ ╭──────────╮ ┏───┓ ╭──────╮   ╭────────╮    │            └──┤ SOME ├─┤ AT_LEAST ├─┤ n ├─┤ FROM ├───┤ SCRIPT ├─┬──┘               ╰──────╯ ╰──────────╯ ┗───┛ ╰──────╯ ^ ╰────────╯ │                                                    │   ╭───╮    │                                                    └───┤ , ├────┘                                                        ╰───╯ ``` 
     * Construct Address
     * @param postAnyAddressRequest 
     */
    public postAnyAddress(postAnyAddressRequest?: PostAnyAddressRequest, _options?: Configuration): Promise<PostAnyAddress202Response> {
        const result = this.api.postAnyAddress(postAnyAddressRequest, _options);
        return result.toPromise();
    }


}



import { ObservableAssetsApi } from './ObservableAPI';

import { AssetsApiRequestFactory, AssetsApiResponseProcessor} from "../apis/AssetsApi";
export class PromiseAssetsApi {
    private api: ObservableAssetsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetsApiRequestFactory,
        responseProcessor?: AssetsApiResponseProcessor
    ) {
        this.api = new ObservableAssetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch a single asset from its `policy_id` and `asset_name`, with its metadata if any.  The asset must be associated with the wallet. 
     * Get Asset
     * @param walletId 
     * @param policyId 
     * @param assetName 
     */
    public getAsset(walletId: string, policyId: string, assetName: string, _options?: Configuration): Promise<ListAssets200ResponseInner> {
        const result = this.api.getAsset(walletId, policyId, assetName, _options);
        return result.toPromise();
    }

    /**
     * Fetch the asset from `policy_id` with an empty name.  The asset must be associated with the wallet. 
     * Get Asset (empty name)
     * @param walletId 
     * @param policyId 
     */
    public getAssetDefault(walletId: string, policyId: string, _options?: Configuration): Promise<ListAssets200ResponseInner> {
        const result = this.api.getAssetDefault(walletId, policyId, _options);
        return result.toPromise();
    }

    /**
     * List all assets associated with the wallet, and their metadata if known.  An asset is _associated_ with a wallet if, at one point in history, it was spendable by the wallet. 
     * List Assets
     * @param walletId 
     */
    public listAssets(walletId: string, _options?: Configuration): Promise<Array<ListAssets200ResponseInner>> {
        const result = this.api.listAssets(walletId, _options);
        return result.toPromise();
    }


}



import { ObservableByronAddressesApi } from './ObservableAPI';

import { ByronAddressesApiRequestFactory, ByronAddressesApiResponseProcessor} from "../apis/ByronAddressesApi";
export class PromiseByronAddressesApi {
    private api: ObservableByronAddressesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ByronAddressesApiRequestFactory,
        responseProcessor?: ByronAddressesApiResponseProcessor
    ) {
        this.api = new ObservableByronAddressesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server. 
     * Create Address
     * @param walletId 
     * @param createAddressRequest 
     */
    public createAddress(walletId: string, createAddressRequest: CreateAddressRequest, _options?: Configuration): Promise<ListAddresses200ResponseInner> {
        const result = this.api.createAddress(walletId, createAddressRequest, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server. 
     * Import Address
     * @param walletId 
     * @param addressId 
     */
    public importAddress(walletId: string, addressId: string, _options?: Configuration): Promise<void> {
        const result = this.api.importAddress(walletId, addressId, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server. 
     * Import Addresses
     * @param walletId 
     * @param importAddressesRequest 
     */
    public importAddresses(walletId: string, importAddressesRequest: ImportAddressesRequest, _options?: Configuration): Promise<void> {
        const result = this.api.importAddresses(walletId, importAddressesRequest, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known addresses, ordered from newest to oldest for sequential wallets. Arbitrarily ordered for random wallets. 
     * List
     * @param walletId 
     * @param state An optional filter on the address state.
     */
    public listByronAddresses(walletId: string, state?: 'used' | 'unused', _options?: Configuration): Promise<Array<ListAddresses200ResponseInner>> {
        const result = this.api.listByronAddresses(walletId, state, _options);
        return result.toPromise();
    }


}



import { ObservableByronAssetsApi } from './ObservableAPI';

import { ByronAssetsApiRequestFactory, ByronAssetsApiResponseProcessor} from "../apis/ByronAssetsApi";
export class PromiseByronAssetsApi {
    private api: ObservableByronAssetsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ByronAssetsApiRequestFactory,
        responseProcessor?: ByronAssetsApiResponseProcessor
    ) {
        this.api = new ObservableByronAssetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch a single asset from its `policy_id` and `asset_name`, with its metadata if any.  The asset must be associated with the wallet. 
     * Get Asset
     * @param walletId 
     * @param policyId 
     * @param assetName 
     */
    public getByronAsset(walletId: string, policyId: string, assetName: string, _options?: Configuration): Promise<ListAssets200ResponseInner> {
        const result = this.api.getByronAsset(walletId, policyId, assetName, _options);
        return result.toPromise();
    }

    /**
     * Fetch the asset from `policy_id` with an empty name.  The asset must be associated with the wallet. 
     * Get Asset (empty name)
     * @param walletId 
     * @param policyId 
     */
    public getByronAssetDefault(walletId: string, policyId: string, _options?: Configuration): Promise<ListAssets200ResponseInner> {
        const result = this.api.getByronAssetDefault(walletId, policyId, _options);
        return result.toPromise();
    }

    /**
     * List all assets associated with the wallet, and their metadata if known.  An asset is _associated_ with a wallet if it is involved in a transaction of the wallet. 
     * List Assets
     * @param walletId 
     */
    public listByronAssets(walletId: string, _options?: Configuration): Promise<Array<ListAssets200ResponseInner>> {
        const result = this.api.listByronAssets(walletId, _options);
        return result.toPromise();
    }


}



import { ObservableByronCoinSelectionsApi } from './ObservableAPI';

import { ByronCoinSelectionsApiRequestFactory, ByronCoinSelectionsApiResponseProcessor} from "../apis/ByronCoinSelectionsApi";
export class PromiseByronCoinSelectionsApi {
    private api: ObservableByronCoinSelectionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ByronCoinSelectionsApiRequestFactory,
        responseProcessor?: ByronCoinSelectionsApiResponseProcessor
    ) {
        this.api = new ObservableByronCoinSelectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Select coins to cover the given set of payments.  Uses the <a href=\"https://iohk.io/blog/self-organisation-in-coin-selection/\"> Random-Improve coin selection algorithm</a>.  <b>Note: </b> Not supported for Byron random wallets. 
     * Random
     * @param walletId 
     * @param postByronTransactionFeeRequest 
     */
    public byronSelectCoins(walletId: string, postByronTransactionFeeRequest: PostByronTransactionFeeRequest, _options?: Configuration): Promise<ConstructTransaction202ResponseCoinSelection> {
        const result = this.api.byronSelectCoins(walletId, postByronTransactionFeeRequest, _options);
        return result.toPromise();
    }


}



import { ObservableByronMigrationsApi } from './ObservableAPI';

import { ByronMigrationsApiRequestFactory, ByronMigrationsApiResponseProcessor} from "../apis/ByronMigrationsApi";
export class PromiseByronMigrationsApi {
    private api: ObservableByronMigrationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ByronMigrationsApiRequestFactory,
        responseProcessor?: ByronMigrationsApiResponseProcessor
    ) {
        this.api = new ObservableByronMigrationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generate a plan for migrating the UTxO balance of this wallet to another wallet, without executing the plan.  This operation generates a plan that transfers as much of the wallet's balance as possible, by creating as many selections as may be necessary to migrate the entire balance.  Each selection created is the basis for a transaction.  In order to minimize the total transaction fee required, UTxO entries are coalesced together to the greatest extent possible in the resulting selections. No attempt is made to preserve the wallet's UTxO distribution.  The plan is generated on a best-effort basis. If there is insufficient ada available to pay for the entire UTxO set to be migrated, then only a subset of the wallet's UTxO set will be included in the resultant plan. 
     * Create a migration plan
     * @param walletId 
     * @param createShelleyWalletMigrationPlanRequest 
     */
    public createByronWalletMigrationPlan(walletId: string, createShelleyWalletMigrationPlanRequest: CreateShelleyWalletMigrationPlanRequest, _options?: Configuration): Promise<CreateShelleyWalletMigrationPlan202Response> {
        const result = this.api.createByronWalletMigrationPlan(walletId, createShelleyWalletMigrationPlanRequest, _options);
        return result.toPromise();
    }

    /**
     * Migrate the UTxO balance of this wallet to the given set of addresses.  This operation will attempt to transfer as much of the wallet's balance as possible to the given set of addresses, by creating and submitting as many transactions as may be necessary to migrate the entire balance.  In order to minimize the total transaction fee required, UTxO entries are coalesced together to the greatest extent possible in the resulting transactions. No attempt is made to preserve the wallet's UTxO distribution.  This operation is performed on a best-effort basis. If there is insufficient ada available to pay for the entire UTxO set to be migrated, then only a subset of the wallet's UTxO set will be migrated.  A typical use of this operation would be to move all funds from an old wallet to a new wallet, by providing addresses that belong to the new wallet. 
     * Migrate
     * @param walletId 
     * @param migrateByronWalletRequest 
     */
    public migrateByronWallet(walletId: string, migrateByronWalletRequest: MigrateByronWalletRequest, _options?: Configuration): Promise<Array<ListTransactions200ResponseInner>> {
        const result = this.api.migrateByronWallet(walletId, migrateByronWalletRequest, _options);
        return result.toPromise();
    }


}



import { ObservableByronTransactionsApi } from './ObservableAPI';

import { ByronTransactionsApiRequestFactory, ByronTransactionsApiResponseProcessor} from "../apis/ByronTransactionsApi";
export class PromiseByronTransactionsApi {
    private api: ObservableByronTransactionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ByronTransactionsApiRequestFactory,
        responseProcessor?: ByronTransactionsApiResponseProcessor
    ) {
        this.api = new ObservableByronTransactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Forget pending Byron transaction. Importantly, a transaction, when sent, cannot be cancelled. One can only request forgetting about it in order to try spending (concurrently) the same UTxO in another transaction. But, the transaction may still show up later in a block and therefore, appear in the wallet. 
     * Forget
     * @param walletId 
     * @param transactionId 
     */
    public deleteByronTransaction(walletId: string, transactionId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteByronTransaction(walletId, transactionId, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Get transaction by id. 
     * Get
     * @param walletId 
     * @param transactionId 
     */
    public getByronTransaction(walletId: string, transactionId: string, _options?: Configuration): Promise<ListTransactions200ResponseInner> {
        const result = this.api.getByronTransaction(walletId, transactionId, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  List all incoming and outgoing transactions for the given wallet. 
     * List
     * @param walletId 
     * @param start An optional start time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: &#x60;2008-08-08T08:08:08Z&#x60; 
     * @param end An optional end time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: &#x60;2008-08-08T08:08:08Z&#x60; 
     * @param order An optional sort order.
     */
    public listByronTransactions(walletId: string, start?: string, end?: string, order?: 'ascending' | 'descending', _options?: Configuration): Promise<Array<ListTransactions200ResponseInner>> {
        const result = this.api.listByronTransactions(walletId, start, end, order, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Create and send transaction from the wallet. 
     * Create
     * @param walletId 
     * @param postByronTransactionRequest 
     */
    public postByronTransaction(walletId: string, postByronTransactionRequest: PostByronTransactionRequest, _options?: Configuration): Promise<ListTransactions200ResponseInner> {
        const result = this.api.postByronTransaction(walletId, postByronTransactionRequest, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Estimate fee for the transaction. 
     * Estimate Fee
     * @param walletId 
     * @param postByronTransactionFeeRequest 
     */
    public postByronTransactionFee(walletId: string, postByronTransactionFeeRequest: PostByronTransactionFeeRequest, _options?: Configuration): Promise<PostTransactionFee202Response> {
        const result = this.api.postByronTransactionFee(walletId, postByronTransactionFeeRequest, _options);
        return result.toPromise();
    }


}



import { ObservableByronTransactionsNewApi } from './ObservableAPI';

import { ByronTransactionsNewApiRequestFactory, ByronTransactionsNewApiResponseProcessor} from "../apis/ByronTransactionsNewApi";
export class PromiseByronTransactionsNewApi {
    private api: ObservableByronTransactionsNewApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ByronTransactionsNewApiRequestFactory,
        responseProcessor?: ByronTransactionsNewApiResponseProcessor
    ) {
        this.api = new ObservableByronTransactionsNewApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>unstable</strong></p>  Create a transaction to be signed from the wallet. 
     * Construct
     * @param walletId 
     * @param constructTransactionRequest 
     */
    public constructByronTransaction(walletId: string, constructTransactionRequest: ConstructTransactionRequest, _options?: Configuration): Promise<ConstructTransaction202Response> {
        const result = this.api.constructByronTransaction(walletId, constructTransactionRequest, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>under development</strong></p>  Signs a serialised transaction, returning the modified transaction.  This endpoint will add new witnesses using the keys available to this wallet. Any existing witnesses will remain in the witness set. 
     * Sign
     * @param walletId 
     * @param signTransactionRequest 
     */
    public signByronTransaction(walletId: string, signTransactionRequest: SignTransactionRequest, _options?: Configuration): Promise<SignTransaction202Response> {
        const result = this.api.signByronTransaction(walletId, signTransactionRequest, _options);
        return result.toPromise();
    }


}



import { ObservableByronWalletsApi } from './ObservableAPI';

import { ByronWalletsApiRequestFactory, ByronWalletsApiResponseProcessor} from "../apis/ByronWalletsApi";
export class PromiseByronWalletsApi {
    private api: ObservableByronWalletsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ByronWalletsApiRequestFactory,
        responseProcessor?: ByronWalletsApiResponseProcessor
    ) {
        this.api = new ObservableByronWalletsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Delete a Byron wallet. 
     * Delete
     * @param walletId 
     */
    public deleteByronWallet(walletId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteByronWallet(walletId, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return the UTxOs distribution across the whole wallet, in the form of a histogram.  ```      │  100 ─      │      │                                 ┌───┐   10 ─                         ┌───┐   │   │                   ┌───┐      │                 ┌───┐   │   │   │   │                   │   │      │                 │   │   │   │   │   │   ┌───┐           │   │    1 ─ ┌───┐           │   │   │   │   │   │   │   │           │   │      │ │   │           │   │   │   │   │   │   │   │           │   │      │ │   │ │       │ │   │ │ │   │ ╷ │   │ ╷ │   │ ╷       ╷ │   │      └─┘   └─│───────│─┘   └─│─┘   └─│─┘   └─│─┘   └─│───────│─┘   └────            10μ₳    100μ₳   1000μ₳   0.1₳    1₳      10₳     100₳ ``` 
     * UTxO Statistics
     * @param walletId 
     */
    public getByronUTxOsStatistics(walletId: string, _options?: Configuration): Promise<GetUTxOsStatistics200Response> {
        const result = this.api.getByronUTxOsStatistics(walletId, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return information about a Byron wallet. 
     * Get
     * @param walletId 
     */
    public getByronWallet(walletId: string, _options?: Configuration): Promise<ListByronWallets200ResponseInner> {
        const result = this.api.getByronWallet(walletId, _options);
        return result.toPromise();
    }

    /**
     * Generate a snapshot of the wallet's UTxO set.  This endpoint is intended for debugging purposes. 
     * A snapshot of the wallet's UTxO set
     * @param walletId 
     */
    public getByronWalletUtxoSnapshot(walletId: string, _options?: Configuration): Promise<GetWalletUtxoSnapshot200Response> {
        const result = this.api.getByronWalletUtxoSnapshot(walletId, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known Byron wallets, ordered from oldest to newest. 
     * List
     */
    public listByronWallets(_options?: Configuration): Promise<Array<ListByronWallets200ResponseInner>> {
        const result = this.api.listByronWallets(_options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Restore a Byron wallet from a mnemonic sentence or encrypted root private key (deprecated).    **⚠️ WARNING ⚠️**    The construction of random wallet in itself is **deprecated**, in particular the restoration from an encrypted root private key.   These endpoints exist to ease migrations from legacy software such as `cardano-sl` but should be avoided by new applications. 
     * Restore
     * @param postByronWalletRequest 
     */
    public postByronWallet(postByronWalletRequest: PostByronWalletRequest, _options?: Configuration): Promise<ListByronWallets200ResponseInner> {
        const result = this.api.postByronWallet(postByronWalletRequest, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * Update Metadata
     * @param walletId 
     * @param putWalletRequest 
     */
    public putByronWallet(walletId: string, putWalletRequest: PutWalletRequest, _options?: Configuration): Promise<ListWallets200ResponseInner> {
        const result = this.api.putByronWallet(walletId, putWalletRequest, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * Update Passphrase
     * @param walletId 
     * @param putByronWalletPassphraseRequest 
     */
    public putByronWalletPassphrase(walletId: string, putByronWalletPassphraseRequest: PutByronWalletPassphraseRequest, _options?: Configuration): Promise<void> {
        const result = this.api.putByronWalletPassphrase(walletId, putByronWalletPassphraseRequest, _options);
        return result.toPromise();
    }


}



import { ObservableCoinSelectionsApi } from './ObservableAPI';

import { CoinSelectionsApiRequestFactory, CoinSelectionsApiResponseProcessor} from "../apis/CoinSelectionsApi";
export class PromiseCoinSelectionsApi {
    private api: ObservableCoinSelectionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CoinSelectionsApiRequestFactory,
        responseProcessor?: CoinSelectionsApiResponseProcessor
    ) {
        this.api = new ObservableCoinSelectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Select coins to cover the given set of payments.  Uses the <a href=\"https://iohk.io/blog/self-organisation-in-coin-selection/\"> Random-Improve coin selection algorithm</a>. 
     * Random
     * @param walletId 
     * @param selectCoinsRequest 
     */
    public selectCoins(walletId: string, selectCoinsRequest: SelectCoinsRequest, _options?: Configuration): Promise<ConstructTransaction202ResponseCoinSelection> {
        const result = this.api.selectCoins(walletId, selectCoinsRequest, _options);
        return result.toPromise();
    }


}



import { ObservableExperimentalApi } from './ObservableAPI';

import { ExperimentalApiRequestFactory, ExperimentalApiResponseProcessor} from "../apis/ExperimentalApi";
export class PromiseExperimentalApi {
    private api: ObservableExperimentalApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExperimentalApiRequestFactory,
        responseProcessor?: ExperimentalApiResponseProcessor
    ) {
        this.api = new ObservableExperimentalApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>experimental</strong></p>  **⚠️ WARNING ⚠️**  This endpoint is experimental and for internal use in the Catalyst project. This functionality will be refined in the forthcoming future and the interface is likely to change in **NON-BACKWARD COMPATIBLE WAYS**.  <b>Note:</b> Only `Soft` indexes are supported by this endpoint. 
     * Sign Metadata
     * @param walletId 
     * @param role 
     * @param index 
     * @param signMetadataRequest 
     */
    public signMetadata(walletId: string, role: 'utxo_external' | 'utxo_internal' | 'mutable_account', index: string, signMetadataRequest: SignMetadataRequest, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.signMetadata(walletId, role, index, signMetadataRequest, _options);
        return result.toPromise();
    }


}



import { ObservableKeysApi } from './ObservableAPI';

import { KeysApiRequestFactory, KeysApiResponseProcessor} from "../apis/KeysApi";
export class PromiseKeysApi {
    private api: ObservableKeysApi

    public constructor(
        configuration: Configuration,
        requestFactory?: KeysApiRequestFactory,
        responseProcessor?: KeysApiResponseProcessor
    ) {
        this.api = new ObservableKeysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> Retrieve the account public key of this wallet.  To get an extended public key, instead of the public key, use query parameter `format=extended`. For non-extended public key use `format=non_extended` or omit query parameter. 
     * Get Account Public Key
     * @param walletId 
     */
    public getAccountKey(walletId: string, _options?: Configuration): Promise<string> {
        const result = this.api.getAccountKey(walletId, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> Return a policy key for a derivation index = 0.  To get a hash of the policy key instead of the policy key, use query parameter `hash=true`. 
     * Get Policy Key
     * @param walletId 
     */
    public getPolicyKey(walletId: string, _options?: Configuration): Promise<string> {
        const result = this.api.getPolicyKey(walletId, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> Return a public key for a given role and derivation index.  To get a hash of the public key, instead of the public key, use query parameter `hash=true`.  <b>Note:</b> Only `Soft` indexes are supported by this endpoint. 
     * Get Public Key
     * @param walletId 
     * @param role 
     * @param index 
     */
    public getWalletKey(walletId: string, role: 'utxo_external' | 'utxo_internal' | 'mutable_account', index: string, _options?: Configuration): Promise<string> {
        const result = this.api.getWalletKey(walletId, role, index, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> Derive an account public key for any account index. For this key derivation to be possible, the wallet must have been created from mnemonic.  It is possible to use the optional `purpose` field to override that branch of the derivation path with different hardened derivation index. If that field is omitted, the default purpose for Cardano wallets (`1852H`) will be used.  <b>Note:</b> Only _Hardened_ indexes are supported by this endpoint. 
     * Create Account Public Key
     * @param walletId 
     * @param index 
     * @param postAccountKeyRequest 
     */
    public postAccountKey(walletId: string, index: string, postAccountKeyRequest: PostAccountKeyRequest, _options?: Configuration): Promise<string> {
        const result = this.api.postAccountKey(walletId, index, postAccountKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Create policy id for the wallet and a given mint/burn script. 
     * Create Policy Id
     * @param walletId 
     * @param postPolicyIdRequest 
     */
    public postPolicyId(walletId: string, postPolicyIdRequest: PostPolicyIdRequest, _options?: Configuration): Promise<PostPolicyId202Response> {
        const result = this.api.postPolicyId(walletId, postPolicyIdRequest, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Create policy key for the wallet.  In order to be able to mint/burn assets with `POST Construct` endpoint there needs to be a policy key set for the wallet. Invoking this endpoint would be required for all wallets instantiated before introducing mint/burn feature prior to making a mint/burn transaction from them.  To get a hash of the policy key instead of the policy key, use query parameter `hash=true`. 
     * Create Policy Key
     * @param walletId 
     * @param postPolicyKeyRequest 
     */
    public postPolicyKey(walletId: string, postPolicyKeyRequest: PostPolicyKeyRequest, _options?: Configuration): Promise<string> {
        const result = this.api.postPolicyKey(walletId, postPolicyKeyRequest, _options);
        return result.toPromise();
    }


}



import { ObservableMigrationsApi } from './ObservableAPI';

import { MigrationsApiRequestFactory, MigrationsApiResponseProcessor} from "../apis/MigrationsApi";
export class PromiseMigrationsApi {
    private api: ObservableMigrationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MigrationsApiRequestFactory,
        responseProcessor?: MigrationsApiResponseProcessor
    ) {
        this.api = new ObservableMigrationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generate a plan for migrating the UTxO balance of this wallet to another wallet, without executing the plan.  This operation generates a plan that transfers as much of the wallet's balance as possible, by creating as many selections as may be necessary to migrate the entire balance.  Each selection created is the basis for a transaction.  In order to minimize the total transaction fee required, UTxO entries are coalesced together to the greatest extent possible in the resulting selections. No attempt is made to preserve the wallet's UTxO distribution.  The plan is generated on a best-effort basis. If there is insufficient ada available to pay for the entire UTxO set to be migrated, then only a subset of the wallet's UTxO set will be included in the resultant plan. 
     * Create a migration plan
     * @param walletId 
     * @param createShelleyWalletMigrationPlanRequest 
     */
    public createShelleyWalletMigrationPlan(walletId: string, createShelleyWalletMigrationPlanRequest: CreateShelleyWalletMigrationPlanRequest, _options?: Configuration): Promise<CreateShelleyWalletMigrationPlan202Response> {
        const result = this.api.createShelleyWalletMigrationPlan(walletId, createShelleyWalletMigrationPlanRequest, _options);
        return result.toPromise();
    }

    /**
     * Migrate the UTxO balance of this wallet to the given set of addresses.  This operation will attempt to transfer as much of the wallet's balance as possible to the given set of addresses, by creating and submitting as many transactions as may be necessary to migrate the entire balance.  In order to minimize the total transaction fee required, UTxO entries are coalesced together to the greatest extent possible in the resulting transactions. No attempt is made to preserve the wallet's UTxO distribution.  This operation is performed on a best-effort basis. If there is insufficient ada available to pay for the entire UTxO set to be migrated, then only a subset of the wallet's UTxO set will be migrated.  A typical use of this operation would be to move all funds from an old wallet to a new wallet, by providing addresses that belong to the new wallet. 
     * Migrate
     * @param walletId 
     * @param migrateShelleyWalletRequest 
     */
    public migrateShelleyWallet(walletId: string, migrateShelleyWalletRequest: MigrateShelleyWalletRequest, _options?: Configuration): Promise<Array<ListTransactions200ResponseInner>> {
        const result = this.api.migrateShelleyWallet(walletId, migrateShelleyWalletRequest, _options);
        return result.toPromise();
    }


}



import { ObservableNetworkApi } from './ObservableAPI';

import { NetworkApiRequestFactory, NetworkApiResponseProcessor} from "../apis/NetworkApi";
export class PromiseNetworkApi {
    private api: ObservableNetworkApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NetworkApiRequestFactory,
        responseProcessor?: NetworkApiResponseProcessor
    ) {
        this.api = new ObservableNetworkApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * Clock
     * @param forceNtpCheck NTP checks are cached for short duration to avoid sending too many queries to the central NTP servers. In some cases however, a client may want to force a new check.  When this flag is set, the request **will block** until NTP server responds or will timeout after a while without any answer from the NTP server. 
     */
    public getNetworkClock(forceNtpCheck?: boolean, _options?: Configuration): Promise<GetNetworkClock200Response> {
        const result = this.api.getNetworkClock(forceNtpCheck, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * Information
     */
    public getNetworkInformation(_options?: Configuration): Promise<GetNetworkInformation200Response> {
        const result = this.api.getNetworkInformation(_options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Returns the set of network parameters for the current epoch. 
     * Parameters
     */
    public getNetworkParameters(_options?: Configuration): Promise<GetNetworkParameters200Response> {
        const result = this.api.getNetworkParameters(_options);
        return result.toPromise();
    }


}



import { ObservableProxyApi } from './ObservableAPI';

import { ProxyApiRequestFactory, ProxyApiResponseProcessor} from "../apis/ProxyApi";
export class PromiseProxyApi {
    private api: ObservableProxyApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProxyApiRequestFactory,
        responseProcessor?: ProxyApiResponseProcessor
    ) {
        this.api = new ObservableProxyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Submits a transaction that was created and signed outside of cardano-wallet.  NOTE: Unlike the `submitTransaction` endpoint, there are no guarantees that a transaction accepted by this endpoint will actually be included in the chain. It's up to the caller to retry submission until the transaction is confirmed. 
     * Submit External Transaction
     * @param body 
     */
    public postExternalTransaction(body?: HttpFile, _options?: Configuration): Promise<SubmitTransaction202Response> {
        const result = this.api.postExternalTransaction(body, _options);
        return result.toPromise();
    }


}



import { ObservableSettingsApi } from './ObservableAPI';

import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";
export class PromiseSettingsApi {
    private api: ObservableSettingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SettingsApiRequestFactory,
        responseProcessor?: SettingsApiResponseProcessor
    ) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return the current settings. 
     * Get settings
     */
    public getSettings(_options?: Configuration): Promise<GetSettings200Response> {
        const result = this.api.getSettings(_options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Overwrite current settings. 
     * Update settings
     * @param putSettingsRequest 
     */
    public putSettings(putSettingsRequest: PutSettingsRequest, _options?: Configuration): Promise<void> {
        const result = this.api.putSettings(putSettingsRequest, _options);
        return result.toPromise();
    }


}



import { ObservableSharedAddressesApi } from './ObservableAPI';

import { SharedAddressesApiRequestFactory, SharedAddressesApiResponseProcessor} from "../apis/SharedAddressesApi";
export class PromiseSharedAddressesApi {
    private api: ObservableSharedAddressesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SharedAddressesApiRequestFactory,
        responseProcessor?: SharedAddressesApiResponseProcessor
    ) {
        this.api = new ObservableSharedAddressesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known addresses, ordered from newest to oldest 
     * List
     * @param walletId 
     * @param state An optional filter on the address state.
     */
    public listSharedAddresses(walletId: string, state?: 'used' | 'unused', _options?: Configuration): Promise<Array<ListAddresses200ResponseInner>> {
        const result = this.api.listSharedAddresses(walletId, state, _options);
        return result.toPromise();
    }


}



import { ObservableSharedKeysApi } from './ObservableAPI';

import { SharedKeysApiRequestFactory, SharedKeysApiResponseProcessor} from "../apis/SharedKeysApi";
export class PromiseSharedKeysApi {
    private api: ObservableSharedKeysApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SharedKeysApiRequestFactory,
        responseProcessor?: SharedKeysApiResponseProcessor
    ) {
        this.api = new ObservableSharedKeysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>unstable</strong></p>  Decode a serialized transaction. 
     * Decode
     * @param walletId 
     * @param decodeTransactionRequest 
     */
    public decodeSharedTransaction(walletId: string, decodeTransactionRequest: DecodeTransactionRequest, _options?: Configuration): Promise<DecodeTransaction202Response> {
        const result = this.api.decodeSharedTransaction(walletId, decodeTransactionRequest, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> Retrieve the account public key of this shared wallet.  To get an extended public key, instead of the public key, use query parameter `format=extended`. For non-extended public key use `format=non_extended` or omit query parameter. 
     * Get Account Public Key
     * @param walletId 
     */
    public getAccountKeyShared(walletId: string, _options?: Configuration): Promise<string> {
        const result = this.api.getAccountKeyShared(walletId, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> Return a public key for a given role and derivation index for a shared wallet.  To get a hash of the public key, instead of the public key, use query parameter `hash=true`.  <b>Note:</b> Only `Soft` indexes are supported by this endpoint. 
     * Get Public Key
     * @param walletId 
     * @param role 
     * @param index 
     * @param hash Whether to return the key hash instead of the key. 
     */
    public getSharedWalletKey(walletId: string, role: 'utxo_external' | 'utxo_internal' | 'mutable_account', index: string, hash?: boolean, _options?: Configuration): Promise<string> {
        const result = this.api.getSharedWalletKey(walletId, role, index, hash, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> Derive an account public key for any account index. For this key derivation to be possible, the wallet must have been created from mnemonic.  <b>Note:</b> Only _Hardened_ indexes are supported by this endpoint. 
     * Create Account Public Key
     * @param walletId 
     * @param index 
     * @param postAccountKeySharedRequest 
     */
    public postAccountKeyShared(walletId: string, index: string, postAccountKeySharedRequest: PostAccountKeySharedRequest, _options?: Configuration): Promise<string> {
        const result = this.api.postAccountKeyShared(walletId, index, postAccountKeySharedRequest, _options);
        return result.toPromise();
    }


}



import { ObservableSharedTransactionsApi } from './ObservableAPI';

import { SharedTransactionsApiRequestFactory, SharedTransactionsApiResponseProcessor} from "../apis/SharedTransactionsApi";
export class PromiseSharedTransactionsApi {
    private api: ObservableSharedTransactionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SharedTransactionsApiRequestFactory,
        responseProcessor?: SharedTransactionsApiResponseProcessor
    ) {
        this.api = new ObservableSharedTransactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>under development</strong></p>  Create a transaction to be signed from the shared wallet.  Works for the following fields:   - payments   - metadata   - validity_interval 
     * Construct
     * @param walletId 
     * @param constructTransactionRequest 
     */
    public constructSharedTransaction(walletId: string, constructTransactionRequest: ConstructTransactionRequest, _options?: Configuration): Promise<ConstructTransaction202Response> {
        const result = this.api.constructSharedTransaction(walletId, constructTransactionRequest, _options);
        return result.toPromise();
    }


}



import { ObservableSharedWalletsApi } from './ObservableAPI';

import { SharedWalletsApiRequestFactory, SharedWalletsApiResponseProcessor} from "../apis/SharedWalletsApi";
export class PromiseSharedWalletsApi {
    private api: ObservableSharedWalletsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SharedWalletsApiRequestFactory,
        responseProcessor?: SharedWalletsApiResponseProcessor
    ) {
        this.api = new ObservableSharedWalletsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * Delete
     * @param walletId 
     */
    public deleteSharedWallet(walletId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteSharedWallet(walletId, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>⚠ under development</strong></p> Get a shared wallet for a given wallet id. 
     * Get
     * @param walletId 
     */
    public getSharedWallet(walletId: string, _options?: Configuration): Promise<ListSharedWallets200ResponseInner> {
        const result = this.api.getSharedWallet(walletId, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>⚠ under development</strong></p>  Return a list of known shared wallets, ordered from oldest to newest. 
     * List
     */
    public listSharedWallets(_options?: Configuration): Promise<Array<ListSharedWallets200ResponseInner>> {
        const result = this.api.listSharedWallets(_options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>⚠ under development</strong></p> Update delegation script template for a given shared wallet by updating/adding account public key for cosigner. Updating the shared wallet account key results in an error. Also updating is enabled only for pending shared wallet, ie., the wallet that has a missing account public key for any cosigner. 
     * Update Delegation
     * @param walletId 
     * @param requestBody 
     */
    public patchSharedWalletInDelegation(walletId: string, requestBody: { [key: string]: string; }, _options?: Configuration): Promise<ListSharedWallets200ResponseInner> {
        const result = this.api.patchSharedWalletInDelegation(walletId, requestBody, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>⚠ under development</strong></p> Update payment script template for a given shared wallet by updating/adding account public key for cosigner. Updating the shared wallet account key results in an error. Also updating is enabled only for pending shared wallet, ie., the wallet that has a missing account public key for any cosigner. 
     * Update Payment
     * @param walletId 
     * @param requestBody 
     */
    public patchSharedWalletInPayment(walletId: string, requestBody: { [key: string]: string; }, _options?: Configuration): Promise<ListSharedWallets200ResponseInner> {
        const result = this.api.patchSharedWalletInPayment(walletId, requestBody, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>⚠ under development</strong></p> Create a shared wallet from either an account public key and script templates or mnemonic and script templates. 
     * Create
     * @param postSharedWalletRequest 
     */
    public postSharedWallet(postSharedWalletRequest: PostSharedWalletRequest, _options?: Configuration): Promise<ListSharedWallets200ResponseInner> {
        const result = this.api.postSharedWallet(postSharedWalletRequest, _options);
        return result.toPromise();
    }


}



import { ObservableStakePoolsApi } from './ObservableAPI';

import { StakePoolsApiRequestFactory, StakePoolsApiResponseProcessor} from "../apis/StakePoolsApi";
export class PromiseStakePoolsApi {
    private api: ObservableStakePoolsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StakePoolsApiRequestFactory,
        responseProcessor?: StakePoolsApiResponseProcessor
    ) {
        this.api = new ObservableStakePoolsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Estimate fee for joining or leaving a stake pool. Note that it is an estimation because a delegation induces a transaction for which coins have to be selected randomly within the wallet. Because of this randomness, fees can only be estimated. 
     * Estimate Fee
     * @param walletId 
     */
    public getDelegationFee(walletId: string, _options?: Configuration): Promise<PostTransactionFee202Response> {
        const result = this.api.getDelegationFee(walletId, _options);
        return result.toPromise();
    }

    /**
     * Returns the current status of the stake pools maintenance actions. 
     * View Maintenance Actions
     */
    public getMaintenanceActions(_options?: Configuration): Promise<GetMaintenanceActions200Response> {
        const result = this.api.getMaintenanceActions(_options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Delegate all (current and future) addresses from the given wallet to the given stake pool.  <strong>Note:</strong> Bech32-encoded stake pool identifiers can vary in length. 
     * Join
     * @param stakePoolId 
     * @param walletId 
     * @param quitStakePoolRequest 
     */
    public joinStakePool(stakePoolId: string, walletId: string, quitStakePoolRequest: QuitStakePoolRequest, _options?: Configuration): Promise<ListTransactions200ResponseInner> {
        const result = this.api.joinStakePool(stakePoolId, walletId, quitStakePoolRequest, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>Experimental</strong></p>  List stake-keys relevant to the wallet, and how much ada is associated with each. 
     * List Stake Keys
     * @param walletId 
     */
    public listStakeKeys(walletId: string, _options?: Configuration): Promise<ListStakeKeys200Response> {
        const result = this.api.listStakeKeys(walletId, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  List all known stake pools ordered by descending `non_myopic_member_rewards`. The `non_myopic_member_rewards` — and thus the ordering — depends on the `?stake` query parameter.  Some pools _may_ also have metadata attached to them. 
     * List
     * @param stake The stake the user intends to delegate in Lovelace. Required. 
     */
    public listStakePools(stake: number, _options?: Configuration): Promise<Array<ListStakePools200ResponseInner>> {
        const result = this.api.listStakePools(stake, _options);
        return result.toPromise();
    }

    /**
     * Performs maintenance actions on stake pools, such as triggering metadata garbage collection.  Actions may not be instantaneous. 
     * Trigger Maintenance Actions
     * @param postMaintenanceActionRequest 
     */
    public postMaintenanceAction(postMaintenanceActionRequest: PostMaintenanceActionRequest, _options?: Configuration): Promise<void> {
        const result = this.api.postMaintenanceAction(postMaintenanceActionRequest, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Stop delegating completely. The wallet's stake will become inactive.  Any current rewards will automatically withdrawn.  > ⚠️  Disclaimer ⚠️ > > This endpoint historically use to take a stake pool id as a path parameter. > However, retiring from delegation is ubiquitous and not tied to a particular > stake pool. For backward-compatibility reasons, sending stake pool ids as path > parameter will still be accepted by the server but new integrations are > encouraged to provide a placeholder asterisk `*` instead. 
     * Quit
     * @param walletId 
     * @param quitStakePoolRequest 
     */
    public quitStakePool(walletId: string, quitStakePoolRequest: QuitStakePoolRequest, _options?: Configuration): Promise<ListTransactions200ResponseInner> {
        const result = this.api.quitStakePool(walletId, quitStakePoolRequest, _options);
        return result.toPromise();
    }


}



import { ObservableTransactionsApi } from './ObservableAPI';

import { TransactionsApiRequestFactory, TransactionsApiResponseProcessor} from "../apis/TransactionsApi";
export class PromiseTransactionsApi {
    private api: ObservableTransactionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionsApiRequestFactory,
        responseProcessor?: TransactionsApiResponseProcessor
    ) {
        this.api = new ObservableTransactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Forget pending transaction. Importantly, a transaction, when sent, cannot be cancelled. One can only request forgetting about it in order to try spending (concurrently) the same UTxO in another transaction. But, the transaction may still show up later in a block and therefore, appear in the wallet. 
     * Forget
     * @param walletId 
     * @param transactionId 
     */
    public deleteTransaction(walletId: string, transactionId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteTransaction(walletId, transactionId, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Get transaction by id. 
     * Get
     * @param walletId 
     * @param transactionId 
     * @param simpleMetadata When present (or equal to true) in the query, the metadata format for the transaction(s) in the output will be untyped plain json as specified in [CIP 25](https://cips.cardano.org/cips/cip25/) 
     */
    public getTransaction(walletId: string, transactionId: string, simpleMetadata?: boolean, _options?: Configuration): Promise<ListTransactions200ResponseInner> {
        const result = this.api.getTransaction(walletId, transactionId, simpleMetadata, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Lists all incoming and outgoing wallet's transactions. 
     * List
     * @param walletId 
     * @param start An optional start time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: &#x60;2008-08-08T08:08:08Z&#x60; 
     * @param end An optional end time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: &#x60;2008-08-08T08:08:08Z&#x60; 
     * @param order An optional sort order.
     * @param minWithdrawal Returns only transactions that have at least one withdrawal above the given amount. This is particularly useful when set to &#x60;1&#x60; in order to list the withdrawal history of a wallet. 
     * @param simpleMetadata When present (or equal to true) in the query, the metadata format for the transaction(s) in the output will be untyped plain json as specified in [CIP 25](https://cips.cardano.org/cips/cip25/) 
     */
    public listTransactions(walletId: string, start?: string, end?: string, order?: 'ascending' | 'descending', minWithdrawal?: number, simpleMetadata?: boolean, _options?: Configuration): Promise<Array<ListTransactions200ResponseInner>> {
        const result = this.api.listTransactions(walletId, start, end, order, minWithdrawal, simpleMetadata, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Create and send transaction from the wallet. 
     * Create
     * @param walletId 
     * @param postTransactionRequest 
     */
    public postTransaction(walletId: string, postTransactionRequest: PostTransactionRequest, _options?: Configuration): Promise<ListTransactions200ResponseInner> {
        const result = this.api.postTransaction(walletId, postTransactionRequest, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Estimate fee for the transaction. The estimate is made by assembling multiple transactions and analyzing the distribution of their fees. The estimated_max is the highest fee observed, and the estimated_min is the fee which is lower than at least 90% of the fees observed. 
     * Estimate Fee
     * @param walletId 
     * @param postTransactionFeeRequest 
     */
    public postTransactionFee(walletId: string, postTransactionFeeRequest: PostTransactionFeeRequest, _options?: Configuration): Promise<PostTransactionFee202Response> {
        const result = this.api.postTransactionFee(walletId, postTransactionFeeRequest, _options);
        return result.toPromise();
    }


}



import { ObservableTransactionsNewApi } from './ObservableAPI';

import { TransactionsNewApiRequestFactory, TransactionsNewApiResponseProcessor} from "../apis/TransactionsNewApi";
export class PromiseTransactionsNewApi {
    private api: ObservableTransactionsNewApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionsNewApiRequestFactory,
        responseProcessor?: TransactionsNewApiResponseProcessor
    ) {
        this.api = new ObservableTransactionsNewApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>under development</strong></p> Balance a transaction body of a given transaction, add needed inputs/outputs, so as the transaction can be signed from the wallet. 
     * Balance
     * @param walletId 
     * @param balanceTransactionRequest 
     */
    public balanceTransaction(walletId: string, balanceTransactionRequest: BalanceTransactionRequest, _options?: Configuration): Promise<BalanceTransaction202Response> {
        const result = this.api.balanceTransaction(walletId, balanceTransactionRequest, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>under development</strong></p>  Create a transaction to be signed from the wallet. 
     * Construct
     * @param walletId 
     * @param constructTransactionRequest 
     */
    public constructTransaction(walletId: string, constructTransactionRequest: ConstructTransactionRequest, _options?: Configuration): Promise<ConstructTransaction202Response> {
        const result = this.api.constructTransaction(walletId, constructTransactionRequest, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>unstable</strong></p>  Decode a serialized transaction. 
     * Decode
     * @param walletId 
     * @param decodeTransactionRequest 
     */
    public decodeTransaction(walletId: string, decodeTransactionRequest: DecodeTransactionRequest, _options?: Configuration): Promise<DecodeTransaction202Response> {
        const result = this.api.decodeTransaction(walletId, decodeTransactionRequest, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>under development</strong></p>  Signs a serialised transaction, returning the modified transaction.  This endpoint will add new witnesses using the keys available to this wallet. Any existing witnesses will remain in the witness set. 
     * Sign
     * @param walletId 
     * @param signTransactionRequest 
     */
    public signTransaction(walletId: string, signTransactionRequest: SignTransactionRequest, _options?: Configuration): Promise<SignTransaction202Response> {
        const result = this.api.signTransaction(walletId, signTransactionRequest, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> Submit a transaction that was already created and signed. Fails for foreign transactions that is transactions which lack the wallet's inputs and withdrawals. 
     * Submit
     * @param walletId 
     * @param submitTransactionRequest 
     */
    public submitTransaction(walletId: string, submitTransactionRequest: SubmitTransactionRequest, _options?: Configuration): Promise<SubmitTransaction202Response> {
        const result = this.api.submitTransaction(walletId, submitTransactionRequest, _options);
        return result.toPromise();
    }


}



import { ObservableUtilsApi } from './ObservableAPI';

import { UtilsApiRequestFactory, UtilsApiResponseProcessor} from "../apis/UtilsApi";
export class PromiseUtilsApi {
    private api: ObservableUtilsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UtilsApiRequestFactory,
        responseProcessor?: UtilsApiResponseProcessor
    ) {
        this.api = new ObservableUtilsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get health status of the currently active SMASH server. 
     * Current SMASH health
     * @param url check this url for health instead of the currently configured one
     */
    public getCurrentSmashHealth(url?: string, _options?: Configuration): Promise<GetCurrentSmashHealth200Response> {
        const result = this.api.getCurrentSmashHealth(url, _options);
        return result.toPromise();
    }


}



import { ObservableWalletsApi } from './ObservableAPI';

import { WalletsApiRequestFactory, WalletsApiResponseProcessor} from "../apis/WalletsApi";
export class PromiseWalletsApi {
    private api: ObservableWalletsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WalletsApiRequestFactory,
        responseProcessor?: WalletsApiResponseProcessor
    ) {
        this.api = new ObservableWalletsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * Delete
     * @param walletId 
     */
    public deleteWallet(walletId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteWallet(walletId, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return the UTxOs distribution across the whole wallet, in the form of a histogram.  ```      │  100 ─      │      │                                 ┌───┐   10 ─                         ┌───┐   │   │                   ┌───┐      │                 ┌───┐   │   │   │   │                   │   │      │                 │   │   │   │   │   │   ┌───┐           │   │    1 ─ ┌───┐           │   │   │   │   │   │   │   │           │   │      │ │   │           │   │   │   │   │   │   │   │           │   │      │ │   │ │       │ │   │ │ │   │ ╷ │   │ ╷ │   │ ╷       ╷ │   │      └─┘   └─│───────│─┘   └─│─┘   └─│─┘   └─│─┘   └─│───────│─┘   └────            10μ₳    100μ₳   1000μ₳   0.1₳    1₳      10₳     100₳ ``` 
     * UTxO Statistics
     * @param walletId 
     */
    public getUTxOsStatistics(walletId: string, _options?: Configuration): Promise<GetUTxOsStatistics200Response> {
        const result = this.api.getUTxOsStatistics(walletId, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * Get
     * @param walletId 
     */
    public getWallet(walletId: string, _options?: Configuration): Promise<ListWallets200ResponseInner> {
        const result = this.api.getWallet(walletId, _options);
        return result.toPromise();
    }

    /**
     * Generate a snapshot of the wallet's UTxO set.  This endpoint is intended for debugging purposes. 
     * A snapshot of the wallet's UTxO set
     * @param walletId 
     */
    public getWalletUtxoSnapshot(walletId: string, _options?: Configuration): Promise<GetWalletUtxoSnapshot200Response> {
        const result = this.api.getWalletUtxoSnapshot(walletId, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known wallets, ordered from oldest to newest. 
     * List
     */
    public listWallets(_options?: Configuration): Promise<Array<ListWallets200ResponseInner>> {
        const result = this.api.listWallets(_options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Create and restore a wallet from a mnemonic sentence or account public key. 
     * Create / Restore
     * @param postWalletRequest 
     */
    public postWallet(postWalletRequest: PostWalletRequest, _options?: Configuration): Promise<ListWallets200ResponseInner> {
        const result = this.api.postWallet(postWalletRequest, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * Update Metadata
     * @param walletId 
     * @param putWalletRequest 
     */
    public putWallet(walletId: string, putWalletRequest: PutWalletRequest, _options?: Configuration): Promise<ListWallets200ResponseInner> {
        const result = this.api.putWallet(walletId, putWalletRequest, _options);
        return result.toPromise();
    }

    /**
     * <p align=\"right\">status: <strong>stable</strong></p> 
     * Update Passphrase
     * @param walletId 
     * @param putWalletPassphraseRequest 
     */
    public putWalletPassphrase(walletId: string, putWalletPassphraseRequest: PutWalletPassphraseRequest, _options?: Configuration): Promise<void> {
        const result = this.api.putWalletPassphrase(walletId, putWalletPassphraseRequest, _options);
        return result.toPromise();
    }


}



