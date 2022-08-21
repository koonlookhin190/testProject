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
  margin: auto;
  margin-top: 100px;
}

th {
  width: 230px;
  color: #eff9fe;
  font-weight: 100;
  background: #435d45;
  padding: 20px;
  text-align: center;
}

td {
  background: #eff9fe;
  border-top: dotted 1px #435d45;
  padding: 20px;
}
</style>
