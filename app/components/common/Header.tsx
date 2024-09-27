import Link from "next/link";
import React from "react";

export default function Header({
  title,
  href,
  backTitle,
}: {
  title: string;
  href: string;
  backTitle: string;
}) {
  return (
    <div className='flex justify-between my-3 items-center'>
      <h3 className='text-4xl font-bold'>{title}</h3>
      <Link
        href={href}
        className='bg-red-500 hover:bg-red-400 text-white px-5 md:px-10 py-3 rounded-3xl'
      >
        {backTitle}
      </Link>
    </div>
  );
}
