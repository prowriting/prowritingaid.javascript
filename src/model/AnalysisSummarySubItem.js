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
    root.ProWritingAidApi.AnalysisSummarySubItem = factory(root.ProWritingAidApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AnalysisSummarySubItem model module.
   * @module model/AnalysisSummarySubItem
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>AnalysisSummarySubItem</code>.
   * @alias module:model/AnalysisSummarySubItem
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>AnalysisSummarySubItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalysisSummarySubItem} obj Optional instance to populate.
   * @return {module:model/AnalysisSummarySubItem} The populated <code>AnalysisSummarySubItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TagIds')) {
        obj['TagIds'] = ApiClient.convertToType(data['TagIds'], ['String']);
      }
      if (data.hasOwnProperty('Text')) {
        obj['Text'] = ApiClient.convertToType(data['Text'], 'String');
      }
      if (data.hasOwnProperty('SuggestionCategory')) {
        obj['SuggestionCategory'] = ApiClient.convertToType(data['SuggestionCategory'], 'String');
      }
      if (data.hasOwnProperty('SubCategory')) {
        obj['SubCategory'] = ApiClient.convertToType(data['SubCategory'], 'String');
      }
      if (data.hasOwnProperty('SearchTerm')) {
        obj['SearchTerm'] = ApiClient.convertToType(data['SearchTerm'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} TagIds
   */
  exports.prototype['TagIds'] = undefined;
  /**
   * @member {String} Text
   */
  exports.prototype['Text'] = undefined;
  /**
   * @member {String} SuggestionCategory
   */
  exports.prototype['SuggestionCategory'] = undefined;
  /**
   * @member {String} SubCategory
   */
  exports.prototype['SubCategory'] = undefined;
  /**
   * @member {String} SearchTerm
   */
  exports.prototype['SearchTerm'] = undefined;



  return exports;
}));


