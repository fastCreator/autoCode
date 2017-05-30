<template>
  <div class="nav-template">
    <el-row>
      <el-col :span="15" :offset="1">
        <el-select v-model="selectLayout" filterable placeholder="从光标处快速添加布局">
          <el-option v-for="(item,index) in layouts" :key="item.value" :label="item.label" :value="index">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6" :offset="1">
        <el-button type="primary" @click="addCmp">添加布局</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="15" :offset="1">
        <el-select v-model="selectCmp" filterable placeholder="从光标处快速添加组件">
          <el-option v-for="(item,index) in components" :key="item.value" :label="item.label" :value="index">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6" :offset="1">
        <el-button type="primary" @click="addLayout">添加组件</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="1" :span="22">
        <el-button class="wid100" type="primary" @click="format()">格式化</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="1" :span="22">
        <el-input ref="textarea" type="textarea" :rows="26" placeholder="请输入内容" v-model="nowroute.component.template">
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  import {
    layouts,
    components
  } from '../../components'
  import {
    HTMLFormat
  } from '../../utils/htmlFormat'
  export default {
    name: 'nav-template',
    data() {
      return { 
        selectLayout:'',
        selectCmp:'',
        layouts: layouts,
        components:components
      }
    },
    beforeMount() {
      this.format();
    },
    methods: {
      format() {
        this.nowroute.component.template = HTMLFormat(this.nowroute.component.template)
      },
      addCmp(){
        this.addTem(layouts[this.selectLayout].demo)
      },
      addLayout(){
        this.addTem(components[this.selectCmp].demo)
      },
      addTem(demo) { 
        if (!demo) {
          return false;
        } 
        var that = this;
        function getTxt1CursorPosition() {
           var cursurPosition = 0;
          try {
            var oTxt1 = that.$refs.textarea.$el.querySelector('textarea');
            var cursurPosition = -1;
            if (oTxt1.selectionStart) { //非IE浏览器
              cursurPosition = oTxt1.selectionStart;
            } else { //IE
              var range = document.selection.createRange();
              range.moveStart("character", -oTxt1.value.length);
              cursurPosition = range.text.length;
            }
          } catch (e) {
            cursurPosition = 0;
          } finally {
            return cursurPosition;
          }
          
        }
        let index =getTxt1CursorPosition();
        let tem = this.nowroute.component.template; 
        this.nowroute.component.template = HTMLFormat(tem.substr(0,index)+demo+tem.substr(index));
      }
    },
    computed: {
      ...mapState(['nowroute'])
    },
    created() {}
  }
</script>

<style scoped>

</style>
