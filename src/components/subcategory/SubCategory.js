"use client";
// import { StateContext } from "@/context/StateProvider";
import Image from "next/image";
import { useContext } from "react";
import img1 from "../../assets/categoryicon/alldua.svg";
import SubCategory from "./SubCategory";

export default function CategoryCard({ category, ind }) {
  //   const { cat_id, cat_name_en, no_of_subcat, no_of_dua } = category;
  // console.log(subcategory)
  //   const { selectedCategory, setSelectedCategory } = useContext(StateContext)

  const handleToggle = () => {
    setSelectedCategory(ind);
  };
  //   ${
  //     // selectedCategory === ind ? "h-[auto]" : "h-20"
  // }
  return (
    <div className={`transition-height ease-in-out duration-1000 my-2 `}>
      <div
        onClick={handleToggle}
        className="grid grid-cols-6 p-2 cursor-pointer rounded-md mx-2 hover:bg-[#e8f0f5]"
      >
        <div className="col-span-5 flex items-center gap-2">
          <div className="p-3 rounded-md bg-[#f7f8fa]">
            <Image src={img1} alt="image" />
          </div>
          <div className="flex flex-col">
            <p>kdfjaskdfjas</p>
            <p className="text-xs">SubCategory: 21</p>
          </div>
        </div>

        <div className="border-l-2 col-span-1 px-1 text-center mt-2">
          <p>{21}</p>
          <p className="text-[#989b9c]">Dua</p>
        </div>
      </div>

      {/* {selectedCategory === ind && <SubCategory catId={cat_id} />} */}
    </div>
  );
}
