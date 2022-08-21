<template>
  <div class="row">
    <table>
      <tr>
        <th>DOSE NO.</th>
        <th>TYPE</th>
        <th>DATE</th>
      </tr>
      <tr v-for="vaccine in vaccines.details" :key="vaccine">
        <td>{{ vaccine.number }}</td>
        <td>{{ vaccine.type }}</td>
        <td>{{ vaccine.date }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  props: ['vaccines']
}
</script>
<style scoped>
table {
  margin: 100px 440px 400px;
  color: #161240;
}

th {
  color: #eff9fe;
  font-weight: 100;
  background: #435d45;
  width: 200px;
}

td {
  background: #eff9fe;
  border-top: dotted 1px #435d45;
}

th,
td {
  padding: 20px;
  text-align: center;
}
</style>
