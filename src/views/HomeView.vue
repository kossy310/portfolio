<template>
  <main>
    <h1>WEB DESIGN & CODING</h1>
    <div class="workItemArea">
      <ul>
        <li>
          <a href="https://lunaglow01.xsrv.jp/marumasu/" target="_blank">
            <img
              src="@/assets/img/marumasu.jpg"
              alt="マルマス住健"
              class="workItem"
            />
            <h3>建築会社様のサイト制作</h3>
            <p>デザインとコーディングとフロントエンドを担当</p>
          </a>
        </li>
        <li>
          <a href="https://sharegymw.com/" target="_blank">
            <img
              src="@/assets/img/sharegym.jpg"
              alt="シェアジムダブリュー"
              class="workItem"
            />
            <h3>パーソナルジム様のサイト制作</h3>
            <p>ディレクションとコーディングとフロントエンドを担当</p>
          </a>
        </li>
        <li>
          <a href="https://childparadise.net/" target="_blank">
            <img
              src="@/assets/img/childparadise.jpg"
              alt="チャイルドパラダイス"
              class="workItem"
            />
          </a>
          <h3>託児所のサイト制作</h3>
          <p>デザインとコーディングを担当</p>
        </li>
        <li>
          <a href="https://ichinomiyadoubutureien.com/" target="_blank">
            <img
              src="@/assets/img/doubutsureien.jpg"
              alt="一宮動物霊園"
              class="workItem"
            />
          </a>
          <h3>動物霊園のサイト制作</h3>
          <p>ディレクションとデザインを担当</p>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&family=Hind+Vadodara:wght@300&family=Playfair+Display&display=swap");

h1 {
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  font-family: "Hind Vadodara", sans-serif;
  text-decoration: none;
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  background: -webkit-linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 50px;
    margin-bottom: 20px;
  }
}

h3 {
  @media screen and (max-width: 768px) {
    font-size: 14px;
    font-weight: bold;
  }
}
p {
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
}
.workItemArea {
  width: 100%;
  display: glid;
  grid-template-columns: minmax(350px, 1fr);
}

ul {
  text-align: center;
  padding-left: 0;
}

li {
  max-width: 100%;
  width: 500px;
  height: auto;
  list-style: none;
  margin: 0 auto;
}

li a img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
}
</style>
