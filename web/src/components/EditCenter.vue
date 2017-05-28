<template>
  <div class="editcenter">  
  <editShow class="editShow" :template="template" :style="{transform:'scale('+zoom+','+zoom+')'}"></editShow>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import components from '../components'
 

const editShow ={
  data(){
    return { 
    }
  },
  components:components,
  mounted(){ 
    this.maxWith=80;
  },
  props:['template'],
  // render(c){
  //   return c('layoutSys',null,[1,2,3,4])
  // } 
   render(c){
     return (<layoutSys leftWidth="180" topHeight="50">
            <span slot="left">left</span>
            <span slot="top">top</span>
            <span slot="content">content</span>
            </layoutSys>)
   }
}

export default {
  name: 'edit-center',
  data () {
    return {
      template:'<span>123123213</span>'
    }
  },
  computed:{
    ...mapState(['zoom'])
  },
  
  methods:{
    asd(){
      this.template='1564645'
    }
  },
  components:{
    editShow:editShow
  }
}


</script>

<style scoped>
.editShow{ 
  position: relative;
  width:100%;
  height:100%;
  box-sizing: border-box;
}
</style>
