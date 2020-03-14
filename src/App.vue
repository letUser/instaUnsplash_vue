<template>
  <div id="app">
    <router-view/>
    <div class="grid">
      <Container v-for="(pic, index) of pics" :key="index" :pic="pic"/>
    </div>
    <Footer @actualPage="selectNewPage" :pages="pages"/>
  </div>
</template>

<script>
import Container from "./components/Container";
import Footer from "./components/FooterPage";
import {
  takePhotos,
  clearPage,
  setPagesQua,
  setPhotos
} from "./unsplashLogic.js";

export default {
  name: "App",
  components: {
    Container,
    Footer
  },
  data() {
    return {
      data: [],
      pics: [],
      pic: String,
      pages: []
    };
  },
  async mounted() {
    this.data = await takePhotos();
    clearPage(this.pics);
    setPagesQua(this.data, this.pages);
    setPhotos(this.data, this.pics, 1);
  },
  methods: {
    selectNewPage(page) {
      clearPage(this.pics);
      setPhotos(this.data, this.pics, page.newPage);
    }
  }
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: 320px 320px;
  grid-column-gap: 20px;
  grid-auto-rows: minmax(312px, auto);
  justify-content: center;
  margin-bottom: 60px;
}

@media screen and (max-width: 480px) {
  .grid {
    grid-template-columns: 320px;
    grid-auto-rows: minmax(312px, auto);
  }
}
</style>
