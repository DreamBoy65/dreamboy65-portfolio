import cheerio from "cheerio";
import axios from "axios";

export default async function handler(req, res) {
  let username = req.query.username || `xdreamboy`;
  const url = `https://www.npmjs.com/~${username}`;
  let durl = "https://api.npmjs.org/downloads/range/2000-01-01:3000-01-01/";
  let body = await axios.get(url).then((data) => data.data);
  let $ = cheerio.load(body);

  const avatar = $('img[src^="/npm-avatar"]')?.attr("src") || undefined;

  const packs = await axios
    .get(`https://registry.npmjs.org/-/user/${username}/package`)
    .then((res) => Object.keys(res.data).map((e) => e))
    .catch((e) => null);

  let allPacks = packs.map((e) =>
    axios
      .get(`https://registry.npmjs.org/${e}`)
      .then((res) => res.data)
      .catch((e) => null)
  );

  allPacks = await Promise.all(allPacks);

  let downloads = 0;
  let promises = packs.map((e) =>
    axios
      .get(durl + e)
      .then((data) => data.data)
      .catch((e) => null)
  );

  let results = await Promise.all(promises);

  for (const e of results) {
    e.downloads.forEach((f) => {
      downloads += f.downloads;
    });
  }

  let obj = {
    avatar,
    packs,
    downloads,
    allPacks,
  };

  res.status(200).json(obj);
}
