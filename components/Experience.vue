<template>
  <div :class="$style.wrapper">
    <div :class="$style.header">
      <h1>Work Experience</h1>
    </div>
    <div :class="$style.experienceGrid">
      <div :class="$style.box">1</div>
      <div :class="$style.box">2</div>
      <div :class="$style.box">3</div>
      <div :class="$style.box">4</div>
      <div :class="$style.box">5</div>
      <div :class="$style.box">6</div>
      <div :class="$style.box">7</div>
      <div :class="$style.box">8</div>
      <div :class="$style.box">9</div>

    </div>
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

.experience-grid {
  display: grid;
  grid-template-columns: 100px 20px 100px;
}

.box {
  background-color: #f7f7f7;
  color: #7da2a9;
//   height: 30px;
//   width: 25vw;
  margin: 5px;
  margin-bottom: 32px;
}

</style>