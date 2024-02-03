"use client";
import CategoryCard from "../categoryCard/CategoryCard";
import styles from "../categoriesSide/Category.module.css";
import { useGetCategoriesQuery } from "@/redux/api/api";
import CategoryCardSkeleton from "../skeleton/categoryCardSkeleton/CategoryCardSkeleton";

const CategoryList = () => {
  const { data, isLoading } = useGetCategoriesQuery();
  let content;
  if (isLoading) {
    content = (
      <>
        <CategoryCardSkeleton />
        <CategoryCardSkeleton />
        <CategoryCardSkeleton />
        <CategoryCardSkeleton />
        <CategoryCardSkeleton />
        <CategoryCardSkeleton />
        <CategoryCardSkeleton />
        
      </>
    );
  }
  if (data?.length > 0) {
    content = data?.map((category) => (
      <CategoryCard key={category.id} category={category} />
    ));
  }

  return (
    <div
      className={`overflow-y-auto h-[600px] relative px-2 mt-2 flex flex-col space-y-5 scroll-m-0 ${styles.category}`}
    >
      {content}
    </div>
  );
};

export default CategoryList;
