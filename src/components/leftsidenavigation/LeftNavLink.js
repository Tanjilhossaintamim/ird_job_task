import home from "@/assets/home.svg";
import memorize from "@/assets/memorize.svg";
import books from "@/assets/books.svg";
import ruqyah from "@/assets/ruqyah.svg";
import duainfo from "@/assets/dua-info.svg";
import bookmark from "@/assets/bookmark.svg";
import alldua from "@/assets/alldua.svg";
import Link from "next/link";
import Image from "next/image";

const LeftNavLink = () => {
  return (
    <div className="flex items-center justify-center my-auto flex-grow mt-28">
      <ul className="flex flex-col space-y-6 my-auto">
        <li className=" w-[40px] h-[40px] rounded-full bg-[#E8F0F5] flex items-center justify-center">
          <Link href={"/"}>
            <Image src={home} alt="home" />
          </Link>
        </li>
        <li className=" w-[40px] h-[40px] rounded-full bg-[#E8F0F5] flex items-center justify-center">
          <Link href={"/"}>
            <Image src={alldua} alt="home" />
          </Link>
        </li>
        <li className=" w-[40px] h-[40px] rounded-full bg-[#E8F0F5] flex items-center justify-center">
          <Link href={"/"}>
            <Image src={memorize} alt="home" />
          </Link>
        </li>
        <li className=" w-[40px] h-[40px] rounded-full bg-[#E8F0F5] flex items-center justify-center">
          <Link href={"/"}>
            <Image src={ruqyah} alt="home" />
          </Link>
        </li>

        <li className=" w-[40px] h-[40px] rounded-full bg-[#E8F0F5] flex items-center justify-center">
          <Link href={"/"}>
            <Image src={bookmark} alt="home" />
          </Link>
        </li>
        <li className=" w-[40px] h-[40px] rounded-full bg-[#E8F0F5] flex items-center justify-center">
          <Link href={"/"}>
            <Image src={books} alt="home" />
          </Link>
        </li>
        <li className=" w-[40px] h-[40px] rounded-full bg-[#E8F0F5] flex items-center justify-center">
          <Link href={"/"}>
            <Image src={duainfo} alt="home" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftNavLink;
