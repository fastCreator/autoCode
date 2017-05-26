<template>
  <div class="editleft">
     
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'edit-left',
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
