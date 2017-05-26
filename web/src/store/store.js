export const state = {
  zoom:0.8,
  routes: {
    path: 'main',
    component: null,
    children: [],
  },
  components: [],
  right1select: 'style',
  right2select: [
    'layout', 'router', 'color', 'import',
    'state', 'API', 'data', 'computed', 'methods',
    'lefe', 'ajax', 'routerhook', 'template'],
}


export const getters = {
}

export const mutations = {
  right1go(state, value) {
    state.right1select = value
  },
  setzoom(state, value){
    state.zoom = value
  }
}

export const actions = {

}



