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
    define(['ApiClient', 'model/AsyncResponseSummaryAnalysisResponse', 'model/SummaryAnalysisRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AsyncResponseSummaryAnalysisResponse'), require('../model/SummaryAnalysisRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ProWritingAidApi) {
      root.ProWritingAidApi = {};
    }
    root.ProWritingAidApi.SummaryApi = factory(root.ProWritingAidApi.ApiClient, root.ProWritingAidApi.AsyncResponseSummaryAnalysisResponse, root.ProWritingAidApi.SummaryAnalysisRequest);
  }
}(this, function(ApiClient, AsyncResponseSummaryAnalysisResponse, SummaryAnalysisRequest) {
  'use strict';

  /**
   * Summary service.
   * @module api/SummaryApi
   * @version 2.0.0
   */

  /**
   * Constructs a new SummaryApi. 
   * @alias module:api/SummaryApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Tries to get the result of a request using the task id of the request
     * Tries to get the result of a request using the task id of the request
     * @param {String} taskId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AsyncResponseSummaryAnalysisResponse} and HTTP response
     */
    this.getWithHttpInfo = function(taskId) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling get");
      }


      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['licenseCode'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json'];
      var returnType = AsyncResponseSummaryAnalysisResponse;

      return this.apiClient.callApi(
        '/api/async/summary/result/{taskId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Tries to get the result of a request using the task id of the request
     * Tries to get the result of a request using the task id of the request
     * @param {String} taskId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AsyncResponseSummaryAnalysisResponse}
     */
    this.get = function(taskId) {
      return this.getWithHttpInfo(taskId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets the summary analysis of a document
     * Gets the summary analysis of a document
     * @param {module:model/SummaryAnalysisRequest} requestp 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AsyncResponseSummaryAnalysisResponse} and HTTP response
     */
    this.postWithHttpInfo = function(requestp) {
      var postBody = requestp;

      // verify the required parameter 'requestp' is set
      if (requestp === undefined || requestp === null) {
        throw new Error("Missing the required parameter 'requestp' when calling post");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['licenseCode'];
      var contentTypes = ['application/json', 'text/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json'];
      var returnType = AsyncResponseSummaryAnalysisResponse;

      return this.apiClient.callApi(
        '/api/async/summary', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets the summary analysis of a document
     * Gets the summary analysis of a document
     * @param {module:model/SummaryAnalysisRequest} requestp 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AsyncResponseSummaryAnalysisResponse}
     */
    this.post = function(requestp) {
      return this.postWithHttpInfo(requestp)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
