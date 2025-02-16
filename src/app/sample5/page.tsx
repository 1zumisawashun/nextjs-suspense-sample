"use client";

import { Suspense, useEffect, useState } from "react";
import ClientComponent from "./client-component";
import { getTodoList } from "../../lib/getTodoList";

export default function TodoListPage() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodoList().then((todos) => {
      setTodos(todos);
    });
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientComponent todos={todos}/>
    </Suspense>
  );
}
