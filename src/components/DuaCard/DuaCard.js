import DuaTitle from "./DuaTitle/DuaTitle";
import Footer from "./footer/Footer";

const DuaCard = ({ doa }) => {
  const {
    dua_name_en,
    top_en,
    dua_arabic,
    transliteration_en,
    translation_en,
    refference_en,
    cat_id,
    subcat_id,
    id,
  } = doa;
  return (
    <div
      id={`dua_${id}`}
      className="min-h-[303px] bg-white rounded-2xl py-4 px-7 mb-4"
    >
      <DuaTitle text={dua_name_en} />
      <p className="leading-7 my-3 font-medium text-justify">{top_en}</p>

      <div>
        <div className="py-2 text-justify">
          <p className="text-right text-2xl leading-loose ">{dua_arabic}</p>
        </div>
        {/* translation */}
        <div className="py-4 text-justify">
          {transliteration_en && (
            <p className="tracking-wider my-4 mt-2 text-justify">
              <span className="font-semibold text-[#4E4E4E]">
                Transliteration:
              </span>{" "}
              {transliteration_en}
            </p>
          )}

          {/* english translation */}
          {translation_en && (
            <p className="tracking-wider my-5 text-base font-medium">
              <span className="font-semibold text-[#4E4E4E]">Translation:</span>{" "}
              {translation_en}
            </p>
          )}
        </div>
        {/* arabic in english */}
        {/* reference */}
        {refference_en && (
          <div className="flex flex-col font-medium">
            <span className="text-color-green">Reference:</span>
            <span>{refference_en}</span>
          </div>
        )}
      </div>

      {/* arabic text */}
      {/* footer */}
      <Footer arabic={dua_arabic} />
    </div>
  );
};

export default DuaCard;
