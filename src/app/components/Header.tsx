
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='bg-blue-950 h-36 text-white'>
            <div className='first flex justify-between'>
                <div className='flex gap-1 ml-[140px] py-4'>
                    <Image src={"/phone.webp"} alt='Phone Icon' width={10} height={10} className='h-6 w-6' />
                    <p className='text-xs'>Download App via SMS</p>
                </div>
                <div className='mr-36 py-4 text-xs '>
                    Sign In | Sign Up
                </div>
            </div>


            <div className='line bg-gray-500 h-[1px] mx-36 '></div>

            <div className='second ml-24 my-5 flex items-center'>
                <Link href= "/."><Image src={"/logo.webp"} alt='logo' width={110} height={110} className='w-40 ml-10 '/></Link>
                <nav className='ml-40'>
                    <ul className='flex gap-9 mx-20'>
                        <li>New Cars</li>
                        <li>Used Cars</li>
                        <li>Bikes</li>
                        <li>Auto Store</li>
                        <li>Videos</li>
                        <li>Blogs</li>
                        <li>Forum</li>
                        <li>More</li>
                    </ul>
                </nav>
                <div>
                    <button className='h-8 w-28 rounded bg-red-700 hover:bg-red-800'>Post an Ad</button>
                </div>
            </div>
        </header>
    )
}

export default Header