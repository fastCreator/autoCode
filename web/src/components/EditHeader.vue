<template>
  <div class="editheader">
     
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'editHeader',
  data () {
    return {
       
    }
  },
  computed:{
    ...mapState(['count'])
  }
}
</script>
 
<style scoped>
 
</style>
