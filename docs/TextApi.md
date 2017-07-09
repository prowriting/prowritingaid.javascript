# ProWritingAidApi.TextApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**textPostAsync**](TextApi.md#textPostAsync) | Uses /api/async/text and /api/summary/result/text/{taskId} | Universal processing method automatically identifies how to process input text (synchronously for short texts and via queue for large texts)

<a name="textPostAsync"></a>
# **textPostAsync**
> TextAnalysisResponse textPostAsync(request, licenseCode, settings)



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
api.textPostAsync(request, "$licenseCode$")
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
 **request** | [**TextAnalysisRequest**](TextAnalysisRequest.md)| Input data container |
 **licenseCode** | String | API key |
 **settings** | Object / undefined | Optional parameter with defined **TimeoutInMs** and **AwaitCallDelay** properties |


### Return type

[**TextAnalysisResponse**](TextAnalysisResponse.md)
