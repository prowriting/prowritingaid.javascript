# ProWritingAidApiV2.TextApi

All URIs are relative to *https://localhost:5004*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get**](TextApi.md#get) | **GET** /api/async/text/result/{taskId} | 
[**post**](TextApi.md#post) | **POST** /api/async/text | 


<a name="get"></a>
# **get**
> AsyncResponseTextAnalysisResponse get(taskId)



### Example
```javascript
var ProWritingAidApiV2 = require('pro_writing_aid_api_v2');
var defaultClient = ProWritingAidApiV2.ApiClient.instance;

// Configure API key authorization: licenseCode
var licenseCode = defaultClient.authentications['licenseCode'];
licenseCode.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//licenseCode.apiKeyPrefix = 'Token';

var apiInstance = new ProWritingAidApiV2.TextApi();

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

[**AsyncResponseTextAnalysisResponse**](AsyncResponseTextAnalysisResponse.md)

### Authorization

[licenseCode](../README.md#licenseCode)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="post"></a>
# **post**
> AsyncResponseTextAnalysisResponse post(requestp)



### Example
```javascript
var ProWritingAidApiV2 = require('pro_writing_aid_api_v2');
var defaultClient = ProWritingAidApiV2.ApiClient.instance;

// Configure API key authorization: licenseCode
var licenseCode = defaultClient.authentications['licenseCode'];
licenseCode.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//licenseCode.apiKeyPrefix = 'Token';

var apiInstance = new ProWritingAidApiV2.TextApi();

var requestp = new ProWritingAidApiV2.TextAnalysisRequest(); // TextAnalysisRequest | 

apiInstance.post(requestp).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestp** | [**TextAnalysisRequest**](TextAnalysisRequest.md)|  | 

### Return type

[**AsyncResponseTextAnalysisResponse**](AsyncResponseTextAnalysisResponse.md)

### Authorization

[licenseCode](../README.md#licenseCode)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

