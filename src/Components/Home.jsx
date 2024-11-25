import React from 'react'
import Navbar from './Navbar'
import Banner from '../assets/Banner.png'
const Home = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col items-center justify-center">
    <Navbar />
    <Hero />
    <Steps />
    {/* <Footer /> */}
  </div>
  )
}

export default Home





const Hero = () => {
  return (
    <div
      className="relative h-screen w-screen bg-cover flex items-center px-10 bg-center text-white"
      style={{ backgroundImage: `url(${Banner})` }}
    >
       <div   className='  flex flex-col gap-4 items-end absolute bottom-20 right-20'>
          <h1 className=' font-medium text-[65px] leading-[74px] text-right'>Quick Car wash in <br />
          Hyderabad at your Doorstep</h1>
          <div className=' w-fit flex items-center justify-center text-center rounded-[10px] overflow-hidden'>
              <button className="bg-[#D70006] text-white w-[80%] px-5 py-3  font-semibold overflow-hidden">SCHEDULE WASH</button>
              <button className="bg-black text-white text-center font-semibold flex items-center justify-center px-5 py-3 w-[20%] whitespace-nowrap ">+</button>
          </div>
       </div>
    </div>
  );
};


const Steps = () => {
  return (
    <section className="flex flex-col items-center py-12 bg-white">
      <h2 className=" text-[80px] leading-[90px] font-normal text-center mb-6">
        Book our services in <br /> <span className="text-[#F1002E]  text-[80px] leading-[90px]">3 Easy </span>Steps
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 max-w-5xl">
        {/* Step 1 */}
        <div className="bg-[#D70006] text-white rounded-lg p-6 shadow-lg text-center">
          <div className="text-4xl font-bold mb-4">1</div>
          <h3 className="text-lg font-semibold mb-2">Signup/Login</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <div className="mt-4">
            <img
              src="path/to/image1.jpg"
              alt="Signup/Login"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-[#D70006] text-white rounded-lg p-6 shadow-lg text-center">
          <div className=' flex'>

          <div className="text-4xl font-bold mb-4">2</div>
          <div>

          <h3 className="text-lg font-semibold mb-2">Fill Our Form</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          </div>
          </div>
          <div className="mt-4">
            <img
              src="path/to/image2.jpg"
              alt="Fill Our Form"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-[#D70006] text-white rounded-lg p-6 shadow-lg text-center">
          <div className="text-4xl font-bold mb-4">3</div>
          <h3 className="text-lg font-semibold mb-2">Schedule a Wash</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <div className="mt-4">
            <img
              src="path/to/image3.jpg"
              alt="Schedule a Wash"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};