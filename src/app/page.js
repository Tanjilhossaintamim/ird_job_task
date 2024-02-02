import CategorySide from "@/components/categoriesSide/CategorySide";
import LeftSide from "@/components/leftside/LeftSide";
import Navbar from "@/components/navbar/Navbar";
import manimg from "@/assets/categoryicon/profile.svg";
import Image from "next/image";
import LanguageBox from "@/components/LanguageBox/LanguageBox";
import languageSvg from "@/assets/categoryicon/language.svg";
import genarelsvg from "@/assets/categoryicon/general.svg";
import fontSvg from "@/assets/categoryicon/font.svg";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import DuaCard from "@/components/DuaCard/DuaCard";

export default function Home() {
  return (
    <section className="flex p-10 fixed inset-0">
      <div className="bg-white w-[100px] h-[845px] px-5 rounded-3xl">
        {/* left part */}
        <LeftSide />
      </div>
      <div className="bg-color-body w-full ml-4">
        {/* navbar */}
        <Navbar />
        <div className="flex mt-3 space-x-5 mr-4">
          <CategorySide />
          <div className="overflow-auto h-[1000px] w-full mr-4 relative">
            <SectionTitle />
            {/* Dua Card */}
            <div className="mt-5">
              <DuaCard />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[400px] h-[770px] ">
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
    </section>
  );
}
