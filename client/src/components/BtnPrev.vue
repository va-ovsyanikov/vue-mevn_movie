<template>
  <div>
    <v-btn color="primary mb-8" @click="$router.go(-1)" dark
      ><v-icon left> mdi-chevron-double-left </v-icon> Назад
    </v-btn>
  </div>
</template>

<script>
export default {
    name:"BtnPrev"
};
</script>

<style lang="less" scoped>
</style>