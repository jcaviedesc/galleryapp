import { createStore, applyMiddleware, compose } from 'redux'
import Config from '../config/DebugConfig'
import Reactotron from '../config/ReactotronConfig'

// creates the store
export default (rootReducer:object) => {
  /* ------------- Redux Configuration ------------- */
  const middleware:Array<any> = []
  const enhancers = []
  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware))
  if (Config.useReactotron) {
    console.tron.log("using Reducer Reatotron")
    enhancers.push(Reactotron.createEnhancer())
  }
  const createAppropriateStore = createStore
  const store = createAppropriateStore(rootReducer, compose(...enhancers))
  return {
    store
  }
}
