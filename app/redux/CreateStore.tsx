import { createStore, applyMiddleware, compose } from 'redux'

// creates the store
export default (rootReducer:object) => {
  /* ------------- Redux Configuration ------------- */
  const middleware:Array<any> = []
  const enhancers = []
  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware))
  const createAppropriateStore = createStore
  const store = createAppropriateStore(rootReducer, compose(...enhancers))
  return {
    store
  }
}
