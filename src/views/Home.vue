<template>
  <h1>Posts</h1>
  <div class="content">
    <post-card
      v-for="(post, index) in posts"
      :key="index"
      :id="post.id"
      :userId="post.id"
      :title="post.title"
      :body="post.body"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import PostCard from "../components/PostCard.vue";

export default {
  components: {
    PostCard,
  },
  computed: {
    ...mapState({
      posts: "posts",
    }),
  },
  mounted() {
    this.$store.dispatch("getAllPost");
  },
};
</script>

<style scoped>
.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
</style>
