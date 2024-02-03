import duaTitleImg from "@/assets/categoryicon/duacard.svg";
import Image from "next/image";

const DuaTitle = ({text}) => {
  return (
    <div className="flex items-center space-x-3">
      <Image src={duaTitleImg} width={40} height={40} alt="img" />
      <span className="text-[#4BA45B] font-medium text-base">
        1. {text}
      </span>
    </div>
  );
};

export default DuaTitle;
