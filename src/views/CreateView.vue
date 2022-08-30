<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: { name: "", password: "" },
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/create", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newUserParams.name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newUserParams.email" />
      </div>
      <div>
        <label>Dog Name</label>
        <input type="text" v-model="newUserParams.dog_name" />
      </div>
      <div>
        <label>Link to Dog Photo</label>
        <input type="text" v-model="newUserParams.photo_url" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newUserParams.password" />
        <small v-if="newUserParams.password.length > 0 && newUserParams.password.length < 6" class="text-danger">
          Must be at least 6 characters
        </small>
        <small v-if="newUserParams.password.length > 20" class="text-danger">No more than 20 characters</small>
      </div>
      <div>
        <label>Password confirmation:</label>
        <input type="password" v-model="newUserParams.password_confirmation" />
        <small v-if="newUserParams.password_confirmation !== newUserParams.password">Password Must Match</small>
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
