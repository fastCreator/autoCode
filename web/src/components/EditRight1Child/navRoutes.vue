<template>
  <div class="routers">
    <el-row>
      <el-col :span="6" :offset="1">
        路由PATH
      </el-col>
      <el-col :span="15" :offset="1">
        <el-input placeholder="请输入路由path" :value="nowroute.path" @input="setrouterPath">
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="1">
        <el-button type="primary" @click="myaddRouter(pathname)">添加</el-button>
      </el-col>
      <el-col :span="15" :offset="1">
        <el-input placeholder="添加子route"  v-model="pathname">
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="22" :offset="1">
        <el-button class="wid100" type="danger" @click="isdeleteRouter" v-if="nowroute.parent">删除</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    name: 'nav-routes',
    data() {
      return {
        pathname :''
      }
    },
    methods: {
      isdeleteRouter() { 
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.deleteRouter();
            this.pathname ='';
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          }); 
      },
      myaddRouter(){ 
        for(let item of this.nowroute.children){
            if(item.path === this.pathname){
              this.$message({
              type: 'info',
              message: 'path已存在'
            });
              return false;
            }
        }
        this.addRouter(this.pathname);
        this.pathname = '';
      },
      ...mapMutations([
          'addRouter',
          'setrouterPath',
          'deleteRouter'
        ])
    },
    computed: {
      ...mapState(['right1select', 'routes', 'nowroute'])
    },
    created() {}
  }
</script>

<style scoped>

</style>
