import React from "react";
import Navbar from "./Navbar";
import Banner from "../assets/Banner.png";
import one from "../assets/home1.png";
import two from "../assets/home2.png";
import three from "../assets/home3.png";
import eyeleft from "../assets/eyeleft.png";
import eyeright from "../assets/eyeright.png";
const Home = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <Steps />
      <ThridSection />
      <Testmonials />
      <Numbers />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

const Hero = () => {
  return (
    <div
      className="relative h-screen w-screen bg-cover flex items-center px-10 bg-center text-white"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="  flex flex-col gap-4 items-end absolute bottom-20 right-20">
        <h1 className=" font-medium text-[65px] leading-[74px] text-right">
          Quick Car wash in <br />
          Hyderabad at your Doorstep
        </h1>
        <div className=" w-fit flex items-center justify-center text-center rounded-[10px] overflow-hidden">
          <button className="bg-[#D70006] text-white w-[80%] px-5 py-3  font-semibold overflow-hidden">
            SCHEDULE WASH
          </button>
          <button className="bg-black text-white text-center font-semibold flex items-center justify-center px-5 py-3 w-[20%] whitespace-nowrap ">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

const Steps = () => {
  return (
    <section className="flex flex-col items-center py-24 gap-10 bg-white">
      <h2 className=" text-[80px] leading-[70px]   tracking-tight font-normal text-center mb-6">
        Book our services in <br />{" "}
        <span className="text-[#F1002E]  text-[80px] leading-[90px]">
          3 Easy{" "}
        </span>
        Steps
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 max-w-5xl">
        {/* Step 1 */}
        <div className="bg-[#D70006] text-white rounded-[30px] overflow-hidden flex flex-col justify-between  shadow-lg text-center">
          <div className=" flex px-6 py-8    gap-2 ">
            <div className="text-[84px]  -mt-8 ">1</div>
            <div className=" flex flex-col">
              <h3 className="text-[20px] text-left  font-medium ">
                Signup/ Login{" "}
              </h3>
              <p className="text-sm text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="">
            <img src={one} alt="Schedule a Wash" className="rounded-lg" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-[#D70006] text-white rounded-[30px] overflow-hidden  flex flex-col justify-between shadow-lg text-center">
          <div className=" flex px-6 py-8    gap-2 ">
            <div className="text-[84px]  -mt-8 ">2</div>
            <div className=" flex flex-col">
              <h3 className="text-[20px] text-left  font-medium ">
                Fill Our Form
              </h3>
              <p className="text-sm text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="">
            <img src={two} alt="Schedule a Wash" className="rounded-lg" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-[#D70006] text-white rounded-[30px] overflow-hidden  flex flex-col justify-between shadow-lg text-center">
          <div className=" flex px-6 py-8    gap-2 ">
            <div className="text-[84px]  -mt-8 ">3</div>
            <div className=" flex flex-col">
              <h3 className="text-[20px] text-left  font-medium ">
                Schedule a Wash
              </h3>
              <p className="text-sm text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="  ">
            <img src={three} alt="Schedule a Wash" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ThridSection = () => {
  return (
    <div className=" bg-black   py-10     flex flex-col items-center justify-center">
      <div className=" flex  mt-10 items-center  justify-center">
        <img src={eyeleft} className="  w-1/3 h-full" alt="" />
        <img src={eyeright} className=" w-1/3 h-full" alt="" />
      </div>
      <div className=" text-center -mt-20">
        <h1 className=" text-[70px] text-white leading-[80px]">
          We get our own electricity and water <br />
          to ensure highest quality car wash <br />
          experience 
        </h1>
      </div>
      <div className=" w-1/5  mt-10 flex items-center justify-center text-center rounded-[2px] overflow-hidden">
        <button className="bg-[#D70006] text-white w-[80%] px-5 py-3  font-semibold overflow-hidden">
          SCHEDULE WASH
        </button>
        <button className="bg-white text-black text-center font-semibold flex items-center justify-center px-6 py-3 w-[20%] whitespace-nowrap ">
          +
        </button>
      </div>
    </div>
  );
};

const Testmonials = () => {
  return (
    <div className=" py-24 h-full flex flex-col items-center   gap-10 bg-[#ECEFF3] w-full">
      <h1 className=" text-[90px]">
        What our <span className=" text-[#F1002E]"> clients say</span>
      </h1>
      <div className="  w-[150rem]  items-center justify-center flex gap-2">
        <div className="  px-10 py-10 rounded-[30px]  flex flex-col  justify-between w-[28rem] h-[30rem]  bg-white">
          <div className="   flex flex-col gap-4">
            <h1 className=" text-[32px]">Quick and big Savings!</h1>
            <p className=" text-[20px]  opacity-80">
              Maxclean Diagnose My Issue feature is a game- changer. Identify
              problems in minutes and save both time and money. User-friendly
              and revolutionary.
            </p>
          </div>
          <div>
            <h1>TechCarGeek</h1>
            <p>12/10/2022</p>
          </div>
        </div>
        <div className="  px-10 py-10 rounded-[30px]  flex flex-col  justify-between w-[28rem] h-[30rem]  bg-white">
          <div className="   flex flex-col gap-4">
            <h1 className=" text-[32px]">Quick and big Savings!</h1>
            <p className=" text-[20px]  opacity-80">
              Maxclean Diagnose My Issue feature is a game- changer. Identify
              problems in minutes and save both time and money. User-friendly
              and revolutionary.
            </p>
          </div>
          <div>
            <h1>TechCarGeek</h1>
            <p>12/10/2022</p>
          </div>
        </div>
        <div className="  px-10 py-10 rounded-[30px]  flex flex-col  justify-between w-[28rem] h-[30rem]  bg-white">
          <div className="   flex flex-col gap-4">
            <h1 className=" text-[32px]">Quick and big Savings!</h1>
            <p className=" text-[20px]  opacity-80">
              Maxclean Diagnose My Issue feature is a game- changer. Identify
              problems in minutes and save both time and money. User-friendly
              and revolutionary.
            </p>
          </div>
          <div>
            <h1>TechCarGeek</h1>
            <p>12/10/2022</p>
          </div>
        </div>
        <div className="  px-10 py-10 rounded-[30px]  flex flex-col  justify-between w-[28rem] h-[30rem]  bg-white">
          <div className="   flex flex-col gap-4">
            <h1 className=" text-[32px]">Quick and big Savings!</h1>
            <p className=" text-[20px]  opacity-80">
              Maxclean Diagnose My Issue feature is a game- changer. Identify
              problems in minutes and save both time and money. User-friendly
              and revolutionary.
            </p>
          </div>
          <div>
            <h1>TechCarGeek</h1>
            <p>12/10/2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Numbers = () => {
  return (
    <>
      <div className=" items-center flex  py-20  flex-col justify-center  w-full text-white bg-[#D70006]">
        <h1 className="  text-[80px]">By the Numbers</h1>
        <div className=" w-full flex flex-col items-center gap-6 justify-center">
          <div className=" flex rounded-[30px]  items-center justify-center px-4 gap-10 bg-black  w-[80%]">
            <h1 className=" text-[90px]">2342</h1>
            <p className=" text-[46px] leading-[46px]">
              mobile app <br />
              installations
            </p>
          </div>
          <div className=" flex justify-around  gap-6  w-[80%]">
            <div className=" bg-black w-full   rounded-[30px]  text-center">
              <h1 className=" text-[90px]">1564</h1>
              <h2 className=" text-[20px] -mt-6  ">shop owners</h2>
            </div>
            <div className=" text-center rounded-[30px] bg-black w-full">
              <h1 className=" text-[90px]">1564</h1>
              <h2 className=" text-[20px] -mt-6">shop owners</h2>
            </div>
            <div className=" bg-black text-center rounded-[30px] w-full">
              <h1 className=" text-[90px]">1564</h1>
              <h2 className=" text-[20px] -mt-6 mb-4">shop owners</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
