# ProWritingAidApi.AsyncWordCloudApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncWordCloudPost**](AsyncWordCloudApi.md#asyncWordCloudPost) | **POST** /api/async/wordcloud | 


<a name="asyncWordCloudPost"></a>
# **asyncWordCloudPost**
> AsyncResponseWordCloudResponse asyncWordCloudPost(request)



### Example
```javascript
var ProWritingAidApi = require('pro_writing_aid_api');

var apiInstance = new ProWritingAidApi.AsyncWordCloudApi();

var request = new ProWritingAidApi.WordCloudRequest(); // WordCloudRequest | 

apiInstance.asyncWordCloudPost(request).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**WordCloudRequest**](WordCloudRequest.md)|  | 

### Return type

[**AsyncResponseWordCloudResponse**](AsyncResponseWordCloudResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

