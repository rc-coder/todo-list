'use client';

import { createTodo } from './actions';

export const AddForm = () => {
  return (
    <form action={createTodo}>
      <div className="flex gap-x-2">
        <input
          type="text"
          name="todo"
          placeholder="What's up for today?"
          className="rounded border border-double border-slate-500 shadow-md block w-full px-5 py-2 focus:outline-pink-500 text-pink-600"
        />
        <button
          type="submit"
          className="border bg-slate-600 border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          Add
        </button>
      </div>
    </form>
  );
};
