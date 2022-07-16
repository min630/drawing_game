<template>
  <div class="row cards">
    <div class="col-sm-4 col-md-2 g-2" v-for="(item, index) in inputCardsArray" :key="index">
      <div class="card h-100 back" ref="card" @click="flipCard(item, index)">
        <div class="card-body d-flex justify-content-center align-items-center" >
          <!-- <div class="title">{{ item.title }}</div> -->
          <!-- <div class="text-center">
            <img :src="item.imageUrl" alt="" style="height: 40px" />
          </div> -->
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
  methods: {
    flipCard(item, index) {
      const cards = document.querySelectorAll('.card');
      Array.from(cards).map((card, key) => {
        if (key === index) {
          card.classList.remove('back');
          card.classList.add('front');
          card.firstChild.innerHTML = `
            <div class="title text-center  align-items-center">${item.title}</div>
          `;
        }
        return card;
      });
    },
  },
  watch: {
    cardArray() {
      this.inputCardsArray = this.cardArray;
    },
  },
};
</script>

<style scoped>
  .card-body {
    max-width: 150px;
    height: 80px;
  }
  .back {
    background: url('../assets/card_bg.png');
    background-size: cover;
  }
  .front {
    border: thick double red;
  }
</style>
