## Install SDK

````html
<!-- sdk -->
<script>
  (function(w, d, s, src, n) {
    var js, ajs = d.getElementsByTagName(s)[0];
    if (d.getElementById(n)) return;
    js = d.createElement(s); js.id = n;
    w[n] = w[n] || function() { (w[n].q = w[n].q || []).push(arguments) }; w[n].l = 1 * new Date();
    js.async = 1; js.src = src; ajs.parentNode.insertBefore(js, ajs)
  })(window, document, 'script', 'https://tkportal.aotter.net/public/2.5.0/sdk.js', 'AotterTrek');
  AotterTrek('init', 'CLIENT_ID');
</script>
```

## 快速使用預設的廣告版型
`AotterTrek` 提供一個方便的預設廣告版型，可以直接使用。 

```html
<!-- sdk -->
<script>
  (function(w, d, s, src, n) {
    var js, ajs = d.getElementsByTagName(s)[0];
    if (d.getElementById(n)) return;
    js = d.createElement(s); js.id = n;
    w[n] = w[n] || function() { (w[n].q = w[n].q || []).push(arguments) }; w[n].l = 1 * new Date();
    js.async = 1; js.src = src; ajs.parentNode.insertBefore(js, ajs)
  })(window, document, 'script', 'https://tkportal.aotter.net/public/2.5.0/sdk.js', 'AotterTrek');
	AotterTrek('init', 'CLIENT_ID');
</script>
```

包含 `[data-trek-ad="native"]` 的網頁元素會被轉換成廣告。
```html
<ins data-trek-ad="native" data-layout="prebuilt" data-place="placement_name"></ins>
```


## 進階設定 (客製化)

### Demo html
以下的程式碼片段，是一個簡單的原生廣告範例:
```html
<!-- .native-ad -->
<a id="native-ad" class="native-ad" data-trek="URL" target="_blank">
  <div class="ad-action">
    <span style="float:left;">
      <small>Sponsered by&nbsp;</small><small class="editor" data-trek="ADVERTISER_NAME"></small>
    </span>
    <span style="float:right;">
      <small>
        <u data-trek="CALL_TO_ACTION"></u>
      </small>
    </span>
  </div>
  <div class="ad-content">
    <div class="ad-image">
      <img data-trek="IMG_ICON">
    </div>
    <div class="ad-info">
      <h4 data-trek="TITLE"></h4>
      <p data-trek="TEXT"></p>
    </div>
  </div>
</a>

<!-- sdk -->
<script>
  (function(w, d, s, src, n) {
    var js, ajs = d.getElementsByTagName(s)[0];
    if (d.getElementById(n)) return;
    js = d.createElement(s); js.id = n;
    w[n] = w[n] || function() { (w[n].q = w[n].q || []).push(arguments) }; w[n].l = 1 * new Date();
    js.async = 1; js.src = src; ajs.parentNode.insertBefore(js, ajs)
  })(window, document, 'script', 'https://tkportal.aotter.net/public/2.5.0/sdk.js', 'AotterTrek');
  AotterTrek('init', 'CLIENT_ID');
</script>
<!-- init script  -->
<script>
  AotterTrek('nativeAd', {
    selector: '#native-ad'
  });
</script>

```

### Demo style
為範例廣告加上一些樣式。

```html
<style>
.native-ad,.native-ad:hover {
  display: block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  line-height: 1.2em;
  margin: 0 auto;
  max-width: 100%;
  font-size: 12px;
  background: #f8f8f8;
}
.native-ad img {
  display: block;
  width: 82px;
  height: 82px;
}
.native-ad .ad-action {
  overflow-y: auto;
  padding: 4px;
  background: #e4e4e4;

}
.native-ad .ad-content {
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  display: flex;
}
.native-ad .ad-info {
  padding: 4px;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.native-ad h4 {
  font-size: 14px;
  color: #111;
  margin-top: 0;
  margin-bottom: 0.25em;
}

.native-ad p {
  font-size: 12px;
  color: #565656;
  margin: 0;
}
</style>
```

