import axios from "axios";

const URL_BASE = "https://api.github.com";

// this URL has API call limits
/*
*
*   This gets specific user names, but it has limited api calls, so 
*   which leads to the app not working properly (this api end point gets users name, and shortlists them)
* 
      const result = await axios(
        `https://api.github.com/search/users?q=user:${query}`
      );
*
*
*
*/

export async function getUserData(userName: string) {
  const response = await axios.get(`${URL_BASE}/users/${userName}`);
  return response;
}

// getting

export async function getUserRepositories(userName: string) {
  const repositories = await axios.get(`${URL_BASE}/users/${userName}/repos`);
  return repositories;
}
