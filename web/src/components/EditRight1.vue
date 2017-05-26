<template>
  <div class="editright1">
    <component :is="'nav-'+right1select"></component>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import navStyle from './EditRight1Child/navStyle'
  export default {
    name: 'edit-right1',
    data() {
      return {}
    },
    computed: {
      ...mapState(['right1select'])
    },
    components: {
      navStyle
    }
  }
</script>

<style scoped>

</style>
