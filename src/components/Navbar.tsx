import logo from "../assets/logo-text.png";
const Navbar = () => {
  return (
    <div className="max-w-280 m-auto flex justify-between items-center my-3">
      <div>
        <img src={logo} alt="nav-logo" />
      </div>
      <div>
        <ul className="flex gap-10 text-[17px] cursor-pointer">
          <li className="text-[#DB2777]">Home</li>
          <li className="cursor-pointer">Technologies</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
      <div className="flex gap-5">
        <button className="cursor-pointer">Sign In</button>
        <button className="px-4 py-2 border rounded-full bg-[#D91B7E] text-white font-medium cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
