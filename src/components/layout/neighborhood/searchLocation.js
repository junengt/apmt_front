import axios from "axios";

const REST_API_KEY = "46c545126f7c2dbb3eff59cfbc32a960";

const getApiResponse = async (keyword) => {
  let response;
  try {
    response = await axios({
      method: "get",
      url: `https://dapi.kakao.com/v2/local/search/address.json?query=${keyword}`,
      headers: {
        Authorization: `KakaoAK ${REST_API_KEY}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
  return response.data;
};

const searchLocation = (keyword) => {
  return getApiResponse(keyword);
};

export default searchLocation;
