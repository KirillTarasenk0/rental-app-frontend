import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const addAdvertApi = createApi({
    reducerPath: 'addAdvertApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api/property',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        addAdvert: builder.mutation({
            query: (formData) => ({
                url: '/addProperty',
                method: 'POST',
                body: formData,
            }),
        }),
    }),
});

export const { useAddAdvertMutation } = addAdvertApi;
