import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const propertiesRoomsApi = createApi({
    reducerPath: 'propertiesRoomsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api/property',
    }),
    endpoints: (builder) => ({
        getRoomsProperties: builder.query({
            query: (roomNumber) => `/${roomNumber}`,
        }),
    }),
});

export const {useGetRoomsPropertiesQuery} = propertiesRoomsApi;