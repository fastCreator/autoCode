<template>
  <div class="editright2">
    <template v-for="item of right2nav">
                    <div v-show="~right2select.indexOf(item.type)" @click="right1go(item)">{{item.name}}</div>
</template>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  import nav from '../config/nav'
  export default {
    name: 'edit-right2',
    data() {
      return {
        right2nav: nav
      }
    },
    computed: {
      ...mapState(['right1select', 'right2select'])
    },
    methods: {
      ...mapMutations([
          'right1go'
        ])
      }
    }
</script>

<style scoped>
  .editright2>div {
    cursor: pointer;
    color: #BFBFBF;
    text-align: center;
    border-bottom: 1px solid #374049;
    padding: 10px 0;
  }
  .editright2>div:hover {
    background: #374049
  }
</style>
