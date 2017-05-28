<template>
  <div class="style"> 
      <nav-one-style :testcss="testcss"></nav-one-style>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  import navOneStyle from './navOneStyle';
  export default {
    name: 'nav-style',
    data() {
      return {
      }
    },
    computed: {
      ...mapState(['testcss'])
    },
    components: {
      navOneStyle
    },  
  }
</script>

<style scoped>

</style>
