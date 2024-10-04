import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className='flex flex-col md:flex-row md:justify-between md:items-center max-w-[1000px] mx-auto py-5 border-b'>
      <Link href={"/"}>Racine14</Link>

      <div className='flex gap-2 flex-col md:flex-row'>
        <Link
          href={"/"}
          className='px-4 py-1 rounded-md bg-gray-400 text-black'
        >
          Users
        </Link>
        <Link
          href={"/tiptap"}
          className='px-4 py-1 rounded-md bg-gray-400 text-black'
        >
          Text Editor
        </Link>
      </div>
    </div>
  );
}
