const Button = ({ label, iconLink }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
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
