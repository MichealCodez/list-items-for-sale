import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <div className="flex justify-center flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl  capitalize font-bold mt-10 lg:max-w-lg">
          <span className="text-coral-red">special</span> offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text capitalize">
          embark on a shopping journey that redefines your experience with
          unbeatable deals. from premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text capitalize">
          navigate a realm of possibilities designed to fufill your unique
          desire, surpassing the loftiest expectations. your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconLink={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
