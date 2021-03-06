import Vue from 'vue'
import Vuex from 'vuex'

import {state,getters,mutations,actions} from './store'
 
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state, 
    getters,
    mutations,
    actions,
    strict: false
})