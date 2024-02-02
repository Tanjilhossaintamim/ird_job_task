
import Image from "next/image";
const LanguageBox = ({image,text}) => {
  return (
    <div className="h-16 px-3 rounded-md bg-[#F7F8FA] border border-gray-50 flex items-center mb-3">
      <div className="w-11 h-11 rounded-full bg-[#E8F0F5] flex items-center justify-center p-1">
        <Image src={image} alt="img" width={25} height={25} />
      </div>
      <h1 className="ml-5 text-[#8E8E8F]">{text}</h1>
    </div>
  );
};

export default LanguageBox;
