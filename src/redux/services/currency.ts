import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const currencyApi = createApi({
    reducerPath: 'currencyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://cdn.cur.su/api/' }),
    endpoints: (builder) => ({
        getCurrencies: builder.query<any, void>({
            query: () => `latest.json`,
        }),
    }),
});


export const { useGetCurrenciesQuery } = currencyApi;

export const { endpoints } = currencyApi