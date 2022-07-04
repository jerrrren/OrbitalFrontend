const host = "https://intronus.herokuapp.com";

export const url = {
  get_ws: "wss://intronus.herokuapp.com/ws?id=",
  get_username: host + "/user_names/",
  get_messages: host + "/messages/",
  get_posts: host + "/posts/getPosts",
  add_post: host + "/posts/createpost",
  if_paired: host + "/pairing/ifPaired",
  fill_and_match: host + "/pairing/fillAndMatch",
  login: host + "/users/login",
  signup: host + "/users/signup",
  register_add: host + "/pairing/registerAdd",
};
