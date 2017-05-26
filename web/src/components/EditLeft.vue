<template>
  <div class="editleft">
    <el-input placeholder="输入关键字进行过滤" v-model="filterText">
    </el-input>
    <el-tree class="filter-tree" :data="routes" :props="defaultProps" default-expand-all :expand-on-click-node="false" :filter-node-method="filterNode" @node-click="routerClick" ref="tree2">
    </el-tree>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    name: 'edit-left',
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
    methods: {
      filterNode(value, data) {
        if (!value) return true; 
        if(data.parent){
          return data.path.indexOf(value) !== -1;
        }
        return true;
      },
      routerClick(item, data, node) {
        this.right1go({type:'routes',route:item});
      },
      ...mapMutations([
        'right1go'
      ])
    },
    data() {
      return {
        filterText: '',
        defaultProps: {
          children: 'children',
          label: 'path'
        }
      };
    },
    computed: {
      ...mapState(['routes', 'right1select'])
    }
  }
</script>
 
<style scoped> 
</style>
