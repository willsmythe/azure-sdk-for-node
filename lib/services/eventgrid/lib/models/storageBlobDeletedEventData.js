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
 * Schema of the Data property of an EventGridEvent for an
 * Microsoft.Storage.BlobDeleted event.
 *
 */
class StorageBlobDeletedEventData {
  /**
   * Create a StorageBlobDeletedEventData.
   * @member {string} [api] The name of the API/operation that triggered this
   * event.
   * @member {string} [clientRequestId] A request id provided by the client of
   * the storage API operation that triggered this event.
   * @member {string} [requestId] The request id generated by the Storage
   * service for the storage API operation that triggered this event.
   * @member {string} [contentType] The content type of the blob. This is the
   * same as what would be returned in the Content-Type header from the blob.
   * @member {string} [blobType] The type of blob.
   * @member {string} [url] The path to the blob.
   * @member {string} [sequencer] An opaque string value representing the
   * logical sequence of events for any particular blob name. Users can use
   * standard string comparison to understand the relative sequence of two
   * events on the same blob name.
   * @member {object} [storageDiagnostics] For service use only. Diagnostic
   * data occasionally included by the Azure Storage service. This property
   * should be ignored by event consumers.
   */
  constructor() {
  }

  /**
   * Defines the metadata of StorageBlobDeletedEventData
   *
   * @returns {object} metadata of StorageBlobDeletedEventData
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StorageBlobDeletedEventData',
      type: {
        name: 'Composite',
        className: 'StorageBlobDeletedEventData',
        modelProperties: {
          api: {
            required: false,
            serializedName: 'api',
            type: {
              name: 'String'
            }
          },
          clientRequestId: {
            required: false,
            serializedName: 'clientRequestId',
            type: {
              name: 'String'
            }
          },
          requestId: {
            required: false,
            serializedName: 'requestId',
            type: {
              name: 'String'
            }
          },
          contentType: {
            required: false,
            serializedName: 'contentType',
            type: {
              name: 'String'
            }
          },
          blobType: {
            required: false,
            serializedName: 'blobType',
            type: {
              name: 'String'
            }
          },
          url: {
            required: false,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          },
          sequencer: {
            required: false,
            serializedName: 'sequencer',
            type: {
              name: 'String'
            }
          },
          storageDiagnostics: {
            required: false,
            serializedName: 'storageDiagnostics',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = StorageBlobDeletedEventData;
