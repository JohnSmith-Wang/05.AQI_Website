<template>

  <main class="container-fluid">
    <div class="col-12 col-xl-6">
      <h4>★ 練習項目</h4>
      <ul>
        <li>Locale Stoarge 應用</li>
        <li>axios(AJAX) 應用</li>
      </ul>
    </div>
    <div class="col-12 col-xl-6">
      <h4>★ 功能簡述</h4>
      <ul>
        <li>查詢由政府開放資料平台的空氣監測站資料</li>
        <li>使用者可以將常用的監測站加入書籤</li>
        <li>使用者下次使用相同瀏覽器時，會讀取上一次加入書籤的監測站</li>
        <li>會以顏色標註該地區的空氣品質危險程度</li>
      </ul>
    </div>
    <div class="col-12 col-xl-6">
      <h4>★ 更新履歷</h4>
      <ul>
        <li>8/01 初次上傳到github</li>
        <li>9/02 解決跨域(CORS)問題，架站在Github Page上，同時重整程式碼、網站美觀</li>
      </ul>
    </div>
  </main>

</template>

<style lang="scss" scoped>
main div{
  margin: 30px auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
}

main div li{
  margin: 10px auto;
}

</style>

