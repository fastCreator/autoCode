import vue from 'vue';
import { getState } from '../server/state'

const noon = function () { }



function getNullComponent(){
  return {
  //数据
  data: {},
  props: [],
  propsData: {},
  computed: {},
  methods: {},
  watch: {},
  //生命周期
  beforeCreate: noon,
  created: noon,
  beforeMount: noon,
  mounted: noon,
  beforeUpdate: noon,
  updated: noon,
  activated: noon,
  deactivated: noon,
  beforeDestroy: noon,
  destroyed: noon,
  //dom
  template:'', 
  render:noon,
  //资源
  components:{},
  //杂项
  name:'',
  //添加
  class:'',
}
}

export const state = {
  testcss:[],
  zoom: 0.8,
  routes: [getState() || {
    path: 'main',
    component: getNullComponent(),
    children: [],
    parent: null
  }],
  nowroute: null,
  right1select: 'template',
  right2select: [
    'style', 'routes', 'layout', 'router', 'color', 'import',
    'state', 'API', 'data', 'computed', 'methods',
    'lefe', 'ajax', 'routerhook', 'template'],
}




state.nowroute = state.routes[0];

export const getters = {
}

export const mutations = {
  vuexright1go(state, value) {
    state.right1select = value.type
    if (value.route) state.nowroute = value.route
  },
  vuexsetzoom(state, value) {
    state.zoom = value
  },
  vuexaddRouter(state, value) {
    state.nowroute.children.push({
      path: value,
      component: getNullComponent(),
      children: [],
      parent: state.nowroute
    }
    )
  },
  vuexdeleteRouter(state, value) {
    var p = state.nowroute.parent;
    for (let key in p.children) {
      if (state.nowroute === p.children[key])
        vue.delete(p.children, key);
      state.nowroute = p;
      return;
    }

  },
  vuexsetrouterPath(state, value) {
    state.nowroute.path = value;
  },
  vuexpush(state,value){
    value.target.push(value.value);
  }
}

export const actions = {

}


