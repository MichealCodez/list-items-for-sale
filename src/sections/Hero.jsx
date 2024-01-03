import Button from "../components/Button";
import ItemCard from "../components/ItemCard";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import { useState } from "react";

const Hero = () => {
  const [bigItemimg, setBigitemImg] = useState(bigShoe1);
  return (
    <div className="flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 capitalize">
        <p className="font-montserrat text-xl text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold mt-10">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The new arrival
          </span>
          <br />
          <span className="whitespace-nowrap">
            <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
          </span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          discover stylish nike arrivals, quality comfort, and innovation for
          you active life.
        </p>
        <Button label="Shop Now" iconLink={arrowRight} />
        <div className="flex justify-start items-start sm:flex-wrap w-full mt-20 gap-16">
          {statistics.map((value) => (
            <div key={value.label}>
              <p className="text-4xl font-palanquin font-bold">{value.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {value.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigItemimg}
          alt="Shoes"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((value) => (
            <div key={value}>
              <ItemCard
                imgLink={value}
                changeBigItemImg={(value) => setBigitemImg(value)}
                bigItemimg={bigItemimg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
