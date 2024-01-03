const ItemCard = ({ imgLink, bigItemimg, changeBigItemImg }) => {
  const handleClick = () => {
    if (bigItemimg !== imgLink.bigShoe) {
      changeBigItemImg(imgLink.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigItemimg === imgLink.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      }`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgLink.thumbnail}
          alt="Items"
          width={125}
          height={100}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ItemCard;
