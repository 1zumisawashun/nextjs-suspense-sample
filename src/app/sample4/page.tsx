import { Suspense } from "react";
import ClientComponent from "./client-component";
import { getTodoList } from "../../lib/getTodoList";

export default async function TodoListPage() {
  const todos = await getTodoList();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientComponent todos={todos} />
    </Suspense>
  );
}
