<script>
  import { createEventDispatcher } from "svelte";

  let text = "";
  const dispatch = createEventDispatcher();

  function submitTodo() {
    if (!text.trim()) return;

    dispatch("add", text);
    text = "";
  }
</script>

<form on:submit|preventDefault={submitTodo}>
  <input type="text" bind:value={text} placeholder="add todo..." />

  <button type="submit">add</button>
</form>
