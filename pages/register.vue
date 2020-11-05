<template>
  <div class="page">
    <h1
      class="text"
    >
      アカウント登録
    </h1>
    <form
      class="form"
      @submit.prevent
    >
      <label class="label">
        <span class="label">
          email
        </span>
        <input
          class="input"
          type="text"
          v-model="email"
        >
      </label>
      <label class="label">
        <span class="label">
          password
        </span>
        <input
          class="input"
          type="password"
          v-model="password"
        >
      </label>
      <button
        class="button"
        type="submit"
        @click="register"
      >
        Register
      </button>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.getters['user']
    },
  },
  data () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', {email: this.email, password: this.password})
    }
  },
}
</script>

<style lang="scss" scoped>
.page {
  padding: 20px;

  > .text {
    color: #FEA78C;
  }

  > .form {
    display: block;

    > .label {
      display: block;
      margin-top: 8px;

      &:first-child {
        margin-top: 0;
      }

      > .input {
        display: block;
        margin-top: 3px;
        border: 1px solid #ED7179;
      }
    }

    > .button {
      margin-top: 8px;
    }
  }
}
</style>