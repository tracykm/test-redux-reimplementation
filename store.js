module.exports = {
  createStore: (reducer) => {
    let store = reducer(undefined, {type: 'asdfsd'})
    return {
      getState: () => {
        return store
      },
      dispatch: (action) => {
        store = reducer(store, action)
      }
    }
  }
}
