import { addPost, deletePost, listPosts } from "./blog.js";

window.addEventListener('DOMContentLoaded', init)
console.log(deletePost);
function init() {
  const addPostBtn = document.querySelector('#add-post-btn');
  addPostBtn.addEventListener('click', () => {
    addPost()
  });
}