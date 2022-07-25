<template>
<Navbar></Navbar>
  <div class="container-fluid bg-info min-vh-100">
    <div class="row min-vh-100">
      <!-- column left -->
      <div class="col-sm-3 px-3 border-dark border-end">
        <CustomSetting @emit-award="updateAwards" v-if="!isConfirmed"></CustomSetting>
        <AwardsCountdown
          v-else
          :award-array="awardArray"
          :total-number="totalNumber"
          @finish="clearCards"
        >
        </AwardsCountdown>
      </div>
      <!-- column right -->
      <div class="col-sm-9">
        <template v-if="!isConfirmed">
          <div class="mt-3">
            <h4>已輸入獎項： 共 {{ totalNumber }} 張</h4>
            <div class="inputList" v-if="awardArray.length > 0">
              <ul class="list-group">
                <li
                  class="list-group-item position-relative"
                  v-for="(award, index) in awardArray"
                  :key="index"
                >
                  <span>{{ award.title }}，{{ award.number }}張</span>
                  <button
                    type="button"
                    class="btn btn-sm position-absolute end-0 lh-1"
                    @click="deleteAward(award)"
                    v-if="!isConfirmed"
                  >
                    X
                  </button>
                </li>
              </ul>
              <button
                type="button"
                class="btn btn-primary mt-2"
                @click="getCardArray"
                :disabled="isConfirmed"
              >
                輸出籤紙
              </button>
            </div>
          </div>
          <hr />
        </template>
        <Awards :awards="awardArray" v-if="!isConfirmed"></Awards>
        <Cards
          :card-array="cardArray"
          @reduce-award="getRemainAwards"
          v-else
        ></Cards>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSetting from '@/components/CustomSetting.vue';
import Awards from '@/components/Awards.vue';
import Cards from '@/components/Cards.vue';
import AwardsCountdown from '@/components/AwardsCountdown.vue';
import Navbar from '@/components/Navbar.vue';
import { getRandomCardsArray, getTotalNumber, getRemainAwards } from '@/methods/mixins';

export default {
  components: {
    Navbar,
    CustomSetting,
    Cards,
    Awards,
    AwardsCountdown,
  },
  data() {
    return {
      awardArray: [],
      cardArray: [],
      getArray: [],
      isConfirmed: false,
    };
  },
  methods: {
    updateAwards(data) {
      this.awardArray.push(data);
    },
    deleteAward(award) {
      this.awardArray = this.awardArray.filter((item) => award.title !== item.title);
    },
    getCardArray() {
      this.isConfirmed = true;
      this.awardArray.forEach((item) => {
        const arr = Array(item.number).fill(item);
        this.cardArray = this.cardArray.concat(arr);
      });
      this.cardArray = this.getRandomCardsArray(this.cardArray);
    },
    clearCards() {
      this.awardArray = [];
      this.cardArray = [];
      this.isConfirmed = false;
      this.getArray = [];
    },
    getRandomCardsArray,
    getTotalNumber,
    getRemainAwards,
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
