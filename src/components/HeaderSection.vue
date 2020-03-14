<template>
  <div class="headerSection">
    <div class="userPic">
      <router-link :to="{path:`/${login.toString()}`}" target="_blank">
        <img
          src="https://s3-alpha-sig.figma.com/img/d924/182d/4d9a3ae0f6f3d63d74c3e511ecd1b544?Expires=1584921600&Signature=SVv2Wfo0flb8xMPSaWtSQUcgfHaOrICZTaSLuPDhaqSpz2ntTzDStMZdEztqY9UCjoqR1HTtqYcpigc2Vrf~lHWcasnf11qdtxDUf4h1plvTTZGXnIgANiRuBS-CRS8P-nfXlcBodfc3wDvff5i9JauIkUxtRX0REat5TROG5dBfWo0XhKc0iHFz0eUfiqlQYEpdW8HM-DQqtrUyLAEzErjkW3EDI8YWhfq~afbGLWMfOMqizIFB8YH59hmG8d02vNMCsvdTGdj0LDbrJ2hStYRwN9JzwT5dZpYqz5mMuPais~1xJ7G1Z5cRpcv-enTlLjMrYqml72FqduGWjgDXaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="profile photo"
        >
      </router-link>
    </div>
    <div class="userData">
      <router-link
        style="color:#333333; font-weight:bold"
        :to="{path:`/${login.toString()}`}"
        target="_blank"
      >{{ name }}</router-link>
      <router-link
        style="color:#8D8D8D"
        :to="{path:`/${login.toString()}`}"
        target="_blank"
      >{{ login }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSection",
  data() {
    return {
      name: "Jason Mowry",
      login: "@jason_mowry_photo"
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
  margin: 10px;
}

.userPic a {
  margin: 0;
  text-decoration: none;
  line-height: 0px;
  display: block;
}

.userData {
  margin: 10px 0 12px 0;
}

.userData a {
  display: block;
  font-family: Roboto Condensed;
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  text-decoration: none;
}

img {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
