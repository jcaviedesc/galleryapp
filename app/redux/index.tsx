import { combineReducers } from 'redux'
import configureStore from './CreateStore'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  app: require('./AppRedux').reducer,
})

export default () => {
  const { store} = configureStore(reducers)
  return store
}
