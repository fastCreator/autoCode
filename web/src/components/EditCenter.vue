<template>
  <div class="editcenter" @contextmenu="contextmenu ">
    <editShow ref="editShow" class="editShow" :template="nowroute.component.template" :style="{transform:'scale('+zoom+','+zoom+')'}"></editShow>
    <my-cascader ref="cascader" v-show="menu.menushow" :menu="menu.menus" :menuPos="menu.menuPos" @select="itemselect"></my-cascader>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import components from '../components'
  import MyCascader from './MyCascader'
  import {
    $onout
  } from '../utils/document'
  import {
    parse,
    addTem
  } from '../utils/render'
  import {
    layouts
  } from '../components'
  const editShow = {
    data() {
      return {}
    },
    components: {
      ...components
    },
    props: ['template'],
    mounted() {
      this.maxWith = 80;
    },
    methods: { 
    },
    render: function() {
      return parse(this.template, this)
    }
    // render(c) {
    //   return ( < layoutSys leftWidth = "180"
    //     topHeight = "50" >
    //     <
    //     span slot = "left" > left < /span> <
    //     span slot = "top" > top < /span> <
    //     span slot = "content" > content < /span>  < /
    //     layoutSys > )
    // }
  }
  export default {
    name: 'edit-center',
    data() {
      return {
        template: '',
        menu: {
          target: null,
          menushow: false,
          menuPos: {
            left: 0,
            top: 0
          },
          menus: [{
              label: '布局',
              value: 'layout',
              children: layouts
            },
            {
              label: '组件',
              value: 'components'
            }
          ]
        }
      }
    },
    computed: {
      ...mapState(['zoom', 'nowroute'])
    },
    mounted() {
      var that = this;
      $onout(this.$refs.cascader.$el, function(e) {
        that.menu.menushow = false;
      })
    },
    methods: {
      itemselect(value) {
        this.menu.menushow = false;
        this.nowroute.component.template = addTem(value,this.$refs.editShow,this.menu.target); 
      },
      contextmenu(e) {
        this.menu.target = e.target;
        this.menu.menuPos = {
          left: e.clientX + 'px',
          top: e.clientY + 'px'
        }
        this.menu.menushow = true
        e.preventDefault();
        return false;
      }
    },
    components: {
      editShow: editShow,
      MyCascader
    }
  }
</script>

<style scoped>
  .editShow {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .contextmenu {
    position: absolute;
    left: 0;
    top: 0;
  }
  .contextmenu>.el-cascader-menus {
    position: absolute;
    z-index: 2001;
    display: block;
  }
</style>
