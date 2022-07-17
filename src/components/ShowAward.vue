<template>
  <div
    class="
      show
      d-flex
      flex-column
      justify-content-center
      align-items-center
      position-fixed
      top-50
      start-50
      translate-middle
      d-none
    "
  >
    <button
      type="button"
      class="btn-close position-absolute"
      aria-label="Close"
      @click="hideAward"
    ></button>
    <h4>恭喜抽到：{{ pickedItem.title }}</h4>
    <img :src="pickedItem.imageUrl" alt="" style="height: 300px" />
  </div>
</template>

<script>
export default {
  props: ['pickedItem'],
  methods: {
    showAward() {
      const show = document.querySelector('.show');
      show.classList.remove('d-none');
    },
    hideAward() {
      const show = document.querySelector('.show');
      show.classList.add('d-none');
    },
  },
};
</script>

<style scoped>
.show {
  width: 70%;
  height: 70%;
  background-color: RGBA(230, 230, 230, 0.6);
  border-radius: 20px;
}
.show button {
  top: 1rem;
  right: 1rem;
}
</style>
