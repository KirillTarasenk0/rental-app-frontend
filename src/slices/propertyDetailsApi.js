import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const propertyDetailsApi = createApi({
    reducerPath: 'propertyDetailsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api/property/find',
    }),
    endpoints: (builder) => ({
        getPropertyDetails: builder.query({
            query: (id) => `?id=${id}`,
        }),
    }),
});

export const {useGetPropertyDetailsQuery} = propertyDetailsApi;