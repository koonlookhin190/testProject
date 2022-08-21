<template>
  <div>
    <table>
      <tr>
        <th>Dose No.</th>
        <th>Type</th>
        <th>Date</th>
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
  props: ["vaccines"],
};
</script>
<style scoped>
table,
th,
td {
  border: 1px solid black;
}
</style>
