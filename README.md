# ProWritingAid.API

Official ProWritingAid API Version 2

- API version: v2
- Package version: 2.0.0

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Install package using command:

```shell
npm install pro_writing_aid_api --save
```

#### git

Or install package from the git repo:

```shell
npm install prowriting/prowritingaid.javascript --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ProWritingAidApi = require('pro_writing_aid_api');

var api = new ProWritingAidApi.TextApi();
api.apiClient.basePath="https://api.prowritingaid.com";
api.apiClient.defaultHeaders={'licenseCode': 'your license code'}
var request = new ProWritingAidApi.TextAnalysisRequest(
  "I'd like to by that toy. wood you help me? I have twp more brothers.",
  ['grammar'],
  "General",
  "En"
);
api.post(request)
  .then(function(data) {
    console.log('API called successfully. Returned data: ');
    console.log(data);
  }, function(error) {
    console.error(error);
  });
```

## Documentation for API Endpoints

All URIs are relative to *https://localhost:5004*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ProWritingAidApi.ContextualThesaurusApi* | [**get**](docs/ContextualThesaurusApi.md#get) | **GET** /api/async/contextualthesaurus/result/{taskId} | Tries to get the result of a request using the task id of the request
*ProWritingAidApi.ContextualThesaurusApi* | [**post**](docs/ContextualThesaurusApi.md#post) | **POST** /api/async/contextualthesaurus | Analyses text and returns contextual thesaurus entries
*ProWritingAidApi.HtmlApi* | [**get**](docs/HtmlApi.md#get) | **GET** /api/async/html/result/{taskId} | Tries to get the result of a request using the task id of the request
*ProWritingAidApi.HtmlApi* | [**post**](docs/HtmlApi.md#post) | **POST** /api/async/html | Analyses HTML and adds suggestion tags to it
*ProWritingAidApi.SummaryApi* | [**get**](docs/SummaryApi.md#get) | **GET** /api/async/summary/result/{taskId} | Tries to get the result of a request using the task id of the request
*ProWritingAidApi.SummaryApi* | [**post**](docs/SummaryApi.md#post) | **POST** /api/async/summary | Gets the summary analysis of a document
*ProWritingAidApi.TextApi* | [**get**](docs/TextApi.md#get) | **GET** /api/async/text/result/{taskId} | Tries to get the result of a request using the task id of the request
*ProWritingAidApi.TextApi* | [**post**](docs/TextApi.md#post) | **POST** /api/async/text | Analyses html and adds suggestions tags to it
*ProWritingAidApi.ThesaurusApi* | [**post**](docs/ThesaurusApi.md#post) | **POST** /api/thesaurus | Returns the thesaurus entries for a specific word
*ProWritingAidApi.WordCloudApi* | [**get**](docs/WordCloudApi.md#get) | **GET** /api/async/wordcloud/result/{taskId} | Tries to get the result of a request using the task id of the request
*ProWritingAidApi.WordCloudApi* | [**post**](docs/WordCloudApi.md#post) | **POST** /api/async/wordcloud | Analyses text and returns a word cloud (as an image)


## Documentation for Models

 - [ProWritingAidApi.AnalysisSettings](docs/AnalysisSettings.md)
 - [ProWritingAidApi.AnalysisSummary](docs/AnalysisSummary.md)
 - [ProWritingAidApi.AnalysisSummaryGraph](docs/AnalysisSummaryGraph.md)
 - [ProWritingAidApi.AnalysisSummaryGraphItem](docs/AnalysisSummaryGraphItem.md)
 - [ProWritingAidApi.AnalysisSummaryItem](docs/AnalysisSummaryItem.md)
 - [ProWritingAidApi.AnalysisSummarySubItem](docs/AnalysisSummarySubItem.md)
 - [ProWritingAidApi.AsyncResponseContextualThesaurusResponse](docs/AsyncResponseContextualThesaurusResponse.md)
 - [ProWritingAidApi.AsyncResponseHtmlAnalysisResponse](docs/AsyncResponseHtmlAnalysisResponse.md)
 - [ProWritingAidApi.AsyncResponseSummaryAnalysisResponse](docs/AsyncResponseSummaryAnalysisResponse.md)
 - [ProWritingAidApi.AsyncResponseTextAnalysisResponse](docs/AsyncResponseTextAnalysisResponse.md)
 - [ProWritingAidApi.AsyncResponseWordCloudResponse](docs/AsyncResponseWordCloudResponse.md)
 - [ProWritingAidApi.ContextualThesaurusRequest](docs/ContextualThesaurusRequest.md)
 - [ProWritingAidApi.ContextualThesaurusResponse](docs/ContextualThesaurusResponse.md)
 - [ProWritingAidApi.DocTag](docs/DocTag.md)
 - [ProWritingAidApi.EntryMeaning](docs/EntryMeaning.md)
 - [ProWritingAidApi.HtmlAnalysisRequest](docs/HtmlAnalysisRequest.md)
 - [ProWritingAidApi.HtmlAnalysisResponse](docs/HtmlAnalysisResponse.md)
 - [ProWritingAidApi.SuggestionCategory](docs/SuggestionCategory.md)
 - [ProWritingAidApi.SummaryAnalysisRequest](docs/SummaryAnalysisRequest.md)
 - [ProWritingAidApi.SummaryAnalysisResponse](docs/SummaryAnalysisResponse.md)
 - [ProWritingAidApi.TextAnalysisRequest](docs/TextAnalysisRequest.md)
 - [ProWritingAidApi.TextAnalysisResponse](docs/TextAnalysisResponse.md)
 - [ProWritingAidApi.ThesaurusRequest](docs/ThesaurusRequest.md)
 - [ProWritingAidApi.ThesaurusResponse](docs/ThesaurusResponse.md)
 - [ProWritingAidApi.WordCloudRequest](docs/WordCloudRequest.md)
 - [ProWritingAidApi.WordCloudResponse](docs/WordCloudResponse.md)


## Documentation for Authorization


### licenseCode

- **Type**: API key
- **API key parameter name**: licenseCode
- **Location**: HTTP header

