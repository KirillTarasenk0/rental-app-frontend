import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {propertiesTypeApi} from "./slices/propertiesTypeApi";

export const store = configureStore({
    reducer: {
        [propertiesTypeApi.reducerPath]: propertiesTypeApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(propertiesTypeApi.middleware),
});

setupListeners(store.dispatch);