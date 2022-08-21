<template>
  <div id="flashMessage" v-if="GStore.flashMessage">
    {{ GStore.flashMessage }}
  </div>
  <div class="title">
    <h1>🏥 COVID-19 VACCINATION 💉</h1>
  </div>
  <router-view />
</template>
<script>
export default {
  inject: ['GStore']
}
</script>
<style>
@keyframes fade {
  from {
    background: #f9ffc2;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: fade;
  animation-duration: 5s;
}

body {
  background: #7da1d4;
}

.title {
  padding: 40px;
  background: #eff9fe;
}

#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

@import '~bootstrap/dist/css/bootstrap.css';
</style>
