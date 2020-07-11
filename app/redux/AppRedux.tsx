import { createReducer, createActions } from 'reduxsauce'
import { Map } from 'immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    startup: null
})

export const StartupTypes = Types
export default Creators
/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
    initApp: false
})

// request the data from an api
export const initApp = state =>
  state.merge({ initApp: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.STARTUP]: initApp,
  })
