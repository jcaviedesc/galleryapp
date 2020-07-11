import { createReducer, createActions } from 'reduxsauce'
import { Map } from 'immutable'
import { navigate } from '../navigation/RootNavigation'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  navigateTo: ['screen']
})

export const RouterTypes = Types
export default Creators
/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
  screen: 'ImagesScreen'
})

// request the data from an api
export const navigateTo = (state, { screen }) => {
  navigate(screen)
  return state.merge({ screen })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.NAVIGATE_TO]: navigateTo,
})
