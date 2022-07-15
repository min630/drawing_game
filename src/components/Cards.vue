<template>
  <div class="row cards">
    <div class="col-sm-2 g-2" v-for="(item, index) in inputCardsArray" :key="index">
      <div class="card h-100">
        <div class="card-body">
          <div class="card-title">{{ item.title }}</div>
          <div class="text-center">
            <img :src="item.imageUrl" alt="" style="height: 40px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cardArray'],
  data() {
    return {
      inputCardsArray: [],
    };
  },
  methods: {},
  // created() {
  //   this.inputCardsArray = this.cardArray;
  // },
  watch: {
    cardArray() {
      this.inputCardsArray = this.cardArray;
    },
  },
};
</script>
