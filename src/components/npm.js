import { useEffect, useState } from "react";

export default function Npm() {
  let [user, setUser] = useState(null);

  useEffect(() => {
    const Fetch = async () => {
      let data = await fetch("/api/npm").then((res) => res.json());
      setUser(data);
    };

    Fetch();
  }, []);

  if (!user) {
    return <span>Loading....</span>;
  }
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="w-full flex justify-center">
        <strong>Xdreamboy ~ NPM</strong>
      </div>
      <div className="w-full flex flex-row gap-4">
        <div className="w-full flex flex-col">
          <span className="ml-1">~ Packages</span>
          <span className="ml-1">~ Downloads</span>
        </div>
        <div className="w-full flex flex-col">
          <span>{user.packs.length}</span>
          <span>{user.downloads}</span>
        </div>
      </div>
    </div>
  );
}
