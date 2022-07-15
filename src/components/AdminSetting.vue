<template>
  <div class="col-sm-3 px-3 border-dark border-end">
    <form>
      <h3 class="my-2">設定獎項及張數：</h3>
      <div class="mb-2">
        <label for="title" class="form-label">輸入獎項</label>
        <input
          type="text"
          class="form-control"
          id="title"
          aria-describedby="example"
          v-model="tempAward.title"
        />
      </div>
      <div class="mb-2">
        <label for="number" class="form-label">輸入張數</label>
        <input
          type="number"
          class="form-control"
          id="number"
          aria-describedby="example"
          min="1"
          max="80"
          v-model="tempAward.number"
        />
      </div>
      <div class="mb-2">
        <label for="imageUrl" class="form-label">圖片連結</label>
        <input
          type="text"
          class="form-control"
          id="imageUrl"
          aria-describedby="example"
          v-model="tempAward.imageUrl"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="addItem">
        新增
      </button>
    </form>

  </div>
</template>

<script>
import imgPlaceholder from '../assets/imgPlaceholder.jpg';

export default {
  data() {
    return {
      tempAward: {
        title: '',
        number: 0,
        imageUrl: '',
      },
    };
  },
  methods: {
    addItem() {
      if (!this.tempAward.title) {
        window.alert('請輸入獎項');
      } else if (this.tempAward.number === 0) {
        window.alert('請輸入大於 0 的張數');
      } else {
        const addedItem = { ...this.tempAward };
        if (!addedItem.imageUrl) {
          addedItem.imageUrl = imgPlaceholder;
        }
        this.$emit('emit-award', addedItem);
        this.tempAward = {};
      }
    },
  },
};
</script>
