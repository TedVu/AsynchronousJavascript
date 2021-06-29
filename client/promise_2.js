// there are some specialties about fetch api you have to use two .then()
// the first .then() returns response promise object remember to convert to json
// to get the body object
function displayData(array) {
  let list = "<ul>";

  array.forEach((element) => {
    list += `<li>${element}</li>`;
  });

  list += "</ul>";
  document.body.innerHTML = list;
}

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => alert(res.json()))
  .then((items) => {
    const todos = [];

    items.forEach((item) => {
      todos.push(item.title);
    });
    displayData(todos);
  });
