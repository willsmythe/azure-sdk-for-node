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
 * The properties of a storage account’s Blob service.
 *
 * @extends models['Resource']
 */
class BlobServiceProperties extends models['Resource'] {
  /**
   * Create a BlobServiceProperties.
   * @member {object} [cors] Specifies CORS rules for the Blob service. You can
   * include up to five CorsRule elements in the request. If no CorsRule
   * elements are included in the request body, all CORS rules will be deleted,
   * and CORS will be disabled for the Blob service.
   * @member {array} [cors.corsRules] The List of CORS rules. You can include
   * up to five CorsRule elements in the request.
   * @member {string} [defaultServiceVersion] DefaultServiceVersion indicates
   * the default version to use for requests to the Blob service if an incoming
   * request’s version is not specified. Possible values include version
   * 2008-10-27 and all more recent versions.
   * @member {object} [deleteRetentionPolicy] The blob service properties for
   * soft delete.
   * @member {boolean} [deleteRetentionPolicy.enabled] Indicates whether
   * DeleteRetentionPolicy is enabled for the Blob service.
   * @member {number} [deleteRetentionPolicy.days] Indicates the number of days
   * that the deleted blob should be retained. The minimum specified value can
   * be 1 and the maximum value can be 365.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of BlobServiceProperties
   *
   * @returns {object} metadata of BlobServiceProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BlobServiceProperties',
      type: {
        name: 'Composite',
        className: 'BlobServiceProperties',
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
          cors: {
            required: false,
            serializedName: 'properties.cors',
            type: {
              name: 'Composite',
              className: 'CorsRules'
            }
          },
          defaultServiceVersion: {
            required: false,
            serializedName: 'properties.defaultServiceVersion',
            type: {
              name: 'String'
            }
          },
          deleteRetentionPolicy: {
            required: false,
            serializedName: 'properties.deleteRetentionPolicy',
            type: {
              name: 'Composite',
              className: 'DeleteRetentionPolicy'
            }
          }
        }
      }
    };
  }
}

module.exports = BlobServiceProperties;