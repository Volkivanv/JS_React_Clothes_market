import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import loggerMiddleware from "./middlewares/loggerMiddleware";

export const store = configureStore({
    reducer: {
        products: productReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: ["persist/PERSIST"], //Игнорируем действие 'persist/PERSIST', так как оно не сериализуемо.
            },
        }).concat(loggerMiddleware),
});

export default store;
