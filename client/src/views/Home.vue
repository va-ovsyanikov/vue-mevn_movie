<template>
  <v-app class="pt-7 mb-10">
    <v-container>
      <v-row>
        <ItemPost
          v-for="(post, i) in GET_POSTS"
          :key="i"
          :image="post.image"
          :category="post.category"
          :released="post.released"
          :title="post.title"
          :id="post._id"
         
        />
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import ItemPost from "../components/ItemPost.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    // Modal,
    ItemPost,
  },
  data() {
    return {
      posts: "",
    };
  },
  computed: {
    ...mapGetters(["GET_POSTS"]),
  },
  methods: {
    ...mapActions(["FETCH_POSTS"]),
  },
  mounted() {
    this.FETCH_POSTS();
  },
};
</script>
<style lang="less" scoped>

</style>