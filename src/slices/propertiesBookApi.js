import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertiesBookApi = createApi({
    reducerPath: 'propertiesBookApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api/property',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        bookProperty: builder.mutation({
            query: ({ id }) => ({
                url: '/bookProperty',
                method: 'POST',
                body: { id },
            }),
        }),
        /*getFavouriteProperty: builder.query({
            query: () => '/getFavouriteProperties',
        }),
        deleteFavouriteProperty: builder.mutation({
            query: ({ id }) => ({
                url: '/deleteFavouriteProperty',
                method: 'DELETE',
                body: { id },
            }) ,
        }),*/
    }),
});

export const {
    useBookPropertyMutation,
} = propertiesBookApi;
