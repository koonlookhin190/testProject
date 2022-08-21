<template>
  <img :src="patient.image" class="image" />
  <h1>Name: {{ patient.name }} {{ patient.surname }}</h1>
  <p>Age: {{ patient.age }} | Gender: {{ patient.gender }}</p>
  <p>Home town: {{ patient.hometown }}</p>
</template>
<script>
export default {
  props: ["patient"],
};
</script>
<style scoped>
.image {
  width: 255px;
  height: 325px;
}
</style>
