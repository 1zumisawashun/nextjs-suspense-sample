"use client";

import { use, cache } from "react";
import NextLink from "next/link";

const getTodoList = cache(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await response.json();
  return result;
});

/**
 * A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.
 * @see https://github.com/vercel/next.js/discussions/64814
 * useはレンダリング時に作成されるpromiseをサポートしていません。
 * @see https://it.react.dev/blog/2024/12/05/react-19#use-does-not-support-promises-created-in-render
 * React.cacheを使えば解決できると明言している記事があるがどうやらそうではないっぽい
 */
export default function TodoListPage() {
  const todos = use(getTodoList());

  return (
    <div>
      <NextLink href="/sample1">Go to sample1</NextLink>
      <NextLink href="/sample2">Go to sample2</NextLink>

      <table>
        <tbody>
          {todos.map((todo: any) => (
            <tr key={todo.id}>
              <td>{todo.userId}</td>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
