import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {propertiesTypeApi} from "./slices/propertiesTypeApi";
import {propertyDetailsApi} from "./slices/propertyDetailsApi";
import {propertiesPriceApi} from "./slices/propertiesPriceApi";

export const store = configureStore({
    reducer: {
        [propertiesTypeApi.reducerPath]: propertiesTypeApi.reducer,
        [propertyDetailsApi.reducerPath]: propertyDetailsApi.reducer,
        [propertiesPriceApi.reducerPath]: propertiesPriceApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            propertiesTypeApi.middleware,
            propertyDetailsApi.middleware,
            propertiesPriceApi.middleware,
        ),
});

setupListeners(store.dispatch);