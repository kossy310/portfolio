<template>
  <main>
    <h1>WEB DESIGN & CODING</h1>
    <div class="workItemArea">
      <ul>
        <li>
          <a href="https://lunaglow01.xsrv.jp/marumasu/" target="_blank">
            <img src="@/assets/img/web/marumasu.png" alt="" class="workItem" />
            <h3>建築会社様のサイト制作</h3>
            <p>デザインとコーディングとフロントエンドを担当</p>
            <p class="skills">
              <span class="skill-title">使用スキル</span
              >:html,css,vue,php,gsap,aftereffects,lottie,xd
            </p></a
          >
        </li>
        <li>
          <a href="https://sharegymw.com/" target="_blank">
            <img src="@/assets/img/web/sharegym.png" alt="" class="workItem" />
            <h3>パーソナルジム様のサイト制作</h3>
            <p>ディレクションとコーディングとフロントエンドを担当</p>
            <p class="skills">
              <span class="skill-title">使用スキル</span
              >:html,css,vue,php,gsap,lottie,xd
            </p>
          </a>
        </li>
        <li>
          <a href="https://houmon.bougakuen.jp/" target="_blank">
            <img src="@/assets/img/web/kajiki.png" alt="" class="workItem" />
            <h3>訪問介護事業所様のサイト制作</h3>
            <p>ディレクションとコーディングとフロントエンドを担当</p>
            <p class="skills">
              <span class="skill-title">使用スキル</span
              >:html,css,wordpress,javascript,php,xd
            </p>
          </a>
        </li>
        <li>
          <a href="https://childparadise.net/" target="_blank">
            <img
              src="@/assets/img/web/childparadise.png"
              alt=""
              class="workItem"
            />
          </a>
          <h3>託児所様のサイト制作</h3>
          <p>デザインとコーディングを担当</p>
          <p class="skills">
            <span class="skill-title">使用スキル</span
            >:html,css,javascript,photoshop,
          </p>
        </li>
        <li>
          <a href="https://ichinomiyadoubutureien.com/" target="_blank">
            <img
              src="@/assets/img/web/doubutsureien.png"
              alt=""
              class="workItem"
            />
          </a>
          <h3>動物霊園様のサイト制作</h3>
          <p>ディレクションとデザインを担当</p>
          <p class="skills">
            <span class="skill-title">使用スキル</span>:photoshop
          </p>
        </li>
        <li>
          <img src="@/assets/img/web/ec1.png" alt="" class="workItem" />
          <img src="@/assets/img/web/ec2.png" alt="" class="workItem" />
          <h3>アパレルECサイト</h3>
          <p>サイト閉鎖のためリンクなし<br />デザインを担当</p>
          <p class="skills">
            <span class="skill-title">使用スキル</span>:photoshop
          </p>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&family=Hind+Vadodara:wght@300&family=Playfair+Display&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap");

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
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 700;
  font-family: "Noto Sans JP", sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
}
p {
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
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
img + img {
  margin-top: 20px;
}
</style>
