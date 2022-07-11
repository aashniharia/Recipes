import { createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import postsReducer from "../Reducers/reducers"
const rootReducer=combineReducers({postsReducer})
const middleware=[thunk]
const initialstate={}
const store = createStore(rootReducer,initialstate,composeWithDevTools(applyMiddleware(...middleware)))

export default store