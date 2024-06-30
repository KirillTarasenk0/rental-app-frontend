import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const userAddedPropertiesApi = createApi({
    reducerPath: 'userAddedPropertiesApi',
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
        getUserAddedProperties: builder.query({
            query: (userId) => `/getUserAddedProperty/${userId}`,
        }),
    }),
});

export const {useGetUserAddedPropertiesQuery} = userAddedPropertiesApi;