import logo from "../assets/logo-text.png";
import Devider from "./Devider";

const Footer = () => {
  return (
    <div className="container max-w-280 m-auto mt-20 ">
      <div className="flex gap-30 justify-between items-center mb-10">
        <div className="flex flex-col gap-3">
          <img src={logo} alt="" className="w-40"/>
          <p className="text-[17px] font-light">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="links flex gap-5 font-medium">
            <a href="#">Github</a>
            <a href="#">Twitter</a>
            <a href="#">Linkedin</a>
          </div>
        </div>
        <div className="flex flex-col gap-1">
            <h2 className="text-[18px] font-medium mb-2">PRODUCT</h2>
            <h3 className="font-light">Home</h3>
            <h3 className="font-light">Technologies</h3>
            <h3 className="font-light">Projects</h3>
        </div>
        <div className="flex flex-col gap-1">
            <h2 className="text-[18px] font-medium mb-2">COMPANY</h2>
            <h3 className="font-light">About</h3>
            <h3 className="font-light">Contact</h3>
            <h3 className="font-light">Careers</h3>
        </div>
        <div className="flex flex-col gap-1">
            <h2 className="text-[18px] font-medium mb-2">LEGAL</h2>
            <h3 className="font-light">Privacy Policy</h3>
            <h3 className="font-light">Terms Of Service</h3>
            
        </div>
      </div>
     <Devider/>
      <div className="flex justify-between mt-7 font-light pb-10">
        <div>
            <h2>© 2026 Dev Stack. All rights reserved.</h2>
        </div>
        <div className="flex gap-5">
           <h2>Privacy</h2> 
           <h2>Terms</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
