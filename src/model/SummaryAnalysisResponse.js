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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProWritingAidApi) {
      root.ProWritingAidApi = {};
    }
    root.ProWritingAidApi.SummaryAnalysisResponse = factory(root.ProWritingAidApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SummaryAnalysisResponse model module.
   * @module model/SummaryAnalysisResponse
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>SummaryAnalysisResponse</code>.
   * @alias module:model/SummaryAnalysisResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SummaryAnalysisResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SummaryAnalysisResponse} obj Optional instance to populate.
   * @return {module:model/SummaryAnalysisResponse} The populated <code>SummaryAnalysisResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Text')) {
        obj['Text'] = ApiClient.convertToType(data['Text'], 'String');
      }
    }
    return obj;
  }

  /**
   * SUmmary report renderred as html
   * @member {String} Text
   */
  exports.prototype['Text'] = undefined;



  return exports;
}));


