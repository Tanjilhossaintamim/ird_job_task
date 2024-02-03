"use client";
import { useSelector } from "react-redux";
import DuaCard from "../DuaCard/DuaCard";
import { useGetDoaQuery } from "@/redux/api/api";
import CardSkeleton from "../skeleton/cardSkeleton/CardSkeleton";
import { useEffect } from "react";

const DoaCardList = () => {
  const { selectedCategory } = useSelector((state) => state.apiFeature);
  const {
    data: doas,
    isLoading,
    isFetching,
  } = useGetDoaQuery(selectedCategory);

  if (isLoading || isFetching) {
    return (
      <div className="mt-5 flex flex-col">
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );
  }

  return (
    <div className="mt-5 flex flex-col">
      {doas?.map((doa) => (
        <DuaCard key={doa.id} doa={doa} />
      ))}
    </div>
  );
};

export default DoaCardList;
