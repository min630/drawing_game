<template>
  <div class="row cards">
    <div
      class="col-4 col-md-2 g-3"
      v-for="(item, index) in cardArray"
      :key="index"
    >
      <div class="card h-100 back" ref="card" @click="flipCard(item, index)">
        <div
          class="card-body d-flex justify-content-center align-items-center"
        ></div>
      </div>
    </div>
  </div>
  <!-- show award -->
  <ShowAward :picked-item="pickedCard" ref="show"></ShowAward>
  <div class="text-end">
    sound from
    <a
      href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=39222"
      >Pixabay</a
    >
  </div>
</template>

<script>
import flipAudio from '@/assets/flip.mp3';
import ShowAward from './ShowAward.vue';

export default {
  components: {
    ShowAward,
  },
  props: ['cardArray'],
  data() {
    return {
      inputCardsArray: [],
      pickedCard: {},
    };
  },
  emits: ['reduceAward'],
  methods: {
    flipCard(item, index) {
      this.playFlipAudio();
      this.$emit('reduceAward', item);
      this.pickedCard = item;
      this.$refs.show.showAward();
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
    playFlipAudio() {
      const audio = new Audio(flipAudio);
      audio.play();
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
