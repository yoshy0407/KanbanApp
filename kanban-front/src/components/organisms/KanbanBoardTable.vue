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
            v-for="item in boards"
            :key="item.id"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.fromDate }} - {{ item.toDate }}</td>
            <td>
              <kanban-enter-btn />
              <kanban-board-edit
                :id="item.id"
                :name="item.name"
                :fromDate="item.fromDate"
                :toDate="item.toDate"
              />
              <kanban-board-delete
                :id="item.id"
                :name="item.name"
                :fromDate="item.fromDate"
                :toDate="item.toDate"
              />
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-divider></v-divider>
    <kanban-pagination />
  </v-card>
</template>

<script lang="ts">
import KanbanBoardDelete from '../molecules/KanbanBoardDelete.vue'
import KanbanBoardEdit from '../molecules/KanbanBoardEdit.vue'
import KanbanEnterBtn from '../atoms/KanbanEnterBtn.vue'
import KanbanPagination from '../molecules/KanbanPagination.vue'

import Vue from 'vue'
export default Vue.extend({
  components: {
    KanbanBoardDelete,
    KanbanBoardEdit,
    KanbanEnterBtn,
    KanbanPagination
  },
  data () {
    return {
      boards: [
        {
          id: 1,
          name: 'テスト',
          fromDate: '2021/9/1',
          toDate: '2021/9/7'
        },
        {
          id: 2,
          name: 'テスト',
          fromDate: '2021/9/1',
          toDate: '2021/9/7'
        },
        {
          id: 3,
          name: 'テスト',
          fromDate: '2021/9/1',
          toDate: '2021/9/7'
        },
        {
          id: 4,
          name: 'テスト',
          fromDate: '2021/9/1',
          toDate: '2021/9/7'
        },
        {
          id: 5,
          name: 'テスト',
          fromDate: '2021/9/1',
          toDate: '2021/9/7'
        },
        {
          id: 6,
          name: 'テスト',
          fromDate: '2021/9/1',
          toDate: '2021/9/7'
        },
        {
          id: 7,
          name: 'テスト',
          fromDate: '2021/9/1',
          toDate: '2021/9/7'
        },
        {
          id: 8,
          name: 'テスト',
          fromDate: '2021/9/1',
          toDate: '2021/9/7'
        }
      ]
    }
  }
})
</script>

<style>

</style>
