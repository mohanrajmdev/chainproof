import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { FaMoneyBillWave } from 'react-icons/fa';

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-center items-center white-glassmorphism p-4 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-24 h-24 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-1 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services pt-[60px]">
    <div className="flex mf:flex-row flex-col items-center justify-center md:px-20 md:py-7 p-12">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-5xl sm:text-8xl text-white text-gradient py-8">
          Services that we
          <br />
          continue to improve
        </h1>
        <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-3xl sm:text-3xl">
          The best choice for Authenticate and Validate your digital assets, with the
          various super friendly services we offer...!
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center space-y-6">
        
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security Guarantee"
          icon={<BsShieldFillCheck fontSize={28} className="text-white" />}
          subtitle=" Your data's safety is our priority. We ensure strict privacy, maintaining data integrity and top-notch product quality. "
        />

        <ServiceCard
          color="bg-[#8945F8]"
          title="Global Reach"
          icon={<BiSearchAlt fontSize={28} className="text-white" />}
          subtitle=" We are dedicated to maintaining the utmost security, respecting privacy, and delivering top-notch quality on a global scale."
        />

        <ServiceCard
          color="bg-[#32A852]"
          title="Unbeatable Affordability"
          icon={<FaMoneyBillWave fontSize={28} className="text-white" />}
          subtitle="We prioritize your budget without compromising quality. Our services are designed to offer exceptional value, ensuring accessibility, reliability, and cost-effectiveness."
        />

        <ServiceCard
          color="bg-[#F84550]"
          title="Enduring Lifetime Benefits"
          icon={<RiHeart2Fill fontSize={28} className="text-white" />}
          subtitle="Our commitment goes beyond the present moment. Count on us for solutions that provide sustained value, quality, and reliability throughout your journey."
        />

      </div>
    </div>
  </div>
);

export default Services;
