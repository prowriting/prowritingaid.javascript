# ProWritingAidApi.AsyncSummaryResultApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncSummaryResultGetResult**](AsyncSummaryResultApi.md#asyncSummaryResultGetResult) | **GET** /api/async/result/summary/{taskId} | 


<a name="asyncSummaryResultGetResult"></a>
# **asyncSummaryResultGetResult**
> SummaryAnalysisResponse asyncSummaryResultGetResult(taskId)



### Example
```javascript
var ProWritingAidApi = require('pro_writing_aid_api');

var apiInstance = new ProWritingAidApi.AsyncSummaryResultApi();

var taskId = "taskId_example"; // String | 

apiInstance.asyncSummaryResultGetResult(taskId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**|  | 

### Return type

[**SummaryAnalysisResponse**](SummaryAnalysisResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

