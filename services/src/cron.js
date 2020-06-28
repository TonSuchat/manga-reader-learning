import "dotenv/config";
import axios from "axios";
import cron from "node-cron";

const axiosME = axios.create({
  baseURL: process.env.MANGA_EDEN_URL,
  responseType: "json",
  transformResponse: axios.defaults.transformRequest.concat(
    (data) =>
      data.manga.map(
        ({
          a: alias,
          c: categories,
          h: hits,
          i: _id,
          im: image,
          s: status,
          t: title,
        }) => ({
          alias,
          categories,
          hits,
          _id,
          image,
          status,
          title,
        })
      )
  ),
});

const seed = async () => {
  try {
    const res = await axiosME.get();
    console.log(res.data.length);
    console.log(res.data[0]);
  } catch (error) {
    console.error(error.message);
  }
};

seed();

cron.schedule("0 * * * *", () => {
  console.log("running a task every hour");
});
