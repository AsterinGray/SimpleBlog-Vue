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
import axios from "axios";

import PostCard from "../components/PostCard.vue";

export default {
  components: {
    PostCard,
  },
  data() {
    return {
      posts: null,
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => (this.posts = res.data));
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
