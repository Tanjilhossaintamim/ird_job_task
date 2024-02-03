import { IoIosSearch } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className="sticky top-0 h-16 hidden lg:block">
      <div className="h-16 flex items-center justify-between px-2">
        <div className="text-2xl  text-[#393939]">Duas Page</div>
        <div className="px-1 bg-white h-[52px] border-[0.5px] border-[#E2E2E2] flex items-center justify-between rounded-lg">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="outline-none border-none py-1 text-[#393939] px-2"
          />
          <span className="bg-[#F3F4F6] px-[15px] py-[10px] flex items-center justify-center rounded-md cursor-pointer">
            <IoIosSearch className="text-[#868686] text-lg" />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
