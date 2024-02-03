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
import DoaCardList from "@/components/doaCardList/DoaCardList";
import styles from "./ScrollBar.module.css";

export default function Home() {
  return (
    <section className="flex lg:p-10 lg:fixed lg:inset-0">
      <div className="bg-white w-[100px] h-[845px] px-5 rounded-3xl hidden lg:block">
        {/* left part */}
        <LeftSide />
      </div>
      <div className="bg-color-body w-full ml-4">
        {/* navbar */}
        <Navbar />
        <div className="flex mt-3 lg:space-x-5 mr-4">
          <CategorySide />
          <div className={`lg:overflow-auto h-[770px] rounded-b-3xl w-full lg:mr-4 relative ${styles.middle}`}>
            <SectionTitle />
            {/* Dua Card */}
            <DoaCardList />
          </div>
        </div>
      </div>
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
    </section>
  );
}
