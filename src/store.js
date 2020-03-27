import {createStore, action} from 'easy-peasy'


const store = createStore({
  bucket: {
    items: [],
    menu: [],
    updateItems: action((state, payload) => {
      state.items = payload
    }),
    updateMenu: action((state, payload) => {
      state.menu = payload
    })
  }
});

export default store