export async function getTodoList() {
  // https://jsonplaceholder.typicode.com/
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await response.json();
  return result;
}
