"use client";
import { userAgentFromString } from "next/server";
import { useEffect, useState } from "react";

export default function Git() {
  let [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let dat = await fetch("/api/git").then((res) => res.json());
      setData(dat);
    };

    fetchData();
  }, []);

  if (!data) {
    return <span>Loading....</span>;
  }

  console.log(data);

  return (
    <div className="w-full h-auto flex flex-col gap-2">
      <div className="w-full flex justify-center">
        <strong>{data.data?.login ?? "DreamBoy65"} ~ Github</strong>
      </div>
      <div className="w-full flex flex-row gap-4">
        <div className="w-full flex flex-col">
          <span className="ml-1">~ Name</span>
          <span className="ml-1">~ Repositories</span>
          <span className="ml-1">~ Stars</span>
          <span className="ml-1">~ Issues</span>
          <span className="ml-1">~ Followers</span>
        </div>
        <div className="w-full flex flex-col">
          <span>{data.data?.name}</span>
          <span>
            {data.data?.public_repos ?? 0 + data.data?.owned_private_repos ?? 0}
          </span>
          <span>{data.stars ?? 0}</span>
          <span>{data.issues ?? 0}</span>
          <span>{data.data?.followers ?? 0}</span>
        </div>
      </div>
    </div>
  );
}
