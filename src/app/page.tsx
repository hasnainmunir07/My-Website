import Header from "./components/Header";
import Image from "next/image";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="flex items-center justify-center gap-8 mt-10">

        <div className='line bg-gray-400 h-[1px] w-60'></div>

        <div className="heading text-center text-[25px] font-bold text-gray-700">Sell Your Car On PakWheels and Get The Best Price</div>

        <div className='line bg-gray-300 h-[1px] w-60 '></div>

      </div>
      <div className="mb-16">

        <div className="flex justify-center gap-28 ">

          <div className="spans  mt-4 leading-[35px]">
            <div className="post text-[20px] font-bold text-blue-900  mt-12">
              Post Your Ad On PakWheels
            </div>
            <div>✔ Post your Ad for Free in 3 Easy Steps</div>
            <div>✔ Get Genuine Offers From Verified Buyers</div>
            <div>✔ Sell your car Fast at the Best Price</div>
            <button className='h-10 w-40 rounded bg-red-600 hover:bg-red-700 text-white mt-2 '>Post Your Ad</button>
          </div>

          <div className="flex flex-col  items-center mt-10 ml-6">
            <div className="line h-20 w-[2px] bg-gray-300 "></div>
            <div className="px-4 text-1g font-bold text-gray-700 my-2 ">OR</div>
            <div className="line w-[2px] bg-gray-300 h-20 "></div>
          </div>




          <div className="spans2  mt-4 leading-[35px] ml-16">
            <div className="post2 text-[20px] font-bold text-blue-900  mt-12 ">
              Try PakWheels Sell It For Me </div>
            <div>✔ Dedicated Sales Expert to Sell your Car </div>
            <div>✔ We Bargain for you and share the Best Offer</div>
            <div>✔ We ensure Safe & Secure Transaction
            </div>
            <button className='h-10 w-40 rounded bg-blue-600 hover:bg-blue-700 text-white mt-2'>Register Your Car</button>

          </div>
        </div>


      </div>

      <div className="main bg-gray-100  mxy-48 ">
        <div className="feature  mx-20 text-[20px] font-bold text-gray-600 ">
          Featured New Cars</div>
        <div className="seedha flex gap-[20px] mx-20 leading-[40px] text-sm">
          <div className="  font-bold underline decoration-blue-500  ">Popular</div>
          <div className="text-gray-700">Upcoming</div>
          <div className="text-gray-700">Newly Launched</div>

          

        </div>
        <main className="flex justify-center gap-8">
            <div className="flex-col items-center text-center bg-white shadow-md rounded-lg pl-10 w-[330px] h-64 transition hover:scale-105 mt-8 ">
          <Link href= "/corolla"><div><img src="/Corolla.webp" alt ="this is corolla" width={250} height={250} className="h-48 w-60"/></div></Link>
              <div className="text-sm text-blue-800 font-bold mr-10 font-sans">Toyota Corolla</div>
              <div className="text-xs text-green-700 mr-10">PKR 59.7-65.5 lac</div></div>

              <div className="flex-col items-center text-center bg-white shadow-md rounded-lg pl-10 w-[330px] h-64 transition hover:scale-105 mt-8 ">
          <Link href= "/alto"><div><img src="/Alto.webp" alt="this is alto" width={250} height={250} className="h-48 w-60"/></div></Link>
              <div className="text-sm text-blue-800 font-bold mr-10 font-sans">Suzuki Alto</div>
              <div className="text-xs text-green-700 mr-10">PKR 23-30.5 lac</div></div>

              <div className="flex-col items-center text-center bg-white shadow-md rounded-lg pl-10 w-[330px] h-64 transition hover:scale-105 mt-8 ">
          <Link href= "/swift"><div><img src="/Swift.webp" alt="this is swift" width={250} height={250} className="h-48 w-60"/></div></Link>
              <div className="text-sm text-blue-800 font-bold mr-10 font-sans">Suzuki Swift</div>
              <div className="text-xs text-green-700 mr-10">PKR 39.7-45.5 lac</div></div>
              
              <div className="flex-col items-center text-center bg-white shadow-md rounded-lg pl-10 w-[330px] h-64 transition hover:scale-105 mt-8 ">
          <Link href= "/civic"><div><img src="/Civic.webp" alt="this is civic" width={250} height={250} className="h-48 w-60"/></div></Link>
              <div className="text-sm text-blue-800 font-bold mr-10 font-sans">Honda Civic</div>
              <div className="text-xs text-green-700 mr-10">PKR 65.5-70.5 lac</div></div>
              
          
          </main>
          









        



      </div>
      <Footer/>

    </div>
  )
}
