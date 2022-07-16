<template>
  <h4 class="my-2">剩餘獎項及張數：{{ remainingNumber }} / {{ totalNumber }} 張</h4>
  <div class="inputList">
    <ul class="list-group">
      <li
        class="
          list-group-item
          position-relative
          d-flex
          justify-content-between
          align-items-center
        "
        v-for="(award, index) in awardArray"
        :key="index"
      >
        <span>{{ award.title }}</span>
        <span>{{ award.number }}張</span>
      </li>
    </ul>
    <button
      type="button"
      class="btn btn-primary mt-2 me-2"
      @click="$emit('finish')"
    >
      結束抽籤
    </button>
  </div>
</template>

<script>
export default {
  props: ['awardArray', 'totalNumber'],
  emits: ['finish'],
  // data() {
  //   return {
  //     remainingNumber: 0,
  //   };
  // },
  computed: {
    remainingNumber() {
      let count = 0;
      this.awardArray.forEach((award) => {
        count += award.number;
      });
      return count;
    },
  },
};
</script>
