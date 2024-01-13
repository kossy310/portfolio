<template>
  <main>
    <h1>MAGAZINE</h1>
    <div class="workItemArea">
      <ul>
        <li>
          <img
            src="@/assets/img/other/2ori-panfu1.jpg"
            alt=""
            class="workItem"
          />
          <img
            src="@/assets/img/other/2ori-panfu2.jpg"
            alt=""
            class="workItem"
          />
          <h3 class="skills">5G回線の通信事業工事会社のパンフレット</h3>
        </li>
        <li>
          <img
            src="@/assets/img/other/3ori-panfu1.jpg"
            alt=""
            class="workItem"
          />
          <img
            src="@/assets/img/other/3ori-panfu2.jpg"
            alt=""
            class="workItem"
          />
          <h3 class="skills">水道ゼネコン会社の三つ折りパンフレット</h3>
        </li>
        <li>
          <img src="@/assets/img/other/panfu1.jpg" alt="" class="workItem" />
          <img src="@/assets/img/other/panfu2.jpg" alt="" class="workItem" />
          <img src="@/assets/img/other/panfu3.jpg" alt="" class="workItem" />
          <h3 class="skills">不動産会社のパンフレット＆イラスト</h3>
        </li>
        <li>
          <img
            src="@/assets/img/printdesign/kanban.jpg"
            alt=""
            class="workItem"
          />
          <h3 class="skills">飲食店の看板</h3>
        </li>
        <li>
          <img
            src="@/assets/img/printdesign/XmasMenu1.jpg"
            alt="メニュー"
            class="workItem"
          />
          <h3 class="skills">飲食店のクリスマスメニュー</h3>
        </li>
        <li>
          <img
            src="@/assets/img/printdesign/XmasMenu2.jpg"
            alt="メニュー"
            class="workItem"
          />
          <h3 class="skills">飲食店のクリスマスメニュー</h3>
        </li>
        <li>
          <img
            src="@/assets/img/printdesign/XmasMenu3.jpg"
            alt="メニュー"
            class="workItem"
          />
          <h3 class="skills">飲食店のクリスマスメニュー</h3>
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

img + img {
  margin-top: 20px;
}
</style>
