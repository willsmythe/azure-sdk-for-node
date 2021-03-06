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

const models = require('./index');

/**
 * Resource information, as returned by the resource provider.
 *
 * @extends models['TrackedResource']
 */
class Vault extends models['TrackedResource'] {
  /**
   * Create a Vault.
   * @member {object} [properties]
   * @member {string} [properties.provisioningState] Provisioning State.
   * @member {object} [properties.upgradeDetails]
   * @member {string} [properties.upgradeDetails.operationId] ID of the vault
   * upgrade operation.
   * @member {date} [properties.upgradeDetails.startTimeUtc] UTC time at which
   * the upgrade operation has started.
   * @member {date} [properties.upgradeDetails.lastUpdatedTimeUtc] UTC time at
   * which the upgrade operation status was last updated.
   * @member {date} [properties.upgradeDetails.endTimeUtc] UTC time at which
   * the upgrade operation has ended.
   * @member {string} [properties.upgradeDetails.status] Status of the vault
   * upgrade operation. Possible values include: 'Unknown', 'InProgress',
   * 'Upgraded', 'Failed'
   * @member {string} [properties.upgradeDetails.message] Message to the user
   * containing information about the upgrade operation.
   * @member {string} [properties.upgradeDetails.triggerType] The way the vault
   * upgradation was triggered. Possible values include: 'UserTriggered',
   * 'ForcedUpgrade'
   * @member {string} [properties.upgradeDetails.upgradedResourceId] Resource
   * ID of the upgraded vault.
   * @member {string} [properties.upgradeDetails.previousResourceId] Resource
   * ID of the vault before the upgrade.
   * @member {object} [sku]
   * @member {string} [sku.name] The Sku name. Possible values include:
   * 'Standard', 'RS0'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Vault
   *
   * @returns {object} metadata of Vault
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Vault',
      type: {
        name: 'Composite',
        className: 'Vault',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          eTag: {
            required: false,
            serializedName: 'eTag',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'VaultProperties'
            }
          },
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'Sku'
            }
          }
        }
      }
    };
  }
}

module.exports = Vault;
