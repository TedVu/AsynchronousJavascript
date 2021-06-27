const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  //simulate apis call withj settimeout
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li> ${post.title} </li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

getPosts();

function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}

createPost({ title: "Post 3", body: "This is post three" });
