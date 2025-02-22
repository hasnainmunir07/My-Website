import React from 'react'
import Header from '@/app/components/Header'
import Link from 'next/link';

const Contact = () => {
    return (
        <div>
            <Header/>
            
        <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-[130px]">
            <h2 className="text-2xl font-bold text-center mb-4">ENTER YOUR DETAILS</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Card Number"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <Link href= "/thanks"><button
                type="submit"
                className="w-40 ml-28 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md mt-6"
              >
                Place Your Order
              </button></Link>
              
            </form>
          </div>
        </div>
        </div>
        
      );
}

export default Contact