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
 * Swift Virtual Network Contract. This is used to enable the new Swift way of
 * doing virtual network integration.
 *
 * @extends models['ProxyOnlyResource']
 */
class SwiftVirtualNetwork extends models['ProxyOnlyResource'] {
  /**
   * Create a SwiftVirtualNetwork.
   * @member {string} [subnetResourceId] The Virtual Network subnet's resource
   * ID. This is the subnet that this Web App will join. This subnet must have
   * a delegation to Microsoft.Web/serverFarms defined first.
   * @member {boolean} [swiftSupported] A flag that specifies if the scale unit
   * this Web App is on supports Swift integration.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SwiftVirtualNetwork
   *
   * @returns {object} metadata of SwiftVirtualNetwork
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SwiftVirtualNetwork',
      type: {
        name: 'Composite',
        className: 'SwiftVirtualNetwork',
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
          kind: {
            required: false,
            serializedName: 'kind',
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
          subnetResourceId: {
            required: false,
            serializedName: 'properties.subnetResourceId',
            type: {
              name: 'String'
            }
          },
          swiftSupported: {
            required: false,
            serializedName: 'properties.swiftSupported',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = SwiftVirtualNetwork;