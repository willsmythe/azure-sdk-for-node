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
 * Pattern.Any Entity Extractor.
 *
 */
class PatternAnyEntityExtractor {
  /**
   * Create a PatternAnyEntityExtractor.
   * @member {uuid} id The ID of the Entity Model.
   * @member {string} [name] Name of the Entity Model.
   * @member {number} [typeId] The type ID of the Entity Model.
   * @member {string} readableType Possible values include: 'Entity Extractor',
   * 'Hierarchical Entity Extractor', 'Hierarchical Child Entity Extractor',
   * 'Composite Entity Extractor', 'Closed List Entity Extractor', 'Prebuilt
   * Entity Extractor', 'Intent Classifier', 'Pattern.Any Entity Extractor',
   * 'Regex Entity Extractor'
   * @member {array} [roles]
   * @member {array} [explicitList]
   */
  constructor() {
  }

  /**
   * Defines the metadata of PatternAnyEntityExtractor
   *
   * @returns {object} metadata of PatternAnyEntityExtractor
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Pattern.Any Entity Extractor',
      type: {
        name: 'Composite',
        className: 'PatternAnyEntityExtractor',
        modelProperties: {
          id: {
            required: true,
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
          typeId: {
            required: false,
            serializedName: 'typeId',
            type: {
              name: 'Number'
            }
          },
          readableType: {
            required: true,
            serializedName: 'readableType',
            type: {
              name: 'String'
            }
          },
          roles: {
            required: false,
            serializedName: 'roles',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EntityRoleElementType',
                  type: {
                    name: 'Composite',
                    className: 'EntityRole'
                  }
              }
            }
          },
          explicitList: {
            required: false,
            serializedName: 'explicitList',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ExplicitListItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'ExplicitListItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PatternAnyEntityExtractor;
