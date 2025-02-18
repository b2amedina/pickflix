import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import movieSlice from "../respository/movieSlice";

const logger = createLogger({
  collapsed: true, 
});

const store = configureStore({
    reducer: {
       [movieSlice.reducerPath]: movieSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;