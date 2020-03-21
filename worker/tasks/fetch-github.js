const axios = require("axios");

var redis = require("redis"),
  client = redis.createClient();

const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client);

const baseUrl = "https://jobs.github.com/positions.json";

const fetchGithub = async () => {
  let resultCount = 1;
  let page = 0;
  const allJobs = [];

  while (resultCount > 0) {
    const jobs = await axios.get(`${baseUrl}?page=${page}`);
    allJobs.push(...jobs.data);
    resultCount = jobs.data.length;
    console.log(`got ${resultCount} jobs`);
    page++;
  }
  console.log(`got ${allJobs.length} jobs`);
  // set in redis
  const success = await setAsync("github", JSON.stringify(allJobs));
  console.log({ success });
};

fetchGithub();
module.exports = fetchGithub;
