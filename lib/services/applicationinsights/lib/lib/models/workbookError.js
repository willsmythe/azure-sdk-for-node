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
 * Error message body that will indicate why the operation failed.
 *
 */
class WorkbookError {
  /**
   * Create a WorkbookError.
   * @member {string} [code] Service-defined error code. This code serves as a
   * sub-status for the HTTP error code specified in the response.
   * @member {string} [message] Human-readable representation of the error.
   * @member {array} [details] The list of invalid fields send in request, in
   * case of validation error.
   */
  constructor() {
  }

  /**
   * Defines the metadata of WorkbookError
   *
   * @returns {object} metadata of WorkbookError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WorkbookError',
      type: {
        name: 'Composite',
        className: 'WorkbookError',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          details: {
            required: false,
            serializedName: 'details',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ErrorFieldContractElementType',
                  type: {
                    name: 'Composite',
                    className: 'ErrorFieldContract'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = WorkbookError;