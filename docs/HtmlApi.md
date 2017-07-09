# ProWritingAidApi.HtmlApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**htmlPostAsync**](HtmlApi.md#htmlPostAsync) | Uses /api/async/html and /api/async/result/html/{taskId} | Universal processing method automatically identifies how to process input text (synchronously for short texts and via queue for large texts)


<a name="htmlPostAsync"></a>
# **htmlPostAsync**
> HtmlAnalysisResponse htmlPostAsync(request, licenseCode, settings)



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
api.htmlPostAsync(request, "$licenseCode$")
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
 **request** | [**HtmlAnalysisRequest**](HtmlAnalysisRequest.md)| Input data container |
 **licenseCode** | String | API key |
 **settings** | Object / undefined | Optional parameter with defined **TimeoutInMs** and **AwaitCallDelay** properties |

### Return type

[**HtmlAnalysisResponse**](HtmlAnalysisResponse.md)

