<template>
<Navbar></Navbar>
  <div class="container-fluid bg-info min-vh-100">
    <div class="row min-vh-100">
      <!-- column left -->
      <div class="col-sm-3 px-3 border-dark border-end">
        <template v-if="!isConfirmed">
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
            </li>
          </ul>
          <button
            type="button"
            class="btn btn-primary mt-2 me-2"
            @click="getCardArray"
          >
            輸出籤紙
          </button>
          </div>
        </template>
        <AwardsCountdown v-else
          :award-array="awardArray"
          :total-number="totalNumber"
          @finish="clearCards"
          >
        </AwardsCountdown>
      </div>
      <!-- column right -->
      <div class="col-sm-9 px-3">
        <Awards :awards="awardArray" v-if="!isConfirmed"></Awards>
        <Cards :card-array="cardArray" @reduce-award="getRemainAwards" v-else></Cards>
      </div>
    </div>
  </div>

</template>

<script>
import Luffy from '@/assets/onepiece01_luffy.png';
import Zoro from '@/assets/onepiece02_zoro.png';
import Sanji from '@/assets/onepiece05_sanji.png';
import Chopper from '@/assets/onepiece06_chopper.png';
import Awards from '@/components/Awards.vue';
import Cards from '@/components/Cards.vue';
import AwardsCountdown from '@/components/AwardsCountdown.vue';
import Navbar from '@/components/Navbar.vue';
import { getRandomCardsArray, getTotalNumber, getRemainAwards } from '@/methods/mixins';

const dummyData = [
  {
    title: 'A賞 魯夫',
    number: 2,
    imageUrl: Luffy,
    content: '獎品描述：(大小、材質...)',
  },
  {
    title: 'B賞 索隆',
    number: 2,
    imageUrl: Zoro,
    content: '獎品描述：(大小、材質...)',
  },
  {
    title: 'C賞 香吉',
    number: 2,
    imageUrl: Sanji,
    content: '獎品描述：(大小、材質...)',
  },
  {
    title: 'D賞 喬巴',
    number: 2,
    imageUrl: Chopper,
    content: '獎品描述：(大小、材質...)',
  },
  {
    title: 'E賞 玻璃杯',
    number: 20,
    imageUrl: 'https://1.bp.blogspot.com/-KDp9cwp6ZpI/VcMmJ7DzycI/AAAAAAAAwds/d58TYNwsOhE/s800/edo_kiriko.png',
    content: '獎品描述：(大小、材質...)',
  },
  {
    title: 'F賞 色紙',
    number: 24,
    imageUrl: 'https://1.bp.blogspot.com/-sb6_0EndDj4/XexrdNZlw1I/AAAAAAABWpM/m8dTVCD9jx4h3RzER6acvUFx3evYCqsEACNcBGAsYHQ/s1600/train_arashiyama_torokko_kouyou.png',
    content: '獎品描述：(大小、材質...)',
  },
  {
    title: 'G賞 資料夾',
    number: 28,
    imageUrl: 'https://2.bp.blogspot.com/-77sjTmJfZpk/UWJVw8Nw5sI/AAAAAAAAPa8/D6KJwXRLF9Y/s400/season_11_tate.jpg',
    content: '獎品描述：(大小、材質...)',
  },
];
export default {
  components: {
    Navbar,
    Awards,
    Cards,
    AwardsCountdown,
  },
  data() {
    return {
      awardArray: [],
      cardArray: [],
      getArray: [],
      totalNumber: 0,
      isConfirmed: false,
    };
  },
  methods: {
    getCardArray() {
      this.isConfirmed = true;
      this.awardArray.forEach((item) => {
        const arr = Array(item.number).fill(item);
        this.cardArray = this.cardArray.concat(arr);
      });
      this.cardArray = this.getRandomCardsArray(this.cardArray);
    },
    clearCards() {
      this.awardArray = JSON.parse(JSON.stringify(dummyData));
      this.cardArray = [];
      this.isConfirmed = false;
      this.getArray = [];
    },
    getRandomCardsArray,
    getRemainAwards,
    getTotalNumber,
  },
  created() {
    this.awardArray = JSON.parse(JSON.stringify(dummyData));
    this.totalNumber = this.getTotalNumber();
  },
};
</script>
