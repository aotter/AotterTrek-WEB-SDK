### 資料綁定
| selector                        	| data-binding                 	|
|---------------------------------	|------------------------------	|
| `<any data-trek="[PROP]"><any>` 	| `element.innerText = [PROP]` 	|
| `<img data-trek="[PROP]" />`    	| `img.src = [PROP]`           	|
| `<a data-trek="[PROP]"></a>`    	| `a.href = [PROP]`            	|

#### example

假設客製化的原生廣告的 html 如下:

```html
<a id="native-ad" data-trek="URL">
  <img data-trek="IMG_ICON" />
  <h4 data-trek="TITLE"></h4>
  <h4 data-trek="TEXT"></h4>
</a>
<script>
  AotterTrek('nativeAd', {
    selector: '#native-ad'
  });
</script>
```

並假設取得的 `廣告資料` 如下：

```json
{
  "TITLE": "DEMO 廣告標題",
  "TEXT": "DEMO 廣告文字",   
  "IMG_ICON": "https://placehold.it/82x82",
  "URL": "https://trek.aotter.net/ad_url"
}
```

廣告資料會綁定到原本的 html 中：

```html
<a id="native-ad" data-trek="URL" href="https://trek.aotter.net/ad_url" data-trek-id="1">
  <img data-trek="IMG_ICON" src="https://placehold.it/82x82"/>
  <h4 data-trek="TITLE">DEMO 廣告標題</h4>
  <h4 data-trek="TEXT">DEMO 廣告文字</h4>
</a>
<script>
  AotterTrek('nativeAd', {
    selector: '#native-ad'
  });
</script>
```

### 如何在廣告載入成功後，才顯示廣告？
執行 `AotterTrek.render('#native-ad')`  後，若成功顯示廣告，sdk 會在 `#native-ad` 上多加一個 `data-trek-id` 屬性。

#### example

```html
<a id="native-ad" data-trek="URL">
  <!-- 廣告 -->
</a>
<script>
  AotterTrek('nativeAd', {
    selector: '#native-ad'
  });
</script>
```
會變成：

```html
<a id="native-ad" data-trek="URL" href="https://trek.aotter.net/ad_url" data-trek-id="1">
  <!-- 廣告 -->
</a>
<script>
  AotterTrek('nativeAd', {
    selector: '#native-ad'
  });
</script>
```

#### 範例1. 用 css 來隱藏尚未載入的廣告。
```html
<style>
  #native-ad:not([data-trek-id]) {
    display:none;
  }
</style>
<a id="native-ad" data-trek="URL">
  <!-- 廣告 -->
</a>
<script>
  AotterTrek('nativeAd', {
    selector: '#native-ad'
  });
</script>
```

#### 範例2. 用 js 來顯示載入的廣告。
```html
<a id="native-ad" data-trek="URL" style="display:none;">
  <!-- 廣告 -->
</a>
<script>
  AotterTrek('nativeAd', {
    selector: '#native-ad',
    onAdLoad: function(node) {
      $(node).show();
    },
    onAdFail: function(node) {
      $(node).hide();
    }
  });
</script>
```


#### 廣告資料屬性
| props           	| description             	| render type       	|
|-----------------	|-------------------------	|-------------------	|
| TITLE           	| 廣告標題                	| element.innerText 	|
| TEXT            	| 廣告文字內容            	| element.innerText 	|
| IMG_ICON        	| 廣告圖片 82 x 82px      	| img.src           	|
| IMG_ICON_HD     	| 廣告圖片 300 x 300px    	| img.src           	|
| IMG_ICON_MAIN   	| 廣告圖片 1280 x 720px   	| img.src           	|
| URL             	| 廣告連結                	| a.href            	|
| ADVERTISER_NAME 	| 廣告商名稱              	| element.innerText 	|
| SPONSER         	| 廣告贊助詞 例：贊助     	| element.innerText 	|
| CALL_TO_ACTION  	| 廣告動作詞 例：瞭解詳情 	| element.innerText 	|
