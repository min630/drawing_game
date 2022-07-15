<template>

    <h3 class="my-2">獎項及張數：共 {{ totalNumber }} 張</h3>
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
        :disabled="isConfirmed"
      >
        輸出籤紙
      </button>
      <button
        type="button"
        class="btn btn-secondary mt-2"
        @click="finishPlay"
        v-if="isConfirmed"
      >
        結束抽籤
      </button>
    </div>
</template>

<script>
import Luffy from '@/assets/onepiece01_luffy.png';
import Zoro from '@/assets/onepiece02_zoro.png';
import Sanji from '@/assets/onepiece05_sanji.png';
import Chopper from '@/assets/onepiece06_chopper.png';
import None from '@/assets/syougatsu_chara_hatsuhinode.png';

const dummyData = [
  {
    title: 'A賞 魯夫',
    number: 2,
    imageUrl: Luffy,
  },
  {
    title: 'B賞 索隆',
    number: 2,
    imageUrl: Zoro,
  },
  {
    title: 'C賞 香吉',
    number: 2,
    imageUrl: Sanji,
  },
  {
    title: 'D賞 喬巴',
    number: 2,
    imageUrl: Chopper,
  },
  {
    title: 'E賞 玻璃杯',
    number: 20,
    imageUrl: None,
  },
  {
    title: 'F賞 色紙',
    number: 24,
    imageUrl: None,
  },
  {
    title: 'G賞 資料夾',
    number: 28,
    imageUrl: None,
  },
];
export default {
  data() {
    return {
      awardArray: [],
      cardArray: [],
      isConfirmed: false,
    };
  },
  methods: {
    getAwardsArray() {
      this.isConfirmed = true;
      this.awardArray.forEach((item) => {
        const arr = Array(item.number).fill(item);
        this.cardArray = this.cardArray.concat(arr);
      });
      this.cardArray = this.getRandomCardsArray(this.cardArray);
      this.$emit('emitCardArray', this.cardArray);
    },
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
    finishPlay() {
      this.isConfirmed = false;
      this.cardArray = [];
    },
  },
  created() {
    this.awardArray = dummyData;
  },
  computed: {
    totalNumber() {
      let count = 0;
      this.awardArray.forEach((award) => {
        count += award.number;
      });
      return count;
    },
  },
};
</script>
