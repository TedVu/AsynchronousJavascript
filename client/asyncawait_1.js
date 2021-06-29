// asynce convert returned object into a promise
async function hello() {
  return "Hello World";
}

hello().then((res) => {
  alert(res);
});
