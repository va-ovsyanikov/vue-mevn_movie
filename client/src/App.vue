<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list  dense>
        <v-app-bar-title class="ml-3">
          <h3>Киномания</h3>
          <v-subheader>Сборник фильмов</v-subheader>
          </v-app-bar-title>
        
        

        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.link">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- <v-toolbar-title>Application</v-toolbar-title> -->
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <notifications/>
  </v-app>
</template>

<script>
export default {
  name: "App",
  componets: {

  },

  data: () => ({
    drawer: null,
    items: [
      { title: "Главная", icon: "mdi-home", link: "/" },
      { title: "Добавить фильм", icon: "mdi-calendar-multiple-check", link: "/add-post" },
      { title: "О проекте", icon: "mdi-help-box", link: "/about" },
    ],
  }),
};
</script>
<style lang="less" scoped>
h3 {
  margin-left: 8px;
}
</style>
