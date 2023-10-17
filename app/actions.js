'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function createTodo(formData) {
  let todo = formData.get('todo');
  if (typeof todo !== 'string' || todo.length === 0) {
    return;
  }

  try {
    await sql`
    INSERT INTO todos (text, complete)
    VALUES (${todo}, false)
    `;
    formData.delete('todo');
    revalidatePath('/');

    return { message: `Added todo ${todo}` };
  } catch (error) {
    return { message: 'Failed to create todo' };
  }
}

export async function deleteTodo(formData) {
  const todoId = formData.get('id');

  try {
    await sql`
      DELETE FROM todos
      WHERE id = ${todoId};
    `;

    revalidatePath('/');
    return { message: `Deleted todo` };
  } catch (error) {
    return { message: 'Failed to delete todo' };
  }
}

export async function toggleTodo(id, complete) {
  try {
    await sql`
        UPDATE todos
        SET complete = ${complete}
        WHERE id = ${id};
        `;

    revalidatePath('/');
    return { message: `Updated todo` };
  } catch (error) {
    return { message: 'Failed to update todo' };
  }
}

export async function deleteComplete() {
  try {
    await sql`
            Delete FROM todos
            WHERE complete = true;
            `;

    revalidatePath('/');
    return { message: `Delete todo` };
  } catch (error) {
    return { message: 'Failed to delete todo' };
  }
}
