"use client";
import Image from "next/image";
import arrowImg from "../../assets/duaarrow.svg";
import { useGetSubCategoriesQuery } from "@/redux/api/api";
import { useDispatch, useSelector } from "react-redux";
import { selectDoaNo, selectSubCategory } from "@/redux/slices/apiSlice";
import { Fragment } from "react";
import Link from "next/link";

export default function SubCategory({ category, ind }) {
  const { selectedCategory, selectedSubCategory, doas, doaNo } = useSelector(
    (state) => state.apiFeature
  );
  const { data } = useGetSubCategoriesQuery(selectedCategory);
  const dispatch = useDispatch();

  const setSelectSubCategory = ({ id, doas }) => {
    dispatch(selectSubCategory({ id, doas }));
  };

  const setDoa = (id) => {
    dispatch(selectDoaNo(id));
  };

  return (
    <ul className="w-5/6 mx-auto list-disc mt-3 border-dotted border-l-[3px] border-green-600 text-xs text-color-text relative">
      {data?.subcategories?.map((subCateGory) => (
        <Fragment key={subCateGory.id}>
          <Link href={`?cat=${subCateGory.cat_id}&subcat=${subCateGory.id}`}>
            <li
              onClick={() =>
                setSelectSubCategory({ id: subCateGory.id, doas: data.doa })
              }
              className={`py-3 flex cursor-pointer font-normal text-sm items-center gap-2 -ml-[5px] ${
                selectedSubCategory == subCateGory.id ? "text-color-green" : ""
              }`}
            >
              <div className="bg-green-600 w-2 h-2 rounded-full"></div>
              {subCateGory.subcat_name_en}
            </li>
          </Link>
          {/* dua */}
          {selectedSubCategory == subCateGory.id &&
            doas.map((doa) => (
              <Link
                href={`#dua_${doa.id}`}
                key={doa.dua_name_en}
                onClick={() => setDoa(doa.id)}
              >
                {doa.dua_name_en && (
                  <div>
                    <div
                      className={`flex items-center ml-2 gap-2 my-2 cursor-pointer ${
                        doaNo == doa.id ? "text-color-green" : ""
                      }`}
                    >
                      <Image src={arrowImg} alt={doa.dua_name_en} />
                      {doa.dua_name_en}
                    </div>
                  </div>
                )}
              </Link>
            ))}
        </Fragment>
      ))}
    </ul>
  );
}
