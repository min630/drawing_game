<template>
  <div
    class="
      bg
      container-fluid
      vh-100
      d-flex
      flex-column
      justify-content-center
      align-items-center
    "
  >
    <h1 class="mb-5">請選擇籤組模式</h1>
    <div class="row gx-5">
      <div class="col mx-5">
        <router-link to="./">
        <div
          class="
            rounded-circle
            bg-danger
            d-flex
            justify-content-center
            align-items-center
          "
          style="width: 200px; height: 200px"
        >
          <h3 class="fw-bold">預設籤組</h3>
        </div>
        </router-link>
      </div>
      <div class="col mx-5">
        <router-link to="./admin">
        <div
          class="
            rounded-circle
            bg-primary
            d-flex
            justify-content-center
            align-items-center
          "
          style="width: 200px; height: 200px"
        >
          <h3 class="fw-bold">自訂籤組</h3>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg {
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("../assets/lucky_cat.jpg");
}
.rounded-circle:hover {
  opacity: 0.6;
  border: thick double black;
}
.rounded-circle h3{
  color: white;
}
.rounded-circle:hover h3{
  color: black;
}
</style>
