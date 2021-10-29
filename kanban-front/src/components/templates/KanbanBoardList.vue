<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12">
        <kanban-board-header></kanban-board-header>
      </v-col>
      <v-col cols="12">
        <kanban-board-table
          :boards="getList"
        />
      </v-col>
    </v-row>
    <kanban-board-create />
  </v-container>
</template>

<script lang="ts">
import KanbanBoardHeader from '../molecules/KanbanBoardHeader.vue'
import KanbanBoardTable from '../organisms/KanbanBoardTable.vue'
import KanbanBoardCreate from '@/components/molecules/KanbanBoardCreate.vue'
import { Component, Vue, Emit, Prop } from 'vue-property-decorator'
import { Board } from '@/store/types'
import { boardStore } from '@/store/modules/board'

@Component({
  components: {
    KanbanBoardTable,
    KanbanBoardHeader,
    KanbanBoardCreate
  }
})
export default class KanbanBoardList extends Vue {
  get getList () : Board[] {
    if (boardStore.getBoards.length === 0) {
      boardStore.callinitBoardApi()
    }
    return boardStore.getBoards
  }
}
</script>

<style>

</style>
