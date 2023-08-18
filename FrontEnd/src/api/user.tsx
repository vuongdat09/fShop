import { iUser } from '../interface/user'; 
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userApi = createApi({
    reducerPath: "user",
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api",
    }),
    endpoints: (builder) => ({
        //actions
        login: builder.mutation<iUser, iUser>({
            query: (userData) => ({
                url: `/signin`,
                method: "POST",
                body: userData
            }),
            invalidatesTags: ['Users']
        }),
        register: builder.mutation<iUser, iUser>({
            query: (userData) => ({
                url: `/signup`,
                method: "POST",
                body: userData
            }),
            invalidatesTags: ['Users']
        }),

    })
});

export const {useLoginMutation ,useRegisterMutation} = userApi

export default userApi