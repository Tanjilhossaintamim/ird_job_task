import CategorySearchBox from "../CategorySearchBox/CategorySearchBox";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import CategoryCard from "../categoryCard/CategoryCard";
import CategoryList from "../categoryList/CategoryList";


const CategorySide = () => {
  return (
    <div className="lg:w-[450px] h-[84.5vh] bg-white rounded-2xl relative overflow-x-hidden">
      <CategoryTitle />
      {/* search box and others */}
      <div className=" py-3 relative w-full">
        <CategorySearchBox />
        {/* categories */}
        <CategoryList />
      </div>
    </div>
  );
};

export default CategorySide;
