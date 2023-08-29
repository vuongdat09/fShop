import { IProduct } from '../interface/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productApi = createApi({
    reducerPath: "product",
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', 'Bearer '  + JSON.parse(localStorage.getItem("token")||"{}").accessToken)
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        //actions
        getProducts: builder.query<IProduct[], void>({
            query: () => `/products`,
            providesTags: ['Products']
        }),
        getProductById: builder.query<IProduct, number | string>({
            query: (id) => `/products/${id}`,
            providesTags: ['Products']
        }),
        removeProduct: builder.mutation<void, number | string>({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
                // headers:{Authorization: 'Bearer ' + JSON.parse(localStorage.getItem("token")||"{}").accessToken}
            }),
            invalidatesTags: ['Products']
        }),
        addProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/products`,
                method: "POST",
                body: product,
                // headers:{Authorization: 'Bearer ' + JSON.parse(localStorage.getItem("token")||"{}").accessToken}
            }),
            invalidatesTags: ['Products']
        }),
        updateProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/products/${product._id}`,
                method: "PUT",
                body: product?.data,
                // headers:{Authorization: 'Bearer ' + JSON.parse(localStorage.getItem("token")||"{}").accessToken}
            }),
            invalidatesTags: ['Products']
        })
    })
});
export const {
    useGetProductsQuery,
    useAddProductMutation,
    useGetProductByIdQuery,
    useRemoveProductMutation,
    useUpdateProductMutation
} = productApi;
export default productApi;