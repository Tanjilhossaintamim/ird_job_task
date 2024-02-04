"use client";
import Image from "next/image";
import audioBtnSvg from "@/assets/categoryicon/audiobtn.svg";
import pauseSvg from "@/assets/categoryicon/pause.svg";
import bookmarkSvg from "@/assets/toolicon/bookmark.svg";
import copysvg from "@/assets/toolicon/copy.svg";
import plansvg from "@/assets/toolicon/plan.svg";
import reportsvg from "@/assets/toolicon/report.svg";
import shareSvg from "@/assets/toolicon/share.svg";
import Tooltip from "@mui/material/Tooltip";
import { useRef, useState } from "react";
import { Box, Slider } from "@mui/material";

const Footer = ({ arabic, audio }) => {
  const [play, setPlay] = useState(false);
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // audio player on of function
  const togglePlay = () => {
    if (play) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!play);
  };
  // custom progress bar update function
  const timeUpdate = () => {
    const music = audioRef.current;

    const upcomingProgress = Math.floor(
      (music.currentTime / music.duration) * 100
    );
    setProgress(upcomingProgress);
  };
  //  slide custom progress and update audio player position
  const progressUpdate = (e) => {
    const music = audioRef.current;
    setProgress(e.target.value);
    music.currentTime = (music.duration * e.target.value) / 100;
  };
  return (
    <div className="py-7 md:flex items-center justify-between">
      {arabic ? (
        <div className="mb-3 md:mb-0">
          {audio && (
            <audio
              ref={audioRef}
              src={audio}
              onTimeUpdate={timeUpdate}
              controls
              className="w-0 h-0"
            />
          )}

          <div className="flex items-center">
            <Image
              src={play ? pauseSvg : audioBtnSvg}
              alt="audiobtn"
              width={40}
              height={40}
              className="cursor-pointer"
              onClick={togglePlay}
            />
            {play && (
              <Box
                sx={{ width: 200, marginLeft: 1, marginTop: 1 }}
                className="flex items-center space-x-4"
              >
                <Slider
                  aria-label="Temperature"
                  value={progress}
                  color="success"
                  onChange={progressUpdate}
                />
                <span className="text-[#BDBDBD]">
                  00:{Math.round(audioRef.current.duration)}
                </span>
              </Box>
            )}
          </div>
        </div>
      ) : (
        <div className="w-10 h-10"></div>
      )}

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
