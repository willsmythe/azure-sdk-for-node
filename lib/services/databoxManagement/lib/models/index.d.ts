/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure";
import * as moment from "moment";

export {

  BaseResource,
  CloudError
};

/**
 * Credential details of the shares in account.
 */
export interface ShareCredentialDetails {
  /**
   * Name of the share.
   */
  readonly shareName?: string;
  /**
   * Type of the share. Possible values include: 'UnknownType', 'HCS', 'BlockBlob', 'PageBlob',
   * 'AzureFile'
   */
  readonly shareType?: string;
  /**
   * User name for the share.
   */
  readonly userName?: string;
  /**
   * Password for the share.
   */
  readonly password?: string;
  /**
   * Access protocols supported on the device.
   */
  readonly supportedAccessProtocols?: string[];
}

/**
 * Credential details of the account.
 */
export interface AccountCredentialDetails {
  /**
   * Name of the account.
   */
  readonly accountName?: string;
  /**
   * Connection string of the account endpoint to use the account as a storage endpoint on the
   * device.
   */
  readonly accountConnectionString?: string;
  /**
   * Per share level unencrypted access credentials.
   */
  readonly shareCredentialDetails?: ShareCredentialDetails[];
}

/**
 * Shipping address where customer wishes to receive the device.
 */
export interface ShippingAddress {
  /**
   * Street Address line 1.
   */
  streetAddress1: string;
  /**
   * Street Address line 2.
   */
  streetAddress2?: string;
  /**
   * Street Address line 3.
   */
  streetAddress3?: string;
  /**
   * Name of the City.
   */
  city?: string;
  /**
   * Name of the State or Province.
   */
  stateOrProvince?: string;
  /**
   * Name of the Country.
   */
  country: string;
  /**
   * Postal code.
   */
  postalCode: string;
  /**
   * Extended Zip Code.
   */
  zipExtendedCode?: string;
  /**
   * Name of the company.
   */
  companyName?: string;
  /**
   * Type of address. Possible values include: 'None', 'Residential', 'Commercial'
   */
  addressType?: string;
}

/**
 * Output of the address validation api.
 */
export interface AddressValidationOutput {
  /**
   * The address validation status. Possible values include: 'Valid', 'Invalid', 'Ambiguous'
   */
  readonly validationStatus?: string;
  /**
   * List of alternate addresses.
   */
  readonly alternateAddresses?: ShippingAddress[];
}

/**
 * The Network Adapter configuration of a DataBox.
 */
export interface ApplianceNetworkConfiguration {
  /**
   * Name of the network.
   */
  readonly name?: string;
  /**
   * Mac Address.
   */
  readonly macAddress?: string;
}

/**
 * Base class for all objects under resource.
 */
export interface ArmBaseObject {
  /**
   * Name of the object.
   */
  readonly name?: string;
  /**
   * Id of the object.
   */
  readonly id?: string;
  /**
   * Type of the object.
   */
  readonly type?: string;
}

/**
 * The filters for showing the available skus.
 */
export interface AvailableSkuRequest {
  /**
   * ISO country code. Country for hardware shipment. For codes check:
   * https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
   */
  country: string;
  /**
   * Location for data transfer. For locations check:
   * https://management.azure.com/subscriptions/SUBSCRIPTIONID/locations?api-version=2018-02-02
   */
  location: string;
  /**
   * Sku Names to filter for available skus
   */
  skuNames?: string[];
}

/**
 * The Sku.
 */
export interface Sku {
  /**
   * The sku name. Possible values include: 'DataBox', 'DataBoxDisk', 'DataBoxHeavy'
   */
  name: string;
  /**
   * The display name of the sku.
   */
  displayName?: string;
  /**
   * The sku family.
   */
  family?: string;
}

/**
 * Map of destination location to service location
 */
export interface DestinationToServiceLocationMap {
  /**
   * Location of the destination.
   */
  readonly destinationLocation?: string;
  /**
   * Location of the service.
   */
  readonly serviceLocation?: string;
}

/**
 * Capacity of the sku.
 */
export interface SkuCapacity {
  /**
   * Usable capacity in TB.
   */
  readonly usable?: string;
  /**
   * Maximum capacity in TB.
   */
  readonly maximum?: string;
}

/**
 * Describes metadata for retrieving price info.
 */
export interface SkuCost {
  /**
   * Meter id of the Sku.
   */
  readonly meterId?: string;
  /**
   * The type of the meter.
   */
  readonly meterType?: string;
}

