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
            query: (formData) => ({
                url: '/bookProperty',
                method: 'POST',
                body: formData,
            }),
        }),
        getBookedProperties: builder.query({
            query: () => '/getBookedProperties',
        }),
        deleteBookedProperty: builder.mutation({
            query: ({ id }) => ({
                url: '/deleteBookedProperty',
                method: 'DELETE',
                body: { id },
            }),
        }),
    }),
});

export const {
    useBookPropertyMutation,
    useGetBookedPropertiesQuery,
    useDeleteBookedPropertyMutation,
} = propertiesBookApi;
