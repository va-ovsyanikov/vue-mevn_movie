<template>
  <v-app class="pt-7">
    <v-container>
      <!-- <Modal v-if="NOTICE_DELETE">{{ NOTICE_DELETE }}</Modal> -->
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
// import Modal from "../components/Modal.vue";
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
    // addPostLink(){
    //   this.$route.push({name:'Post', params: { id: this.post._id }} )
    // }
  },
  mounted() {
    this.FETCH_POSTS();
  },
};
</script>
<style lang="less" scoped>

</style>