/**
 * Information of the sku.
 */
export interface SkuInformation {
  /**
   * The Sku.
   */
  readonly sku?: Sku;
  /**
   * The sku is enabled or not.
   */
  readonly enabled?: boolean;
  /**
   * The map of destination location to service location.
   */
  readonly destinationToServiceLocationMap?: DestinationToServiceLocationMap[];
  /**
   * Capacity of the Sku.
   */
  readonly capacity?: SkuCapacity;
  /**
   * Cost of the Sku.
   */
  readonly costs?: SkuCost[];
  /**
   * Api versions that support this Sku.
   */
  readonly apiVersions?: string[];
  /**
   * Reason why the Sku is disabled. Possible values include: 'None', 'Country', 'Region',
   * 'Feature', 'OfferType'
   */
  readonly disabledReason?: string;
  /**
   * Message for why the Sku is disabled.
   */
  readonly disabledReasonMessage?: string;
  /**
   * Required feature to access the sku.
   */
  readonly requiredFeature?: string;
}

/**
 * Reason for cancellation.
 */
export interface CancellationReason {
  /**
   * Reason for cancellation.
   */
  reason: string;
}

/**
 * Notification preference for a job stage.
 */
export interface NotificationPreference {
  /**
   * Name of the stage. Possible values include: 'DevicePrepared', 'Dispatched', 'Delivered',
   * 'PickedUp', 'AtAzureDC', 'DataCopy'
   */
  stageName: string;
  /**
   * Notification is required or not.
   */
  sendNotification: boolean;
}

/**
 * Contact Details.
 */
export interface ContactDetails {
  /**
   * Contact name of the person.
   */
  contactName: string;
  /**
   * Phone number of the contact person.
   */
  phone: string;
  /**
   * Phone extension number of the contact person.
   */
  phoneExtension?: string;
  /**
   * Mobile number of the contact person.
   */
  mobile?: string;
  /**
   * List of Email-ids to be notified about job progress.
   */
  emailList: string[];
  /**
   * Notification preference for a job stage.
   */
  notificationPreference?: NotificationPreference[];
}

/**
 * Details for log generated during copy.
 */
export interface CopyLogDetails {
  /**
   * Polymorphic Discriminator
   */
  copyLogDetailsType: string;
}

/**
 * Copy progress.
 */
export interface CopyProgress {
  /**
   * Name of the storage account where the data needs to be uploaded.
   */
  readonly storageAccountName?: string;
  /**
   * Id of the account where the data needs to be uploaded.
   */
  readonly accountId?: string;
  /**
   * Amount of data uploaded by the job as of now.
   */
  readonly bytesSentToCloud?: number;
  /**
   * Total amount of data to be processed by the job.
   */
  readonly totalBytesToProcess?: number;
}

/**
 * Copy log details for a storage account of a DataBox job
 */
export interface DataBoxAccountCopyLogDetails extends CopyLogDetails {
  /**
   * Destination account name.
   */
  readonly accountName?: string;
  /**
   * Link for copy logs.
   */
  readonly copyLogLink?: string;
}

/**
 * Copy Log Details for a disk
 */
export interface DataBoxDiskCopyLogDetails extends CopyLogDetails {
  /**
   * Disk Serial Number.
   */
  readonly diskSerialNumber?: string;
  /**
   * Link for copy error logs.
   */
  readonly errorLogLink?: string;
  /**
   * Link for copy verbose logs.
   */
  readonly verboseLogLink?: string;
}

/**
 * DataBox Disk Copy Progress
 */
export interface DataBoxDiskCopyProgress {
  /**
   * The serial number of the disk
   */
  readonly serialNumber?: string;
  /**
   * Bytes copied during the copy of disk.
   */
  readonly bytesCopied?: number;
  /**
   * Indicates the percentage completed for the copy of the disk.
   */
  readonly percentComplete?: number;
  /**
   * The Status of the copy. Possible values include: 'NotStarted', 'InProgress', 'Completed',
   * 'CompletedWithErrors', 'Failed', 'NotReturned'
   */
  readonly status?: string;
}

/**
 * Job details.
 */
