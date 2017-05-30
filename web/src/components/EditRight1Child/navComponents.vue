<template>
  <div class="nav-layout">
    <div class="item" v-for="item in components">
      <div class="img clearfix"><img :src="item.img"></div>
      <div class="font">
      <div><span class="title">名称:</span>{{item.label}}</div>
      <div><span class="title">文档:</span><a :href="item.document">{{item.document}}</a></div>
       
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  import {
    components
  } from '../../components'
  export default {
    name: 'nav-components',
    data() {
      return {
        components: components
      }
    },
    methods: {
      vuexsetrouterPath() {}
    },
    computed: {
      ...mapState(['right1select', 'routes', 'nowroute'])
    },
    created() {}
  }
</script>

<style scoped>
  .item {
    font-size: 12px;
    color: #999;
    overflow: hidden;
    background: #fff;
    width: 90%;
    margin: 20px auto 0;
    border: 1px solid #d1dbe5;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
  }
  .item .img {
    background: url(/static/transparent.jpg) repeat;
  }
  .item img {
    float: left;
    width: 100%;
    max-height: 150px;
  }
  .sm {
    padding-left: 28px;
  }
  .font{
    padding:6px;
  }
  .title{
    color:#272E31;
  }
</style>
