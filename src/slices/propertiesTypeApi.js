import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const propertiesTypeApi = createApi({
    reducerPath: 'propertiesTypeApi',
    baseQuery: fetchBaseQuery({
       baseUrl: 'http://127.0.0.1:8000/api/property',
    }),
    endpoints: (builder) => ({
        getAllProperties: builder.query({
            query: () => '/all',
        }),
        getFlatsProperties: builder.query({
            query: () => '/flats',
        }),
        getHousesProperties: builder.query({
            query: () => '/houses',
        }),
        getCommercialProperties: builder.query({
            query: () => '/commercial',
        }),
    }),
});

export const {
    useGetAllPropertiesQuery,
    useGetFlatsPropertiesQuery,
    useGetHousesPropertiesQuery,
    useGetCommercialPropertiesQuery,
} = propertiesTypeApi;