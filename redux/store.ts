import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { budgetApi } from "./service/budgetApi";
import { userApi } from "./service/userApi";

// Configure the store
const store = configureStore({
  reducer: {
    ...rootReducer, // Spread the existing rootReducer
    [budgetApi.reducerPath]: budgetApi.reducer, // Add the budgetApi reducer
    [userApi.reducerPath]: userApi.reducer, // Add the userApi reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(budgetApi.middleware) // Add budgetApi middleware
      .concat(userApi.middleware), // Add userApi middleware
  devTools: true, // Enable Redux dev tools
});

// Export the store as the default export
export default store;

// Define RootState and AppDispatch for TypeScript use
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
