<template>
  <form class="comment-form" @submit.prevent="onSubmit">
    <label for="name">Doctor Name:</label>
    <input id="name" v-model="name" />

    <label for="date">Date:</label>
    <input id="date" v-model="date" />

    <label for="comment">Comment:</label>
    <textarea id="comment" v-model="comment"></textarea>

    <input class="button" type="submit" value="Submit" />
  </form>
</template>
<script>
import GStore from '@/store'
export default {
  inject: ['GStore'],
  data() {
    return {
      patient_id: '',
      patient_name: '',
      patient_surname: '',
      name: '',
      comment: '',
      date: null
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.comment === '' || this.date === null) {
        alert('Comment incomplete. Please fill out every field.')
        return
      }
      this.GStore.flashMessage = 'The comment is being added '
      setTimeout(() => {
        //After 3.5 secound remove it
        this.GStore.flashMessage = ''
      }, 3500)
      let doctorComment = {
        patient_id: GStore.patient.id,
        patient_name: GStore.patient.name,
        patient_surname: GStore.patient.surname,
        name: this.name,
        comment: this.comment,
        date: this.date
      }
      this.$emit('comment-submited', doctorComment)
      this.patient_id = ''
      this.patient_name = ''
      this.patient_surname = ''
      this.name = ''
      this.comment = ''
      this.date = null
    }
  }
}
</script>
<style scoped>
input {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
}

label {
  font-size: 20px;
  margin-bottom: 5px;
  text-align: left;
}

.comment-form {
  display: flex;
  flex-direction: column;
  width: 420px;
  padding: 20px;
  margin: auto;
  margin-top: 40px;
  border: 2px solid #d8d8d8;
  border-radius: 10px;
  background: #eff9fe;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

.comment-form .button {
  display: block;
  margin: auto;
  margin-top: 25px;
  background: #b5c7df;
  border: 2px solid #d8d8d8;
  border-radius: 5px;
}

textarea {
  width: 100%;
  height: 70px;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 10px;
}

@media only screen and (max-width: 600px) {
  .comment-form {
    width: 90%;
  }
}
</style>
