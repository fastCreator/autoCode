<template>
  <div class="editheader">
    <div class="tools">
      <span>全局Router钩子</span> 缩放:
      <el-slider :value="zoom" @input="vuexsetzoom" :min="0.5" :max="1.5" :step="0.01"></el-slider>
      <span @click="saveRoutes">保存</span>
    </div>
  </div>
</template>

<script>
  import {
    mapState,mapMutations
  } from 'vuex'
  import {setState} from '../server/state.js'
  export default {
    name: 'edit-header',
    data() {
      return {}
    },
    computed: {
      ...mapState(['zoom','routes'])
    },
    methods: {
      ...mapMutations([
        'vuexsetzoom'
      ]),
      saveRoutes(){
        this.$message({
              type: 'success',
              message: '保存成功!'
            });
        setState(this.routes[0])
      }
    }
  }
</script>

<style scoped>
  .editheader {
    color: #555;
  }
  .tools {
    height: 100%;
    float: right;
  }
  .tools>span {
    display: inline;
    margin: 0 10px;
    padding: 4px 6px;
    border: 1px solid #b3b3b3;
    border-radius: 4px;
    cursor: pointer;
  }
  .tools>span:hover {
    color: #FAC546;
  }
  .tools>* {
    display: inline;
    margin: 0 10px;
  }
  .tools>.el-slider {
    display: inline-block;
    width: 200px;
    position: relative;
    top: 14px;
  }
</style>
