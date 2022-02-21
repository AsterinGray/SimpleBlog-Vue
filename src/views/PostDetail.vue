<template>
  <router-link to="/">Back to Home</router-link>
  <div class="post" v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
  <div>
    <h2 class="title">Comments</h2>
    <div class="container">
      <comment-card
        v-for="comment in comments"
        :key="comment.id"
        :body="comment.body"
        :email="comment.email"
        :name="comment.name"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CommentCard from "../components/CommentCard.vue";
export default {
  data() {
    return {
      post: {},
      comments: [],
      author: {},
    };
  },
  components: {
    CommentCard,
  },
  mounted() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
      )
      .then((res) => (this.post = res.data));

    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}/comments`
      )
      .then((res) => (this.comments = res.data));
  },
};
</script>

<style scoped>
.container {
  display: grid;
  gap: 1rem;
}

.post {
  text-align: left;
}

.title {
  text-align: left;
  margin-top: 5rem;
}
</style>
