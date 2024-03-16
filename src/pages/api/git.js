import axios from "axios";

export default async function handler(req, res) {
  let username = req.query.username || "Dreamboy65";
  let data = await Fetch("users/" + username);
  let repos = await Fetch(`users/${username}/repos`);
  let stars =
    repos?.map((c) => c.stargazers_count).reduce((a, b) => a + b, 0) ?? 0;
  let issues = repos?.map((c) => c.open_issues).reduce((a, b) => a + b, 0) ?? 0;
  let commitsCount = 0;
  let langs = repos?.map(
    async (e) => await Fetch(`repos/${username}/${e.name}/languages`)
  );
  langs = await Promise.all(langs ?? []);

  let obj = { data, repos, issues, commitsCount, stars, langs };

  res.status(200).json(obj);
}

async function Fetch(path) {
  return await axios
    .get("https://api.github.com/" + path, {
      headers: {
        Authorization: `Bearer ${process.env.gittoken}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
    .then((data) => data.data)
    .catch((e) => null);
}
