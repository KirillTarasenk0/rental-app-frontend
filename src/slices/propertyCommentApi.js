import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const propertyCommentApi = createApi({
    reducerPath: 'propertyCommentApi',
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
        updatePropertyComment: builder.mutation({
            query: (formData) => ({
                url: '/addReview',
                method: 'POST',
                body: formData,
            }),
        }),
        getPropertyComments: builder.query({
            query: (id) => `/getReviews/${id}`,
        })
    }),
});

export const {
    useUpdatePropertyCommentMutation,
    useGetPropertyCommentsQuery,
} = propertyCommentApi;