<template>
  <v-card eleveation=7>
    <v-app-bar
      elevate-on-scroll
      scroll-target="#scrolling-todo-cards"
      dark
      color="green"
    >
      <v-toolbar-title>Done</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <kanban-task-sheet
      scrollId="scrolling-todo-cards"
      :taskList="doneTasks"
    />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { TaskWrapper } from '@/store/types.js'
import KanbanTask from '@/components/molecules/KanbanTask.vue'
import KanbanTaskSheet from '@/components/molecules/KanbanTaskSheet.vue'

@Component({
  components: {
    KanbanTask,
    KanbanTaskSheet
  }
})
export default class KanbanDoneList extends Vue {
  @Prop()
  doneTasks!: TaskWrapper[];
}
</script>

<style>

</style>
