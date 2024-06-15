import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {propertiesTypeApi} from "./slices/propertiesTypeApi";
import {propertyDetailsApi} from "./slices/propertyDetailsApi";

export const store = configureStore({
    reducer: {
        [propertiesTypeApi.reducerPath]: propertiesTypeApi.reducer,
        [propertyDetailsApi.reducerPath]: propertyDetailsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(propertiesTypeApi.middleware, propertyDetailsApi.middleware),
});

setupListeners(store.dispatch);