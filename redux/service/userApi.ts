const baseUrl = "https://jsonplaceholder.typicode.com"; // Base URL

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Use react-query import

// Define the User interface
interface User {
  id: number;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

// Create the API service
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    // READ: Fetch users
    getUsers: builder.query<User[], void>({
      query: () => "/users",
    }),

    // SHOW: Fetch a single user by ID
    getUserById: builder.query<User, number>({
      query: (id) => `/users/${id}`,
    }),

    // CREATE: Add a new user
    createUser: builder.mutation<User, Partial<User>>({
      query: (newUser) => ({
        url: "/users",
        method: "POST",
        body: newUser,
      }),
    }),

    // UPDATE: Update a user's data
    updateUser: builder.mutation<
      User,
      { id: number; updatedUser: Partial<User> }
    >({
      query: ({ id, updatedUser }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: updatedUser,
      }),
    }),

    // DELETE: Delete a user by ID
    deleteUser: builder.mutation<{ success: boolean }, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export the auto-generated hooks for the queries and mutations
export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
