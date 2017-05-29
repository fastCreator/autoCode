<template>
  <div class="layout-sys">
    <div class="left" :style="{width:leftWidth+'px'}" data-slot="left">
      <slot name="left"></slot>
    </div>
    <div class="right" :style="{left:leftWidth+'px'}">
      <div class="top" :style="{height:topHeight+'px'}" data-slot="top">
        <slot name="top"></slot>
      </div>
      <div class="content" :style="{top:topHeight+'px'}" data-slot="content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'layout-sys',
    data() {
      return {
        //maxWith: 180
      }
    },
    computed: {
      maxWith() {
        //return this.slide?80:180
      }
    },
    props: {
      leftWidth: {
        default: 180
      },
      topHeight: {
        default: 40
      }
    }
  }
</script>

<style scoped>
  .left {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background: #19233c;
    z-index: 9;
    -webkit-transition: width 0.3s;
    -moz-transition: width 0.3s;
    -ms-transition: width 0.3s;
    -o-transition: width 0.3s;
    transition: width 0.3s;
    -moz-transition: width .3s;
    -webkit-transition: width .3s;
    transition: width .3s;
  }
  .right {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }
  .top {
    position: absolute;
    top: 0;
    width: 100%;
    background: #fff;
    color: #666;
    z-index: 5;
    border-bottom: 1px solid #e2e5ec;
  }
  .content {
    position: absolute;
    background: #E2E5EC;
    width: 100%;
    bottom: 0;
  }
</style>
