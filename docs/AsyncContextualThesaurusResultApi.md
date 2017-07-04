# ProWritingAidApi.AsyncContextualThesaurusResultApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncContextualThesaurusResultGetResult**](AsyncContextualThesaurusResultApi.md#asyncContextualThesaurusResultGetResult) | **GET** /api/async/result/contextualthesaurus/{taskId} | 


<a name="asyncContextualThesaurusResultGetResult"></a>
# **asyncContextualThesaurusResultGetResult**
> ContextualThesaurusResponse asyncContextualThesaurusResultGetResult(taskId)



### Example
```javascript
var ProWritingAidApi = require('pro_writing_aid_api');

var apiInstance = new ProWritingAidApi.AsyncContextualThesaurusResultApi();

var taskId = "taskId_example"; // String | 

apiInstance.asyncContextualThesaurusResultGetResult(taskId).then(function(data) {
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

[**ContextualThesaurusResponse**](ContextualThesaurusResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

