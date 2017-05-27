<template>
  <div class="methods">
    <el-row>
      <el-col :span="6" :offset="1">
        <el-input placeholder="方法名" :value="nowroute.component.methods" @input="vuexsetrouterPath">
        </el-input>
      </el-col>
      <el-col :span="15" :offset="1">
        <el-input placeholder="参数1,参数2,参数3" :value="nowroute.path" @input="vuexsetrouterPath">
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="22" :offset="1">
      <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="方法体" v-model="textarea3">
      </el-input>
       </el-col>
    </el-row>
    <hr>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    name: 'nav-methods',
    data() {
      return {
        pathname: '',
        textarea3:''
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

</style>
