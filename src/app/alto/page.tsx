import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'

const Alto = () => {
  return (
    <div>

<Header/>
<div className='bg-gray-100'>
<p className='text-[25px] font-bold underline text-center leading-[80px] '>Suzuki Alto 2024 Price in Pakistan, Images, Reviews & Specs</p>
        <div> <img src="/Alto.webp" alt="this is corolla " width={250} height={250} className='h-64 w-[350px] mx-[590px]' /></div>



        <div className='flex justify-center gap-6 mt-4'>
        <button className='options h-10 w-40 rounded bg-blue-800  text-white mb-3 pt-1 pr-1 hover:'> 
          Book A Test Drive</button>
          <div className=''> <button className='- text-blue-800 bg-white h-10 w-48 pt-1 mb-3 pr-2 pl-2 rounded border-2 border-solid border-blue-800 '>Request Bank Finance</button></div>
        <div className=''> <button className=' text-blue-800  bg-white h-10 w-32 pt-1 mb-3 pr-1 rounded border-2 border-solid border-blue-800'>Visit Place </button></div>
        <div className=''><button className=' text-blue-800 bg-white h-10 w-36  pt-1 mb-3 pr-1 rounded border-2 border-solid border-blue-800'>Car Inspection</button></div>
        </div>

        <p className='text-center font-bold text-xl leading-[80px] mr-9'>Vehicle Description</p>
        <main className='flex justify-center gap-6'>
        <div className='flex gap-2'>
          <p className='font-bold'>Number of Doors</p>
          <p>4</p></div>

        <div className='flex gap-2'>
          <p className='font-bold '>Engine</p>
          <p>1800 CC</p></div>

          <div className='flex gap-2'>
            <p className='font-bold '>Condition</p>
            <p>8.5/10</p></div>

            <div className='flex gap-2'>
              <p className='font-bold'>Driven</p>
              <p>95000 KM</p></div>

              <div className='flex gap-2'>
                <p className='font-bold'>Suspension Type</p>
                <p>Soft Suspension</p>
              </div>

        </main>

        <main className='flex justify-center leading-[50px] gap-8'>

          <div className='flex gap-2'>
            <p className='font-bold'>Avg</p>
            <p>13 KM per ltr</p></div>

            <div className='flex gap-2'>
              <p className='font-bold'>Tranmission</p>
              <p>Automatic</p></div>

              <div className='flex gap-2'>
                <p className='font-bold'>Fuel Type</p>
                <p>High Octane</p>
              </div>

        </main>
        <p className='text-2xl text-green-500 text-center mr-10'>PKR 30,50,000</p>

        <div className='my-[30px]'>
        <Link href= "/contact"><button className='h-12 w-40 rounded bg-blue-700 hover:bg-blue-800 ml-[660px] text-white '>Make Payment</button></Link></div>
        </div>

    </div>
  )
}

export default Alto