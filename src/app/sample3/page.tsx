import { Suspense } from "react";
import ClientComponent from "./client-component";

export default function TodoListPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientComponent />
    </Suspense>
  );
}
