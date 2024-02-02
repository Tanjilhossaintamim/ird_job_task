import img1 from "@/assets/categoryLogo/duar_gurutto.svg";
import Image from "next/image";
const CategoryCard = () => {
  return (
    <div className="h-20  px-2 flex items-center space-x-2 w-full relative cursor-pointer hover:bg-[#E8F0F5] transition-colors duration-150 rounded-xl py-2">
      <div>
        <div className="bg-[#F7F8FA] h-14 w-14 flex items-center justify-center rounded-xl">
          <Image src={img1} alt="img" height={40} width={40} />
        </div>
      </div>
      <div className="w-full">
        <h1 className="font-semibold text-color-text">Dua Importance</h1>
        <span className="text-xs text-[#BCC1C4]">Subcategory: 11</span>
      </div>
      <div className="w-10 text-color-text px-2 border-l flex flex-col flex-wrap items-center justify-center text-xs ">
        <span className="font-semibold text-sm">21</span>
        <span className="text-xs text-[#BCC1C4]">Duas</span>
      </div>
    </div>
  );
};

export default CategoryCard;
