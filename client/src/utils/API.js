import axios from "axios";

export default {
  // Gets user login
  getUser: function(token) {
    return axios.get("/users", {
      headers: { "x-auth-token": token },
    });
  },
  // Register users
  registerUser: function(token) {
    return axios.post("/register", { token: token });
  },
  // Delete users
  deleteUser: function(token) {
    return axios.delete("/users", {
      headers: { "x-auth-token": token },
    });
  },
  // Delete token
  deleteConfirm: function(token) {
    return axios.delete("/confirm", {
      headers: { "x-auth-token": token },
    });
  },
  // login user
  loginUser: function(form) {
    return axios.post("users/login", form)
  },
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/posts");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a post to the database
  savePost: function(postData) {
    return axios.post("/api/posts", postData);
  }
};
