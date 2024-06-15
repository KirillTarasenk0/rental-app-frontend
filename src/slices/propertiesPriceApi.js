import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const propertiesPriceApi = createApi({
    reducerPath: 'propertiesPriceApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api/property',
    }),
    endpoints: (builder) => ({
        getCheepProperties: builder.query({
            query: () => '/cheep',
        }),
        getMediumProperties: builder.query({
            query: () => '/medium',
        }),
        getExpensiveProperties: builder.query({
            query: () => '/expensive',
        }),
    }),
});

export const {
    useGetCheepPropertiesQuery,
    useGetMediumPropertiesQuery,
    useGetExpensivePropertiesQuery,
} = propertiesPriceApi;