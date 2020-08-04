// function that makes the api request and returns a Promise for response
import axios from "axios";

export function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
    // url: "https://dog.ceo/pi/breeds/image/random"
  });
}
