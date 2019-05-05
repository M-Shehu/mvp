import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

const middleware = applyMiddleware(thunk);

export default initialState => createStore(rootReducer, initialState, middleware);