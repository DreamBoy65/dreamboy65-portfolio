/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import moment from "moment-timezone";
import { useEffect, useState } from "react";
import Git from "./git";
import Npm from "./npm";
import Skills from "./skills";
import Graph from "./graph";

export default function Profile() {
  const currentTime = moment().tz("Asia/Calcutta");
  const [hour, setHour] = useState();
  const [min, setMin] = useState();
  const [sec, setSec] = useState();
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  useEffect(() => {
    setInterval(() => {
      const currentTime = moment().tz("Asia/Calcutta");
      setHour(currentTime.format("hh"));
      setMin(currentTime.format("mm"));
      setSec(currentTime.format("ss"));
      setDay(currentTime.format("dddd"));
      setMonth(currentTime.format("MMMM"));
      setYear(currentTime.year());
    }, 1000);
  }, []);

  return (
    <div className="w-full h-full bgc flex md:flex-row md:p-[15px] flex-col gap-[25px] border-[#000000] p-[5px] overflow-auto">
      {/* {part 1} */}

      <div className="w-full h-auto flex flex-col items-center gap-4">
        <div className="w-full border-[#2f1111] p-[15px] border rounded-2xl flex md:flex-row flex-col bg-[#000000AB] items-center">
          <img
            src="/52-529591_anime-wallpapers-gothic-anime-wallpapers-hd.jpg"
            className="w-[100px] h-[100px] rounded-full"
          />
          <div className="flex flex-col w-full m-1">
            <strong>Dream</strong>
            <p>
              hello! Im Dream/Lucky. Im a Fullstack developer experienced in
              Nodejs and Python. I love trying new things, finding new things,
              finding a goal i can pursue. Interesting right!
            </p>
          </div>
        </div>

        <div className="w-full border-[#2f1111] p-[15px] border rounded-2xl flex flex-col bg-[#000000AB]">
          <p>
            Welcome to my magical realm on Repo! I am a boy and As an enthusiast
            in the art of programming, avid reader, anime aficionado, and manga
            maestro, I am on an adventurous journey to the North (they say you
            will find every answer in north)!
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="flex text-[25pt] flex-row md:flex-col gap-2">
            <div className="flex w-full flex-col gap-1 border-[#2f1111] p-[15px] border rounded-2xl bg-[#000000AB]">
              <strong className="flex justify-center items-center h-full w-full">
                {hour}:{min}
              </strong>
            </div>

            <div className="flex border-[#2f1111] p-[15px] border rounded-2xl bg-[#000000AB] text-[25pt]">
              <strong className="flex justify-center items-center h-full w-full">
                {sec}
              </strong>
            </div>
          </div>
          <div className="w-full h-full flex flex-col border-[#2f1111] p-[15px] border rounded-2xl bg-[#000000AB]">
            <strong>
              {year} {month}
            </strong>
            <strong className="w-full h-full flex justify-center items-center text-[25pt]">
              {day}
            </strong>
          </div>
        </div>

        <div className="w-full p-[5px] rounded-2xl flex flex-row gap-1 justify-center">
          <a href="">
            <img
              src="/dis.png"
              className="w-[50px] h-[50px] p-2 border-[#2f1111] border bg-[#000000AB] rounded-2xl"
            />
          </a>
          <a href="">
            <img
              src="/insta.jpeg"
              className="w-[50px] h-[50px] p-2 border-[#2f1111] border bg-[#000000AB] rounded-2xl"
            />
          </a>
          <a href="">
            <img
              src="/git.webp"
              className="w-[50px] h-[50px] p-2 border-[#2f1111] border bg-[#000000AB] rounded-2xl"
            />
          </a>
          <a href="">
            <img
              src="/link.png"
              className="w-[50px] h-[50px] p-2 border-[#2f1111] border bg-[#000000AB] rounded-2xl"
            />
          </a>
          <a href="">
            <img
              src="/blog.png"
              className="w-[50px] h-[50px] p-2 border-[#2f1111] border bg-[#000000AB] rounded-2xl"
            />
          </a>
          <a href="">
            <img
              src="/yt.png"
              className="w-[50px] h-[50px] p-2 border-[#2f1111] border bg-[#000000AB] rounded-2xl"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col w-full h-auto items-center gap-4">
        <div className="w-full flex flex-col justify-center gap-1">
          <div className="w-full border-[#2f1111] p-[15px] border rounded-2xl flex flex-row bg-[#000000AB] justify-center items-center">
            <Git />
          </div>
          <div className="w-full border-[#2f1111] p-[15px] border rounded-2xl flex flex-row bg-[#000000AB]">
            <Npm />
          </div>
        </div>
        <div className="w-full border-[#2f1111] p-[15px] border rounded-2xl flex flex-col bg-[#000000AB] items-center justify-center">
          <Skills />
        </div>
        <div className="w-full border-[#2f1111] p-[15px] border rounded-2xl flex flex-col bg-[#000000AB] items-center justify-center">
          <Graph />
        </div>
      </div>
    </div>
  );
}
