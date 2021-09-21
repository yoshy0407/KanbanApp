<template>
  <v-app-bar app clipped-left elevate-on-scroll color="orange">
      <v-toolbar-title class="header-title">The Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <kanban-user-info />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import KanbanUserInfo from '../molecules/KanbanUserInfo.vue'

export default Vue.extend({
  components: {
    KanbanUserInfo
  }
})
</script>

<style>
.header-title {
  color: aliceblue;
}
</style>
