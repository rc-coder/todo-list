'use server';

async function createTodo(data) {
  const title = data.get('title').valueOf();
  if (typeof title !== 'string' || title.length === 0) {
    return;
  }
}
