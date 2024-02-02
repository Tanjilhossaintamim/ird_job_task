import Image from "next/image";
import audioBtnSvg from "@/assets/categoryicon/audiobtn.svg";
import bookmarkSvg from "@/assets/toolicon/bookmark.svg";
import copysvg from "@/assets/toolicon/copy.svg";
import plansvg from "@/assets/toolicon/plan.svg";
import reportsvg from "@/assets/toolicon/report.svg";
import shareSvg from "@/assets/toolicon/share.svg";
import Tooltip from "@mui/material/Tooltip";


const Footer = () => {
  return (
    <div className="py-7 flex items-center justify-between">
      <div>
        <Image
          src={audioBtnSvg}
          alt="audiobtn"
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </div>
      <div className="flex items-center space-x-8">
        <Tooltip title="Copy" placement="top">
          <Image
            src={copysvg}
            alt="audiobtn"
            width={25}
            height={25}
            className="cursor-pointer tooltip"
          />
        </Tooltip>
        <Tooltip title="Bookmark" placement="top">
          <Image
            src={bookmarkSvg}
            alt="audiobtn"
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </Tooltip>
        <Tooltip title="Memorize" placement="top">
          <Image
            src={plansvg}
            alt="audiobtn"
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </Tooltip>
        <Tooltip title="Report" placement="top">
          <Image
            src={reportsvg}
            alt="audiobtn"
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </Tooltip>
        <Tooltip title="Share" placement="top">
          <Image
            src={shareSvg}
            alt="audiobtn"
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default Footer;
