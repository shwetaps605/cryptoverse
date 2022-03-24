import { createApi, fetchBaseQuery} from '@redux/toolkit/query'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '43751a6cedmshaede457539899bfp16f453jsn7f540c04e2e0'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins'

export const cryptoApi = createApi({
    reducePath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: 
})