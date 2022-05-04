import reducer from "./reducer";
import {
	applyMiddleware,
	legacy_createStore as createStore,
	compose,
} from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
