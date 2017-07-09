(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    if (!root.ProWritingAidApi) {
      root.ProWritingAidApi = {};
    }
    root.ProWritingAidApi.AsyncAwaiter = factory();
  }
}(this, function () {
  'use strict';

  /**
   * AsyncAwaiter service.
   * @module api/AsyncAwaiter
   * @version v1
   */

  /**
   * Constructs a new AsyncAwaiter.
   * @alias module:api/AsyncAwaiter
   * @class
   */
  var exports = function () {

    /**
     *
     * @param settings object with defined TimeoutInMs and AwaitCallDelay
     * @param setter queue task setter
     * @param getter task result getter
     * @param request request to be processed
     * @param license license code
     * @returns {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.await = function (settings, setter, getter, request, license) {
      /**
       * Default async API call, default is 100 secs
       */
      var DefaultTimeoutInMs = 100000;
      /**
       * Default interval between getResult calls, default is 1 sec
       */
      var DefaultAwaitCallDelay = 1000;
      function delay(t) {
        return new Promise(function (resolve) {
          setTimeout(resolve, t)
        });
      }
      if (settings == null) {
        settings = {
          TimeoutInMs: DefaultTimeoutInMs,
          AwaitCallDelay: DefaultAwaitCallDelay
        }
      }
      if (settings.AwaitCallDelay == null) {
        settings.AwaitCallDelay = DefaultAwaitCallDelay
      }
      if (settings.TimeoutInMs == null) {
        settings.TimeoutInMs = DefaultTimeoutInMs
      }
      var numberOfAttempts = 0;

      function continuation(data) {
        numberOfAttempts++;
        if (data.Result != null) {
          return new Promise(function (resolve) {
            resolve(data.Result);
          });
        }
        if (numberOfAttempts > settings.TimeoutInMs / settings.AwaitCallDelay) {
          return new Promise(function (resolve, reject) {
            reject(new Error("Operation timed out"))
          });
        }
        return delay(settings.AwaitCallDelay)
          .then(function () {
            return getter.get(data.TaskId, license)
              .then(continuation)
          })
      }

      return setter.post(request, license)
        .then(continuation)
    }
  };

  return exports;
}));
