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
 * Describes a data disk.
 *
 */
class ImageDataDisk {
  /**
   * Create a ImageDataDisk.
   * @member {number} lun Specifies the logical unit number of the data disk.
   * This value is used to identify data disks within the VM and therefore must
   * be unique for each data disk attached to a VM.
   * @member {object} [snapshot] The snapshot.
   * @member {string} [snapshot.id] Resource Id
   * @member {object} [managedDisk] The managedDisk.
   * @member {string} [managedDisk.id] Resource Id
   * @member {string} [blobUri] The Virtual Hard Disk.
   * @member {string} [caching] Specifies the caching requirements. <br><br>
   * Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br>
   * **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for
   * Premium storage**. Possible values include: 'None', 'ReadOnly',
   * 'ReadWrite'
   * @member {number} [diskSizeGB] Specifies the size of empty data disks in
   * gigabytes. This element can be used to overwrite the name of the disk in a
   * virtual machine image. <br><br> This value cannot be larger than 1023 GB
   * @member {string} [storageAccountType] Specifies the storage account type
   * for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks,
   * it cannot be used with OS Disk. Possible values include: 'Standard_LRS',
   * 'Premium_LRS', 'StandardSSD_LRS', 'UltraSSD_LRS'
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImageDataDisk
   *
   * @returns {object} metadata of ImageDataDisk
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageDataDisk',
      type: {
        name: 'Composite',
        className: 'ImageDataDisk',
        modelProperties: {
          lun: {
            required: true,
            serializedName: 'lun',
            type: {
              name: 'Number'
            }
          },
          snapshot: {
            required: false,
            serializedName: 'snapshot',
            type: {
              name: 'Composite',
              className: 'SubResource'
            }
          },
          managedDisk: {
            required: false,
            serializedName: 'managedDisk',
            type: {
              name: 'Composite',
              className: 'SubResource'
            }
          },
          blobUri: {
            required: false,
            serializedName: 'blobUri',
            type: {
              name: 'String'
            }
          },
          caching: {
            required: false,
            serializedName: 'caching',
            type: {
              name: 'Enum',
              allowedValues: [ 'None', 'ReadOnly', 'ReadWrite' ]
            }
          },
          diskSizeGB: {
            required: false,
            serializedName: 'diskSizeGB',
            type: {
              name: 'Number'
            }
          },
          storageAccountType: {
            required: false,
            serializedName: 'storageAccountType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ImageDataDisk;
