import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";

const rootReducer = combineReducers({});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(): unknown {
  const middleWares = [];

  if (process.env.NODE_ENV !== "production") {
    middleWares.push(logger);
  }

  const middleWareEnhancer = applyMiddleware(...middleWares);

  const store = createStore(rootReducer, middleWareEnhancer);

  return store;
}
