<template>
  <div class="row">
    <div class="box">
      <img :src="patient.image" class="image" />
      <h4>Name: {{ patient.name }} {{ patient.surname }}</h4>
      <p>Age: {{ patient.age }}</p>
      <p>Gender: {{ patient.gender }}</p>
      <p>Hometown: {{ patient.hometown }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['patient']
}
</script>
<style scoped>
.image {
  width: 200px;
  height: 260px;
  margin: 20px 0;
  border-radius: 15px;
}

h4 {
  padding-bottom: 10px;
}

.box {
  width: 500px;
  padding: 10px;
  border-radius: 10px;
  margin: 80px 500px 200px;
  background: #eff9fe;
}
</style>
