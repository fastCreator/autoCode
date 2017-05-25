<template>
  <div class="editright2">
    <template v-for="item of right2nav">
                    <div v-show="~right2select.indexOf(item.type)" @click="right1go(item.type)">{{item.name}}</div>
</template>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    name: 'editRight2',
    data() {
      return {
        right2nav: [{
            name: 'a',
            type: 'a',
          },
          {
            name: 'b',
            type: 'b',
          },
          {
            name: 'c',
            type: 'c',
          }
        ]
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
