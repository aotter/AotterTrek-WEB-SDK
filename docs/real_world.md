#### example
```js

//設定分析用的使用者資料
AotterTrek('setUser', {
  email: 'example@aotter.net',  
  birthday '1999/01/01',
  fbId: '[USER_FACEBOOK_ID]',
  gender: 'MALE'
});

//載入並顯示廣告
AotterTrek('nativeAd', {
  selector: '#native-ad'
});

//分析網頁瀏覽資訊
AotterTrek('init');
```
