export async function getTodoList() {
  console.log("fetching started");
  // https://jsonplaceholder.typicode.com/
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await response.json();
  console.log("fetching completed");
  return result;
}
