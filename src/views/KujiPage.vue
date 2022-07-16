<template>
    <div class="container-fluid bg-info min-vh-100">
    <div class="row min-vh-100">
      <div class="col-sm-3 px-3 border-dark border-end">
        <UserSetting @emit-cards="getCardArray"></UserSetting>
      </div>
      <div class="col-sm-9">
        <Cards :cardArray="randomCardArray" ></Cards>
      </div>
    </div>
  </div>
</template>

<script>
import UserSetting from '@/views/UserSetting.vue';
import Cards from '@/components/Cards.vue';

export default {
  components: {
    UserSetting,
    Cards,
  },
  data() {
    return {
      randomCardArray: [],
    };
  },
  methods: {
    getCardArray(data) {
      this.randomCardArray = data;
      // console.log(this.randomCardArray);
    },
  },
};
</script>
