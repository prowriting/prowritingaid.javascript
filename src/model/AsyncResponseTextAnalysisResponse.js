/**
 * ProWritingAid API V2
 * Official ProWritingAid API Version 2
 *
 * OpenAPI spec version: v2
 * Contact: hello@prowritingaid.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TextAnalysisResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TextAnalysisResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ProWritingAidApi) {
      root.ProWritingAidApi = {};
    }
    root.ProWritingAidApi.AsyncResponseTextAnalysisResponse = factory(root.ProWritingAidApi.ApiClient, root.ProWritingAidApi.TextAnalysisResponse);
  }
}(this, function(ApiClient, TextAnalysisResponse) {
  'use strict';




  /**
   * The AsyncResponseTextAnalysisResponse model module.
   * @module model/AsyncResponseTextAnalysisResponse
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>AsyncResponseTextAnalysisResponse</code>.
   * Asynchronous request
   * @alias module:model/AsyncResponseTextAnalysisResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AsyncResponseTextAnalysisResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AsyncResponseTextAnalysisResponse} obj Optional instance to populate.
   * @return {module:model/AsyncResponseTextAnalysisResponse} The populated <code>AsyncResponseTextAnalysisResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TaskId')) {
        obj['TaskId'] = ApiClient.convertToType(data['TaskId'], 'String');
      }
      if (data.hasOwnProperty('Result')) {
        obj['Result'] = TextAnalysisResponse.constructFromObject(data['Result']);
      }
    }
    return obj;
  }

  /**
   * Async task Id. Empty or null if task was processed synchronously
   * @member {String} TaskId
   */
  exports.prototype['TaskId'] = undefined;
  /**
   * Actual response
   * @member {module:model/TextAnalysisResponse} Result
   */
  exports.prototype['Result'] = undefined;



  return exports;
}));


