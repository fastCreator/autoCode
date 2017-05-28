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
        name:'layout-sys',
        img:'/static/img/layoutSys.jpg',
        props:['leftWidth','topHeight'],
        Instructions:['leftWidth:左边距离左边距离左边距离左边距离左边距离左边距离左边距离左边距离左边距离左边距离左边距离','topHeight:高度']
    }
]