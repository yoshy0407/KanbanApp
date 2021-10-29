<template>
  <v-dialog
    transition="dialog-top-transition"
    max-width="600"
    :value="dialog"
  >
    <template v-slot:activator="{ on }">
      <kanban-edit-btn
        v-on="on"
        v-on:click="dialogOn"
      />
    </template>
    <template v-slot:default>
      <v-card>
        <v-toolbar
          color="teal"
          dark
        >ボード変更</v-toolbar>
        <v-card-title>以下のボードを変更します</v-card-title>
        <v-card-text>
          <div class="text-h6 pa-1">ID : {{ propBoard.boardId }}</div>
          <v-text-field
            v-model="board.boardName"
            :label="'ボード名'"
            :value="propBoard.boardName"
          />
          <kanban-board-term
            v-model="boardTerm"
          />
        </v-card-text>
        <v-card-actions class="justify-end">
          <kanban-ok-btn
            v-on:click="update"
          />
          <kanban-cancel-btn
            v-on:click="dialogOff"
          />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import KanbanEditBtn from '@/components/atoms/KanbanEditBtn.vue'
import KanbanOkBtn from '@/components/atoms/KanbanOkBtn.vue'
import KanbanCancelBtn from '@/components/atoms/KanbanCancelBtn.vue'
import KanbanBoardTerm from '@/components/atoms/KanbanBoardTerm.vue'
import { boardStore } from '@/store/modules/board'
import { Board } from '@/store/types'

@Component({
  components: {
    KanbanEditBtn,
    KanbanOkBtn,
    KanbanCancelBtn,
    KanbanBoardTerm
  }
})
export default class KanbanBoardEdit extends Vue {
  @Prop()
  propBoard!: Board;

  @Prop()
  index!: number;

  dialog = false

  board:Board = {
    boardId: this.propBoard.boardId,
    boardName: this.propBoard.boardName,
    fromDate: this.propBoard.fromDate,
    toDate: this.propBoard.toDate
  };

  /**
   * boardTermのcomputedのゲッターです
   */
  get boardTerm () :string[] {
    return [this.board.fromDate, this.board.toDate]
  }

  /**
   * boardTermのcomputedのセッターです
   */
  set boardTerm (term: string[]) {
    this.board.fromDate = term[0]
    this.board.toDate = term[1]
  }

  /**
   * Storeのアクションを呼び出して、データの更新を実行します
   */
  public update () :void {
    boardStore.callUpdateBoardApi(this.board)
    this.dialogOff()
  }

  public dialogOn () :void {
    this.dialog = true
  }

  public dialogOff () :void {
    this.dialog = false
  }
}
</script>

<style>

</style>
