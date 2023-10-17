'use client';

import React from 'react';
import { DeleteForm } from './DeleteForm';

export const TodoItem = ({ id, text, complete, toggleTodo }) => {
  return (
    <li className="flex items-center justify-between mx-2">
      <div className="flex gap-2">
        <input
          type="checkbox"
          className="cursor-pointer peer accent-pink-600 "
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
        >
          {text}
        </label>
      </div>

      {complete && <DeleteForm id={id}></DeleteForm>}
    </li>
  );
};
