<template>
<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h1 class="mb-3">後台登入</h1>
      <form>
        <div class="mb-3">
          <label for="user_id" class="form-label"
            >ID</label
          >
          <input
            type="text"
            class="form-control"
            id="user_id"
            aria-describedby="example"
            v-model="user_id"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="password"
          />
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="checkUser">確認</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      user_id: '',
      password: '',
    };
  },
  methods: {
    checkUser() {
      const checkId = this.user_id === 'chi630';
      const checkPwd = this.password === '123456';
      console.log(checkId, checkPwd);
      if (!checkId || !checkPwd) {
        alert('帳號或密碼錯誤，請確認');
      } else {
        this.$router.push('./admin');
      }
    },
  },
};
</script>
