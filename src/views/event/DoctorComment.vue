<template>
  <div class="event-card">
    <div class="row">
      <div class="col-6">
        <CommentForm @comment-submited="addComment" />
      </div>
      <div class="col-6">
        <CommentList
          v-if="GStore.comments"
          :comments="GStore.patient.doctorRec"
          :commentsHistory="GStore.commentsHistory"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CommentForm from '@/components/CommentForm.vue'
import CommentList from '@/components/CommentList.vue'
import GStore from '@/store'

export default {
  inject: ['GStore'],
  components: {
    CommentForm,
    CommentList
  },
  methods: {
    addComment(comment) {
      console.log(comment)
      GStore.comments.push(comment)
      GStore.patient.doctorRec = GStore.comments.filter(
        (patient) => GStore.patient.id == patient.patient_id
      )
    }
  }
}
</script>
