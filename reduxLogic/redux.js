import { createStore } from 'redux';

const initialState = {
  counter: 0
}

// reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1,
    }
  }
  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value,
    }
  }
  return state;
}

// store
const store = createStore(rootReducer);
console.log(store.getState()); // { counter: 0 }

// subscription
store.subscribe(() => {
  console.log('Subscription: ', store.getState()); 
  // Subscription:  { counter: 1 }
  // Subscription:  { counter: 6 }
});

// dispatching action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 5 });
console.log(store.getState()); // { counter: 6 }
