import { createStore, Store, applyMiddleware } from "redux";
import { thunk, ThunkMiddleware } from "redux-thunk";
import rootReducer from "./rootReducer";


const store: Store = createStore(rootReducer, applyMiddleware(thunk as unknown as ThunkMiddleware));

export default store;

console.log(store.getState());