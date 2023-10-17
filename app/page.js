// import { experimental_useFormState as useFormState } from 'react-dom';
// import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { sql } from '@vercel/postgres';
import { AddForm } from './AddForm';
import { TodoItem } from './TodoItem';
import { deleteComplete, toggleTodo } from './actions';
import { DeleteCompleteButton } from './DeleteCompleteButton';

export default async function Home() {
  let data = await sql`SELECT * FROM todos`;
  let completeData = await sql`SELECT * FROM todos WHERE complete = true`;
  let uncompleteData = await sql`SELECT * FROM todos WHERE complete = false`;

  const { rows: todos } = data;
  const { rows: completeTodos } = completeData;
  const { rows: uncompleteTodos } = uncompleteData;

  return (
    <div className="bg-slate-600 w-full h-screen flex flex-col items-center justify-center">
      <div className="bg-slate-200 rounded shadow-lg w-[400px] h-auto p-5">
        <div className="border-b-2 border-gray-500">
          <h1 className="text-2xl">Task List</h1>
          <div className="flex justify-between items-center py-2">
            {todos.length > 0 && (
              <p className="text-xs">
                You've got {uncompleteTodos.length} task to go
              </p>
            )}
            {completeTodos.length > 0 && (
              <DeleteCompleteButton deleteComplete={deleteComplete} />
            )}
          </div>
        </div>
        <div className="pt-5">
          <AddForm />
          <ul className="pt-5">
            {todos.map((todo) => (
              <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
