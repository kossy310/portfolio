<script setup>
import { RouterLink } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/"><HelloWorld msg="PORTFOLIO" /></RouterLink>

      <nav>
        <RouterLink to="/web">WEB DESIGN & CODING</RouterLink>
        <RouterLink to="/magazine">MAGAZINE</RouterLink>
        <RouterLink to="/print">DESIGN & PRINT</RouterLink>
        <!-- <RouterLink to="/movie">MOVIE</RouterLink> -->
        <RouterLink to="/photo">PHOTO</RouterLink>
      </nav>
      <p>このサイトはvuecliで作成し、firebaseにホスティングしております。</p>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

p {
  font-size: 14px;
  margin-top: 40px;
  color: #ccc;
}

@media (max-width: 1024px) {
  p {
    font-size: 9px;
    margin-top: 20px;
    text-align: center;
  }
}
</style>
