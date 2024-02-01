import LeftSide from "@/components/leftside/LeftSide";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <section className="flex p-10 fixed inset-0">
      <div className="bg-white w-[100px] h-[830px] px-5 rounded-3xl">
        {/* left part */}
        <LeftSide />
      </div>
      <div className="bg-color-body w-full ml-4">
        {/* navbar */}
        <Navbar />
        <div className="flex">
          <div>djdfj</div>
          <div className="overflow-auto h-[1000px]"></div>
        </div>
      </div>
      <div className="bg-red-400 w-[500px] h-[927px]">{/* right side */}</div>
    </section>
  );
}
