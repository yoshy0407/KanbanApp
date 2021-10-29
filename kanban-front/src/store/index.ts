import Vue from 'vue'
import Vuex from 'vuex'
import { BoardStore } from '@/store/modules/board'

Vue.use(Vuex)

export interface RootState {
  board: BoardStore
}

export default new Vuex.Store<RootState>({})
