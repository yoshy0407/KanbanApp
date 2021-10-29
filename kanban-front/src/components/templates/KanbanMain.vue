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
import { Component, Vue } from 'vue-property-decorator'
import KanbanMenu from '@/components/molecules/KanbanMenu.vue'
import KanbanHeader from '@/components/organisms/KanbanHeader.vue'

@Component({
  components: {
    KanbanHeader,
    KanbanMenu
  }
})
export default class KanbanMain extends Vue {
}
</script>

<style>

</style>
