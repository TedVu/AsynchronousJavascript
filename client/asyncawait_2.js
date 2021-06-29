//

(async function displayUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // res is a promise object
  // await is a way to "unpack" the promise object
  const users = await res.json();

  users.forEach((user, index) => {
    console.log(user);
  });
})();
