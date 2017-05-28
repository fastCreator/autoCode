<template>
  <div class="cssItem">
    <el-autocomplete ref="autocomplete" class="inline-input" v-model="cssKey" :fetch-suggestions="querySearchKey" placeholder="样式key" :trigger-on-focus="false"></el-autocomplete>
    <el-autocomplete class="inline-input" v-model="cssValue" :fetch-suggestions="querySearchValue" placeholder="样式value"></el-autocomplete>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import css from '../../config/css'
  export default {
    name: 'css-item',
    data() {
      return {}
    },
    props: ['css'],
    computed: {
      cssKey: {
        get: function() {
          return this.css.cssKey
        },
        set: function(v) {
          return this.css.cssKey = v;
        }
      },
      cssValue: {
        get: function() {
          return this.css.cssValue
        },
        set: function(v) {
          return this.css.cssValue = v;
        }
      }
    },
    watch: {
      cssKey(n, o) {
        console.log(n, o);
      }
    },
    methods: {
      querySearchKey(queryString, cb) {
        var key = [];
        css.forEach(function(item) {
          if (~item.name.indexOf(queryString)) {
            key.push({
              value: item.name
            });
          }
        });
        cb(key);
      },
      querySearchValue(queryString, cb) {
        var key = [];
        var onecss = '';
        var that = this;
        css.forEach(function(item) {
          if (item.name === that.cssKey) {
            onecss = item;
            return;
          }
        });
        if (!onecss) {
          key = [{
            value: '请先输入正确css key'
          }];
        } else if (onecss.values) {
          onecss.values.forEach((item) => {
            if (~item.name.indexOf(queryString)) {
              key.push({
                value: item.name
              });
            }
          })
        } else {
          key = [{
            value: 'inherit'
          }, {
            value: 'initial'
          }];
        }
        cb(key);
      }
    },
    created() {},
    beforeMount() {
      var that =this;
      this.$nextTick(function() {  
        this.$refs.autocomplete.$refs.input.$on('blur', function() { 
             that.$emit('blurcssKey',that.cssKey);
        });
      });
    }
  }
</script>

<style scoped>
  .inline-input {
    width: 160px;
  }
</style>
