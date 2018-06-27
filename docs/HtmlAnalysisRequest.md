# ProWritingAidApiV2.HtmlAnalysisRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**html** | **String** | Html to be processed | 
**reports** | **[String]** | List of reports - EXAMPLE: [\&quot;grammar\&quot;,\&quot;overused\&quot;] | 
**style** | **String** | Document&#39;s writing style | [default to &#39;General&#39;]
**language** | **String** | Document&#39;s language. Set correct UK/US language to get region-specific suggestions | [default to &#39;en&#39;]


<a name="StyleEnum"></a>
## Enum: StyleEnum


* `NotSet` (value: `"NotSet"`)

* `General` (value: `"General"`)

* `Academic` (value: `"Academic"`)

* `Business` (value: `"Business"`)

* `Technical` (value: `"Technical"`)

* `Creative` (value: `"Creative"`)

* `Casual` (value: `"Casual"`)

* `Web` (value: `"Web"`)




<a name="LanguageEnum"></a>
## Enum: LanguageEnum


* `en_US` (value: `"en_US"`)

* `en_UK` (value: `"en_UK"`)

* `en` (value: `"en"`)

* `es` (value: `"es"`)




