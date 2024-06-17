import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {propertiesTypeApi} from "./slices/propertiesTypeApi";
import {propertyDetailsApi} from "./slices/propertyDetailsApi";
import {propertiesPriceApi} from "./slices/propertiesPriceApi";
import {propertiesRoomsApi} from "./slices/propertyRoomsApi";
import {propertiesSearchApi} from "./slices/propertiesSearchApi";
import {userAuthApi} from "./slices/userAuthApi";

export const store = configureStore({
    reducer: {
        [propertiesTypeApi.reducerPath]: propertiesTypeApi.reducer,
        [propertyDetailsApi.reducerPath]: propertyDetailsApi.reducer,
        [propertiesPriceApi.reducerPath]: propertiesPriceApi.reducer,
        [propertiesRoomsApi.reducerPath]: propertiesRoomsApi.reducer,
        [propertiesSearchApi.reducerPath]: propertiesSearchApi.reducer,
        [userAuthApi.reducerPath]: userAuthApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            propertiesTypeApi.middleware,
            propertyDetailsApi.middleware,
            propertiesPriceApi.middleware,
            propertiesRoomsApi.middleware,
            propertiesSearchApi.middleware,
            userAuthApi.middleware,
        ),
});

setupListeners(store.dispatch);