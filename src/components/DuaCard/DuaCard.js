
import DuaTitle from "./DuaTitle/DuaTitle";
import Footer from "./footer/Footer";

const DuaCard = () => {
  return (
    <div className="min-h-[303px] bg-white rounded-2xl py-4 px-7 ">
      <DuaTitle />
      <p className="leading-7 my-3 font-medium text-justify">
        All human beings depend on Allah for their welfare and prevention of
        evil in various matters of their religion and world. Allah says
        (interpretation of the meaning): O mankind, you are those in need of
        Allah, while Allah is the Free of need, the Praiseworthy.
      </p>
      {/* arabic text */}
      <div className="py-2 text-justify">
        <p className="text-right text-2xl leading-loose text-justify">
          لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ
          وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا
          مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ
          ذَا الْجَدِّ مِنْكَ الْجَدُّ
        </p>
      </div>
      {/* translation */}
      <div className="py-4 text-justify">
        <p className="tracking-wider my-4 mt-2 text-justify">
          <span className="font-semibold text-[#4E4E4E]">Transliteration:</span>{" "}
          Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa
          lahul-hamdu wa huwa 'alaa kulli shay'in qadir. Allaahumma laa maani'a
          limaa a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi
          minka al-jaddu
        </p>
        {/* english translation */}
        <p className="tracking-wider my-5 text-base font-medium">
          <span className="font-semibold text-[#4E4E4E]">Translation:</span>{" "}
          There is none worthy of worship except Allah alone with no partner or
          associate. He is the Dominion and to Him be all praise, and He is able
          to do all things. O Allah, one can withhold what You have given and
          none can give what You have withheld, and no wealth or fortune can
          benefit anyone for from You comes all wealth and fortune.
        </p>
      </div>
      {/* arabic in english */}
      {/* reference */}
      <div className="flex flex-col font-medium">
        <span className="text-color-green">Reference:</span>
        <span>Surah Al-Fatir 35:15</span>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default DuaCard;
