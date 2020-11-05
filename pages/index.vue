<template>
  <div class="page">
    <ul>
      <li
        v-for="(todo, index) in todos"
        :key="todo.id"
        @click="deleteTodo(index)"
      >
        {{ todo.todo }}
      </li>
    </ul>
    <form
      @submit.prevent="submitTodo"
    >
      <input
        v-model="todo"
        type="text"
        placeholder="Add a Todo"
      >
      <button
        type="submit"
      >
        Add Todo
      </button>
    </form>
  </div>
</template>

<script>
export default {
  async fetch ({ store }) {
    await store.dispatch('sample/getTodos')
  },
  data () {
    return {
    //  todos: ['これと', 'あれと', 'それ'],
      todo: ''
    }
  },
  computed: {
    todos () {
      return this.$store.getters['sample/todos']
    }
  },
  methods: {
    submitTodo () {
      if(this.todo) {
        this.$store.dispatch('sample/submitTodo', this.todo)
        this.todo = ''
      }
    },
    deleteTodo (index) {
      this.$store.dispatch('sample/deleteTodo', this.todos[index].id)
    },
  },
}
</script>

<style lang="scss" scoped>
  .page {
    padding: 20px;
  }
  li:hover {
    color: orange;
  }
</style>
