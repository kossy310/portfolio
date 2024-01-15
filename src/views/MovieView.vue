<template>
  <main>
    <h1>MOVIE</h1>
    <div class="workItemArea">
      <ul>
        <li>
          <a
            href="https://drive.google.com/file/d/1Evx9Jze_F8ipEYq1Kgvng_x8C4H1aFdP/view?usp=sharing"
            target="_blank"
          >
            <img src="@/assets/movie/petitbelle/petitbelle_movie1.png" alt="" />
            <h3 class="skills">アマゾンオリジナルショップのPV</h3>
            <p>
              ※読み込みしやすいように動画の画質はかなり低いものにしております
            </p>
          </a>
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
}
img + img {
  margin-top: 20px;
}
</style>
