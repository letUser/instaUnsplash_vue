<template>
  <div class="footer">
    <div class="pages">
      <router-link v-for="(page, index) of pages" :key="index" :to="{path:`/${page.toString()}`}">
        <input type="button" :value="page" @click="selectPage(page)">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    pages: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      newPage: Number
    };
  },
  methods: {
    selectPage(page) {
      this.newPage = page;

      this.$emit("actualPage", {
        newPage: this.newPage
      });
    }
  }
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: black;
  height: 60px;
  opacity: 0.9;
}

.pages {
  margin: 0 auto;
  width: 320px;
  height: 60px;
  justify-content: center;
  display: flex;
}

input {
  outline: none;
  background: none;
  color: #FFF;
  border: none;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  padding: 0;
  width: 20px;
  height: 60px;
  text-align: center;
  margin-block-start: 0;
  margin-block-end: 0;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-decoration: none;
}

input:hover {
  cursor: pointer;
}

.router-link-active {
  transform: scale(1.5);
  margin: 0 7px 0 7px;
}
</style>
