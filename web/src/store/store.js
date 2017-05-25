export const  state ={
  routes:{
    path:'',
    component:null,
    children:[],
  },
  right1select:'',
  right2select:['a','b'], 
} 


export const getters = {
}

export const mutations = {
  right1go (state,type){ 
    state.right1select =type
  }   
}

export const actions = {
   
}



