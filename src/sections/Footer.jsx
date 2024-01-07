import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { socialMedia, footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="Logo" width={150} height={45} />
          </a>
          <p className="capitalize mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            get shoes ready for the new term at your nearest nike store. find
            your perfect size in stor. Get rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((value) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:scale-[1.2] cursor-pointer">
                <img src={value.src} alt={value.alt} width={25} height={25} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((value) => (
            <div key={value}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {value.title}
              </h4>
              <ul>
                {value.links.map((link) => (
                  <li
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                    key={link.name}
                  >
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-25 max-sm:flex-col max-sm:items-center mt-20">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="Copy Right"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All Rights Reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
