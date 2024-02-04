"use client";
import { IoMdMenu, IoMdSettings } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import MobileCategory from "../mobileCategory/MobileCategory";
import {
  setNavState,
  setSettingMenuState,
} from "@/redux/slices/navigationSlice";
import MobileRightSide from "../MobileRightSide/MobileRightSide";

const SecondNav = () => {
  const { selectedCategoryName } = useSelector((state) => state.apiFeature);
  const dispatch = useDispatch();
  const openCategoryBar = () => {
    dispatch(setNavState());
  };
  const openSettingMenu = () => {
    dispatch(setSettingMenuState());
  };
  return (
    <div className="lg:h-14 py-4 px-7 bg-white w-[97.5%] rounded-xl leading-[25px] text-base text-[#4E4E4E] lg:hidden flex items-center justify-between overflow-x-hidden">
      <div className="flex items-center">
        <span className="font-normal " onClick={openCategoryBar}>
          <IoMdMenu className="text-2xl mr-4" />
        </span>{" "}
        {selectedCategoryName}
      </div>
      <div className="md:hidden">
        <IoMdSettings
          className="text-2xl cursor-pointer"
          onClick={openSettingMenu}
        />
      </div>
      <MobileCategory />
      <MobileRightSide />
    </div>
  );
};

export default SecondNav;
