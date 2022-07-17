<template>
<router-view></router-view>
<!-- footer -->
<div class="footer bg-dark text-center text-white">
  <span>&copy; min630 &nbsp;</span>
  <span>
    Audio from
    <a
      href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=39222"
      >Pixabay &nbsp;</a
    >
  </span>
  <span>
    Image from
    <a href="https://www.irasutoya.com/">
      irasutoya.com
    </a>
  </span>
</div>
</template>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  cursor: pointer;
}
</style>
