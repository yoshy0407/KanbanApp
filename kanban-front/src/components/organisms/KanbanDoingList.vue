<template>
  <v-card eleveation=7>
    <v-app-bar
      elevate-on-scroll
      scroll-target="#scrolling-todo-cards"
      dark
      color="teal"
    >
      <v-toolbar-title>Doing</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
      <kanban-task-sheet
        id="scrolling-todo-cards"
        :taskList="doingTasks"
      />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { TaskWrapper } from '@/store/types.js'
import KanbanTaskSheet from '@/components/molecules/KanbanTaskSheet.vue'

@Component({
  components: {
    KanbanTaskSheet
  }
})
export default class KanbanDoingList extends Vue {
  @Prop()
  doingTasks!: TaskWrapper[];
}
</script>

<style>

</style>
