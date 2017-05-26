<template>
  <div class="editcenter">

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'edit-center',
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
