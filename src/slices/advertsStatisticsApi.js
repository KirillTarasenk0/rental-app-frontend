import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const advertsStatisticsApi = createApi({
    reducerPath: 'advertsStatisticsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getAdvertsStatistics: builder.query({
            query: () => '/getRenterStatistics',
        }),
    }),
});

export const {
    useGetAdvertsStatisticsQuery,
} = advertsStatisticsApi;