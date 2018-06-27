# ProWritingAidApiV2.WordCloudRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **String** | The text to be turned into a Word Cloud | 
**orientation** | **String** | The orientation of the text | [default to &#39;EveryWhichWay&#39;]
**caseMethod** | **String** | The method to be used for casing | [default to &#39;IntelligentCase&#39;]
**paletteName** | **String** | The name of the palette | [default to &#39;ProWritingAid&#39;]
**maximumWordCount** | **Number** | the maximum number of words to be created | [default to 100]
**removeCommonWords** | **Boolean** | Should Common words be removed from the cloud | [default to true]
**fontName** | **String** | The name of the font to use | [default to &#39;Arial&#39;]
**width** | **Number** | The width of the image to produce | [default to 200]
**height** | **Number** | The height of the image to produce | [default to 200]
**onlySentimentWords** | **Boolean** | Only use the sentiment words from the text | [default to false]
**style** | **String** | Document&#39;s writing style | [default to &#39;General&#39;]
**language** | **String** | Document&#39;s language. Set correct UK/US language to get region-specific suggestions | [default to &#39;en&#39;]


<a name="OrientationEnum"></a>
## Enum: OrientationEnum


* `Horizontal` (value: `"Horizontal"`)

* `MostlyHorizontal` (value: `"MostlyHorizontal"`)

* `Vertical` (value: `"Vertical"`)

* `MostlyVertical` (value: `"MostlyVertical"`)

* `HalfAndHalf` (value: `"HalfAndHalf"`)

* `EveryWhichWay` (value: `"EveryWhichWay"`)




<a name="CaseMethodEnum"></a>
## Enum: CaseMethodEnum


* `PreserveCase` (value: `"PreserveCase"`)

* `Lowercase` (value: `"Lowercase"`)

* `Uppercase` (value: `"Uppercase"`)

* `IntelligentCase` (value: `"IntelligentCase"`)




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




