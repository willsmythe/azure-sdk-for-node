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
 * The resource model definition for Azure Resource Manager proxy resource. It
 * will have everything other than required location and tags. This proxy
 * resource is explicitly created or updated by including it in the parent
 * resource.
 *
 * @extends models['BaseResource']
 */
class ManagedProxyResource extends models['BaseResource'] {
  /**
   * Create a ManagedProxyResource.
   * @member {string} [id] Fully qualified identifier for the resource. Ex -
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * @member {string} [name] The name of the resource
   * @member {string} [type] The type of the resource. Ex-
   * Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ManagedProxyResource
   *
   * @returns {object} metadata of ManagedProxyResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ManagedProxyResource',
      type: {
        name: 'Composite',
        className: 'ManagedProxyResource',
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
          }
        }
      }
    };
  }
}

module.exports = ManagedProxyResource;