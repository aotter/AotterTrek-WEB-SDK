# 原生影片廣告
## 安裝方式 (預設版型)

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
  })(window, document, 'script', 'https://tkportal.aotter.net/public/3.0.0/sdk.js', 'AotterTrek');
  AotterTrek('init', 'CLIENT_ID');
</script>
<!-- end: trek sdk -->
```

在 `body` 中加入以下程式碼，包含 `[data-trek-ad="video"]` 的網頁元素會被轉換成影片廣告:
```html
<ins data-trek-ad="video" data-layout="prebuilt" data-place="placement_name"></ins>
```

## 影片廣告預設版型(淺色主題)

```html
<ins data-trek-ad="video" data-layout="prebuilt" data-place="placement_name" data-theme="light"></ins>
```

## 預設版型(深色主題)
```html
<ins data-trek-ad="video" data-layout="prebuilt" data-place="placement_name" data-theme="dark"></ins>
```

## 預設版型自訂樣式 (實驗階段功能)

```html
  <!-- trek video ad container -->
  <ins  data-trek-ad="video"
        data-theme="light"
        data-font-size="14"
        data-color="#333"
        data-background="#FFF"
        data-title-font-size="14"
        data-title-color="#666666"
        data-sponsor-color="#d4d4d4"
        data-action-color="#fff"
        data-action-border-color="#ababab"
        data-action-background="#ababab"
        data-action-font-size="13">
  </ins>
```

## 廣告載入成功、失敗的callback

```html
  <!-- trek video ad container -->
  <ins data-trek-ad="video" data-layout="prebuilt" data-place="placement_name_1"></ins>
  <!-- script -->
  <script>
    AotterTrek(function(API) {

      //監聽廣告載入成功事件
      API.Event.on('onAdLoad', function(data) {
        if (data.place === 'placement_name_1') {
          //成功
        }
      });

      //監聽廣告載入失敗事件
      API.Event.on('onAdFail', function() {
        if (data.place === 'placement_name_1') {
          //錯誤處理
        }
      });

    });
  </script>
  <!-- end: script -->
```

## 完整客製化
```html
<!-- start: trek video ad -->
<div>
  <style>
    [data-trek-cloak] {
      display: none;
    }

    [data-trek="URL"],
    [data-trek="URL"]:hover {
      display: block;
      text-decoration: none !important;
      font-size: 14px;
      color: #333;
      padding: 5px 10px;
      background: #eee;
    }

    [data-trek="URL"] td {
      vertical-align: center;
    }

    [data-trek="SPONSER"],
    [data-trek="ADVERTISER_NAME"] {
      font-size: 12px;
      color: #d4d4d4;
    }

    [data-trek="TITLE"] {
      font-size: 14px;
      color: #666666;
      letter-spacing: 0.05em;
      padding: 3px 0;
      text-align: justify;
    }

    [data-trek="TEXT"] {
      color: #AAA;
    }

    [data-trek="CALL_TO_ACTION"] {
      border: 1px solid #ababab;
      color: #fff;
      padding: 2px 16px;
      background: #ababab;
      font-size: 13px;
      letter-spacing: 0.05em;
    }
  </style>
  <div id="article-video" data-trek-cloak>
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
  <script>
    AotterTrek('nativeVideoAd', {
      selector: '#article-video',
      onAdLoad: function(node) {
        //廣告載入成功時的callback
      },
      onAdFail: function(node) {
        //廣告載入失敗時的callback
      }
    });
  </script>
</div>
```

廣告上架後，我們會審核以列下必填欄位是否有正確出現在原生廣告版面中。

| 名稱        | key           | required  |
| ------------- |:-------------:| -----:|
| 標題      | TITLE      |  true |
| Action Text      | CALL_TO_ACTION | true |
| Sponsor Text      | SPONSER      |  true |
| Advertiser name      | ADVERTISER_NAME      |  true |
| 文字敘述 | TEXT      |    false |

