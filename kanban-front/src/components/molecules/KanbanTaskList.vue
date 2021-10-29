!<template>
  <v-container>
    <v-row
      v-for=" (row, key) in rowCount"
      :key="key"
    >
      <v-col
        v-for=" (taskWrapper) in itemCountInRow(row)"
        :key="taskWrapper.task.taskId"
      >
        <kanban-task
          :taskWrapper="taskWrapper"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { TaskWrapper } from '@/store/types.js'
import KanbanTask from '@/components/molecules/KanbanTask.vue'

@Component({
  components: {
    KanbanTask
  }
})
export default class KanbanTaskList extends Vue {
  @Prop()
  taskList!: TaskWrapper[];

  get rowCount () :number {
    return Math.ceil(this.taskList.length / this.colNumber)
  }

  get colNumber () :number {
    let number
    // vuetifyで保持するブレークポイント名から、1行に表示する数を変更する
    switch (this.$vuetify.breakpoint.name) {
      case 'xs': number = 2; break
      case 'sm': number = 4; break
      case 'md': number = 6; break
      case 'lg': number = 8; break
      case 'xl': number = 10; break
    }
    return number
  }

  itemCountInRow (row: number) :TaskWrapper[] {
    return this.taskList.slice((row - 1) * this.colNumber, row * this.colNumber)
  }
}
</script>

<style>

</style>
