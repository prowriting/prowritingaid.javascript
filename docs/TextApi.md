# ProWritingAidApi.TextApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**textPost**](TextApi.md#textPost) | **POST** /api/text | 


<a name="textPost"></a>
# **textPost**
> TextAnalysisResponse textPost(request)



### Example
```javascript
var ProWritingAidApi = require('pro_writing_aid_api');

var api = new ProWritingAidApi.TextApi();
var request = new ProWritingAidApi.TextAnalysisRequest(
  "I'd like to by that toy. wood you help me? I have twp more brothers.",
  ['grammar'],
  "General",
  "En"
);
api.textPost(request, "$licenseCode$")
  .then(
    function(data) {
      console.log('API called successfully. Returned data: ' + data);
    }, 
    function(error) {
      console.error(error);
    });

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**TextAnalysisRequest**](TextAnalysisRequest.md)|  | 

### Return type

[**TextAnalysisResponse**](TextAnalysisResponse.md)

### Authorization

Set correct **$licenseCode$**

