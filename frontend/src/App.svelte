<script>
  import { onMount } from "svelte";
  import TodoForm from "./components/TodoForm.svelte";
  import TodoList from "./components/TodoList.svelte";

  import { getTodos, createTodo, updateTodo, deleteTodo } from "./api/todoApi";

  let todos = [];
  let filter = "all";

  $: filteredTodos =
    filter === "active"
      ? todos.filter((t) => !t.done)
      : filter === "completed"
        ? todos.filter((t) => t.done)
        : todos;

  $: remaining = todos.filter(t => !t.done).length

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

<div>
  <button on:click={() => (filter = "all")}>All</button>
  <button on:click={() => (filter = "active")}>Active</button>
  <button on:click={() => (filter = "completed")}>Completed</button>
</div>

<TodoForm on:add={(e) => handleAdd(e.detail)} />

<TodoList
  todos={filteredTodos}
  on:toggle={(e) => handleToggle(e.detail)}
  on:delete={(e) => handleDelete(e.detail)}
  on:edit={(e) => handleEdit(e.detail)}
/>

<p>{remaining} task left</p>
