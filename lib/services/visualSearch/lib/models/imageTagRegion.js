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
 * Defines an image region relevant to the ImageTag.
 *
 */
class ImageTagRegion {
  /**
   * Create a ImageTagRegion.
   * @member {object} queryRectangle A rectangle that outlines the area of
   * interest for this tag.
   * @member {object} [queryRectangle.topLeft] The top left corner coordinate.
   * @member {number} [queryRectangle.topLeft.x] The x-coordinate of the point.
   * @member {number} [queryRectangle.topLeft.y] The y-coordinate of the point.
   * @member {object} [queryRectangle.topRight] The top right corner
   * coordinate.
   * @member {number} [queryRectangle.topRight.x] The x-coordinate of the
   * point.
   * @member {number} [queryRectangle.topRight.y] The y-coordinate of the
   * point.
   * @member {object} [queryRectangle.bottomRight] The bottom right corner
   * coordinate.
   * @member {number} [queryRectangle.bottomRight.x] The x-coordinate of the
   * point.
   * @member {number} [queryRectangle.bottomRight.y] The y-coordinate of the
   * point.
   * @member {object} [queryRectangle.bottomLeft] The bottom left corner
   * coordinate.
   * @member {number} [queryRectangle.bottomLeft.x] The x-coordinate of the
   * point.
   * @member {number} [queryRectangle.bottomLeft.y] The y-coordinate of the
   * point.
   * @member {object} displayRectangle A recommended rectangle to show to the
   * user.
   * @member {object} [displayRectangle.topLeft] The top left corner
   * coordinate.
   * @member {number} [displayRectangle.topLeft.x] The x-coordinate of the
   * point.
   * @member {number} [displayRectangle.topLeft.y] The y-coordinate of the
   * point.
   * @member {object} [displayRectangle.topRight] The top right corner
   * coordinate.
   * @member {number} [displayRectangle.topRight.x] The x-coordinate of the
   * point.
   * @member {number} [displayRectangle.topRight.y] The y-coordinate of the
   * point.
   * @member {object} [displayRectangle.bottomRight] The bottom right corner
   * coordinate.
   * @member {number} [displayRectangle.bottomRight.x] The x-coordinate of the
   * point.
   * @member {number} [displayRectangle.bottomRight.y] The y-coordinate of the
   * point.
   * @member {object} [displayRectangle.bottomLeft] The bottom left corner
   * coordinate.
   * @member {number} [displayRectangle.bottomLeft.x] The x-coordinate of the
   * point.
   * @member {number} [displayRectangle.bottomLeft.y] The y-coordinate of the
   * point.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImageTagRegion
   *
   * @returns {object} metadata of ImageTagRegion
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageTagRegion',
      type: {
        name: 'Composite',
        className: 'ImageTagRegion',
        modelProperties: {
          queryRectangle: {
            required: true,
            serializedName: 'queryRectangle',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'ResponseBase',
              className: 'NormalizedQuadrilateral'
            }
          },
          displayRectangle: {
            required: true,
            serializedName: 'displayRectangle',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'ResponseBase',
              className: 'NormalizedQuadrilateral'
            }
          }
        }
      }
    };
  }
}

module.exports = ImageTagRegion;
