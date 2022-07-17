<template>
  <div class="container-fluid bg-info min-vh-100" >
    <div class="row min-vh-100">
      <!-- column left -->
      <Setting @emit-award="updateAwards"></Setting>
      <!-- column right -->
      <div class="col-sm-9">
        <div class="mt-3">
          <h4>已輸入獎項： 共 {{totalNumber}} 張</h4>
          <div class="inputList" v-if="awards.length > 0">
            <ul class="list-group">
              <li
                class="list-group-item position-relative"
                v-for="(award, index) in awards"
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
              class="btn btn-primary mt-2" @click="getAwardsArray"
              :disabled="isConfirmed"
            >輸出籤紙</button>
          </div>
        </div>
        <hr>
        <Awards :awards="awards" v-if="!isConfirmed"></Awards>
        <Cards :award-array="awardsArray" v-else></Cards>
      </div>
    </div>
  </div>
</template>

<script>
import Setting from '@/components/AdminSetting.vue';
import Cards from '@/components/AdminCards.vue';
import Awards from '@/components/Awards.vue';

export default {
  components: {
    Setting,
    Cards,
    Awards,
  },
  data() {
    return {
      awards: [],
      awardsArray: [],
      isConfirmed: false,
    };
  },
  methods: {
    updateAwards(data) {
      this.awards.push(data);
    },
    deleteAward(award) {
      this.awards = this.awards.filter((item) => award.title !== item.title);
    },
    getAwardsArray() {
      this.isConfirmed = true;
      this.awards.forEach((item) => {
        const arr = Array(item.number).fill(item);
        this.awardsArray = this.awardsArray.concat(arr);
      });
    },
    revise() {
      this.isConfirmed = false;
      this.awardsArray = [];
    },
  },
  computed: {
    totalNumber() {
      let count = 0;
      this.awards.forEach((award) => {
        count += award.number;
      });
      return count;
    },
  },
};
</script>
