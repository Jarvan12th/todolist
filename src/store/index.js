import { createStore } from 'vuex'

export default createStore({
  state: {
    list: [
      {
        task: 'coding',
        isCompleted: false
      },
      {
        task: 'playing',
        isCompleted: false
      },
      {
        task: 'talking',
        isCompleted: false
      }
    ]
  },
  getters: {
  },
  mutations: {
    addTodo(state, payload) {
      state.list.push(payload)
    },

    deleteTodo(state, payload) {
      state.list.splice(payload, 1)
    },
    
    clearTodo(state, payload) {
      state.list = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
