# 原生影片廣告

在 `head` 中加入以下程式碼

```html
<!-- start: trek sdk -->
<script>
  (function(w, d, s, src, n) {
    var js, ajs = d.getElementsByTagName(s)[0];
    if (d.getElementById(n)) return;
    js = d.createElement(s); js.id = n;
    w[n] = w[n] || function() { (w[n].q = w[n].q || []).push(arguments) }; w[n].l = 1 * new Date();
    js.async = 1; js.src = src; ajs.parentNode.insertBefore(js, ajs)
  })(window, document, 'script', 'https://tkportal.aotter.net/public/2.4.0/sdk.js', 'AotterTrek');
</script>
<!-- end: trek sdk -->
```

在 `body` 中加入以下程式碼: 

```html
<!-- start: trek video ad -->
<div>
  <style>
    [data-trek-cloak] { display: none; }
    [data-trek="URL"],
    [data-trek="URL"]:hover {
      display: block;
      text-decoration: none !important;
      font-size: 14px;
      color: #333;
      padding: 4px;	
    }
    [data-trek="URL"] td {
      vertical-align: center;
    }	
    [data-trek="SPONSER"],
    [data-trek="ADVERTISER_NAME"] {
      font-size: 12px;
      color: #caccce;
    }
    [data-trek="TITLE"] {
      font-size: 14px;
    }
    [data-trek="TEXT"] {
      color: #AAA;
    }
    [data-trek="CALL_TO_ACTION"] {
      border: 1px solid #333;
      color:#333;
      padding: 0px 16px;
    }
  </style>

  <!-- trek video ad container -->
  <div id="native-video-1" data-trek-cloak>
    <!-- video placement -->
    <video></video>
    <!-- ad info -->
    <a data-trek="URL" target="_blank" style="font-decoration:none;">
      <div data-trek="TITLE"></div>
      <table style="width:100%;">
        <tr>
          <td>
            <span data-trek="SPONSER"></span>&nbsp;<span data-trek="ADVERTISER_NAME"></span>
          </td>
          <td style="width:1px; white-space:nowrap;">
            <div data-trek="CALL_TO_ACTION"></div>
          </td>
        </tr>
      </table>
    </a>
  </div>

  <!-- script -->
  <script>
    AotterTrek('nativeVideoAd', {
      selector: '#native-video-1',
      onAdLoad: function(node) {
        //廣告載入成功時的callback
      },
      onAdFail: function(node) {
        //廣告載入失敗時的callback
      }
    })
  </script>
  <!-- end: script -->
</div>
<!-- end: trek video ad -->

```

廣告上架後，我們會審核以列下必填欄位是否有正確出現在原生廣告版面中。

| 名稱        | key           | required  |
| ------------- |:-------------:| -----:|
| 標題      | TITLE      |  true |
| Action Text      | CALL_TO_ACTION | true |
| Sponsor Text      | SPONSER      |  true |
| Advertiser name      | ADVERTISER_NAME      |  true |
| 文字敘述 | TEXT      |    false |

