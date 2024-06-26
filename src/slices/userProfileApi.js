import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userProfileApi = createApi({
    reducerPath: 'userProfileApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api/profile',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        editUserProfile: builder.mutation({
            query: (formData) => ({
                url: '/edit',
                method: 'POST',
                body: formData,
            }),
        }),
    }),
});

export const { useEditUserProfileMutation } = userProfileApi;
