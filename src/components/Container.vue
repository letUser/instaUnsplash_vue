<template>
  <div class="container">
    <HeaderSection/>
    <PictureSection :picture="pic"/>
    <FooterSection/>
  </div>
</template>

<script>
import HeaderSection from "./HeaderSection";
import PictureSection from "./PictureSection";
import FooterSection from "./FooterSection";

export default {
  name: "Container",
  components: {
    HeaderSection,
    PictureSection,
    FooterSection
  },
  props: {
    pic: String
  },
  data() {
    return {
      picture: String
    };
  }
};
</script>

<style scoped>
.headerSection {
  display: flex;
  position: relative;
}

.userPic {
  margin: 5%;
}

.userName {
  margin: 5%;
}

.userName a {
  display: block;
}
</style>
