import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const propertiesSearchApi = createApi({
    reducerPath: 'propertiesSearchApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api/property/find',
    }),
    endpoints: (builder) => ({
        getSearchedProperties: builder.query({
            query: (formData) => {
                const params = new URLSearchParams();
                if (formData.property_type) params.append('property_type', formData.property_type);
                if (formData.rooms) params.append('rooms', formData.rooms);
                if (formData.price_from) params.append('price_from', formData.price_from);
                if (formData.price_to) params.append('price_to', formData.price_to);
                if (formData.city) params.append('city', formData.city);
                return `?${params.toString()}`;
            },
        }),
    }),
});

export const {useGetSearchedPropertiesQuery} = propertiesSearchApi;