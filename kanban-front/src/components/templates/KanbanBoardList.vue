<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12">
        <kanban-board-header></kanban-board-header>
      </v-col>
      <v-col cols="12">
        <kanban-board-table></kanban-board-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import KanbanBoardHeader from '../molecules/KanbanBoardHeader.vue'
import KanbanBoardTable from '../organisms/KanbanBoardTable.vue'
export default {
  components: { KanbanBoardTable, KanbanBoardHeader }

}
</script>

<style>

</style>
