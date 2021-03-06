/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Represents a backup point which can be used to trigger a restore.
 *
 */
class BackupInfo {
  /**
   * Create a BackupInfo.
   * @property {uuid} [backupId] Unique backup ID .
   * @property {uuid} [backupChainId] Unique backup chain ID. All backups part
   * of the same chain has the same backup chain id. A backup chain is
   * comprised of 1 full backup and multiple incremental backups.
   * @property {string} [applicationName] Name of the Service Fabric
   * application this partition backup belongs to.
   * @property {string} [serviceName] Name of the Service Fabric service this
   * partition backup belongs to.
   * @property {object} [partitionInformation] Information about the partition
   * to which this backup belongs to
   * @property {uuid} [partitionInformation.id] An internal ID used by Service
   * Fabric to uniquely identify a partition. This is a randomly generated GUID
   * when the service was created. The partition ID is unique and does not
   * change for the lifetime of the service. If the same service was deleted
   * and recreated the IDs of its partitions would be different.
   * @property {string} [partitionInformation.servicePartitionKind] Polymorphic
   * Discriminator
   * @property {string} [backupLocation] Location of the backup, relative to
   * the backup store.
   * @property {string} [backupType] Describes the type of backup, whether its
   * full or incremental. Possible values include: 'Invalid', 'Full',
   * 'Incremental'
   * @property {object} [epochOfLastBackupRecord] Epoch of the last record in
   * this backup.
   * @property {string} [epochOfLastBackupRecord.configurationNumber] The
   * current configuration number of this Epoch. The configuration number is an
   * increasing value that is updated whenever the configuration of this
   * replica set changes.
   * @property {string} [epochOfLastBackupRecord.dataLossNumber] The current
   * dataloss number of this Epoch. The data loss number property is an
   * increasing value which is updated whenever data loss is suspected, as when
   * loss of a quorum of replicas in the replica set that includes the Primary
   * replica.
   * @property {string} [lsnOfLastBackupRecord] LSN of the last record in this
   * backup.
   * @property {date} [creationTimeUtc] The date time when this backup was
   * taken.
   * @property {object} [failureError] Denotes the failure encountered in
   * getting backup point information.
   * @property {string} [failureError.code] Defines the fabric error codes that
   * be returned as part of the error object in response to Service Fabric API
   * operations that are not successful. Following are the error code values
   * that can be returned for a specific HTTP status code.
   *
   * - Possible values of the error code for HTTP status code 400 (Bad Request)
   * - "FABRIC_E_INVALID_PARTITION_KEY"
   * - "FABRIC_E_IMAGEBUILDER_VALIDATION_ERROR"
   * - "FABRIC_E_INVALID_ADDRESS"
   * - "FABRIC_E_APPLICATION_NOT_UPGRADING"
   * - "FABRIC_E_APPLICATION_UPGRADE_VALIDATION_ERROR"
   * - "FABRIC_E_FABRIC_NOT_UPGRADING"
   * - "FABRIC_E_FABRIC_UPGRADE_VALIDATION_ERROR"
   * - "FABRIC_E_INVALID_CONFIGURATION"
   * - "FABRIC_E_INVALID_NAME_URI"
   * - "FABRIC_E_PATH_TOO_LONG"
   * - "FABRIC_E_KEY_TOO_LARGE"
   * - "FABRIC_E_SERVICE_AFFINITY_CHAIN_NOT_SUPPORTED"
   * - "FABRIC_E_INVALID_ATOMIC_GROUP"
   * - "FABRIC_E_VALUE_EMPTY"
   * - "FABRIC_E_BACKUP_IS_ENABLED"
   * - "FABRIC_E_RESTORE_SOURCE_TARGET_PARTITION_MISMATCH"
   * - "FABRIC_E_INVALID_FOR_STATELESS_SERVICES"
   * - "FABRIC_E_INVALID_SERVICE_SCALING_POLICY"
   * - "E_INVALIDARG"
   *
   * - Possible values of the error code for HTTP status code 404 (Not Found)
   * - "FABRIC_E_NODE_NOT_FOUND"
   * - "FABRIC_E_APPLICATION_TYPE_NOT_FOUND"
   * - "FABRIC_E_APPLICATION_NOT_FOUND"
   * - "FABRIC_E_SERVICE_TYPE_NOT_FOUND"
   * - "FABRIC_E_SERVICE_DOES_NOT_EXIST"
   * - "FABRIC_E_SERVICE_TYPE_TEMPLATE_NOT_FOUND"
   * - "FABRIC_E_CONFIGURATION_SECTION_NOT_FOUND"
   * - "FABRIC_E_PARTITION_NOT_FOUND"
   * - "FABRIC_E_REPLICA_DOES_NOT_EXIST"
   * - "FABRIC_E_SERVICE_GROUP_DOES_NOT_EXIST"
   * - "FABRIC_E_CONFIGURATION_PARAMETER_NOT_FOUND"
   * - "FABRIC_E_DIRECTORY_NOT_FOUND"
   * - "FABRIC_E_FABRIC_VERSION_NOT_FOUND"
   * - "FABRIC_E_FILE_NOT_FOUND"
   * - "FABRIC_E_NAME_DOES_NOT_EXIST"
   * - "FABRIC_E_PROPERTY_DOES_NOT_EXIST"
   * - "FABRIC_E_ENUMERATION_COMPLETED"
   * - "FABRIC_E_SERVICE_MANIFEST_NOT_FOUND"
   * - "FABRIC_E_KEY_NOT_FOUND"
   * - "FABRIC_E_HEALTH_ENTITY_NOT_FOUND"
   * - "FABRIC_E_BACKUP_NOT_ENABLED"
   * - "FABRIC_E_BACKUP_POLICY_NOT_EXISTING"
   * - "FABRIC_E_FAULT_ANALYSIS_SERVICE_NOT_EXISTING"
   *
   * - Possible values of the error code for HTTP status code 409 (Conflict)
   * - "FABRIC_E_APPLICATION_TYPE_ALREADY_EXISTS"
   * - "FABRIC_E_APPLICATION_ALREADY_EXISTS"
   * - "FABRIC_E_APPLICATION_ALREADY_IN_TARGET_VERSION"
   * - "FABRIC_E_APPLICATION_TYPE_PROVISION_IN_PROGRESS"
   * - "FABRIC_E_APPLICATION_UPGRADE_IN_PROGRESS"
   * - "FABRIC_E_SERVICE_ALREADY_EXISTS"
   * - "FABRIC_E_SERVICE_GROUP_ALREADY_EXISTS"
   * - "FABRIC_E_APPLICATION_TYPE_IN_USE"
   * - "FABRIC_E_FABRIC_ALREADY_IN_TARGET_VERSION"
   * - "FABRIC_E_FABRIC_VERSION_ALREADY_EXISTS"
   * - "FABRIC_E_FABRIC_VERSION_IN_USE"
   * - "FABRIC_E_FABRIC_UPGRADE_IN_PROGRESS"
   * - "FABRIC_E_NAME_ALREADY_EXISTS"
   * - "FABRIC_E_NAME_NOT_EMPTY"
   * - "FABRIC_E_PROPERTY_CHECK_FAILED"
   * - "FABRIC_E_SERVICE_METADATA_MISMATCH"
   * - "FABRIC_E_SERVICE_TYPE_MISMATCH"
   * - "FABRIC_E_HEALTH_STALE_REPORT"
   * - "FABRIC_E_SEQUENCE_NUMBER_CHECK_FAILED"
   * - "FABRIC_E_NODE_HAS_NOT_STOPPED_YET"
   * - "FABRIC_E_INSTANCE_ID_MISMATCH"
   * - "FABRIC_E_BACKUP_IN_PROGRESS"
   * - "FABRIC_E_RESTORE_IN_PROGRESS"
   * - "FABRIC_E_BACKUP_POLICY_ALREADY_EXISTING"
   *
   * - Possible values of the error code for HTTP status code 413 (Request
   * Entity Too Large)
   * - "FABRIC_E_VALUE_TOO_LARGE"
   *
   * - Possible values of the error code for HTTP status code 500 (Internal
   * Server Error)
   * - "FABRIC_E_NODE_IS_UP"
   * - "E_FAIL"
   * - "FABRIC_E_SINGLE_INSTANCE_APPLICATION_ALREADY_EXISTS"
   * - "FABRIC_E_SINGLE_INSTANCE_APPLICATION_NOT_FOUND"
   * - "FABRIC_E_VOLUME_ALREADY_EXISTS"
   * - "ABRIC_E_VOLUME_NOT_FOUND"
   * - "SerializationError"
   *
   * - Possible values of the error code for HTTP status code 503 (Service
   * Unavailable)
   * - "FABRIC_E_NO_WRITE_QUORUM"
   * - "FABRIC_E_NOT_PRIMARY"
   * - "FABRIC_E_NOT_READY"
   * - "FABRIC_E_RECONFIGURATION_PENDING"
   * - "FABRIC_E_SERVICE_OFFLINE"
   * - "E_ABORT"
   * - "FABRIC_E_VALUE_TOO_LARGE"
   *
   * - Possible values of the error code for HTTP status code 504 (Gateway
   * Timeout)
   * - "FABRIC_E_COMMUNICATION_ERROR"
   * - "FABRIC_E_OPERATION_NOT_COMPLETE"
   * - "FABRIC_E_TIMEOUT". Possible values include:
   * 'FABRIC_E_INVALID_PARTITION_KEY',
   * 'FABRIC_E_IMAGEBUILDER_VALIDATION_ERROR', 'FABRIC_E_INVALID_ADDRESS',
   * 'FABRIC_E_APPLICATION_NOT_UPGRADING',
   * 'FABRIC_E_APPLICATION_UPGRADE_VALIDATION_ERROR',
   * 'FABRIC_E_FABRIC_NOT_UPGRADING',
   * 'FABRIC_E_FABRIC_UPGRADE_VALIDATION_ERROR',
   * 'FABRIC_E_INVALID_CONFIGURATION', 'FABRIC_E_INVALID_NAME_URI',
   * 'FABRIC_E_PATH_TOO_LONG', 'FABRIC_E_KEY_TOO_LARGE',
   * 'FABRIC_E_SERVICE_AFFINITY_CHAIN_NOT_SUPPORTED',
   * 'FABRIC_E_INVALID_ATOMIC_GROUP', 'FABRIC_E_VALUE_EMPTY',
   * 'FABRIC_E_NODE_NOT_FOUND', 'FABRIC_E_APPLICATION_TYPE_NOT_FOUND',
   * 'FABRIC_E_APPLICATION_NOT_FOUND', 'FABRIC_E_SERVICE_TYPE_NOT_FOUND',
   * 'FABRIC_E_SERVICE_DOES_NOT_EXIST',
   * 'FABRIC_E_SERVICE_TYPE_TEMPLATE_NOT_FOUND',
   * 'FABRIC_E_CONFIGURATION_SECTION_NOT_FOUND',
   * 'FABRIC_E_PARTITION_NOT_FOUND', 'FABRIC_E_REPLICA_DOES_NOT_EXIST',
   * 'FABRIC_E_SERVICE_GROUP_DOES_NOT_EXIST',
   * 'FABRIC_E_CONFIGURATION_PARAMETER_NOT_FOUND',
   * 'FABRIC_E_DIRECTORY_NOT_FOUND', 'FABRIC_E_FABRIC_VERSION_NOT_FOUND',
   * 'FABRIC_E_FILE_NOT_FOUND', 'FABRIC_E_NAME_DOES_NOT_EXIST',
   * 'FABRIC_E_PROPERTY_DOES_NOT_EXIST', 'FABRIC_E_ENUMERATION_COMPLETED',
   * 'FABRIC_E_SERVICE_MANIFEST_NOT_FOUND', 'FABRIC_E_KEY_NOT_FOUND',
   * 'FABRIC_E_HEALTH_ENTITY_NOT_FOUND',
   * 'FABRIC_E_APPLICATION_TYPE_ALREADY_EXISTS',
   * 'FABRIC_E_APPLICATION_ALREADY_EXISTS',
   * 'FABRIC_E_APPLICATION_ALREADY_IN_TARGET_VERSION',
   * 'FABRIC_E_APPLICATION_TYPE_PROVISION_IN_PROGRESS',
   * 'FABRIC_E_APPLICATION_UPGRADE_IN_PROGRESS',
   * 'FABRIC_E_SERVICE_ALREADY_EXISTS',
   * 'FABRIC_E_SERVICE_GROUP_ALREADY_EXISTS',
   * 'FABRIC_E_APPLICATION_TYPE_IN_USE',
   * 'FABRIC_E_FABRIC_ALREADY_IN_TARGET_VERSION',
   * 'FABRIC_E_FABRIC_VERSION_ALREADY_EXISTS',
   * 'FABRIC_E_FABRIC_VERSION_IN_USE', 'FABRIC_E_FABRIC_UPGRADE_IN_PROGRESS',
   * 'FABRIC_E_NAME_ALREADY_EXISTS', 'FABRIC_E_NAME_NOT_EMPTY',
   * 'FABRIC_E_PROPERTY_CHECK_FAILED', 'FABRIC_E_SERVICE_METADATA_MISMATCH',
   * 'FABRIC_E_SERVICE_TYPE_MISMATCH', 'FABRIC_E_HEALTH_STALE_REPORT',
   * 'FABRIC_E_SEQUENCE_NUMBER_CHECK_FAILED',
   * 'FABRIC_E_NODE_HAS_NOT_STOPPED_YET', 'FABRIC_E_INSTANCE_ID_MISMATCH',
   * 'FABRIC_E_VALUE_TOO_LARGE', 'FABRIC_E_NO_WRITE_QUORUM',
   * 'FABRIC_E_NOT_PRIMARY', 'FABRIC_E_NOT_READY',
   * 'FABRIC_E_RECONFIGURATION_PENDING', 'FABRIC_E_SERVICE_OFFLINE', 'E_ABORT',
   * 'FABRIC_E_COMMUNICATION_ERROR', 'FABRIC_E_OPERATION_NOT_COMPLETE',
   * 'FABRIC_E_TIMEOUT', 'FABRIC_E_NODE_IS_UP', 'E_FAIL',
   * 'FABRIC_E_BACKUP_IS_ENABLED',
   * 'FABRIC_E_RESTORE_SOURCE_TARGET_PARTITION_MISMATCH',
   * 'FABRIC_E_INVALID_FOR_STATELESS_SERVICES', 'FABRIC_E_BACKUP_NOT_ENABLED',
   * 'FABRIC_E_BACKUP_POLICY_NOT_EXISTING',
   * 'FABRIC_E_FAULT_ANALYSIS_SERVICE_NOT_EXISTING',
   * 'FABRIC_E_BACKUP_IN_PROGRESS', 'FABRIC_E_RESTORE_IN_PROGRESS',
   * 'FABRIC_E_BACKUP_POLICY_ALREADY_EXISTING',
   * 'FABRIC_E_INVALID_SERVICE_SCALING_POLICY', 'E_INVALIDARG',
   * 'FABRIC_E_SINGLE_INSTANCE_APPLICATION_ALREADY_EXISTS',
   * 'FABRIC_E_SINGLE_INSTANCE_APPLICATION_NOT_FOUND',
   * 'FABRIC_E_VOLUME_ALREADY_EXISTS', 'FABRIC_E_VOLUME_NOT_FOUND',
   * 'SerializationError'
   * @property {string} [failureError.message] Error message.
   */
  constructor() {
  }

