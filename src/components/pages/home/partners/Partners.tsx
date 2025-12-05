import Image from "next/image";
import React from "react";
import logo1 from "@/assets/svg/partner1.svg";
import logo2 from "@/assets/svg/partner2.svg";
import logo3 from "@/assets/svg/partner3.svg";
import logo4 from "@/assets/svg/partner4.svg";
import logo5 from "@/assets/svg/partner1.svg";

const data = [logo1, logo2, logo3, logo4, logo5, logo3];

const Partners = () => {
  return (
    <section>
      <div className="overflow-hidden">
        <div className="flex bg-[#1D49C5] h-[88px] items-center">
          <div className="flex animate-scroll-left">
            {[...data, ...data].map((icon, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center   px-10"
              >
                <div className=" relative w-[180px] h-[80px]">
                  <Image
                    fill
                    src={icon}
                    alt="logo"
                    objectFit="contain"
                    className="max-w-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
