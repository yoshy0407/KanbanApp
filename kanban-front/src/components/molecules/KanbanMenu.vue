<template>
  <v-navigation-drawer app clipped expand-on-hover color="amber">
    <v-list>
      <v-list-item link to="/">
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-title>ダッシュボード</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/boardList">
        <v-list-item-icon>
          <v-icon>mdi-bulletin-board</v-icon>
        </v-list-item-icon>
        <v-list-item-title>ボード一覧</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-star</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Starred</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>

<style scoped>

</style>
