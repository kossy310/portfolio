<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <section class="title">
      <div class="titleContainer">
        <h1>PORTFORIO</h1>
        <h2>SOUICHI NAKAKOSHI</h2>
      </div>
    </section>
    <section class="contents">
      <nav>
        <RouterLink to="/">WORK</RouterLink>
        <RouterLink to="/about">DESIGN</RouterLink>
        <RouterLink to="/movie">MOVIE</RouterLink>
      </nav>
      <RouterView />
    </section>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}

.title {
  width: 30%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 60px;
  font-family: 'futura-pt', sans-serif;
  font-weight: 400;
  font-style: normal;
}

h2 {
  font-family: 'linotype-didot', serif;
  font-weight: 400;
  font-style: normal;
}

.contents {
  width: 70%;
}

nav {
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 0px auto 0;
}
nav > a {
  font-size: 20px;
  font-family: 'futura-pt', sans-serif;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
}
</style>
