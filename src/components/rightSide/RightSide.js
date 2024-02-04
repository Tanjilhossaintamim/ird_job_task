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
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image
            src={manimg}
            alt="man"
            width={50}
            height={50}
            className="justify-end"
          />
          <svg
            className="ml-2 mr-2"
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z"
              fill="#868686"
            ></path>
          </svg>
        </div>
        
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
