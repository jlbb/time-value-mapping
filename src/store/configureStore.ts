import { applyMiddleware, createStore, StoreEnhancer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

export default function configureStore(preloadedState?: any) {
  const middlewares: any[] = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers: StoreEnhancer = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
