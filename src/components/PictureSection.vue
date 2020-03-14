<template>
  <div class="pictureSection">
    <img :src="picture" alt="picture">
  </div>
</template>

<script>
export default {
  name: "PictureSection",
  props: {
    picture: String
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.pictureSection {
  display: flex;
  justify-content: center;
}

img {
  max-width: 320px;
  height: 230px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
  -moz-pointer-events: none;
  -webkit-pointer-events: none;
  -ms-pointer-events: none;
}
</style>
