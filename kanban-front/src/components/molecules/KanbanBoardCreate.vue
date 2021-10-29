<template>
  <v-dialog
    transition="dialog-top-transition"
    max-width="600"
    :value="dialog"
  >
    <template v-slot:activator="{ on }">
      <kanban-create-btn
        v-on="on"
        v-on:click="dialogOn"
        :bottom="true"
        :right="true" />
    </template>
    <template v-slot:default>
      <v-card>
        <v-toolbar
          color="blue"
          dark
        >ボード追加</v-toolbar>
        <v-card-title>ボードを登録します</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="boardName"
            :label="'ボード名'"
            :clearable="true"
            :autofocus="true"
          />
          <kanban-board-term v-model="term" />
        </v-card-text>
        <v-card-actions class="justify-end">
          <kanban-ok-btn
            v-on:click="createData"
          />
          <kanban-cancel-btn v-on:click="dialogOff"></kanban-cancel-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator'
import KanbanCreateBtn from '@/components/atoms/KanbanCreateBtn.vue'
import KanbanOkBtn from '@/components/atoms/KanbanOkBtn.vue'
import KanbanCancelBtn from '@/components/atoms/KanbanCancelBtn.vue'
import KanbanBoardTerm from '@/components/atoms/KanbanBoardTerm.vue'
import { Board } from '@/store/types'
import { boardStore } from '@/store/modules/board'
import board from '@/api/board'

@Component({
  components: {
    KanbanCreateBtn,
    KanbanOkBtn,
    KanbanCancelBtn,
    KanbanBoardTerm
  }
})
export default class KanbanBoardCreate extends Vue {
  boardName = '';

  term: string[] = [];

  dialog = false

  dialogOn () : void {
    this.dialog = true
  }

  dialogOff () : void {
    this.dialog = false
  }

  createData () : void {
    var board: Board = {
      boardId: 0,
      boardName: this.boardName,
      fromDate: this.term[0],
      toDate: this.term[1]
    }
    boardStore.callCreateBoardApi(board)
    this.dialogOff()
  }
}
</script>

<style>

</style>
