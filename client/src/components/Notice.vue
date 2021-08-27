<template>
  <div>
    <v-alert type="success" dismissible @click="alertHide"><slot></slot></v-alert>
  </div>
</template>

<script>
import {  mapMutations } from "vuex";
export default {
  name: "Message",
  setup() {
    return {};
  },
 
  methods: {
    ...mapMutations(["NOTICE_HIDE"]),
    alertHide() {
      this.NOTICE_HIDE();
    },
  },
};
</script>

<style lang="less" scoped>
</style>