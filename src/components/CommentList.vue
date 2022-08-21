<template>
  <div class="comment-container">
    <h3>Comments:</h3>
    <ul>
      <li
        v-for="commentHistory in commentsHistory.comment"
        :key="commentHistory"
      >
        Patient Name: {{ commentHistory.patient_name }}
        {{ commentHistory.patient_surname }}
        <br />
        Doctor name: {{ commentHistory.name }}
        <br />
        Date: {{ commentHistory.date }}
        <br />
        Comment:{{ commentHistory.comment }}
        <br />
      </li>
    </ul>
    <ul>
      <li v-for="(comment, index) in comments" :key="index">
        Patient Name: {{ comment.patient_name }}
        {{ comment.patient_surname }}
        <br />
        Doctor name: {{ comment.name }}
        <br />
        Date: {{ comment.date }}
        <br />
        Comment:{{ comment.comment }}
        <br />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['comments', 'commentsHistory']
}
</script>
<style scoped>
li {
  font-size: 18px;
}
.comment-container {
  width: 425px;
  padding: 20px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 20px -12px rgba(0, 0, 0, 0.57);
  margin-left: 40px;
  border: 2px solid #d8d8d8;
}

.comment-container li {
  margin-bottom: 30px;
}
</style>
