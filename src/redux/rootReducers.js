import { combineReducers } from 'redux'
import { productReducer } from '../containers/Home/reducers'
import { productDetailReducer } from '../containers/Detail/reducers'

const rootReducers = combineReducers({
  homePage: productReducer,
  detailPage: productDetailReducer,
})

export default rootReducers
