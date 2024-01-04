import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p>{feedback}</p>
      <div>
        <img
          src={star}
          alt="Star Ratings"
          width={25}
          height={25}
          className="object-contain m-0"
        />
        <p>({rating})</p>
      </div>
    </div>
  );
};

export default ReviewCard;
