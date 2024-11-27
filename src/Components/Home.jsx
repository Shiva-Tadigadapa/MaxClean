import React from "react";
import Navbar from "./NavBar";
import Banner from "../assets/Banner.png";
import one from "../assets/home1.png";
import two from "../assets/home2.png";
import three from "../assets/home3.png";
import eyeleft from "../assets/eyeleft.png";
import eyeright from "../assets/eyeright.png";
import qr from "../assets/qr.png";
import app from "../assets/app.png";
import goo from "../assets/goo.png";
import dots from "../assets/dots.png";
import logo from "../assets/logo.png";
import x from "../assets/x.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import git from "../assets/git.png";
import star from "../assets/star.png";
import { useEffect, useState } from "react";
const Home = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <Steps />
      <ThridSection />
      <Testmonials />
      <Numbers />
      <Faq />
      <Footer />
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
      <div className="  px-10 py-10 rounded-[30px]  flex flex-col  justify-between w-[24rem] h-[32rem]  bg-white">


          <div className="   flex flex-col gap-4">
          <div className=" flex">
            <img src={star} className=" w-6" alt="" />
            <img src={star} className=" w-6" alt="" />
            <img src={star} className=" w-6" alt="" />
            <img src={star} className=" w-6" alt="" />
            <img src={star} className=" w-6" alt="" />
          </div>
            <h1 className=" text-[28px]">Quick and big Savings!</h1>
            <p className=" text-lg  opacity-80">
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
        <div className="  px-10 py-10 rounded-[30px]  flex flex-col  justify-between w-[24rem] h-[32rem]  bg-white">

          <div className="   flex flex-col gap-4">
          <div className=" flex">
            <img src={star} className=" w-6" alt="" />
            <img src={star} className=" w-6" alt="" />
            <img src={star} className=" w-6" alt="" />
            <img src={star} className=" w-6" alt="" />
            <img src={star} className=" w-6" alt="" />
          </div>
            <h1 className=" text-[28px]">Quick and big Savings!</h1>
            <p className=" text-lg  opacity-80">
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
        <div className="  px-10 py-10 rounded-[30px]  flex flex-col  justify-between w-[24rem] h-[32rem]  bg-white">

          <div className="   flex flex-col gap-4">
          <div className=" flex">
            <img src={star} className=" w-6" alt="" />
            <img src={star} className=" w-6" alt="" />
            <img src={star} className=" w-6" alt="" />
            <img src={star} className=" w-6" alt="" />
            <img src={star} className=" w-6" alt="" />
          </div>
            <h1 className=" text-[28px]">Quick and big Savings!</h1>
            <p className=" text-lg  opacity-80">
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
        <div className="  px-10 py-10 rounded-[30px]  flex flex-col  justify-between w-[24rem] h-[32rem]  bg-white">
          <div className="   flex flex-col gap-4">
          <div className=" flex">
            <img src={star} className=" w-6" alt="" />
            <img src={star} className=" w-6" alt="" />
            <img src={star} className=" w-6" alt="" />
            <img src={star} className=" w-6" alt="" />
            <img src={star} className=" w-6" alt="" />
          </div>
            <h1 className="  text-[28px]">Quick and big Savings!</h1>
            <p className="  text-lg  opacity-80">
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
      <div className=" items-center flex  py-40  gap-20 flex-col justify-center  w-full text-white bg-[#D70006]">
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

