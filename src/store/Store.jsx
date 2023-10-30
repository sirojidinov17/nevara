import { createStore } from 'redux'

const addcard={
  card:[],
  url:`https://dummyjson.com/`
}



function todos(state=addcard, action) {

 
    switch (action.type) {
      case 'ADD':
        return   {...state, card: [...state.card, action.payload]};
        break;
          case 'Del':
            return   {...state, card: []};
      default:
        return state
  }
}

const store = createStore(todos)
export default store;




