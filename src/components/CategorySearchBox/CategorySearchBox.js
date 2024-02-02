import { IoIosSearch } from "react-icons/io";

const CategorySearchBox = () => {
  return (
    <div className=" bg-white h-[52px] border-[0.5px] border-[#E2E2E2] flex items-center  rounded-lg focus-within:border-color-green mx-2">
      <span className="bg-transparent px-[15px] py-[10px] flex items-center justify-center rounded-md cursor-pointer">
        <IoIosSearch className="text-[#868686] text-2xl" />
      </span>
      <input
        type="text"
        placeholder="Search by Categories"
        className="outline-none border-none py-1 w-2/3 text-[#393939] px-2"
      />
    </div>
  );
};

export default CategorySearchBox;
