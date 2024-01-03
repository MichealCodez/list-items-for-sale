const Button = ({
  label,
  iconLink,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full  ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : "border-coral-red text-white bg-coral-red"
      } hover:scale-[1.1]`}
    >
      {label}
      {iconLink && (
        <img
          src={iconLink}
          alt="Button Icon"
          className="rounded-full ml-2 h-5 w-5"
        />
      )}
    </button>
  );
};

export default Button;
