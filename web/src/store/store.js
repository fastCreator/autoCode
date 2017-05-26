import vue from 'vue';
import {getState} from '../server/state'
 
export const state = {
  zoom: 0.8,
  routes: [getState()||{
    path: 'main',
    component: {},
    children: [],
    parent: null
  }],
  nowroute: null,
  components: [],
  right1select: 'routes',
  right2select: [
    'routes','layout', 'router', 'color', 'import',
    'state', 'API', 'data', 'computed', 'methods',
    'lefe', 'ajax', 'routerhook', 'template'],
}



state.nowroute = state.routes[0]; 

export const getters = {
}

export const mutations = {
  right1go(state, value) { 
    state.right1select = value.type 
    if(value.route)state.nowroute = value.route
  },
  setzoom(state, value) {
    state.zoom = value
  },
  addRouter(state, value) { 
    state.nowroute.children.push({
      path: value,
      component: {},
      children: [],
      parent: state.nowroute
    }
    )
  },
  deleteRouter(state, value) {
    var p =state.nowroute.parent;
    for(let key in  p.children){
        if(state.nowroute === p.children[key])
        vue.delete(p.children,key);
        state.nowroute =p; 
        return ;
    }
    
  },
  setrouterPath(state,value){ 
    state.nowroute.path =value;  
  }
}

export const actions = {

}


