import CategorySearchBox from "../CategorySearchBox/CategorySearchBox";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import CategoryCard from "../categoryCard/CategoryCard";
import styles from "./Category.module.css";

const CategorySide = () => {
  return (
    <div className="lg:w-450px] h-[84.5vh] bg-white rounded-2xl relative">
      <CategoryTitle />
      {/* search box and others */}
      <div className=" py-3 relative w-full">
        <CategorySearchBox />
        {/* categories */}
        <div className={`overflow-y-auto h-[600px] relative px-2 mt-2 flex flex-col space-y-5 scroll-m-0 ${styles.category}`}>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </div>
  );
};

export default CategorySide;
