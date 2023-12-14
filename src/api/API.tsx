import axios from "axios";
import lodash from "lodash";

const url: string = `http://localhost:4500`;

export const readMyEndPoints = async () => {
  try {
    return await axios.get(`${url}/read`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const writeMyEndPoints = async (data: any) => {
  try {
    return await axios.post(`${url}/data`, data);
  } catch (error: any) {
    console.log(error);
  }
};

export const getLiveScoreFixtures = async () => {
  const options = {
    method: "GET",
    url: "https://api-football-beta.p.rapidapi.com/fixtures",
    params: { date: "2020-02-06" },
    headers: {
      "X-RapidAPI-Key": "cca5e7ddc8mshc1c37a392aa5603p1145e4jsn2e7189e9e70f",
      "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
    },
  };
  try {
    const mainCheck = await readMyEndPoints();

    if (lodash.some(mainCheck, options.params.date)) {
      return mainCheck;
    } else {
      const response = await axios.request(options);

      const keyValue = options.params.date;

      const newData = {
        [keyValue]: response.data.response,
      };

      await writeMyEndPoints({ data: newData });
      console.log(response.data.response[0]);
      return response.data.response[0];
    }
  } catch (error) {
    console.error(error);
  }
};
