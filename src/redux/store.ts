import {combineReducers,configureStore} from "@reduxjs/toolkit";
import {currencyApi} from "./services/currency";
const rootReducer = combineReducers({
    [currencyApi.reducerPath]: currencyApi.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (ware)=> ware().concat(currencyApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch