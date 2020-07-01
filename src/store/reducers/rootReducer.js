import { combineReducers } from 'redux'
import costs from './costsReducer'

const rootReducer = combineReducers({
    costs: costs,
})

export default rootReducer