export interface JobDetails {
  /**
   * The expected size of the data, which needs to be transfered in this job, in tera bytes.
   */
  expectedDataSizeInTeraBytes?: number;
  /**
   * List of stages that run in the job.
   */
  readonly jobStages?: JobStages[];
  /**
   * Contact details for notification and shipping.
   */
  contactDetails: ContactDetails;
  /**
   * Shipping address of the customer.
   */
  shippingAddress: ShippingAddress;
  /**
   * Delivery package shipping details.
   */
  readonly deliveryPackage?: PackageShippingDetails;
  /**
   * Return package shipping details.
   */
  readonly returnPackage?: PackageShippingDetails;
  /**
   * Destination account details.
   */
  destinationAccountDetails: DestinationAccountDetails[];
  /**
   * Error details for failure. This is optional.
   */
  readonly errorDetails?: JobErrorDetails[];
  /**
   * Preferences for the order.
   */
  preferences?: Preferences;
  /**
   * List of copy log details.
   */
  readonly copyLogDetails?: CopyLogDetails[];
  /**
   * Shared access key to download the return shipment label
   */
  readonly reverseShipmentLabelSasKey?: string;
  /**
   * Shared access key to download the chain of custody logs
   */
  readonly chainOfCustodySasKey?: string;
  /**
   * Polymorphic Discriminator
   */
  jobDetailsType: string;
}

/**
 * DataBox Disk Job Details.
 */
export interface DataBoxDiskJobDetails extends JobDetails {
  /**
   * User preference on what size disks are needed for the job. The map is from the disk size in TB
   * to the count. Eg. {2,5} means 5 disks of 2 TB size. Key is string but will be checked against
   * an int.
   */
  preferredDisks?: { [propertyName: string]: number };
  /**
   * Copy progress per disk.
   */
  readonly copyProgress?: DataBoxDiskCopyProgress[];
  /**
   * Contains the map of disk serial number to the disk size being used for the job. Is returned
   * only after the disks are shipped to the customer.
   */
  readonly disksAndSizeDetails?: { [propertyName: string]: number };
  /**
   * User entered passkey for DataBox Disk job.
   */
  passkey?: string;
}

/**
 * Contains all the secrets of a Disk.
 */
export interface DiskSecret {
  /**
   * Serial number of the assigned disk.
   */
  readonly diskSerialNumber?: string;
  /**
   * Bit Locker key of the disk which can be used to unlock the disk to copy data.
   */
  readonly bitLockerKey?: string;
}

/**
 * The base class for the secrets
 */
export interface JobSecrets {
  /**
   * Polymorphic Discriminator
   */
  jobSecretsType: string;
}

/**
 * The secrets related to disk job.
 */
export interface DataBoxDiskJobSecrets extends JobSecrets {
  /**
   * Contains the list of secrets object for that device.
   */
  readonly diskSecrets?: DiskSecret[];
  /**
   * PassKey for the disk Job.
   */
  readonly passKey?: string;
  /**
   * Whether passkey was provided by user.
   */
  readonly isPasskeyUserDefined?: boolean;
}

/**
 * Copy log details for a storage account for Databox heavy
 */
export interface DataBoxHeavyAccountCopyLogDetails extends CopyLogDetails {
  /**
   * Destination account name.
   */
  readonly accountName?: string;
  /**
   * Link for copy logs.
   */
  readonly copyLogLink?: string[];
}

/**
 * Databox Heavy Device Job Details
 */
export interface DataBoxHeavyJobDetails extends JobDetails {
  /**
   * Copy progress per account.
   */
  readonly copyProgress?: CopyProgress[];
}

/**
 * The secrets related to a databox heavy.
 */
export interface DataBoxHeavySecret {
  /**
   * Serial number of the assigned device.
   */
  readonly deviceSerialNumber?: string;
  /**
   * Password for out of the box experience on device.
   */
  readonly devicePassword?: string;
  /**
   * Network configuration of the appliance.
   */
  readonly networkConfigurations?: ApplianceNetworkConfiguration[];
  /**
   * The base 64 encoded public key to authenticate with the device
   */
  readonly encodedValidationCertPubKey?: string;
  /**
   * Per account level access credentials.
   */
  readonly accountCredentialDetails?: AccountCredentialDetails[];
}

/**
 * The secrets related to a databox heavy job.
 */
export interface DataBoxHeavyJobSecrets extends JobSecrets {
  /**
   * Contains the list of secret objects for a databox heavy job.
   */
  readonly cabinetPodSecrets?: DataBoxHeavySecret[];
}

/**
 * Databox Job Details
 */
export interface DataBoxJobDetails extends JobDetails {
  /**
   * Copy progress per storage account.
   */
  readonly copyProgress?: CopyProgress[];
}

/**
 * The secrets related to a DataBox.
 */
