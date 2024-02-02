"use client";
import Image from "next/image";

import arrowImg from "../../assets/duaarrow.svg";

export default function SubCategory({ category, ind }) {
  return (
    <ul className="ml-10 list-disc mt-3 border-dotted border-l-[3px] border-green-600 text-xs">
      <li className="py-3 flex hover:text-green-600 cursor-pointer font-semibold text-md items-center gap-2 -ml-[5px]">
        <div className="bg-green-600 w-2 h-2 rounded-full"></div>
        kfkdafsjajf
      </li>

      <div>
        <div className="flex items-center ml-2 gap-2 my-2 cursor-pointer hover:text-green-200">
          <Image src={arrowImg} alt={"dkjdsajf"} />
          {/* {d.dua_name_en} */}
          dua
        </div>
      </div>
    </ul>
  );
}
