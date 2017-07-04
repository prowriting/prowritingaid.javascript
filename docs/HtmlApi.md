# ProWritingAidApi.HtmlApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**htmlPost**](HtmlApi.md#htmlPost) | **POST** /api/html | 


<a name="htmlPost"></a>
# **htmlPost**
> HtmlAnalysisResponse htmlPost(request)



### Example
```javascript
var ProWritingAidApi = require('pro_writing_aid_api');

var api = new ProWritingAidApi.HtmlApi();
var request = new ProWritingAidApi.HtmlAnalysisRequest(
  "<p>I'd like to by that toy. wood you help me? I have twp more brothers.</p>",
  ['grammar'],
  "General",
  "En"
);
api.htmlPost(request, "$licenseCode$")
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
 **request** | [**HtmlAnalysisRequest**](HtmlAnalysisRequest.md)|  | 

### Return type

[**HtmlAnalysisResponse**](HtmlAnalysisResponse.md)

### Authorization

Set correct **$licenseCode$**

