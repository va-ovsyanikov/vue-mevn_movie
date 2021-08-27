<template>
  <div class="text-center">
    <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" height="200px">
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="(sheet = !sheet); alertHide()"
        >
          close
        </v-btn>
        <div class="py-3">
         <h3><slot></slot>!</h3> 
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";
export default {
  data: () => ({
    sheet: true,
  }),
  methods: {
  
    alertHide(){
      this.$emit("alertHide")
    }


  },
};
</script>
<style scoped>
h3{
    color: green;
}
</style>





