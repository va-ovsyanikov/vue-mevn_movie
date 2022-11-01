<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 16 : 2"
      :class="{ 'on-hover': hover }"
      height="350"
      class="mx-auto"
      max-width="350"
      :to="{ name: 'Post', params: { id } }"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="`http://localhost:3001/${image}`"
      >
      </v-img>
      <v-card-title>{{ title }}</v-card-title>
      <v-divider></v-divider>
      <v-card-subtitle class="pb-0 mt-0">Релиз: {{ released }}</v-card-subtitle>

      <v-card-subtitle>Жанр: {{ category }}</v-card-subtitle>
    </v-card>


  </v-hover>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
    },
    released: {
      type: Number,
    },
    category: {
      type: String,
    },
    title: {
      type: String,
    },
    id: {
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
.v-card.on-hover.theme--dark {
  background-color: rgba(#fff, 0.8);
}
.v-card__text {
  color: #000;
}

.mx-auto {
  margin-top: 20px;
}
</style>