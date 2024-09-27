"use client";

import Header from "@/app/components/common/Header";
import { useGetUserByIdQuery } from "@/redux/service/userApi";
import Link from "next/link";

const UserDetail = ({ params }: { params: { id: number | undefined } }) => {
  // Skip query if userId is undefined
  const { id } = params;
  //   console.log("UserId: >>", id);
  const {
    data: user,
    error,
    isLoading,
  } = useGetUserByIdQuery(id!, {
    skip: !id, // This prevents the request if userId is undefined
  });

  if (!id)
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <h3 className='text-3xl font-bold'>No user selected.</h3>
      </div>
    );

  if (isLoading)
    return (
      <div className='h-full w-full flex justify-center items-center'>
        <span className='relative flex h-3 w-3'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75' />
          <span className='relative inline-flex rounded-full h-3 w-3 bg-sky-500' />
        </span>
      </div>
    );
  if (error) return <div>Error loading user.</div>;

  return (
    <div className='w-full md:max-w-[1000px] mx-auto'>
      <Header backTitle='Back to users' href='/' title='User' />
      <div className='bg-white p-10 rounded-3xl mx-auto my-5 text-black'>
        <h2 className='font-bold text-4xl'>{user?.username}</h2>
        <p className='font-normal text-2xl my-1'>Email: {user?.email}</p>
        <p className='font-normal text-2xl my-1'>
          Address: {user?.address.city}
        </p>

        <div className='flex justify-end mt-5'>
          <Link
            href='/'
            className='bg-red-500 text-white px-5 md:px-10 py-2 rounded-3xl hover:bg-red-400'
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
