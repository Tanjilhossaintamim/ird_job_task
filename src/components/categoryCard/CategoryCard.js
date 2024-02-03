import img1 from "@/assets/categoryLogo/duar_gurutto.svg";
import duaExeImg from "@/assets/categoryLogo/zikirer_fozilot.svg";
import timeImg from "@/assets/categoryLogo/dua_kobuler_somoy.svg";
import kobulImg from "@/assets/categoryLogo/jader_dua_kobul_hoy.svg";
import morningImg from "@/assets/categoryLogo/sokal_sondha.svg";
import sleepImg from "@/assets/categoryLogo/ghum.svg";
import colothImg from "@/assets/categoryLogo/poshak.svg";
import bariImg from "@/assets/categoryLogo/bari.svg";
import toiletImg from "@/assets/categoryLogo/toilet.svg";
import azanImg from "@/assets/categoryLogo/azan_ikamot.svg";
import Image from "next/image";
import SubCategory from "../subcategory/SubCategory";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "@/redux/slices/apiSlice";
import Link from "next/link";
const CategoryCard = ({ category }) => {
  const { cat_name_en, no_of_subcat, no_of_dua, cat_icon, cat_id } = category;
  const { selectedCategory } = useSelector((state) => state.apiFeature);

  const dispatch = useDispatch();

  // expand subcategories

  const expandSubCategory = () => {
    dispatch(selectCategory({ cat_id, cat_name: cat_name_en }));
  };

  let logo;
  // select logo
  if (cat_icon == "duar_gurutto") {
    logo = img1;
  } else if (cat_icon == "zikirer_fozilot") {
    logo = duaExeImg;
  } else if (cat_icon == "dua_kobuler_somoy") {
    logo = timeImg;
  } else if (cat_icon == "jader_dua_kobul_hoy") {
    logo = kobulImg;
  } else if (cat_icon == "sokal_sondha") {
    logo = morningImg;
  } else if (cat_icon == "ghum") {
    logo = sleepImg;
  } else if (cat_icon == "poshak") {
    logo = colothImg;
  } else if (cat_icon == "bari") {
    logo = bariImg;
  } else if (cat_icon == "toilet") {
    logo = toiletImg;
  } else if (cat_icon == "azan_ikamot") {
    logo = azanImg;
  } else {
    logo = img1;
  }
  return (
    <div>
      <Link href={`?cat=${cat_id}`}>
        <div
          onClick={expandSubCategory}
          className={`px-2 flex items-center space-x-2 w-full relative cursor-pointer hover:bg-[#E8F0F5]  transition-all duration-300 rounded-xl py-2 ${
            selectedCategory == cat_id ? "bg-[#E8F0F5] h-auto" : "h-20"
          }`}
        >
          <div>
            <div className="bg-[#F7F8FA] h-14 w-14 flex items-center justify-center rounded-xl">
              <Image src={logo} alt="img" height={40} width={40} />
            </div>
          </div>
          <div className="w-full">
            <h1 className="font-semibold text-color-text">{cat_name_en}</h1>
            <span className="text-xs text-[#BCC1C4]">
              Subcategory: {no_of_subcat}
            </span>
          </div>
          <div className="w-10 text-color-text px-2 border-l flex flex-col flex-wrap items-center justify-center text-xs ">
            <span className="font-semibold text-sm">{no_of_dua}</span>
            <span className="text-xs text-[#BCC1C4]">Duas</span>
          </div>
        </div>
      </Link>
      {/*  */}
      {selectedCategory == cat_id && <SubCategory />}
    </div>
  );
};

export default CategoryCard;
