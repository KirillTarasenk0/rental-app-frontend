import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userFavouritePropertyApi = createApi({
    reducerPath: 'userFavouritePropertyApi',
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
        addFavouriteProperty: builder.mutation({
            query: ({ id }) => ({
                url: '/addFavouriteProperty',
                method: 'POST',
                body: { id },
            }),
        }),
        getFavouriteProperty: builder.query({
            query: () => '/getFavouriteProperties',
        }),
    }),
});

export const { useAddFavouritePropertyMutation, useGetFavouritePropertyQuery } = userFavouritePropertyApi;
