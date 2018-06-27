# ProWritingAidApiV2.SummaryApi

All URIs are relative to *https://localhost:5004*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get**](SummaryApi.md#get) | **GET** /api/async/summary/result/{taskId} | 
[**post**](SummaryApi.md#post) | **POST** /api/async/summary | 


<a name="get"></a>
# **get**
> AsyncResponseSummaryAnalysisResponse get(taskId)



### Example
```javascript
var ProWritingAidApiV2 = require('pro_writing_aid_api_v2');
var defaultClient = ProWritingAidApiV2.ApiClient.instance;

// Configure API key authorization: licenseCode
var licenseCode = defaultClient.authentications['licenseCode'];
licenseCode.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//licenseCode.apiKeyPrefix = 'Token';

var apiInstance = new ProWritingAidApiV2.SummaryApi();

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

[**AsyncResponseSummaryAnalysisResponse**](AsyncResponseSummaryAnalysisResponse.md)

### Authorization

[licenseCode](../README.md#licenseCode)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="post"></a>
# **post**
> AsyncResponseSummaryAnalysisResponse post(requestp)



### Example
```javascript
var ProWritingAidApiV2 = require('pro_writing_aid_api_v2');
var defaultClient = ProWritingAidApiV2.ApiClient.instance;

// Configure API key authorization: licenseCode
var licenseCode = defaultClient.authentications['licenseCode'];
licenseCode.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//licenseCode.apiKeyPrefix = 'Token';

var apiInstance = new ProWritingAidApiV2.SummaryApi();

var requestp = new ProWritingAidApiV2.SummaryAnalysisRequest(); // SummaryAnalysisRequest | 

apiInstance.post(requestp).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestp** | [**SummaryAnalysisRequest**](SummaryAnalysisRequest.md)|  | 

### Return type

[**AsyncResponseSummaryAnalysisResponse**](AsyncResponseSummaryAnalysisResponse.md)

### Authorization

[licenseCode](../README.md#licenseCode)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

