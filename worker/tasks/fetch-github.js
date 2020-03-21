const axios = require("axios");

const redis = require("redis");
const client = redis.createClient();

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

  console.log("got", allJobs.length, "jobs total");

  // filter jrJobs
  const jrJobs = allJobs.filter(job => {
    const jobTitle = job.title.toLowerCase();
    if (
      jobTitle.includes("senior") ||
      jobTitle.includes("manager") ||
      jobTitle.includes("sr.") ||
      jobTitle.includes("architect")
    ) {
      return false;
    }
    return true;
  });

  console.log("filtered down to", jrJobs.length);
  // set in redis
  const success = await setAsync("github", JSON.stringify(jrJobs));
  console.log({ success });
};

module.exports = fetchGithub;
