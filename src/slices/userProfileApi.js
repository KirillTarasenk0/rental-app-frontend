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
            headers.set('Content-Type', 'application/json'); // Изменено на отправку JSON
            return headers;
        }
    }),
    endpoints: (builder) => ({
        editUserProfile: builder.mutation({
            query: (userData) => ({
                url: '/edit',
                method: 'PATCH',
                body: userData,
            }),
        }),
    }),
});

export const { useEditUserProfileMutation } = userProfileApi;
