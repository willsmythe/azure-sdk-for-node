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
 * The secrets related to a pod job.
 *
 * @extends models['JobSecrets']
 */
class PodJobSecrets extends models['JobSecrets'] {
  /**
   * Create a PodJobSecrets.
   * @member {array} [podSecrets] Contains the list of secret objects for a
   * job.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PodJobSecrets
   *
   * @returns {object} metadata of PodJobSecrets
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Pod',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'jobSecretsType',
          clientName: 'jobSecretsType'
        },
        uberParent: 'JobSecrets',
        className: 'PodJobSecrets',
        modelProperties: {
          jobSecretsType: {
            required: true,
            serializedName: 'jobSecretsType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          podSecrets: {
            required: false,
            serializedName: 'podSecrets',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PodSecretElementType',
                  type: {
                    name: 'Composite',
                    className: 'PodSecret'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PodJobSecrets;
