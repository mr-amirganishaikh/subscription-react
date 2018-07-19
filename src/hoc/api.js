import axios from "axios";

const orderApis = axios.create({
  baseURL: "https://abjadiyat-web-api-staging.abjadiyat.com/v1.4/",
  transformRequest: [(data, headers) => data],
  transformResponse: [data => data]
});

export default orderApis;
