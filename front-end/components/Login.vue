<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username or Email</label>
        <input type="text" id="username" v-model="credentials.username" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="credentials.password" required>
      </div>
      <button type="submit">Login</button>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      },
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$axios.post('/api/auth/login', this.credentials);
        const token = response.data.token;


        localStorage.setItem('token', token);


        this.$router.push('/home');
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error('Error 401: Unauthorized');

          this.errorMessage = 'Error 401: Unauthorized';
        } else {
          console.error('Login failed:', error);

          this.errorMessage = 'An error occurred. Please try again later.';
        }
      }
    }
  }
};
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: auto;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #FEFAE4;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #285C49;
  color: #FEFAE4;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #285C49;
}

.error-message {
  color: red;
  margin-top: 0.5rem;
}
</style>
