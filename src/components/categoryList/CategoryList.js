"use client";
import CategoryCard from "../categoryCard/CategoryCard";
import styles from "../categoriesSide/Category.module.css";
import { useGetCategoriesQuery } from "@/redux/api/api";


const CategoryList = () => {
  const { data } = useGetCategoriesQuery();
 

  return (
    <div
      className={`overflow-y-auto h-[600px] relative px-2 mt-2 flex flex-col space-y-5 scroll-m-0 ${styles.category}`}
      
    >
      {data?.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
