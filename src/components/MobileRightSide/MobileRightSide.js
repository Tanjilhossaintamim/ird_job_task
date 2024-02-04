import LanguageBox from "../LanguageBox/LanguageBox";
import languageSvg from "@/assets/categoryicon/language.svg";
import genarelsvg from "@/assets/categoryicon/general.svg";
import fontSvg from "@/assets/categoryicon/font.svg";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setSettingMenuState } from "@/redux/slices/navigationSlice";

const MobileRightSide = () => {
  const { settingOpen } = useSelector((state) => state.navigation);
  const dispatch = useDispatch();

  const closeMenu = () => {
    dispatch(setSettingMenuState());
  };
  return (
    <div
      className={`bg-white  absolute top-0 bottom-0 z-50  h-screen ${
        settingOpen ? "right-0 w-full px-4" : "-right-10 w-0 overflow-hidden"
      } transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-center text-xl font-normal text-[#393939] py-10">
          Settings
        </h1>
        <RxCross2
          className="lg:hidden text-2xl text-black font-semibold cursor-pointer mr-3"
          onClick={closeMenu}
        />
      </div>

      <LanguageBox text={"Language Settings"} image={languageSvg} />
      <LanguageBox text={"General Settings"} image={genarelsvg} />
      <LanguageBox text={"Font Settings"} image={fontSvg} />
      <LanguageBox text={"Appearance Settings"} image={fontSvg} />
    </div>
  );
};

export default MobileRightSide;
