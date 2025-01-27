import { Suspense } from "react";
import ClientComponent from "./client-component";
import { getTodoList } from "../../lib/getTodoList";

export default function TodoListPage() {
  const todoPromise = getTodoList();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientComponent todoPromise={todoPromise} />
    </Suspense>
  );
}
