import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from "redux-thunk";
import { sidebarReducer, themeReducer, rtlReducer, products } from '../../redux/reducers/index';
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  sidebar: sidebarReducer,
  rtl: rtlReducer,
  products,
});

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
