# ProWritingAidApi.SummaryApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**summaryPostAsync**](SummaryApi.md#summaryPostAsync) | Uses /api/async/summary and /api/summary/result/html/{taskId} | Universal processing method automatically identifies how to process input text (synchronously for short texts and via queue for large texts)


<a name="summaryPostAsync"></a>
# **summaryPostAsync**
> SummaryAnalysisResponse summaryPostAsync(request, licenseCode, settings)



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
api.summaryPostAsync(request, "$licenseCode$")
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
 **request** | [**SummaryAnalysisRequest**](SummaryAnalysisRequest.md)| Input data container |
 **licenseCode** | String | API key |
 **settings** | Object / undefined | Optional parameter with defined **TimeoutInMs** and **AwaitCallDelay** properties |


### Return type

[**SummaryAnalysisResponse**](SummaryAnalysisResponse.md)

