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
 * A project resource.
 *
 * @extends models['Resource']
 */
class Project extends models['Resource'] {
  /**
   * Create a Project.
   * @member {string} [displayName] The name of the project.
   * @member {array} [eligibleOffers] The eligible offers attached to the
   * project.
   * @member {string} [costCenter] The cost center for the project.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Project
   *
   * @returns {object} metadata of Project
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Project',
      type: {
        name: 'Composite',
        className: 'Project',
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
          displayName: {
            required: false,
            serializedName: 'properties.displayName',
            type: {
              name: 'String'
            }
          },
          eligibleOffers: {
            required: false,
            serializedName: 'properties.eligibleOffers',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EligibleOfferElementType',
                  type: {
                    name: 'Composite',
                    className: 'EligibleOffer'
                  }
              }
            }
          },
          costCenter: {
            required: false,
            serializedName: 'properties.costCenter',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Project;