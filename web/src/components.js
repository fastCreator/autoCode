const layoutSys = resolve => require(['@res/layouts/layoutSys'], resolve)
const layoutSys1 = resolve => require(['@res/layouts/layoutSys'], resolve)
const layoutSys2 = resolve => require(['@res/layouts/layoutSys'], resolve)
export default {
    layoutSys,
    layoutSys1,
    layoutSys2
}

export const layouts = [
    {
        label: 'layout-sys',
        value: 'layout-sys',
        img: '/static/img/layoutSys.jpg',
        demo: '<layout-sys><span slot="left">left</span><span slot="top">top</span><span slot="content">content</span></layout-sys>',
        props: ['leftWidth', 'topHeight'],
        slot: ['left', 'top', 'content'],
        Instructions: ['leftWidth:左边距离左边距离左边距离左边距离左边距离左边距离左边距离左边距离左边距离左边距离左边距离', 'topHeight:高度']
    }
]

export const components = [
    {
        label: 'el-menu',
        value: 'el-menu',
        img: '/static/img/cmpMenu.jpg',
        demo: `<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
        <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>`,
         document:'http://element.eleme.io/#/zh-CN/component/menu'
        }
]