export interface DataBoxSecret {
  /**
   * Serial number of the assigned device.
   */
  readonly deviceSerialNumber?: string;
  /**
   * Password for out of the box experience on device.
   */
  readonly devicePassword?: string;
  /**
   * Network configuration of the appliance.
   */
  readonly networkConfigurations?: ApplianceNetworkConfiguration[];
  /**
   * The base 64 encoded public key to authenticate with the device
   */
  readonly encodedValidationCertPubKey?: string;
  /**
   * Per account level access credentials.
   */
  readonly accountCredentialDetails?: AccountCredentialDetails[];
}

/**
 * The secrets related to a databox job.
 */
export interface DataboxJobSecrets extends JobSecrets {
  /**
   * Contains the list of secret objects for a job.
   */
  podSecrets?: DataBoxSecret[];
}

/**
 * Details for the destination account.
 */
export interface DestinationAccountDetails {
  /**
   * Destination storage account id.
   */
  accountId: string;
}

/**
 * Top level error for the job.
 */
export interface ErrorModel {
  /**
   * Error code that can be used to programmatically identify the error.
   */
  readonly code?: string;
  /**
   * Describes the error in detail and provides debugging information.
   */
  readonly message?: string;
}

/**
 * Job Error Details for providing the information and recommended action.
 */
export interface JobErrorDetails {
  /**
   * Message for the error.
   */
  readonly errorMessage?: string;
  /**
   * Code for the error.
   */
  readonly errorCode?: number;
  /**
   * Recommended action for the error.
   */
  readonly recommendedAction?: string;
  /**
   * Contains the non localized exception message
   */
  readonly exceptionMessage?: string;
}

/**
 * Job stages.
 */
export interface JobStages {
  /**
   * Name of the job stage. Possible values include: 'DeviceOrdered', 'DevicePrepared',
   * 'Dispatched', 'Delivered', 'PickedUp', 'AtAzureDC', 'DataCopy', 'Completed',
   * 'CompletedWithErrors', 'Cancelled', 'Failed_IssueReportedAtCustomer',
   * 'Failed_IssueDetectedAtAzureDC', 'Aborted'
   */
  readonly stageName?: string;
  /**
   * Display name of the job stage.
   */
  readonly displayName?: string;
  /**
   * Status of the job stage. Possible values include: 'None', 'InProgress', 'Succeeded', 'Failed',
   * 'Cancelled', 'Cancelling', 'SucceededWithErrors'
   */
  readonly stageStatus?: string;
  /**
   * Time for the job stage in UTC ISO 8601 format.
   */
  readonly stageTime?: Date;
  /**
   * Job Stage Details
   */
  readonly jobStageDetails?: any;
  /**
   * Error details for the stage.
   */
  readonly errorDetails?: JobErrorDetails[];
}

/**
 * Shipping details.
 */
export interface PackageShippingDetails {
  /**
   * Name of the carrier.
   */
  readonly carrierName?: string;
  /**
   * Tracking Id of shipment.
   */
  readonly trackingId?: string;
  /**
   * Url where shipment can be tracked.
   */
  readonly trackingUrl?: string;
}

/**
 * Preferences related to the order
 */
export interface Preferences {
  preferredDataCenterRegion?: string[];
}

/**
 * Model of the Resource.
*/
export interface Resource extends BaseResource {
  /**
   * The location of the resource. This will be one of the supported and registered Azure Regions
   * (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once
   * it is created, but if an identical region is specified on update the request will succeed.
  */
  location: string;
  /**
   * The list of key value pairs that describe the resource. These tags can be used in viewing and
   * grouping this resource (across resource groups).
  */
  tags?: { [propertyName: string]: string };
  /**
   * The sku type.
  */
  sku: Sku;
}

/**
 * Job Resource.
*/
export interface JobResource extends Resource {
  /**
   * Describes whether the job is cancellable or not.
  */
  readonly isCancellable?: boolean;
  /**
   * Describes whether the job is deletable or not.
  */
  readonly isDeletable?: boolean;
  /**
   * Describes whether the shipping address is editable or not.
  */
  readonly isShippingAddressEditable?: boolean;
  /**
   * Name of the stage which is in progress. Possible values include: 'DeviceOrdered',
   * 'DevicePrepared', 'Dispatched', 'Delivered', 'PickedUp', 'AtAzureDC', 'DataCopy', 'Completed',
   * 'CompletedWithErrors', 'Cancelled', 'Failed_IssueReportedAtCustomer',
   * 'Failed_IssueDetectedAtAzureDC', 'Aborted'
  */
  readonly status?: string;
  /**
   * Time at which the job was started in UTC ISO 8601 format.
  */
  readonly startTime?: Date;
  /**
   * Top level error for the job.
  */
  readonly error?: ErrorModel;
  /**
   * Details of a job run. This field will only be sent for expand details filter.
  */
  details?: JobDetails;
  /**
   * Reason for cancellation.
  */
  readonly cancellationReason?: string;
  /**
   * Name of the object.
  */
  readonly name?: string;
  /**
   * Id of the object.
  */
  readonly id?: string;
  /**
   * Type of the object.
  */
  readonly type?: string;
}

