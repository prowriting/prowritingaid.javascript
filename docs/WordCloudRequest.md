# ProWritingAidApi.WordCloudRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **String** | The text to be turned into a Word Cloud | 
**orientation** | **String** | The orientation of the text | 
**caseMethod** | **String** | The method to be used for casing | 
**paletteName** | **String** | The name of the palette | 
**maximumWordCount** | **Integer** | the maximum number of words to be created | 
**removeCommonWords** | **Boolean** | Should Common words be removed from the cloud | 
**fontName** | **String** | The name of the font to use | 
**width** | **Integer** | The width of the image to produce | 
**height** | **Integer** | The height of the image to produce | 
**onlySentimentWords** | **Boolean** | Only use the sentiment words from the text | 
**style** | **String** | Document&#39;s writing style | 
**language** | **String** | Document&#39;s language  &lt;remarks&gt;  Set correct UK/US language to get region-specific suggestions  &lt;/remarks&gt; | 


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




