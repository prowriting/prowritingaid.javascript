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
    define(['ApiClient', 'model/AnalysisSummaryItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnalysisSummaryItem'));
  } else {
    // Browser globals (root is window)
    if (!root.ProWritingAidApi) {
      root.ProWritingAidApi = {};
    }
    root.ProWritingAidApi.AnalysisSummary = factory(root.ProWritingAidApi.ApiClient, root.ProWritingAidApi.AnalysisSummaryItem);
  }
}(this, function(ApiClient, AnalysisSummaryItem) {
  'use strict';




  /**
   * The AnalysisSummary model module.
   * @module model/AnalysisSummary
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>AnalysisSummary</code>.
   * Represents report summary
   * @alias module:model/AnalysisSummary
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>AnalysisSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalysisSummary} obj Optional instance to populate.
   * @return {module:model/AnalysisSummary} The populated <code>AnalysisSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ReportDisplayName')) {
        obj['ReportDisplayName'] = ApiClient.convertToType(data['ReportDisplayName'], 'String');
      }
      if (data.hasOwnProperty('ReportName')) {
        obj['ReportName'] = ApiClient.convertToType(data['ReportName'], 'String');
      }
      if (data.hasOwnProperty('SummaryItems')) {
        obj['SummaryItems'] = ApiClient.convertToType(data['SummaryItems'], [AnalysisSummaryItem]);
      }
      if (data.hasOwnProperty('NumberOfIssues')) {
        obj['NumberOfIssues'] = ApiClient.convertToType(data['NumberOfIssues'], 'Number');
      }
      if (data.hasOwnProperty('ReportDescription')) {
        obj['ReportDescription'] = ApiClient.convertToType(data['ReportDescription'], 'String');
      }
    }
    return obj;
  }

  /**
   * Report's display name
   * @member {String} ReportDisplayName
   */
  exports.prototype['ReportDisplayName'] = undefined;
  /**
   * Report's ID
   * @member {String} ReportName
   */
  exports.prototype['ReportName'] = undefined;
  /**
   * Found issues
   * @member {Array.<module:model/AnalysisSummaryItem>} SummaryItems
   */
  exports.prototype['SummaryItems'] = undefined;
  /**
   * Number of found issues
   * @member {Number} NumberOfIssues
   */
  exports.prototype['NumberOfIssues'] = undefined;
  /**
   * Short report description
   * @member {String} ReportDescription
   */
  exports.prototype['ReportDescription'] = undefined;



  return exports;
}));


