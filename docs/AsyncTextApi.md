# ProWritingAidApi.AsyncTextApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncTextPost**](AsyncTextApi.md#asyncTextPost) | **POST** /api/async/text | 


<a name="asyncTextPost"></a>
# **asyncTextPost**
> AsyncResponseTextAnalysisResponse asyncTextPost(request)



### Example
```javascript
var ProWritingAidApi = require('pro_writing_aid_api');

var apiInstance = new ProWritingAidApi.AsyncTextApi();

var request = new ProWritingAidApi.TextAnalysisRequest(); // TextAnalysisRequest | 

apiInstance.asyncTextPost(request).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**TextAnalysisRequest**](TextAnalysisRequest.md)|  | 

### Return type

[**AsyncResponseTextAnalysisResponse**](AsyncResponseTextAnalysisResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

