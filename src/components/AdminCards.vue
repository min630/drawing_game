<template>
  <div class="row cards">
    <div class="col-sm-2 g-2" v-for="(item, index) in cardsArray" :key="index">
      <div class="card h-100">
        <div class="card-body">
          <div class="card-title">{{ item.title }}</div>
          <div class="text-center">
            <img :src="item.imageUrl" alt="" style="height: 40px">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['awardArray'],
  data() {
    return {
      cardsArray: [],
    };
  },
  methods: {
    getRandomCardsArray(newArray) {
      const inputArray = newArray;
      for (let index = inputArray.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [inputArray[index], inputArray[randomIndex]] = [
          inputArray[randomIndex],
          inputArray[index],
        ];
      }
      return inputArray;
    },
  },
  watch: {
    awardArray() {
      this.cardsArray = this.getRandomCardsArray(this.awardArray);
    },
  },
};
</script>
