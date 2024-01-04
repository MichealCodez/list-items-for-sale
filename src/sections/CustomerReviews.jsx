import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <div className="max-container">
      <h3 className="text-center font-palanquin text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text text-center capitalize max-w-lg m-auto mt-4">
        hear genuine stories from our satisfied customers about their
        exceptional experience with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((value) => (
          <ReviewCard key={value.customerName} {...value} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
