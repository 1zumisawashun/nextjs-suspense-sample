"use client";

import NextLink from "next/link";

/**
 * MEMO: CCの場合render as you fetchになっているか？
 */
export default function TodoListPage({ todos }: { todos: any }) {
  console.log(`render TodoListPage`);

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
