<script>
  import { onMount } from "svelte";
  import TodoForm from "./components/TodoForm.svelte";
  import TodoList from "./components/TodoList.svelte";

  import { getTodos, createTodo, updateTodo, deleteTodo } from "./api/todoApi";

  let todos = [];

  async function loadTodos() {
    todos = await getTodos();
  }

  async function handleAdd(text) {
    await createTodo(text);
    loadTodos();
  }

  async function handleToggle(todo) {
    await updateTodo(todo.id, {
      text: todo.text,
      done: !todo.done,
    });
    loadTodos();
  }

  async function handleEdit(data) {
    await updateTodo(data.id, {
      text: data.text,
      done: data.done,
    });
    loadTodos();
  }

  async function handleDelete(id) {
    await deleteTodo(id);
    loadTodos();
  }

  onMount(loadTodos);
</script>

<h1>To Do App</h1>

<TodoForm on:add={(e) => handleAdd(e.detail)} />

<TodoList
  {todos}
  on:toggle={(e) => handleToggle(e.detail)}
  on:delete={(e) => handleDelete(e.detail)}
  on:edit={(e) => handleEdit(e.detail)}
/>
