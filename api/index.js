const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

app.use(cors());
const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

app.get("/jobs", async (req, res) => {
  const jobs = await getAsync("github");

  return res.send(jobs);
});

app.listen(port, () => {
  console.log("listening");
});
