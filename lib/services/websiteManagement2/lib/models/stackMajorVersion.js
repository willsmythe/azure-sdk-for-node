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
 * Application stack major version.
 *
 */
class StackMajorVersion {
  /**
   * Create a StackMajorVersion.
   * @member {string} [displayVersion] Application stack major version (display
   * only).
   * @member {string} [runtimeVersion] Application stack major version (runtime
   * only).
   * @member {boolean} [isDefault] <code>true</code> if this is the default
   * major version; otherwise, <code>false</code>.
   * @member {array} [minorVersions] Minor versions associated with the major
   * version.
   */
  constructor() {
  }

  /**
   * Defines the metadata of StackMajorVersion
   *
   * @returns {object} metadata of StackMajorVersion
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StackMajorVersion',
      type: {
        name: 'Composite',
        className: 'StackMajorVersion',
        modelProperties: {
          displayVersion: {
            required: false,
            serializedName: 'displayVersion',
            type: {
              name: 'String'
            }
          },
          runtimeVersion: {
            required: false,
            serializedName: 'runtimeVersion',
            type: {
              name: 'String'
            }
          },
          isDefault: {
            required: false,
            serializedName: 'isDefault',
            type: {
              name: 'Boolean'
            }
          },
          minorVersions: {
            required: false,
            serializedName: 'minorVersions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StackMinorVersionElementType',
                  type: {
                    name: 'Composite',
                    className: 'StackMinorVersion'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = StackMajorVersion;
