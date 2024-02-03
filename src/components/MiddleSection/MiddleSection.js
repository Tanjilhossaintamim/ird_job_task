import DoaCardList from "../doaCardList/DoaCardList";
import SectionTitle from "../sectionTitle/SectionTitle";
import styles from "@/app/ScrollBar.module.css";
const MiddleSection = () => {
  return (
    <div
      className={`lg:overflow-auto h-[770px] rounded-b-3xl w-full lg:mr-4 relative ${styles.middle}`}
    >
      <SectionTitle />
      {/* Dua Card */}
      <DoaCardList />
    </div>
  );
};

export default MiddleSection;
