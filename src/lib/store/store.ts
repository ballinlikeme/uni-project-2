import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { categoriesReducer } from "./slices/categories";
import { transactionsReducer } from "./slices/transactions";
import { accountsReducer } from "./slices/accounts";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  transactions: transactionsReducer,
  accounts: accountsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