const Faq = () => {
  const faqs = [
    {
      question: "How can I get the best deal on car services for my vehicle?",
      answer:
        "You can check for offers and promotions on the Maxclean website or app.",
    },
    {
      question:
        "Will I know the cost upfront before booking a service with Maxclean?",
      answer:
        "Yes, Maxclean provides a detailed estimate before confirming your booking.",
    },
    {
      question:
        "How quickly can I diagnose an unknown issue with my car using Maxclean?",
      answer:
        "Maxclean offers quick diagnostics through its app and website for faster assistance.",
    },
    {
      question: "Can I request repairs through the Maxclean website?",
      answer:
        "Yes, you can schedule repairs directly through the Maxclean website or app.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 px-4 flex  flex-col sm:px-10 md:px-20     items-center gap-4 lg:px-40">
      <h1 className="text-[50px] sm:text-[60px] md:text-[90px] lg:text-[90px] font-normal text-center">
        Frequently asked <span className="text-[#FF0000]">Questions</span>
      </h1>
      <div className="mt-10 space-y-8 px-32">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300/50 pb-4 cursor-pointer"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-[22px]  font-medium">{faq.question}</h2>
              <button className="text-2xl font-bold">
                {openIndex === index ? "-" : "+"}
              </button>
            </div>
            {openIndex === index && (
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-12  flex border   border-gray-300/20  rounded-md  w-[80%]  px-4   py-4 items-center  justify-between   ">
        <p className="text-black ">
          Can't find what you're looking for? <br />
          Contact us here:
        </p>
        <a
          href="tel:+919876543210"
          className="text-[#FF0000] border   rounded-lg px-8 py-2 font-bold text-lg"
        >
          +91 9876543210
        </a>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className=" text-white w-full pt-8">
      {/* QR Code and Download Section */}
      <div className="text-center relative    py-32  bg-[#D70006]">
        {/* <img src={dots} alt="Dots" className="w-full   " /> */}
        <div className="flex justify-center mb-4">
          <img src={qr} alt="QR Code" className="w-36 rounded-lg h-36" />
        </div>
        <h2 className="text-[90px] font-normal mb-4 leading-[90px]">
          Download today, <br /> use as needed!
        </h2>
        <div className="flex mt-10 justify-center gap-4">
          <button className="bg-black text-[32px] font-normal justify-center text-white px-6 py-2 rounded-[16px] flex items-center">
            <img src={app} alt="App Store" className="h-8 mr-2" />
            App Store
          </button>
          <button className="bg-black text-[32px] font-normal justify-center text-white px-6 py-2 rounded-[16px] flex items-center">
            <img src={goo} alt="Google Play" className="h-6 mr-2" />
            Google Play
          </button>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-black flex flex-col  gap-8 items-center   py-16">
        <img src={logo} className=" w-56" alt="" />
        <div className="container mx-auto text-center md:flex  md:justify-between md:items-start">
          <div className="mb-4 md:mb-0">
            <h3 className="text-[24px] text-left font-bold text-[#D70006]">
              CALL US ANYTIME
            </h3>
            <p className="text-gray-400 text-lg font-medium  text-left">
              +91-8179004144
            </p>
            <h3 className="text-[24px] font-bold text-[#D70006] text-left mt-4">
              VISIT OUR LOCATION
            </h3>
            <p className="text-gray-400 text-lg font-medium  text-left">
              Hyderabad, India
            </p>
          </div>
          <div className="mb-4 md:mb-0  flex   flex-col   items-center text-center">
            <div className=" text-white/70 flex gap-20  items-start justify-center text-[16px] mt-2">
              <div className="   items-start flex-col flex gap-2">
                <h1 className=" cursor-pointer">Privacy Policy</h1>
                <h1 className=" cursor-pointer">Terms of Service</h1>
              </div>
              <div className=" flex  flex-col items-start gap-2">
                <h1 className=" cursor-pointer">Shop Owners</h1>
                <h1 className=" cursor-pointer">Licences</h1>
              </div>
              <div className="  flex flex-col  gap-2 items-start">
                <h1 className=" cursor-pointer">Changelog</h1>
                <h1 className=" cursor-pointer">Schedule Wash</h1>
              </div>
            </div>
          </div>
          <div>
            <div className=" w-fit flex  items-center justify-center text-center rounded-[10px] overflow-hidden">
              <button className="bg-[#D7000680]  text-white text-[18px] w-[80%] px-5 py-3  font-semibold overflow-hidden">
                SCHEDULE WASH
              </button>
              <button className="bg-white text-black text-[18px] h-fit   text-center font-semibold flex items-center justify-center px-5 py-3 w-[20%] whitespace-nowrap ">
                +
              </button>
            </div>
            <div className="flex justify-end items-center  mt-8 md:mt-6 gap-6">
              <img src={x} className=" w-5 h-full" alt="" />
              <img src={fb} alt="" className=" w-3  h-full" />
              <img src={insta} alt="" className=" w-5 h-full" />
              <img src={git} alt="" className=" w-5  h-full" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
