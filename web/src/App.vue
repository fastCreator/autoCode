<template>
  <div id="app">
    <editHeader></editHeader>
    <EditLeft></EditLeft>
    <EditCenter></EditCenter>
    <EditRight1></EditRight1>
    <EditRight2></EditRight2>
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
    background: #EDEDED;
  }
  #app {
    font-family: "PingHei","Lucida Grande","Lucida Sans Unicode","Helvetica","Arial","Verdana","sans-serif","Microsoft Yahei","微软雅黑";
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
    width: 270px;
    background: #F5F5F5;
  }
  .editcenter {
    position: absolute;
    top: 70px;
    bottom: 0;
    left: 270px;
    right: 270px;
    background: #CCCCCC;
  }
  .editright1 {
    position: absolute;
    top: 70px;
    bottom: 0;
    right: 70px;
    width: 270px;
    background: #FAFAFA;
  }
  .editright2 {
    position: absolute;
    top: 70px;
    bottom: 0;
    right: 0px;
    width: 70px;
    background: #2D353D;
  }
</style>
