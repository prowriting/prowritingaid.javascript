# ProWritingAidApi.SummaryApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**summaryPost**](SummaryApi.md#summaryPost) | **POST** /api/summary | 


<a name="summaryPost"></a>
# **summaryPost**
> SummaryAnalysisResponse summaryPost(request)



### Example
```javascript
var ProWritingAidApi = require('pro_writing_aid_api');

var api = new ProWritingAidApi.SummaryApi();
var request = new ProWritingAidApi.SummaryAnalysisRequest(
  "<p>I'd like to by that toy. wood you help me? I have twp more brothers.</p>",
  new ProWritingAidApi.AnalysisSettings(),
  "General",
  "En"
);
api.summaryPost(request, "$licenseCode$")
  .then(function(data) {
    console.log('API called successfully. Returned data: ');
    console.log(data);
    done();
  }, function(error) {
    console.error(error);
  });

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SummaryAnalysisRequest**](SummaryAnalysisRequest.md)|  | 

### Return type

[**SummaryAnalysisResponse**](SummaryAnalysisResponse.md)

### Authorization

Set correct **$licenseCode$**

