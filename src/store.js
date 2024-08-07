import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {propertiesTypeApi} from "./slices/propertiesTypeApi";
import {propertyDetailsApi} from "./slices/propertyDetailsApi";
import {propertiesPriceApi} from "./slices/propertiesPriceApi";
import {propertiesRoomsApi} from "./slices/propertyRoomsApi";
import {propertiesSearchApi} from "./slices/propertiesSearchApi";
import {userProfileApi} from "./slices/userProfileApi";
import {addAdvertApi} from "./slices/addAdvertApi";
import {userAddedPropertiesApi} from "./slices/userAddedPropertiesApi";
import {userFavouritePropertyApi} from "./slices/userFavouriteProperyApi";
import {propertiesBookApi} from "./slices/propertiesBookApi";
import {propertyCommentApi} from "./slices/propertyCommentApi";
import {advertsStatisticsApi} from "./slices/advertsStatisticsApi";

export const store = configureStore({
    reducer: {
        [propertiesTypeApi.reducerPath]: propertiesTypeApi.reducer,
        [propertyDetailsApi.reducerPath]: propertyDetailsApi.reducer,
        [propertiesPriceApi.reducerPath]: propertiesPriceApi.reducer,
        [propertiesRoomsApi.reducerPath]: propertiesRoomsApi.reducer,
        [propertiesSearchApi.reducerPath]: propertiesSearchApi.reducer,
        [userProfileApi.reducerPath]: userProfileApi.reducer,
        [addAdvertApi.reducerPath]: addAdvertApi.reducer,
        [userAddedPropertiesApi.reducerPath]: userAddedPropertiesApi.reducer,
        [userFavouritePropertyApi.reducerPath]: userFavouritePropertyApi.reducer,
        [propertiesBookApi.reducerPath]: propertiesBookApi.reducer,
        [propertyCommentApi.reducerPath]: propertyCommentApi.reducer,
        [advertsStatisticsApi.reducerPath]: advertsStatisticsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            propertiesTypeApi.middleware,
            propertyDetailsApi.middleware,
            propertiesPriceApi.middleware,
            propertiesRoomsApi.middleware,
            propertiesSearchApi.middleware,
            userProfileApi.middleware,
            addAdvertApi.middleware,
            userAddedPropertiesApi.middleware,
            userFavouritePropertyApi.middleware,
            propertiesBookApi.middleware,
            propertyCommentApi.middleware,
            advertsStatisticsApi.middleware,
        ),
});

setupListeners(store.dispatch);