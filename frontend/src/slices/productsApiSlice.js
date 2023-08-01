import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5, //caching
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
    }),
    createProduct: builder.mutation({
      query:()=>({
        //Not passing data because we have a new sample created on the back endthat we can edit
        url:PRODUCTS_URL,
        method:'POST'
      }),
      invalidatesTags:['Product'],//Stops from being cached so we have fresh data
    })
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery,useCreateProductMutation } = productsApiSlice;
