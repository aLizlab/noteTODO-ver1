<template>
  <div
    v-if="!user"
    class="login"
  >
    <h1
      class="text"
    >
      ログイン
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
        @click="login"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    user () {
      return this.$store.getters['user']
      console.log(user)
    },
  },
  methods : {
    login(email, password) {
      this.$store.dispatch('login', {email: this.email, password: this.password})
        if (this.$store.getters['user']) {
          this.$router.push('/')
        }
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
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
        border: 1px solid #FFBBBB;
      }
    }

    > .button {
      margin-top: 8px;
    }
  }
}
</style>