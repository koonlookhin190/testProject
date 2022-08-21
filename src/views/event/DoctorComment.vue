<template>
  <CommentForm @comment-submited="addComment" />
  <CommentList
    v-if="GStore.comments"
    :comments="GStore.patient.doctorRec"
    :commentsHistory="GStore.commentsHistory"
  />
</template>
<script>
import CommentForm from "@/components/CommentForm.vue";
import CommentList from "@/components/CommentList.vue";
import GStore from "@/store";

export default {
  inject: ["GStore"],
  components: {
    CommentForm,
    CommentList,
  },
  methods: {
    addComment(comment) {
      console.log(comment);
      GStore.comments.push(comment);
      GStore.patient.doctorRec = GStore.comments.filter(
        (patient) => GStore.patient.id == patient.patient_id
      );
    },
  },
};
</script>
