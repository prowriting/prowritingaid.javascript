# ProWritingAidApi.AsyncSummaryApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncSummaryPost**](AsyncSummaryApi.md#asyncSummaryPost) | **POST** /api/async/summary | 


<a name="asyncSummaryPost"></a>
# **asyncSummaryPost**
> AsyncResponseSummaryAnalysisResponse asyncSummaryPost(request)



### Example
```javascript
var ProWritingAidApi = require('pro_writing_aid_api');

var apiInstance = new ProWritingAidApi.AsyncSummaryApi();

var request = new ProWritingAidApi.SummaryAnalysisRequest(); // SummaryAnalysisRequest | 

apiInstance.asyncSummaryPost(request).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SummaryAnalysisRequest**](SummaryAnalysisRequest.md)|  | 

### Return type

[**AsyncResponseSummaryAnalysisResponse**](AsyncResponseSummaryAnalysisResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

