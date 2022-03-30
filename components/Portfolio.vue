<template>
  <div :class="$style.wrapper">
    <div :class="$style.header">
      <h1>Portfolio</h1>
    </div>
    <div :class="$style.portfolioGrid">
      <div :class="$style.box">1</div>
      <div :class="$style.box">2</div>
      <div :class="$style.box">3</div>
      <div :class="[$style.box, { [$style.hide]: isHidden }]">4</div>
      <div :class="[$style.box, { [$style.hide]: isHidden }]">5</div>
      <div :class="[$style.box, { [$style.hide]: isHidden }]">6</div>
      <div :class="[$style.box, { [$style.hide]: isHidden }]">7</div>
      <div :class="[$style.box, { [$style.hide]: isHidden }]">8</div>
      <div :class="[$style.box, { [$style.hide]: isHidden }]">9</div>
    </div>
    <button :class="$style.moreButton" @click="toggleHidden()">See More</button>
  </div>
</template>

<script>
export default {
  name: 'Bundle',
  data: () => ({
    isHidden: true
  }),
  methods: {
    toggleHidden() {
      this.isHidden = !this.isHidden
    },
  }
} 

</script>

<style lang="scss" module>
.wrapper {
  display: grid;
  justify-items: center;
  font-size: 24px;
  padding-top: 5%;
  padding-bottom: 5%;
}

.portfolioGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.box {
  background-color: #f7f7f7;
  color: #7da2a9;
  height: 60vh;
  width: 25vw;
  margin: 16px;
  margin-bottom: 32px;
}

.hide {
  display: none;
}

.more-button{
  background-color: transparent;
  color: #f7f7f7;
  font-size: 16px;
  border: none;
}
</style>