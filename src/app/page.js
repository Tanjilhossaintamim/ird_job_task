import CategorySide from "@/components/categoriesSide/CategorySide";
import LeftSide from "@/components/leftside/LeftSide";
import Navbar from "@/components/navbar/Navbar";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import DoaCardList from "@/components/doaCardList/DoaCardList";
import styles from "./ScrollBar.module.css";
import SecondNav from "@/components/SecondNav/SecondNav";
import RightSide from "@/components/rightSide/RightSide";

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
        <SecondNav />
        <div className="flex mt-3 lg:space-x-5 mr-4">
          <CategorySide />
          <div
            className={`lg:overflow-auto h-[770px] rounded-b-3xl w-full lg:mr-4 relative ${styles.middle}`}
          >
            <SectionTitle />
            {/* Dua Card */}
            <DoaCardList />
          </div>
        </div>
      </div>
      {/* right side */}
      <RightSide />
    </section>
  );
}
