# ProWritingAidApi.WordCloudApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wordCloudPost**](WordCloudApi.md#wordCloudPost) | **POST** /api/wordcloud | 


<a name="wordCloudPost"></a>
# **wordCloudPost**
> WordCloudResponse wordCloudPost(request)



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
api.wordCloudPost(request, "$licenseCode$")
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

### Return type

[**WordCloudResponse**](WordCloudResponse.md)

### Authorization

Set correct **$licenseCode$**

