<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link to="/" class="navbar-brand" href="#">Belly Begone</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <router-link to="/account/signup" class="nav-item" activeClass="active" tag="li">
          <a class="nav-link">Signup</a>
        </router-link>
        <router-link to="/account/login" class="nav-item" activeClass="active" tag="li">
          <a class="nav-link">Login</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  /* background: transparent; */
}
.navbar .navbar-brand {
  /* color: #fff; */
}
</style>

<script>
export default {};
</script>