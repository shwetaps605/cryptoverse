import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '43751a6cedmshaede457539899bfp16f453jsn7f540c04e2e0'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

//a custom fucntion which takes a url and adds the headers to it
const createRequest = (url) => ({ url, headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducePath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>  ({
        getCryptos: builder.query({
            query:() => createRequest('/coins')
        })
    })
})

export const {useGetCryptosQuery} = cryptoApi