# ProWritingAidApi.TextAnalysisRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **String** | Text to be processed | 
**reports** | **[String]** | List of reports   &lt;example&gt;  [\&quot;grammar\&quot;,\&quot;overused\&quot;]  &lt;/example&gt;&lt;remarks&gt;  List of currently supported reports:  acronym,alliteration,allrepeats,allsentences,  cliche,closerepeat,combo,complex,consistency,  core,corporate,dialog,diction,dva,eloquence,  grammar,grammarplus,homonym,house,initial,nlp,  overused,overusedonly,overview,pacing,passive,  phrases,plagiarism,plength,preadability,slength,  ssentences,ssentences_noglue,structure,thesaurus,  transition,vague,wordcloud,wordsandphrases,wordsphrases  &lt;/remarks&gt; | 
**style** | **String** | Document&#39;s writing style | 
**language** | **String** | Document&#39;s language  &lt;remarks&gt;  Set correct UK/US language to get region-specific suggestions  &lt;/remarks&gt; | 


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




