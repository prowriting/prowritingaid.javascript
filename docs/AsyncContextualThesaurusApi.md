# ProWritingAidApi.AsyncContextualThesaurusApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncContextualThesaurusPost**](AsyncContextualThesaurusApi.md#asyncContextualThesaurusPost) | **POST** /api/async/contextualthesaurus | 


<a name="asyncContextualThesaurusPost"></a>
# **asyncContextualThesaurusPost**
> AsyncResponseContextualThesaurusResponse asyncContextualThesaurusPost(request)



### Example
```javascript
var ProWritingAidApi = require('pro_writing_aid_api');

var apiInstance = new ProWritingAidApi.AsyncContextualThesaurusApi();

var request = new ProWritingAidApi.ContextualThesaurusRequest(); // ContextualThesaurusRequest | 

apiInstance.asyncContextualThesaurusPost(request).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ContextualThesaurusRequest**](ContextualThesaurusRequest.md)|  | 

### Return type

[**AsyncResponseContextualThesaurusResponse**](AsyncResponseContextualThesaurusResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

