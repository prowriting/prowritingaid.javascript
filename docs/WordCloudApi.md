# ProWritingAidApi.WordCloudApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wordCloudPostAsync**](WordCloudApi.md#wordCloudPostAsync) | Uses /api/async/wordcloud and /api/summary/result/wordcloud/{taskId} | Universal processing method automatically identifies how to process input text (synchronously for short texts and via queue for large texts) 


<a name="wordCloudPostAsync"></a>
# **wordCloudPostAsync**
> WordCloudResponse wordCloudPostAsync(request, licenseCode, settings)



### Example
```javascript
var ProWritingAidApi = require('pro_writing_aid_api');

var api = new ProWritingAidApi.WordCloudApi();
var request = new ProWritingAidApi.WordCloudRequest(
  "I'd like to by that toy. wood you help me? I have twp more brothers.",
  "EveryWhichWay",
  "IntelligentCase",
  "Earthy",
  200000,
  true,
  "Arial",
  500,
  500,
  false,
  "General",
  "En"
);
api.wordCloudPostAsync(request, "$licenseCode$")
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
 **request** | [**WordCloudRequest**](WordCloudRequest.md)|  |
 **licenseCode** | String | API key |
 **settings** | Object / undefined | Optional parameter with defined **TimeoutInMs** and **AwaitCallDelay** properties |


### Return type

[**WordCloudResponse**](WordCloudResponse.md)
