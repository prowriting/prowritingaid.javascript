# ProWritingAidApi.AsyncWordCloudResultApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncWordCloudResultGetResult**](AsyncWordCloudResultApi.md#asyncWordCloudResultGetResult) | **GET** /api/async/result/wordcloud/{taskId} | 


<a name="asyncWordCloudResultGetResult"></a>
# **asyncWordCloudResultGetResult**
> WordCloudResponse asyncWordCloudResultGetResult(taskId)



### Example
```javascript
var ProWritingAidApi = require('pro_writing_aid_api');

var apiInstance = new ProWritingAidApi.AsyncWordCloudResultApi();

var taskId = "taskId_example"; // String | 

apiInstance.asyncWordCloudResultGetResult(taskId).then(function(data) {
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

[**WordCloudResponse**](WordCloudResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

