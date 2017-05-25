<template>
  <div class="editright1">
    {{right1select}}
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    name: 'editRight1',
    data() {
      return {}
    },
    computed: {
      ...mapState(['right1select'])
    }
  }
</script>
 
<style scoped>

</style>
