<template>
  <v-card elevation="7">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              No
            </th>
            <th class="text-left">
              ボード名
            </th>
            <th class="text-left">
              期間
            </th>
            <th class="text-left">
              操作
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in displayBoards"
            :key="item.boardId"
          >
            <td>{{ item.boardId}}</td>
            <td>{{ item.boardName }}</td>
            <td>{{ parseDate(item.fromDate) }} - {{ parseDate(item.toDate) }}</td>
            <td>
              <kanban-enter-btn
                :boardId="item.boardId"
              />
              <kanban-board-edit
                :propBoard="item"
                :index="index"
              />
              <kanban-board-delete
                :propBoard="item"
                :index="index"
              />
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-divider></v-divider>
    <kanban-pagination
      v-model="page"
      v-bind:pageLength="pageLength"
     />
  </v-card>
</template>

<script lang="ts">
import KanbanBoardDelete from '../molecules/KanbanBoardDelete.vue'
import KanbanBoardEdit from '../molecules/KanbanBoardEdit.vue'
import KanbanEnterBtn from '../atoms/KanbanEnterBtn.vue'
import KanbanPagination from '../molecules/KanbanPagination.vue'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Board } from '@/store/types'

/**
 * 1ページあたりの要素数
 */
const pagePar = 10

@Component({
  components: {
    KanbanBoardDelete,
    KanbanBoardEdit,
    KanbanEnterBtn,
    KanbanPagination
  }
})
export default class KanbanBoardTable extends Vue {
  @Prop()
  boards!: Board[];

  page = 1;

  /**
   * 表示するボードの情報を返却します
   */
  get displayBoards () :Board[] {
    var start = 0
    var end = pagePar
    if (this.page >= 2) {
      start = (this.page - 1) * pagePar
      end = start + pagePar
    }
    return this.boards.slice(start, end)
  }

  /**
   * 日付の表示をyyyy/mm/ddで表示するようにします
   */
  parseDate (date: string) :string {
    return date.replaceAll('-', '/')
  }

  /**
   * 配列の数と１ページあたりの要素数から、ページングの要素の数を割り出します
   */
  get pageLength () :number {
    return Math.ceil(this.boards.length / pagePar)
  }
}
</script>

<style>

</style>
