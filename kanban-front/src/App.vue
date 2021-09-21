<template>
  <v-app>
      <kanban-header />
      <kanban-menu />
      <v-main>
        <router-view></router-view>
      </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import KanbanMenu from './components/molecules/KanbanMenu.vue'
import KanbanHeader from './components/organisms/KanbanHeader.vue'

export default Vue.extend({
  components: {
    KanbanHeader,
    KanbanMenu
  },
  name: 'App',

  data: () => ({

  })
})
</script>
