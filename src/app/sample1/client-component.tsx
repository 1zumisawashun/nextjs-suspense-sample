"use client";

import { use } from "react";
import NextLink from "next/link";

/**
 * MEMO: use APIを使った場合、エラーが発生しないパターン（公式のおすすめ）
 */
export default function TodoListPage({
  todoPromise,
}: {
  todoPromise: Promise<any>;
}) {
  const todos = use(todoPromise);
  console.log(`render TodoListPage`);

  return (
    <div>
      <NextLink href="/sample2">Go to sample2</NextLink>
      <NextLink href="/sample3">Go to sample3</NextLink>

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
