<template>
  <v-card elevation="7">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header class="text-h5">
          ボード一覧
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="boardName"
                label="ボード名"
              />
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <kanban-board-term v-model="boardTerm" />
            </v-col>
          </v-row>
          <kanban-search-btn
            v-on:click="search"
          />
          <kanban-cancel-btn
            v-on:click="clearData"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import KanbanSearchBtn from '@/components/atoms/KanbanSearchBtn.vue'
import KanbanCancelBtn from '@/components/atoms/KanbanCancelBtn.vue'
import KanbanBoardTerm from '@/components/atoms/KanbanBoardTerm.vue'
import { boardStore, SearchCondition } from '@/store/modules/board'

@Component({
  components: {
    KanbanSearchBtn,
    KanbanCancelBtn,
    KanbanBoardTerm
  }
})
export default class BoardHeader extends Vue {
  valid = false;

  boardName = '';

  boardTerm = [];

  menu = false;

  get dateRangeText () :string {
    return this.boardTerm.join(' ~ ')
  }

  /**
   * APIを呼び出して検索を実行します
   */
  search () :void {
    var condition : SearchCondition = {
      boardName: this.boardName,
      fromDate: this.boardTerm[0],
      toDate: this.boardTerm[1]
    }
    boardStore.callBoardApi(condition)
  }

  clearData () :void {
    this.boardName = ''
    this.boardTerm = []
  }
}
</script>>

<style>

</style>
