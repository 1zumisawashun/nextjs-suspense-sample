"use client";

import { use } from "react";
import NextLink from "next/link";
import { getTodoList } from "../../lib/getTodoList";

/**
 * A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.
 * @see https://github.com/vercel/next.js/discussions/64814
 * useはレンダリング時に作成されるpromiseをサポートしていません。
 * @see https://it.react.dev/blog/2024/12/05/react-19#use-does-not-support-promises-created-in-render
 * React.cacheを使えば解決できると明言している記事があるがどうやらそうではないっぽい
 */

/**
 * MEMO: use APIを使った場合、エラーが発生するパターン
 */
export default function TodoListPage() {
  const todos = use(getTodoList());
  console.log(`render TodoListPage`);

  // ↓!無限にレンダリングされる!
  return (
    <div>
      <div className="flex space-x-4">
        <NextLink href="/sample1">Go to sample1</NextLink>
        <NextLink href="/sample2">Go to sample2</NextLink>
        <NextLink href="/sample3">Go to sample3</NextLink>
        <NextLink href="/sample4">Go to sample4</NextLink>
        <NextLink href="/sample5">Go to sample5</NextLink>
      </div>

      <table>
        {/* ...省略... */}
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
