<template>
  <div class="box">
    <img :src="patient.image" class="image" />
    <h4>Name: {{ patient.name }} {{ patient.surname }}</h4>
    <p>Age: {{ patient.age }}</p>
    <p>Gender: {{ patient.gender }}</p>
    <p>Hometown: {{ patient.hometown }}</p>
  </div>
</template>
<script>
export default {
  props: ['patient']
}
</script>
<style scoped>
.box {
  width: 500px;
  padding: 10px;
  margin: auto;
  margin-top: 60px;
  border-radius: 10px;
  background: #eff9fe;
}

.image {
  width: 200px;
  height: 260px;
  margin: 20px 0;
  border-radius: 15px;
}

h4 {
  padding-bottom: 10px;
}
</style>