/**
 * Job details for update.
*/
export interface UpdateJobDetails {
  /**
   * Contact details for notification and shipping.
  */
  contactDetails?: ContactDetails;
  /**
   * Shipping address of the customer.
  */
  shippingAddress?: ShippingAddress;
}

/**
 * The JobResourceUpdateParameter.
*/
export interface JobResourceUpdateParameter {
  /**
   * Details of a job to be updated.
  */
  details?: UpdateJobDetails;
  /**
   * Destination account details.
  */
  destinationAccountDetails?: DestinationAccountDetails[];
  /**
   * The list of key value pairs that describe the resource. These tags can be used in viewing and
   * grouping this resource (across resource groups).
  */
  tags?: { [propertyName: string]: string };
}

/**
 * Operation display
*/
export interface OperationDisplay {
  /**
   * Provider name.
  */
  provider?: string;
  /**
   * Resource name.
  */
  resource?: string;
  /**
   * Localized name of the operation for display purpose.
  */
  operation?: string;
  /**
   * Localized description of the operation for display purpose.
  */
  description?: string;
}

/**
 * Operation entity.
*/
export interface Operation {
  /**
   * Name of the operation. Format:
   * {resourceProviderNamespace}/{resourceType}/{read|write|delete|action}
  */
  readonly name?: string;
  /**
   * Operation display values.
  */
  readonly display?: OperationDisplay;
  /**
   * Operation properties.
  */
  readonly properties?: any;
  /**
   * Origin of the operation. Can be : user|system|user,system
  */
  readonly origin?: string;
}

/**
 * Shipment pick up request details.
*/
export interface ShipmentPickUpRequest {
  /**
   * Minimum date after which the pick up should commence, this must be in local time of pick up
   * area.
  */
  startTime: Date;
  /**
   * Maximum date before which the pick up should commence, this must be in local time of pick up
   * area.
  */
  endTime: Date;
  /**
   * Shipment Location in the pickup place. Eg.front desk
  */
  shipmentLocation: string;
}

/**
 * Shipment pick up response.
*/
export interface ShipmentPickUpResponse {
  /**
   * Confirmation number for the pick up request.
  */
  readonly confirmationNumber?: string;
  /**
   * Time by which shipment should be ready for pick up, this is in local time of pick up area.
  */
  readonly readyByTime?: Date;
}

/**
 * Unencrypted credentials for accessing device.
*/
export interface UnencryptedCredentials {
  /**
   * Name of the job.
  */
  readonly jobName?: string;
  /**
   * Secrets related to this job.
  */
  readonly jobSecrets?: JobSecrets;
}

/**
 * The requirements to validate customer address where the device needs to be shipped.
*/
export interface ValidateAddress {
  /**
   * Shipping address of the customer.
  */
  shippingAddress: ShippingAddress;
  /**
   * Device type to be used for the job. Possible values include: 'DataBox', 'DataBoxDisk',
   * 'DataBoxHeavy'
  */
  deviceType: string;
}

/**
 * Operation Collection.
*/
export interface OperationList extends Array<Operation> {
  /**
   * Link for the next set of operations.
  */
  nextLink?: string;
}

/**
 * Job Resource Collection
*/
export interface JobResourceList extends Array<JobResource> {
  /**
   * Link for the next set of job resources.
  */
  nextLink?: string;
}

/**
 * List of unencrypted credentials for accessing device.
*/
export interface UnencryptedCredentialsList extends Array<UnencryptedCredentials> {
  /**
   * Link for the next set of unencrypted credentials.
  */
  nextLink?: string;
}

/**
 * The available skus operation response.
*/
export interface AvailableSkusResult extends Array<SkuInformation> {
  /**
   * Link for the next set of skus.
  */
  nextLink?: string;
}
