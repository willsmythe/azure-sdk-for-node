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
 * The Docker build step.
 *
 * @extends models['BuildStepProperties']
 */
class DockerBuildStep extends models['BuildStepProperties'] {
  /**
   * Create a DockerBuildStep.
   * @member {string} [branch] The repository branch name.
   * @member {array} [imageNames] The fully qualified image names including the
   * repository and tag.
   * @member {boolean} [isPushEnabled] The value of this property indicates
   * whether the image built should be pushed to the registry or not. Default
   * value: true .
   * @member {boolean} [noCache] The value of this property indicates whether
   * the image cache is enabled or not. Default value: false .
   * @member {string} [dockerFilePath] The Docker file path relative to the
   * source control root.
   * @member {string} [contextPath] The relative context path for a docker
   * build in the source.
   * @member {array} [buildArguments] The custom arguments for building this
   * build step.
   * @member {array} [baseImageDependencies] List of base image dependencies
   * for a step.
   * @member {string} [baseImageTrigger] The type of the auto trigger for base
   * image dependency updates. Possible values include: 'All', 'Runtime',
   * 'None'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DockerBuildStep
   *
   * @returns {object} metadata of DockerBuildStep
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Docker',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'BuildStepProperties',
        className: 'DockerBuildStep',
        modelProperties: {
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'provisioningState',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          branch: {
            required: false,
            serializedName: 'branch',
            type: {
              name: 'String'
            }
          },
          imageNames: {
            required: false,
            serializedName: 'imageNames',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          isPushEnabled: {
            required: false,
            serializedName: 'isPushEnabled',
            defaultValue: true,
            type: {
              name: 'Boolean'
            }
          },
          noCache: {
            required: false,
            serializedName: 'noCache',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          },
          dockerFilePath: {
            required: false,
            serializedName: 'dockerFilePath',
            type: {
              name: 'String'
            }
          },
          contextPath: {
            required: false,
            serializedName: 'contextPath',
            type: {
              name: 'String'
            }
          },
          buildArguments: {
            required: false,
            serializedName: 'buildArguments',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'BuildArgumentElementType',
                  type: {
                    name: 'Composite',
                    className: 'BuildArgument'
                  }
              }
            }
          },
          baseImageDependencies: {
            required: false,
            readOnly: true,
            serializedName: 'baseImageDependencies',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'BaseImageDependencyElementType',
                  type: {
                    name: 'Composite',
                    className: 'BaseImageDependency'
                  }
              }
            }
          },
          baseImageTrigger: {
            required: false,
            serializedName: 'baseImageTrigger',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DockerBuildStep;