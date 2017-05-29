<template>
    <div class="el-cascader-menus" :style="menuPos">
        <ul class="el-cascader-menu" v-for="(listitem,index) in list">
            <li v-for="item in listitem"  @click="listitemclick(item,index+1)" :class="{'el-cascader-menu__item--extensible':item.children}" class="el-cascader-menu__item">{{item.label}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'my-cascader',
        data() {
            return {
                list: []
            };
        },
        created() {
            this.list = [this.menu];
        },
        props: ['menu', 'menuPos'],
        methods: {
            listitemclick(item,index) { 
                var child = item.children;   
                if (child && child.length) {  
                    this.list.splice(index,this.list.length-index,child) 
                }else{
                     this.list = [this.menu];
                     this.$emit('select',item);
                }
            }
        }
    }
    //is-active
</script>

<style scoped>
    .editShow {
        position: relative;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
    .el-cascader-menus {
        position: fixed;
        left: 0;
        top: 0;
    }
    .contextmenu>.el-cascader-menus {
        position: absolute;
        z-index: 2001;
        display: block;
    }
</style>
