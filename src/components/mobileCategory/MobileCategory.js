import { useSelector } from "react-redux";
import CategorySearchBox from "../CategorySearchBox/CategorySearchBox";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import CategoryList from "../categoryList/CategoryList";

const MobileCategory = () => {
  const { navopen } = useSelector((state) => state.navigation);
  return (
    <div
      className={`${
        navopen ? "w-full left-0" : "w-0 overflow-hidden -left-10"
      } absolute top-0  z-50 h-screen bg-white lg:rounded-2xl transition-all duration-300 overflow-x-hidden lg:hidden`}
    >
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

export default MobileCategory;
