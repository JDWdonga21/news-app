import axios from "axios";

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// 2. API 함수들을 정리
function fetchNewsList() {
  //return axios.get(config.baseUrl + "news/1.json");
  //이렇게 쓸 수 있다. (ES6)
  return axios.get(`${config.baseUrl}news/1.json`);
}
function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}
function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}
// 3. export 해준다.
export { fetchNewsList, fetchAskList, fetchJobsList };
