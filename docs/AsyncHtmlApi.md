# ProWritingAidApi.AsyncHtmlApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncHtmlPost**](AsyncHtmlApi.md#asyncHtmlPost) | **POST** /api/async/html | 


<a name="asyncHtmlPost"></a>
# **asyncHtmlPost**
> AsyncResponseHtmlAnalysisResponse asyncHtmlPost(request)



### Example
```javascript
var ProWritingAidApi = require('pro_writing_aid_api');

var apiInstance = new ProWritingAidApi.AsyncHtmlApi();

var request = new ProWritingAidApi.HtmlAnalysisRequest(); // HtmlAnalysisRequest | 

apiInstance.asyncHtmlPost(request).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**HtmlAnalysisRequest**](HtmlAnalysisRequest.md)|  | 

### Return type

[**AsyncResponseHtmlAnalysisResponse**](AsyncResponseHtmlAnalysisResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

