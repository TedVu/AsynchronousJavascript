const posts = [
  { title: "Post One", body: "This is a post one" },
  { title: "Post Two", body: "This is a post two" },
];

// const fetch = require("node-fetch");

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
};

// (async function init() {
//   // waiting this to be done to continue async await gives a synchronous way of doing asynchronous js
//   await createPost({ title: "Post three", body: "This is post three" });
//   getPosts();
// })();

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  let output = "";
  data.forEach((user) => {
    output += `<li>${user.name}</li>`;
  });

  document.body.innerHTML = output;
}

fetchUsers();
