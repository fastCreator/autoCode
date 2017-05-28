<template>
  <div class="navOneStyle"> 
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
    name: 'nav-one-style',
    data() {
      return {
      }
    },
    components: {
      CssItem
    },
    beforeMount() { 
      if (!Object.keys(this.testcss).length) {
        this.addStyle()
      }
    },
    props:['testcss'],
    methods: {
      blurcssKey(v) {
        var empty = [];
        for (let i in this.testcss) {
          if (!this.testcss[i].cssKey) {
            empty.push(i);
          }
        }
        if (!empty.length&&v) {
          this.addStyle()
        } 
        
        if(!v&&empty.length==2){
           this.testcss.splice(empty[0], 1);
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
    created() {}
  }
</script>

<style scoped>

</style>
