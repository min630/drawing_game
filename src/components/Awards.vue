<template>
  <div class="cards mt-5 mx-3">
    <div class="row g-3 d-flex justify-content-center">
    <div class="card me-3" style="width: 18rem;" v-for="award in awards" :key="award.title">
      <img :src="award.imageUrl" class="card-img-top" alt="" />
      <div class="card-body">
        <p class="card-text">
          {{ award.title }}
        </p>
        <p class="card-content">
          獎項描述：{{ award.content }}
        </p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['awards'],
};
</script>
