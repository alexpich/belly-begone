<template>
  <div class="home">
    <h1>Home Component</h1>
    <Tdee />
  </div>
</template>

<script>
import Tdee from "./Tdee";

export default {
  components: {
    Tdee: Tdee
  }
};
</script>

<style scoped>
.home {
  background: url("../assets/home-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>
