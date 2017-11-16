const test = require('tape');
const redux = require('redux');
const fakeRedux = require('./store');

const commentsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD':
      return [...state, payload]
      break;
    default:
      return state
  }
}

const store = fakeRedux.createStore(commentsReducer)
// console.log(store);

console.log(store.getState())

store.dispatch({ type: 'ADD', payload: 'woot!'})

console.log(store.getState())


test('initalize', (t) => {
  t.plan(1);
  t.deepEqual({one: 1}, {one: 1})
})
