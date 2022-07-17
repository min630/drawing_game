<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="https://1.bp.blogspot.com/-UN3voehd3tQ/XXXOncwrKpI/AAAAAAABUwU/CGhhLUR6b2YuHJ1AS8E9e-RUQjHiEnHTQCLcBGAs/s1600/kuji_ken2_atari.png"
          alt=""
          style="width: 50px"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="showNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/"
            class="nav-link" aria-current="page" href="#">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/default-awards" class="nav-link">預設簽組</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/custom-awards" class="nav-link">自訂簽組</router-link>
          </li>
          <li class="nav-item ">
            <button class="h-100 ms-4 btn btn-outline-info"
              @click="showModal">
            已抽到的獎項</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- modal -->
    <AwardModal ref="awardModal" :awards="awards"></AwardModal>
</template>

<script>
import AwardModal from '@/components/getAwardModal.vue';

export default {
  components: {
    AwardModal,
  },
  data() {
    return {
      awards: [],
    };
  },
  methods: {
    showNavbar() {
      document.querySelector('#navbarNavDropdown').classList.toggle('show');
    },
    showModal() {
      this.$refs.awardModal.openModal();
      this.awards = JSON.parse(localStorage.getItem('awards'));
    },
  },
};
</script>
