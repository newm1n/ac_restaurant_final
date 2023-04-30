# Restaurant_List


## Screenshot
https://github.com/newm1n/ac_restaurant_final/blob/main/public/images/%E6%88%AA%E5%9C%96%202023-04-30%20%E4%B8%8B%E5%8D%8810.39.57.png


## About
這是一個練習使用RESTful設計的餐廳清單網站。

## Features

1. 使用者可以使用名稱或料理類型來搜尋餐廳
2. 使用者可點擊餐廳來查看、修改、刪除資訊
3. 餐廳地址連結到 Google 地圖
4. 使用者可以瀏覽、新增、編輯、刪除餐廳
5. 使用者可以註冊帳號並登入
6. 使用者可以使用臉書登入

## Installation and execution

1. 請先確認有安裝 node.js, npm 與 nodemon
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

```
npm install
```
```
npm i nodemon
```

4. 安裝完畢後執行種子資料(請到Seeds資料夾裡查詢測試帳號)：

```
npm run seed
```

5. 若看見此行訊息則代表種子資料順利運行：

> MongpDB is connect!

請打開瀏覽器進入到以下網址：

> http://localhost:3000/users/login

6. 若欲暫停使用

```
ctrl + c
```
