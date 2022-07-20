<template>
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
    <div class="mb-2">
    <label for="content" class="form-label">獎項描述</label>
      <input
        type="text"
        class="form-control"
        id="content"
        aria-describedby="example"
        v-model="tempAward.content"
      />
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="addItem">
      新增
    </button>
  </form>
</template>

<script>
import imgPlaceholder from '../assets/image/imgPlaceholder.jpg';

export default {
  data() {
    return {
      tempAward: {
        title: '',
        number: 0,
        imageUrl: '',
        content: '',
      },
      alert: null,
    };
  },
  methods: {
    addItem() {
      if (!this.tempAward.title) {
        this.alert('請輸入獎項名稱');
      } else if (this.tempAward.number === 0) {
        this.alert('請輸入大於 0 的張數');
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
