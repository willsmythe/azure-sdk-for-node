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
 * Details of the File Server.
 *
 */
class MountSettings {
  /**
   * Create a MountSettings.
   * @member {string} [mountPoint] Path where the NFS is mounted on the Server.
   * @member {string} [fileServerPublicIP] Public IP of the File Server VM.
   * @member {string} [fileServerInternalIP] Internal subnet IP which can be
   * used to access the file Server from within the subnet.
   * @member {string} [fileServerType] Type of the fileserver e.g. nfs,
   * glusterfs etc. Possible values include: 'nfs', 'glusterfs'
   */
  constructor() {
  }

  /**
   * Defines the metadata of MountSettings
   *
   * @returns {object} metadata of MountSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MountSettings',
      type: {
        name: 'Composite',
        className: 'MountSettings',
        modelProperties: {
          mountPoint: {
            required: false,
            serializedName: 'mountPoint',
            type: {
              name: 'String'
            }
          },
          fileServerPublicIP: {
            required: false,
            serializedName: 'fileServerPublicIP',
            type: {
              name: 'String'
            }
          },
          fileServerInternalIP: {
            required: false,
            serializedName: 'fileServerInternalIP',
            type: {
              name: 'String'
            }
          },
          fileServerType: {
            required: false,
            serializedName: 'fileServerType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MountSettings;