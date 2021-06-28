const fetch = require("node-fetch");
function displayData(array) {
  let list = "<ul>";

  array.forEach((element) => {
    list += `<li>${element}</li>`;
  });

  list += "</ul>";
  document.body.innerHTML = list;
}
alert("hello world");

// why double then ?
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((item) => {
    const todos = [];
    todos.push(item.title);
    displayData(todos);
  });
