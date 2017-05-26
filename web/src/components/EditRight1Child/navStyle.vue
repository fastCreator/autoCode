<template>
  <div class="style">
    <span>router全局钩子</span>
    <template v-for="(item,index) in style">
            <css-item  :css.sync="style[index]">
          </css-item>
</template>

    <el-button type="primary" icon="el-icon-plus" @click="addStyle">添加样式</el-button>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import CssItem from './navStyleItem';
  export default {
    name: 'nav-style',
    data() {
      return {
        style: [{
          cssKey: '',
          cssValue: ''
        }],
        color: ''
      }
    },
    components: {
      CssItem
    },
    methods: {
      addStyle() {
        let len = this.style.length;
        console.log(this.style)
        if (this.style[len - 1].cssKey && this.style[len - 1].cssValue) {
          this.style.push({
            cssKey: '',
            cssValue: ''
          })
        }
      }
    },
    computed: {
      ...mapState(['right1select'])
    },
    created() {}
  }
</script>

<style scoped>

</style>
