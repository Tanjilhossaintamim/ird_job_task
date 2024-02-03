"use client";
import { setNavState } from "@/redux/slices/navigationSlice";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
const CategoryTitle = () => {
  const dispatch = useDispatch();
  const closeCategoryBar = () => {
    dispatch(setNavState());
  };
  return (
    <div className="h-14 w-full lg:rounded-t-2xl bg-color-green flex justify-between lg:justify-center items-center text-center">
      <p className="text-base text-white font-medium px-4 lg:px-0">
        Categories
      </p>
      <RxCross2
        onClick={closeCategoryBar}
        className="lg:hidden text-2xl text-white font-semibold cursor-pointer mr-3"
      />
    </div>
  );
};

export default CategoryTitle;
