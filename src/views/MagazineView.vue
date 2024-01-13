<template>
  <main>
    <h1>MAGAZINE's DIRECTION & DESIGN</h1>
    <div class="workItemArea">
      <ul>
        <li>
          <img
            src="@/assets/img/magazine/freepaper1.png"
            alt=""
            class="workItem"
          />
          <h3 class="skills">音楽フリーペーパーのアート写真</h3>
        </li>
        <li>
          <img
            src="@/assets/img/magazine/freepaper2.png"
            alt=""
            class="workItem"
          />
          <h3 class="skills">音楽フリーペーパーのアートイラスト</h3>
        </li>
        <li>
          <img
            src="@/assets/img/magazine/magazine-fashion1.png"
            alt=""
            class="workItem"
          />
          <h3 class="skills">音楽雑誌のファションタイアップページ</h3>
        </li>
        <li>
          <img
            src="@/assets/img/magazine/magazine-interview.png"
            alt=""
            class="workItem"
          />
          <h3 class="skills">音楽雑誌のインタビュータイアップページ</h3>
        </li>
        <li>
          <img
            src="@/assets/img/magazine/magazine-mensfasion2.png"
            alt=""
            class="workItem"
          />
          <h3 class="skills">音楽雑誌のスタッフファッションページ</h3>
        </li>
        <li>
          <img
            src="@/assets/img/magazine/magazine-shoes.png"
            alt=""
            class="workItem"
          />
          <h3 class="skills">音楽雑誌の靴タイアップページ</h3>
        </li>
        <li>
          <img
            src="@/assets/img/magazine/magazine-ad.png"
            alt=""
            class="workItem"
          />
          <h3 class="skills">ドレスファッション雑誌の広告</h3>
        </li>
        <li>
          <img
            src="@/assets/img/magazine/magazine-ad-food.png"
            alt=""
            class="workItem"
          />
          <h3 class="skills">アイラッシュサロンの広告と飲食店紹介ページ</h3>
        </li>
        <li>
          <img
            src="@/assets/img/magazine/magazine-girl1.png"
            alt=""
            class="workItem"
          />
          <h3 class="skills">ドレスファッションページ</h3>
        </li>
        <li>
          <img
            src="@/assets/img/magazine/magazine-girl2.png"
            alt=""
            class="workItem"
          />
          <h3 class="skills">
            当時アベマブログ1位のモデルのライフスタイルページ
          </h3>
        </li>
        <li>
          <img
            src="@/assets/img/magazine/magazine-girl3.png"
            alt=""
            class="workItem"
          />
          <h3 class="skills">ドレス系アパレルのタイアップページ</h3>
        </li>
        <li>
          <img
            src="@/assets/img/magazine/magazine-hair.png"
            alt=""
            class="workItem"
          />
          <h3 class="skills">ヘアメイクページ</h3>
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
li img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
  transition: 0.3s;
}

img:hover {
  transform: scale(1.05);
}
</style>
