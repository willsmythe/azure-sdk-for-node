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
 * Routing rules for ramp up testing. This rule allows to redirect static
 * traffic % to a slot or to gradually change routing % based on performance.
 *
 */
class RampUpRule {
  /**
   * Create a RampUpRule.
   * @member {string} [actionHostName] Hostname of a slot to which the traffic
   * will be redirected if decided to. E.g. myapp-stage.azurewebsites.net.
   * @member {number} [reroutePercentage] Percentage of the traffic which will
   * be redirected to <code>ActionHostName</code>.
   * @member {number} [changeStep] In auto ramp up scenario this is the step to
   * to add/remove from <code>ReroutePercentage</code> until it reaches
   * <code>MinReroutePercentage</code> or <code>MaxReroutePercentage</code>.
   * Site metrics are checked every N minutes specificed in
   * <code>ChangeIntervalInMinutes</code>.
   * Custom decision algorithm can be provided in TiPCallback site extension
   * which URL can be specified in <code>ChangeDecisionCallbackUrl</code>.
   * @member {number} [changeIntervalInMinutes] Specifies interval in mimuntes
   * to reevaluate ReroutePercentage.
   * @member {number} [minReroutePercentage] Specifies lower boundary above
   * which ReroutePercentage will stay.
   * @member {number} [maxReroutePercentage] Specifies upper boundary below
   * which ReroutePercentage will stay.
   * @member {string} [changeDecisionCallbackUrl] Custom decision algorithm can
   * be provided in TiPCallback site extension which URL can be specified. See
   * TiPCallback site extension for the scaffold and contracts.
   * https://www.siteextensions.net/packages/TiPCallback/
   * @member {string} [name] Name of the routing rule. The recommended name
   * would be to point to the slot which will receive the traffic in the
   * experiment.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RampUpRule
   *
   * @returns {object} metadata of RampUpRule
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RampUpRule',
      type: {
        name: 'Composite',
        className: 'RampUpRule',
        modelProperties: {
          actionHostName: {
            required: false,
            serializedName: 'actionHostName',
            type: {
              name: 'String'
            }
          },
          reroutePercentage: {
            required: false,
            serializedName: 'reroutePercentage',
            type: {
              name: 'Number'
            }
          },
          changeStep: {
            required: false,
            serializedName: 'changeStep',
            type: {
              name: 'Number'
            }
          },
          changeIntervalInMinutes: {
            required: false,
            serializedName: 'changeIntervalInMinutes',
            type: {
              name: 'Number'
            }
          },
          minReroutePercentage: {
            required: false,
            serializedName: 'minReroutePercentage',
            type: {
              name: 'Number'
            }
          },
          maxReroutePercentage: {
            required: false,
            serializedName: 'maxReroutePercentage',
            type: {
              name: 'Number'
            }
          },
          changeDecisionCallbackUrl: {
            required: false,
            serializedName: 'changeDecisionCallbackUrl',
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
          }
        }
      }
    };
  }
}

module.exports = RampUpRule;