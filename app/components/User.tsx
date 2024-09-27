import React from "react";

import { useGetUsersQuery } from "@/redux/service/userApi";
import Link from "next/link";
import Header from "./common/Header";

export default function User() {
  const { data: users, isLoading, isError } = useGetUsersQuery();

  if (isLoading) {
    return (
      <div className='absolute top-0 left-0 bg-black text-white flex justify-center items-center h-screen w-screen'>
        Loading...
      </div>
    );
  }
  if (isError) {
    return <div>Error fetching users</div>;
  }
  // console.log("Data", users);
  return (
    <div>
      <Header backTitle='Add User' href='/user/add-user' title='User' />
      <ul className='w-full mx-auto mb-10'>
        {users?.map((user) => (
          <Link href={`user/${user.id}`} key={user.id}>
            <li className='flex flex-row rounded-3xl bg-white px-10 py-5 my-2 text-black justify-between items-center'>
              <div>
                <h3 className='text-2xl font-bold'>Username</h3>
                <small>{user.username}</small>
              </div>
              <div className='text-right'>
                <h3 className='text-2xl font-bold'>Email</h3>
                <small>{user.email}</small>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
