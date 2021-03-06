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
 * Object model for updating a pattern.
 *
 */
class PatternRuleUpdateObject {
  /**
   * Create a PatternRuleUpdateObject.
   * @member {uuid} [id] The pattern ID.
   * @member {string} [pattern] The pattern text.
   * @member {string} [intent] The intent's name which the pattern belongs to.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PatternRuleUpdateObject
   *
   * @returns {object} metadata of PatternRuleUpdateObject
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PatternRuleUpdateObject',
      type: {
        name: 'Composite',
        className: 'PatternRuleUpdateObject',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          pattern: {
            required: false,
            serializedName: 'pattern',
            type: {
              name: 'String'
            }
          },
          intent: {
            required: false,
            serializedName: 'intent',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PatternRuleUpdateObject;
