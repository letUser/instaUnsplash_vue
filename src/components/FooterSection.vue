<template>
  <div class="footerSection">
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.8856 5.38616C17.7248 5.16619 13.8934 0 8.99992 0C4.10647 0 0.274852 5.16619 0.114223 5.38595C-0.0380743 5.59464 -0.0380743 5.87769 0.114223 6.08637C0.274852 6.30635 4.10647 11.4725 8.99992 11.4725C13.8934 11.4725 17.7248 6.30631 17.8856 6.08655C18.0381 5.8779 18.0381 5.59464 17.8856 5.38616ZM8.99992 10.2857C5.39538 10.2857 2.27346 6.85683 1.3493 5.73587C2.27226 4.61392 5.38764 1.18681 8.99992 1.18681C12.6043 1.18681 15.726 4.61512 16.6505 5.73667C15.7276 6.85858 12.6122 10.2857 8.99992 10.2857Z"
        fill="#8D8D8D"
      ></path>
      <path
        d="M9.00007 2.17584C7.03686 2.17584 5.43961 3.7731 5.43961 5.7363C5.43961 7.6995 7.03686 9.29676 9.00007 9.29676C10.9633 9.29676 12.5605 7.6995 12.5605 5.7363C12.5605 3.7731 10.9633 2.17584 9.00007 2.17584ZM9.00007 8.10992C7.6912 8.10992 6.62645 7.04514 6.62645 5.7363C6.62645 4.42747 7.69123 3.36269 9.00007 3.36269C10.3089 3.36269 11.3737 4.42747 11.3737 5.7363C11.3737 7.04514 10.3089 8.10992 9.00007 8.10992Z"
        fill="#8D8D8D"
      ></path>
    </svg>
    <a href="#">{{ viewsCalc() }}</a>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
  data() {
    return {
      number: String
    };
  },
  methods: {
    viewsCalc() {
      return (this.number = (3333 * Math.PI * Math.random()).toFixed(0));
    }
  }
};
</script>

<style scoped>
.footerSection {
  display: flex;
  flex-direction: row-reverse;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

a {
  text-decoration: none;
  margin: 10px 0 8px 0;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  color: #8D8D8D;
}

svg {
  margin: 11px 10px 9.53px 5px;
}
</style>