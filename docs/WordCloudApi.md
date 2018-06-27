# ProWritingAidApiV2.WordCloudApi

All URIs are relative to *https://localhost:5004*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get**](WordCloudApi.md#get) | **GET** /api/async/wordcloud/result/{taskId} | 
[**post**](WordCloudApi.md#post) | **POST** /api/async/wordcloud | 


<a name="get"></a>
# **get**
> AsyncResponseWordCloudResponse get(taskId)



### Example
```javascript
var ProWritingAidApiV2 = require('pro_writing_aid_api_v2');

var apiInstance = new ProWritingAidApiV2.WordCloudApi();

var taskId = "taskId_example"; // String | 

apiInstance.get(taskId).then(function(data) {
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

[**AsyncResponseWordCloudResponse**](AsyncResponseWordCloudResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="post"></a>
# **post**
> AsyncResponseWordCloudResponse post(requestp)



### Example
```javascript
var ProWritingAidApiV2 = require('pro_writing_aid_api_v2');

var apiInstance = new ProWritingAidApiV2.WordCloudApi();

var requestp = new ProWritingAidApiV2.WordCloudRequest(); // WordCloudRequest | 

apiInstance.post(requestp).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestp** | [**WordCloudRequest**](WordCloudRequest.md)|  | 

### Return type

[**AsyncResponseWordCloudResponse**](AsyncResponseWordCloudResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

