<template>
  <div class="editright1" :style="style">
    <div class="drag" @mousedown="start"></div>
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
  import navLayout from './EditRight1Child/navLayout'
  import navTemplate from './EditRight1Child/navTemplate'
  import navComponents from './EditRight1Child/navComponents'
  var down = false;  
  export default {
    name: 'edit-right1',
    data() {
      return {
        style: {
          left:null
        }
      }
    }, 
    computed: {
      ...mapState(['right1select']),
      title() {
        for (let item of nav) {
          if (item.type === this.right1select) {
            return item.name;
          }
        }
        return '无';
      }
    },
    components: {
      navStyle,
      navRoutes,
      navMethods,
      navLayout,
      navTemplate,
      navComponents
    },
    methods: {
      start() {
        var that =this;
        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', up);
        var maxLeft = document.body.clientWidth - 360-70;
        function move(e) { 
            var x =  e.clientX;
            if(x<240) x =240;
            if(x>maxLeft) x = maxLeft;
            that.style.left =x+'px';
        }
        function up() {
          document.removeEventListener('mousemove', move);
          document.removeEventListener('mouseup', up);
        }
      }
    },
  }
</script>

<style scoped>
  .title {
    text-align: center;
    border-bottom: 2px solid #eee;
    padding: 6px 0;
  }
  .drag {
    position: absolute;
    width: 8px;
    height: 100%;
    background: #DADADA;
    cursor: w-resize;
    z-index:100
  }
</style>
