<template>
  <div class="editright1">
    <div class="title">{{title}}</div>
    <component :is="'nav-'+right1select"></component>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import nav from '../config/nav'
  import navStyle from './EditRight1Child/navStyle'
  import navRoutes from './EditRight1Child/navRoutes'
  import navMethods from './EditRight1Child/navMethods'
  export default {
    name: 'edit-right1',
    data() {
      return {}
    },
    computed: {
      ...mapState(['right1select']),
      title(){
        for(let item of nav){
            if(item.type ===this.right1select){
                 return item.name;
            }
        }
        return '无';
      }
    },
    components: {
      navStyle,
      navRoutes,
      navMethods
    }
  }
</script>

<style scoped>
  .title {
    text-align: center;
    border-bottom: 2px solid #eee;
    padding: 6px 0;
  }
</style>
