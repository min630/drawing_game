<template>
  <div>
    <h3 class="my-2">剩餘獎項及張數： {{ totalNumber }} 張</h3>
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
          <span class="">
            <img
              :src="award.imageUrl"
              class="img position-absolute top-0 end-0"
              style="width: 50px"
              alt=""
            />
          </span>
        </li>
      </ul>
      <button
        type="button"
        class="btn btn-primary mt-2 me-2"
        @click="getAwardsArray"
      >
        輸出籤紙
      </button>
      <!-- <button
        type="button"
        class="btn btn-secondary mt-2"
        @click="finishPlay"
        v-if="isConfirmed"
      >
        結束抽籤
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    
  }
};
</script>
