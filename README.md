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
*ProWritingAidApiV2.ContextualThesaurusApi* | [**get**](docs/ContextualThesaurusApi.md#get) | **GET** /api/async/contextualthesaurus/result/{taskId} | 
*ProWritingAidApiV2.ContextualThesaurusApi* | [**post**](docs/ContextualThesaurusApi.md#post) | **POST** /api/async/contextualthesaurus | 
*ProWritingAidApiV2.HtmlApi* | [**get**](docs/HtmlApi.md#get) | **GET** /api/async/html/result/{taskId} | 
*ProWritingAidApiV2.HtmlApi* | [**post**](docs/HtmlApi.md#post) | **POST** /api/async/html | 
*ProWritingAidApiV2.SummaryApi* | [**get**](docs/SummaryApi.md#get) | **GET** /api/async/summary/result/{taskId} | 
*ProWritingAidApiV2.SummaryApi* | [**post**](docs/SummaryApi.md#post) | **POST** /api/async/summary | 
*ProWritingAidApiV2.TextApi* | [**get**](docs/TextApi.md#get) | **GET** /api/async/text/result/{taskId} | 
*ProWritingAidApiV2.TextApi* | [**post**](docs/TextApi.md#post) | **POST** /api/async/text | 
*ProWritingAidApiV2.ThesaurusApi* | [**post**](docs/ThesaurusApi.md#post) | **POST** /api/thesaurus | Returns the thesaurus entries for a specific word
*ProWritingAidApiV2.WordCloudApi* | [**get**](docs/WordCloudApi.md#get) | **GET** /api/async/wordcloud/result/{taskId} | 
*ProWritingAidApiV2.WordCloudApi* | [**post**](docs/WordCloudApi.md#post) | **POST** /api/async/wordcloud | 


## Documentation for Models

 - [ProWritingAidApiV2.AnalysisSettings](docs/AnalysisSettings.md)
 - [ProWritingAidApiV2.AnalysisSummary](docs/AnalysisSummary.md)
 - [ProWritingAidApiV2.AnalysisSummaryGraph](docs/AnalysisSummaryGraph.md)
 - [ProWritingAidApiV2.AnalysisSummaryGraphItem](docs/AnalysisSummaryGraphItem.md)
 - [ProWritingAidApiV2.AnalysisSummaryItem](docs/AnalysisSummaryItem.md)
 - [ProWritingAidApiV2.AnalysisSummarySubItem](docs/AnalysisSummarySubItem.md)
 - [ProWritingAidApiV2.AsyncResponseContextualThesaurusResponse](docs/AsyncResponseContextualThesaurusResponse.md)
 - [ProWritingAidApiV2.AsyncResponseHtmlAnalysisResponse](docs/AsyncResponseHtmlAnalysisResponse.md)
 - [ProWritingAidApiV2.AsyncResponseSummaryAnalysisResponse](docs/AsyncResponseSummaryAnalysisResponse.md)
 - [ProWritingAidApiV2.AsyncResponseTextAnalysisResponse](docs/AsyncResponseTextAnalysisResponse.md)
 - [ProWritingAidApiV2.AsyncResponseWordCloudResponse](docs/AsyncResponseWordCloudResponse.md)
 - [ProWritingAidApiV2.ContextualThesaurusRequest](docs/ContextualThesaurusRequest.md)
 - [ProWritingAidApiV2.ContextualThesaurusResponse](docs/ContextualThesaurusResponse.md)
 - [ProWritingAidApiV2.DocTag](docs/DocTag.md)
 - [ProWritingAidApiV2.EntryMeaning](docs/EntryMeaning.md)
 - [ProWritingAidApiV2.HtmlAnalysisRequest](docs/HtmlAnalysisRequest.md)
 - [ProWritingAidApiV2.HtmlAnalysisResponse](docs/HtmlAnalysisResponse.md)
 - [ProWritingAidApiV2.SuggestionCategory](docs/SuggestionCategory.md)
 - [ProWritingAidApiV2.SummaryAnalysisRequest](docs/SummaryAnalysisRequest.md)
 - [ProWritingAidApiV2.SummaryAnalysisResponse](docs/SummaryAnalysisResponse.md)
 - [ProWritingAidApiV2.TextAnalysisRequest](docs/TextAnalysisRequest.md)
 - [ProWritingAidApiV2.TextAnalysisResponse](docs/TextAnalysisResponse.md)
 - [ProWritingAidApiV2.ThesaurusRequest](docs/ThesaurusRequest.md)
 - [ProWritingAidApiV2.ThesaurusResponse](docs/ThesaurusResponse.md)
 - [ProWritingAidApiV2.WordCloudRequest](docs/WordCloudRequest.md)
 - [ProWritingAidApiV2.WordCloudResponse](docs/WordCloudResponse.md)


## Documentation for Authorization


### licenseCode

- **Type**: API key
- **API key parameter name**: licenseCode
- **Location**: HTTP header

