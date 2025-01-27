"use client";

import { use } from "react";
import NextLink from "next/link";

export default function TodoListPage({
  todoPromise,
}: {
  todoPromise: Promise<any>;
}) {
  const todos = use(todoPromise);
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
