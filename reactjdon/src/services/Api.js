import Http from "./Http";

export const getUsers = (config) => {
  return Http.get("/users", config);
};
export const getPosts = (config) => {
  return Http.get("/posts", config);
};
