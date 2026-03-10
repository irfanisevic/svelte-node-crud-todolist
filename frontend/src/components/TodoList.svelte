<script>
    import {createEventDispatcher} from 'svelte'

    export let todos = []

    const dispatch = createEventDispatcher()

    function editTodo(todo){
        const newText = prompt('edit todo', todo.text)

        if(!newText) return

        dispatch('edit', {
            id: todo.id,
            text: newText,
            done: todo.done
        })
    }
</script>

<ul>
    {#each todos as todo}

    <li>
        <span
        on:click={()=> dispatch('toggle', todo)}
        style='cursor: pointer; text-decoration:{todo.done ? 'line-through': 'none'}'
        >
        {todo.text}
        </span>

        <button on:click={() => editTodo(todo)}>
            edit
        </button>

        <button on:click={()=> dispatch('delete', todo.id)}>delete</button>
    </li>
    {/each}
</ul>