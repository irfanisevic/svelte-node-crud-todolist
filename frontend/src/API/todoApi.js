const API = "http://localhost:3000/api/todos";

export async function getTodos() {
  const res = await fetch(API);
  return res.json();
}

export async function createTodo(text) {
  await fetch(API, {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ text }),
  });
}

export async function updateTodo(id, data) {
  await fetch(`${API}/${id}`, {
    method: "put",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function deleteTodo(id) {
  await fetch(`${API}/${id}`, {
    method: "delete",
  });
}
