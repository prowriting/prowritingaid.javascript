# ProWritingAidApi.ContextualThesaurusApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contextualThesaurusPost**](ContextualThesaurusApi.md#contextualThesaurusPost) | **POST** /api/contextualthesaurus | 


<a name="contextualThesaurusPost"></a>
# **contextualThesaurusPost**
> ContextualThesaurusResponse contextualThesaurusPost(request)



### Example
```javascript
var ProWritingAidApi = require('pro_writing_aid_api');

var api = new ProWritingAidApi.ContextualThesaurusApi();
var request = new ProWritingAidApi.ContextualThesaurusRequest(
  "This is a sample text in English to test the sdk thesaurus. " +
  "This is a second paragraph in the document. This  is a new line.",
  17,
  20
);
api.contextualThesaurusPost(request, "$licenseCode$")
  .then(function(data) {
    console.log('API called successfully. Returned data: ');
    console.log(data);
  }, function(error) {
    console.error(error);
  });

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ContextualThesaurusRequest**](ContextualThesaurusRequest.md)|  | 

### Return type

[**ContextualThesaurusResponse**](ContextualThesaurusResponse.md)

### Authorization

Set correct **$licenseCode$**

