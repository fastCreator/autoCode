<template>
  <div id="app">
    <edit-header></edit-header>
    <edit-left></edit-left>
    <edit-center></edit-center>
    <edit-right1></edit-right1>
    <edit-right2></edit-right2>
  </div>
</template>

<script>
  import EditHeader from './components/EditHeader'
  import EditLeft from './components/EditLeft'
  import EditRight1 from './components/EditRight1'
  import EditRight2 from './components/EditRight2'
  import EditCenter from './components/EditCenter'
  export default {
    name: 'app',
    components: {
      EditHeader,
      EditLeft,
      EditRight1,
      EditRight2,
      EditCenter
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  .editheader {
    height: 70px;
    background-color: #ededed;
    border-bottom: 1px solid #bfbfbf;
  }
  #app {
    font-family: "PingHei", "Lucida Grande", "Lucida Sans Unicode", "Helvetica", "Arial", "Verdana", "sans-serif", "Microsoft Yahei", "微软雅黑";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .editleft {
    position: absolute;
    top: 70px;
    bottom: 0;
    width: 240px;
    background: #F5F5F5;
    overflow: auto;
  }
  .editcenter {
    position: absolute;
    top: 70px;
    bottom: 0;
    left: 240px;
    right: 430px;
    background:url('/static/transparent.jpg') repeat;
    overflow: auto;
  }
  .editright1 {
    position: absolute;
    top: 70px;
    bottom: 0;
    right: 70px;
    width: 360px;
    background: #FAFAFA;
    overflow: auto;
  }
  .editright2 {
    position: absolute;
    top: 70px;
    bottom: 0;
    right: 0px;
    width: 70px;
    background: #2D353D;
    overflow: auto;
  }
</style>
<style>
  .el-row {
    margin-top: 10px;
  }
  .wid100 {
    width: 100% !important
  } 
  .clearfix:after{
    content:'';
    display:block; 
    clear:both;
  }
  .el-tree .is-current {
    background: #E4E8F1;
  }
  hr{
    margin-top:10px;
    height:2px;
    border:none;
    border-top:1px dotted #185598;
  }
  .el-row .el-col{
        line-height: 36px;
  }
</style>
