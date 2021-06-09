const posts = [
  { title: "Post One", body: "This is a post one" },
  { title: "Post Two", body: "This is a post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    getPosts();
  }, 2000);
};

createPost({ title: "Post Three", body: "This is post three" }, getPosts);
