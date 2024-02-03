"use client";
import { useSelector } from "react-redux";
import DuaCard from "../DuaCard/DuaCard";
import { useGetDoaQuery } from "@/redux/api/api";

const DoaCardList = () => {
  const { selectedCategory } = useSelector((state) => state.apiFeature);
  const { data:doas } = useGetDoaQuery(selectedCategory);
 
  return (
    <div className="mt-5 flex flex-col">
      {doas?.map((doa) => (
        <DuaCard key={doa.id} doa={doa} />
      ))}
    </div>
  );
};

export default DoaCardList;
