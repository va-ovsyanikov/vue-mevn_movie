<template>
  <v-container mt-6>
    <h3>Добавить новый фильм</h3>
    <!-- <Modal v-if="NOTICE_CREATE" @alertHide="alertHide">{{
      NOTICE_CREATE
    }}</Modal> -->
    <v-form
      ref="form"
      v-model.trim="valid"
      @submit.prevent="submitForm"
      lazy-validation
      class="mt-6"
      action="add-post"
      method="post"
      enctype="multipart/form-data"
    >
      <v-text-field
        v-model.trim="post.title"
        :counter="10"
        :rules="titleRules"
        label="Название фильма"
        required
        prepend-icon="mdi-note"
        name="title"
      ></v-text-field>

      <v-text-field
        v-model.trim="post.category"
        :rules="categoryRules"
        label="Жанр"
        required
        prepend-icon="mdi-view-list"
        name="category"
      ></v-text-field>

      <v-text-field
        type="number"
        v-model.trim="post.released"
        :rules="releasedRules"
        label="Релиз"
        required
        prepend-icon="mdi-bookmark-check"
        name="released"
      ></v-text-field>
      <v-textarea
        clearable
        clear-icon="mdi-close-circle"
        label="Описание"
        required
        :rules="descRules"
        class="mb-6"
        prepend-icon="mdi-note-plus"
        name="description"
        v-model.trim="post.description"
      ></v-textarea>

      <v-text-field
        v-model.trim="post.preview"
        :rules="previewRules"
        label="Трейлер (iframe)"
        required
        prepend-icon="mdi-movie-open-play"
        name="preview"
      ></v-text-field>

      <v-file-input
        v-model="file"
        label="Изображение"
        counter
        required
        :rules="fileRules"
        multiple
        name="uploadImage"
        @change="selectFile"
      ></v-file-input>
      <div class="btn_group">
        <v-btn :disabled="!valid" color="success" class="mr-4" type="submit">
          Добавить
        </v-btn>
        <v-btn color="warning" class="mr-4" @click="reset"> Сброс </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
// import Modal from "../components/Modal.vue";
export default {
  name: "AddPost",
  components: {
    // Modal,
  },
  data: () => ({
    alert_show: "",
    valid: false,
    file: [],
    post: {
      title: "",
      category: "",
      released: "",
      preview: "",
      description: "",
      image: "",
    },

    titleRules: [(v) => !!v || "Название обязательно"],

    categoryRules: [(v) => !!v || "Жанр обязательно"],

    releasedRules: [(v) => !!v || "Релиз обязательно"],

    previewRules: [(v) => !!v || "Трейлер обязательно"],

    descRules: [(v) => !!v || "Описание обязательно"],

    fileRules: [
      (v) => !!v || "Изображение обязательно",
      (v) => (v && v.length > 0) || "Изображение обязательно",
    ],
  }),
  computed: {
    ...mapGetters(["NOTICE_CREATE"]),
  },
  methods: {
    ...mapActions(["CREATE_POST"]),
    ...mapMutations(["NOTICE_HIDE"]),
    selectFile(file) {
      this.post.image = file[0];
    },

    submitForm() {
      this.$refs.form.validate();
      let formData = new FormData();
      formData.append("title", this.post.title);
      formData.append("category", this.post.category);
      formData.append("released", this.post.released);
      formData.append("preview", this.post.preview);
      formData.append("description", this.post.description);
      formData.append("image", this.post.image);
      this.CREATE_POST(formData).then(()=>this.$router.push({ name: "Home" }))
      if (!this.$refs.form.validate()) {
        this.$refs.form.reset();
      }
     
    },
    // alertHide() {
    //   this.NOTICE_HIDE();
      
    // },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
<style lang="less" scoped>
.btn_group {
  margin-top: 30px;
}
</style>