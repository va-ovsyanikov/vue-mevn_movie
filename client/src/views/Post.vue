<template>
  <v-container mt-2 mb-10>
    <BtnPrev />
    <!-- <Modal v-if="noticeDelete" @alertHide="alertHide">{{ noticeDelete }}</Modal> -->
    <v-row>
      <v-card class="mx-auto">
        <!-- <v-img
          class="white--text align-end"
          :src="`http://localhost:3001/${post.image}`"
        >
          <v-card-title
            ><h3>{{ post.title }}</h3></v-card-title
          >
        </v-img> -->
        <v-card-subtitle class="pb-0"
          >Добавлено: {{ post.created }}</v-card-subtitle
        >
        <v-card-subtitle class="pb-0"
          >Жанр: {{ post.category }}</v-card-subtitle
        >
        <v-card-subtitle>Релиз: {{ post.released }}</v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text class="text--primary">
          <div>{{ post.description }}</div>
        </v-card-text>
        <div class="preview" v-html="`${post.preview}`"></div>
        <v-divider></v-divider>
        <v-card-actions class="mb-3 mt-3">
          <v-btn color="success" @click="editPost"> Редактирование </v-btn>
          <v-btn color="error" @click="deletePost"> Удаление </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
// import Modal from "../components/Modal.vue";
import BtnPrev from "../components/BtnPrev.vue";
export default {
  name: "Post",
  components: {
    // Modal,
    BtnPrev,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      post: "GET_POST",
      noticeDelete: "NOTICE_DELETE",
    }),
  },
  methods: {
    ...mapActions(["FETCH_POST", "DELETE_POST"]),
    ...mapMutations(["NOTICE_HIDE"]),
    deletePost() {
      this.DELETE_POST(this.$route.params.id);
      this.$router.push({ name: "Home" });
    },
    editPost() {
      this.$router.push({ name: "EditPost", params: { id: this.post._id } });
    },
  },
  mounted() {
    this.FETCH_POST(this.$route.params.id);
  },
};
</script>

<style lang="less">
.preview {
  position: relative;
  // padding: 0 0 56.25% 0;
  height: 0;
  overflow: hidden;
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>