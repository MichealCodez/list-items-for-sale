import { footerLogo } from "../assets/images";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="Logo" width={150} height={46} />
          </a>
          <p className="capitalize info-text">
            get shoes ready for the new term at your nearest nike store. find
            your perfect size in stor. Get rewards
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
