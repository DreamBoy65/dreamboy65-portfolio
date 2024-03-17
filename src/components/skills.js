/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function Skills() {
  const langIcons = [
    "https://img.shields.io/badge/javascript-323330?logo=javascript&logoColor=F7DF1E",
    "https://img.shields.io/badge/node.js-43853D?logo=node.js&logoColor=white",
    "https://img.shields.io/badge/mongodb-47A248?logo=mongodb&logoColor=white",
    "https://img.shields.io/badge/python-3776AB?logo=python&logoColor=white",
    "https://img.shields.io/badge/sql-4479A1?logo=sql&logoColor=white",
    "https://img.shields.io/badge/c++-00599C?logo=c%2B%2B&logoColor=white",
    "https://img.shields.io/badge/c-00599C?logo=c&logoColor=white",
    "https://img.shields.io/badge/typescript-3178C6?logo=typescript&logoColor=white",
    "https://img.shields.io/badge/restapi-000000?logo=restapi&logoColor=white",
    "https://img.shields.io/badge/css-1572B6?logo=css3&logoColor=white",
    "https://img.shields.io/badge/html-E34F26?logo=html5&logoColor=white",
    "https://img.shields.io/badge/next.js-000000?logo=next.js&logoColor=white",
    "https://img.shields.io/badge/react-61DAFB?logo=react&logoColor=white",
    "https://img.shields.io/badge/express-000000?logo=express&logoColor=white",
    "https://img.shields.io/badge/vercel-000000?logo=vercel&logoColor=white",
    "https://img.shields.io/badge/redux-764ABC?logo=redux&logoColor=white",
    "https://img.shields.io/badge/React_Native-000020?logo=react&logoColor=white",
  ];

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="h-full flex justify-center">
        <strong>Skills</strong>
      </div>
      <div className="w-full flex flex-wrap">
        {langIcons.map((e, key) => {
          return <img className="m-[5px]" key={key} src={e} />;
        })}
      </div>
    </div>
  );
}
