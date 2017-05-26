export default [
          {
              name:'路由',
              type:'routes' 
          },
          {
            //用于选择和添加布局
            name: '布局',
            type: 'layout',
          },
          {
            //用于选择路由
            name: '全局Router',
            type: 'router',
          },
          {
            //用于添加指令
            name: '指令',
            type: 'color',
          },
          {
            //用于选择和添加指令
            name: '组件',
            type: 'component',
          },
          {
            //添加颜色对照表
            name: '颜色对照表',
            type: 'color',
          },
          {
            //引用其他文件方便调用
            name: '导包',
            type: 'import',
          },
          {
            //引用共享状态以及初始化
            name: '共享状态',
            type: 'state',
          },
          {
            //用于添加ajax服务
            name: 'API',
            type: 'api',
          },
          {
            name: '属性',
            type: 'attr',
          },
          {
            name: 'data',
            type: 'data',
          },
          {
            name: 'computed',
            type: 'computed',
          },
          {
            name: 'methods',
            type: 'methods',
          },
          {
            name: '生命周期',
            type: 'lefe',
          },
          {
            name: '初始化ajax',
            type: 'ajax',
          },
          {
            name:'router钩子',
            type:'routerhook'
          },
          {
            name:'模板',
            type:'template'
          },
          {
            name:'样式',
            type:'style'
          },
        ]