  /**
   * Defines the metadata of BackupInfo
   *
   * @returns {object} metadata of BackupInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BackupInfo',
      type: {
        name: 'Composite',
        className: 'BackupInfo',
        modelProperties: {
          backupId: {
            required: false,
            serializedName: 'BackupId',
            type: {
              name: 'String'
            }
          },
          backupChainId: {
            required: false,
            serializedName: 'BackupChainId',
            type: {
              name: 'String'
            }
          },
          applicationName: {
            required: false,
            serializedName: 'ApplicationName',
            type: {
              name: 'String'
            }
          },
          serviceName: {
            required: false,
            serializedName: 'ServiceName',
            type: {
              name: 'String'
            }
          },
          partitionInformation: {
            required: false,
            serializedName: 'PartitionInformation',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'ServicePartitionKind',
                clientName: 'servicePartitionKind'
              },
              uberParent: 'PartitionInformation',
              className: 'PartitionInformation'
            }
          },
          backupLocation: {
            required: false,
            serializedName: 'BackupLocation',
            type: {
              name: 'String'
            }
          },
          backupType: {
            required: false,
            serializedName: 'BackupType',
            type: {
              name: 'String'
            }
          },
          epochOfLastBackupRecord: {
            required: false,
            serializedName: 'EpochOfLastBackupRecord',
            type: {
              name: 'Composite',
              className: 'BackupEpoch'
            }
          },
          lsnOfLastBackupRecord: {
            required: false,
            serializedName: 'LsnOfLastBackupRecord',
            type: {
              name: 'String'
            }
          },
          creationTimeUtc: {
            required: false,
            serializedName: 'CreationTimeUtc',
            type: {
              name: 'DateTime'
            }
          },
          failureError: {
            required: false,
            serializedName: 'FailureError',
            type: {
              name: 'Composite',
              className: 'FabricErrorError'
            }
          }
        }
      }
    };
  }
}

module.exports = BackupInfo;
