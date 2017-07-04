# ProWritingAidApi.AsyncHtmlResultApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncHtmlResultGetResult**](AsyncHtmlResultApi.md#asyncHtmlResultGetResult) | **GET** /api/async/result/html/{taskId} | 


<a name="asyncHtmlResultGetResult"></a>
# **asyncHtmlResultGetResult**
> HtmlAnalysisResponse asyncHtmlResultGetResult(taskId)



### Example
```javascript
var ProWritingAidApi = require('pro_writing_aid_api');

var apiInstance = new ProWritingAidApi.AsyncHtmlResultApi();

var taskId = "taskId_example"; // String | 

apiInstance.asyncHtmlResultGetResult(taskId).then(function(data) {
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

[**HtmlAnalysisResponse**](HtmlAnalysisResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

