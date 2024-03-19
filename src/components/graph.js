"use client";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

export default function Graph() {
  const opt = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  let [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let dat = await fetch("/api/git").then((res) => res.json());
      setData(dat);
    };

    fetchData();
  }, []);

  if (!data || !data.data) {
    return <span>....</span>;
  }

  return (
    <div className="w-full flex justify-center items-center">
      {/* <Line options={opt} data={data} /> */}
    </div>
  );
}
