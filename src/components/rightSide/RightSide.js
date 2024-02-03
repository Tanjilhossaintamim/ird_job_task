import LanguageBox from "../LanguageBox/LanguageBox";
import manimg from "@/assets/categoryicon/profile.svg";
import Image from "next/image";
import languageSvg from "@/assets/categoryicon/language.svg";
import genarelsvg from "@/assets/categoryicon/general.svg";
import fontSvg from "@/assets/categoryicon/font.svg";

const RightSide = () => {
  return (
    <div className="w-[400px] h-[770px] hidden lg:block ">
      {/* right side */}

      <div className="flex justify-end pt-1 h-16 ">
        <Image
          src={manimg}
          alt="man"
          width={50}
          height={50}
          className="justify-end"
        />
      </div>

      <div className="h-full bg-white rounded-2xl mt-3 px-4">
        <h1 className="text-center text-xl font-normal text-[#393939] py-10">
          Settings
        </h1>
        <LanguageBox text={"Language Settings"} image={languageSvg} />
        <LanguageBox text={"General Settings"} image={genarelsvg} />
        <LanguageBox text={"Font Settings"} image={fontSvg} />
        <LanguageBox text={"Appearance Settings"} image={fontSvg} />
      </div>
    </div>
  );
};

export default RightSide;
