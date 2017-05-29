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
        label:'layout-sys',
        value:'layout-sys',
        img:'/static/img/layoutSys.jpg',
        demo:'<layout-sys><span slot="left">left</span><span slot="top">top</span><span slot="content">content</span></layout-sys>',
        props:['leftWidth','topHeight'],
        slot:['left','top','content'],
        Instructions:['leftWidth:左边距离左边距离左边距离左边距离左边距离左边距离左边距离左边距离左边距离左边距离左边距离','topHeight:高度']
    }
]