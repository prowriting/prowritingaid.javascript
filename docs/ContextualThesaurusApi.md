# ProWritingAidApi.ContextualThesaurusApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contextualThesaurusPostAsync**](ContextualThesaurusApi.md#contextualThesaurusPostAsync) | Uses /api/async/contextualthesaurus and /api/async/result/contextualthesaurus/{taskId} | Universal processing method automatically identifies how to process input text (synchronously for short texts and via queue for large texts)



<a name="contextualThesaurusPostAsync"></a>
# **contextualThesaurusPostAsync**
> ContextualThesaurusResponse contextualThesaurusPostAsync(request, licenseCode, settings)



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
api.contextualThesaurusPostAsync(request, "$licenseCode$")
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
 **request** | [**ContextualThesaurusRequest**](ContextualThesaurusRequest.md)| Input data container |
 **licenseCode** | String | API key |
 **settings** | Object / undefined | Optional parameter with defined **TimeoutInMs** and **AwaitCallDelay** properties |


### Return type

[**ContextualThesaurusResponse**](ContextualThesaurusResponse.md)
