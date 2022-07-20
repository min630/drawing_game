<template>
  <div class="row cards">
    <div
      class="col-4 col-md-2 g-3"
      v-for="(item, index) in inputCardsArray"
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
</template>

<script>
import flipAudio from '@/assets/audio/flip.mp3';
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
      audio: null,
    };
  },
  emits: ['reduceAward'],
  methods: {
    flipCard(item, index) {
      const cards = document.querySelectorAll('.card');
      if (cards[index].classList.contains('front')) return;
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
      this.playFlipAudio();
      this.$emit('reduceAward', item);
      this.pickedCard = item;
      this.$refs.show.showAward();
    },
    playFlipAudio() {
      this.audio.play();
    },
  },
  // watch: {
  //   cardArray() {
  //   },
  // },
  created() {
    this.audio = new Audio(flipAudio);
    this.inputCardsArray = this.cardArray;
  },
};
</script>

<style scoped>
.card-body {
  max-width: 150px;
  height: 80px;
}
.back {
  background: url('../assets/image/bg-card.png');
  background-size: cover;
  cursor: pointer;
}
.front {
  border: thick double red;
}
</style>
