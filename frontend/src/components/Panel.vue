<template>
    <div id="todo-list-example">
        <input
            v-model="newTodoText"
            v-on:keyup.enter="addNewTodo"
            placeholder="Add a new todo"
        >
        <ul>
            <li
                v-for="(index, title, text) in todos"
                v-bind:key="text"
                v-bind:title="title"
                v-on:remove="todos.splice(index, 1)">
                {{ text }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'panel',
    data () {
        return {
            newTodoText: '',
            todos: [
                { id: 1, title: '1', text: 'Hello world-1' },
                { id: 2, title: '2', text: 'Hello world-2' },
                { id: 3, title: '3', text: 'Hello world-3' }
            ],
            nextTodoId: 4
        }
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: ++this.nextTodoId,
                title: this.nextTodoId,
                text: this.newTodoText
            })
            this.newTodoText = ''
        },
        helloWorld: () => {
            console.log('hello world')
        }
    },
    created () {
        return console.log('hello world!')
    }
}
</script>

<style>
ul li {
    list-style-type: none;
}
</style>
