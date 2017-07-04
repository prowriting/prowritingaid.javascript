# ProWritingAidApi.AsyncTextResultApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncTextResultGetResult**](AsyncTextResultApi.md#asyncTextResultGetResult) | **GET** /api/async/result/text/{taskId} | 


<a name="asyncTextResultGetResult"></a>
# **asyncTextResultGetResult**
> TextAnalysisResponse asyncTextResultGetResult(taskId)



### Example
```javascript
var ProWritingAidApi = require('pro_writing_aid_api');

var apiInstance = new ProWritingAidApi.AsyncTextResultApi();

var taskId = "taskId_example"; // String | 

apiInstance.asyncTextResultGetResult(taskId).then(function(data) {
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

[**TextAnalysisResponse**](TextAnalysisResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

