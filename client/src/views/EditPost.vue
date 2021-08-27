<template>
  <v-container mt-6>
    <h3>Редактирование</h3>
    <Modal v-if="notice" @alertHide="alertHide">{{ notice }}</Modal>
    <v-form
      ref="form"
      v-model="valid"
      @submit.prevent="submitForm"
      lazy-validation
      class="mt-6"
      action="add-post"
      method="post"
      enctype="multipart/form-data"
    >
      <v-text-field
        v-model.trim="postEdit.title"
        :counter="10"
        :rules="titleRules"
        label="Название фильма"
        required
        prepend-icon="mdi-note"
        name="title"
      ></v-text-field>

      <v-text-field
        v-model.trim="postEdit.category"
        :rules="categoryRules"
        label="Жанр"
        required
        prepend-icon="mdi-view-list"
        name="category"
      ></v-text-field>

      <v-text-field
        type="number"
        v-model.trim="postEdit.released"
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
        v-model.trim="postEdit.description"
      ></v-textarea>

      <v-text-field
        v-model.trim="postEdit.preview"
        :rules="previewRules"
        label="Трейлер (iframe)"
        required
        prepend-icon="mdi-movie-open-play"
        name="preview"
      ></v-text-field>

      <v-file-input
        v-model="file"
        label="Новое изображение"
        counter
        multiple
        name="uploadImage"
        @change="selectFile"
      ></v-file-input>
      <v-img
        max-height="150"
        max-width="250"
        :src="`/${postEdit.image}`"
      ></v-img>
      <div class="btn_group">
        <v-btn :disabled="!valid" color="success" class="mr-4" type="submit"
          >Изменить</v-btn
        >
        <v-btn color="warning" class="mr-4" @click="reset"> Сброс </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Modal from "../components/Modal.vue";

export default {
  name: "AddPost",
  components: {
    Modal,
  },
  data: () => ({
    alert_show: "",
    valid: true,
    file: [],
    img: "",
    titleRules: [(v) => !!v || "Название обязательно"],

    categoryRules: [(v) => !!v || "Жанр обязательно"],

    releasedRules: [(v) => !!v || "Релиз обязательно"],

    descRules: [(v) => !!v || "Описание обязательно"],

    previewRules: [(v) => !!v || "Трейлер обязательно"],
  }),
  computed: {
    ...mapGetters({
      postEdit: "GET_POST",
      notice: "NOTICE_EDIT",
    }),
  },
  methods: {
    ...mapActions(["CREATE_POST", "FETCH_POST", "EDIT_POST"]),
    ...mapMutations(["NOTICE_HIDE"]),
    selectFile(file) {
      this.img = file[0];
    },

    submitForm() {
      this.$refs.form.validate();
      let formData = new FormData();
      formData.append("title", this.postEdit.title);
      formData.append("category", this.postEdit.category);
      formData.append("released", this.postEdit.released);
      formData.append("preview", this.postEdit.preview);
      formData.append("description", this.postEdit.description);
      formData.append("image", this.img);
      formData.append("oldImage", this.postEdit.image);
      this.EDIT_POST({
        id: this.$route.params.id,
        data: formData,
      });

      if (this.$refs.form.validate()) {
        this.$refs.form.reset();
      }
      
    },
    alertHide() {
      this.NOTICE_HIDE();
      this.$router.push({ name: "Post", params: { id: this.postEdit._id } });
    },
    reset() {
      this.$refs.form.reset();
    },
  },
  mounted() {
    this.FETCH_POST(this.$route.params.id);
  },
};
</script>
<style lang="less" scoped>
.btn_group {
  margin-top: 30px;
}
.v-image {
  margin-top: 20px;
}
</style>