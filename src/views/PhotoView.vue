<template>
  <main>
    <h1>PRINT DESIGN</h1>
    <div class="workItemArea">
      <ul>
        <li>
          <img src="@/assets/img/photo/kanachua1.jpg" alt="" />
          <img src="@/assets/img/photo/kanachua2.jpg" alt="" />
          <img src="@/assets/img/photo/kanachua3.jpg" alt="" />
          <img src="@/assets/img/photo/hono1.jpg" alt="" />
          <img src="@/assets/img/photo/hono2.jpg" alt="" />
          <img src="@/assets/img/photo/maria_kimono1.jpg" alt="" />
          <img src="@/assets/img/photo/maria_kimono2.jpg" alt="" />
          <img src="@/assets/img/photo/masshiro1.jpg" alt="" />
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
  width: 750px;
  height: auto;
  list-style: none;
  margin: 0 auto;
  display: flex;
  gap: 2%;
  flex-wrap: wrap;
}

li img {
  width: 48%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
  transition: 0.3s;
  margin-bottom: 2%;
}

img:hover {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  li img {
    width: 100%;
    margin-bottom: 2%;
  }
  img:hover {
    transform: scale(1);
  }
}
</style>
