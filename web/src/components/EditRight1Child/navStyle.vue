<template>
  <div class="style">
    <span>全局颜色值:.....</span>
    <css-item v-for="(item,index) in testcss" :css.sync="testcss[index]" @blurcssKey="blurcssKey">
    </css-item>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  import CssItem from './navStyleItem';
  export default {
    name: 'nav-style',
    data() {
      return {

      }
    },
    components: {
      CssItem
    },
    beforeMount() {
      console.log(Object.keys(this.testcss).length)
      if (!Object.keys(this.testcss).length) {
        this.addStyle()
      }
    },
    methods: {
      blurcssKey(value) {
        console.log(12312313)
        if (value) {
          this.addStyle()
        } else {
          count = 0;
          for (let item of this.style) {
            //两个空节点，就删除
            if (!item.cssKey && (++count === 2)) {
              this.style.remove(value);
            }
          }
        }
      },
      addStyle() {
        this.vuexpush({
          target: this.testcss,
          value: {
            cssKey: '',
            cssValue: ''
          }
        })
      },
      ...mapMutations([
        'vuexpush'
      ])
    },
    computed: {
      ...mapState(['right1select', 'nowroute', 'testcss'])
    },
    created() {}
  }
</script>

<style scoped>

</style>
