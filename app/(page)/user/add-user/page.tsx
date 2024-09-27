import Header from "@/app/components/common/Header";
import React from "react";

export default function AddUser() {
  return (
    <div>
      <Header backTitle='Back to users' href='/' title='Add user' />

      <div className='bg-white rounded-3xl my-5 px-10 py-20'>
        <form action='' method='post'>
          <div className='form-control'>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Email address
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                required
                autoComplete='email'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='form-control'>
            <label
              htmlFor='username'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Username
            </label>
            <div className='mt-2'>
              <input
                id='username'
                name='username'
                type='username'
                required
                autoComplete='email'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='form-control'>
            <button
              type='submit'
              className='bg-blue-500 text-white px-5 py-2 rounded-3xl'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
