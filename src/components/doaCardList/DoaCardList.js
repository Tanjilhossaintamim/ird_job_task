"use client";
import { useSelector } from "react-redux";
import DuaCard from "../DuaCard/DuaCard";
import { useGetDoaQuery } from "@/redux/api/api";
import CardSkeleton from "../skeleton/cardSkeleton/CardSkeleton";

const DoaCardList = () => {
  const { selectedCategory } = useSelector((state) => state.apiFeature);
  const { data: doas, isLoading } = useGetDoaQuery(selectedCategory);

  if (isLoading) {
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
