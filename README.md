# Drawing Game  抽獎遊戲

## 專案簡介
**抽籤小遊戲**，使用者可以選擇預設籤組或自訂籤組。

網址：https://min630.github.io/drawing_game/#/

<img src="https://github.com/min630/drawing_game/blob/main/screenshot.JPG" width="600" height="350" alt="image"/>
<img src="https://github.com/min630/drawing_game/blob/main/show.JPG" width="600" height="350" alt="image"/>

## 功能

### 頁首菜單
- 首頁：首頁可選擇進入預設籤組或自訂籤組。
- 預設籤組：為模擬 [一番賞](https://www.banpresto.jp/cn/) 的籤組。
- 自訂籤組：可以自行設定獎項、張數和圖片，但圖片目前只能用網址連結無法上傳。
- 已抽到的獎項：以Modal的方式依次顯示目前抽到的獎項。

### 按鈕
- 輸出籤紙：將所有獎項以亂數洗牌後覆蓋，顯示在網頁右側。
- 結束抽籤：結束目前的抽籤，清空籤紙及抽籤結果。
- 新增：新增自訂的獎項及張數。

## 安裝專案

1. Clone 專案到本地
```
git clone https://github.com/min630/drawing-game.git
```

2. 進入專案資料夾
```
cd drawing-game
```

3. 安裝套件
```
npm install
```

4. 啟動專案
```
npm run serve
```

5. 成功啟動後，在瀏覽器輸入終端機提供的本地端網址可瀏覽專案內容


## 開發工具

- vue 3.0
- vue-router 4.0.0
- bootstrap: 5.1.3
- sass 1.26.5
