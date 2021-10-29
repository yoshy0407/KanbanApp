<template>
  <v-dialog
    transition="dialog-top-transition"
    max-width="600"
    :value="dialog"
  >
    <template v-slot:activator="{ on }">
      <v-list-item
        v-on="on"
        v-on:click="dialogOn"
      >
        <v-list-item-icon>
          <v-icon>mdi-delete</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          削除
        </v-list-item-content>
      </v-list-item>
    </template>
    <template v-slot:default>
      <v-card>
        <v-toolbar
          color="error"
          dark
        >タスク削除</v-toolbar>
        <v-card-title>以下のタスクを削除します</v-card-title>
        <v-divider class="mx-4"></v-divider>
        <v-card-title>{{ task.taskName }}</v-card-title>
        <v-card-text>
          <kanban-task-estimate
            :taskEstimate="task.taskEstimate"
            :estimateUnit="task.estimateUnit"
          />
          <div>{{ task.taskDescribe }}</div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <kanban-ok-btn
            v-on:click="deleteData"
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
import KanbanTaskEstimate from '@/components/atoms/KanbanTaskEstimate.vue'
import KanbanOkBtn from '@/components/atoms/KanbanOkBtn.vue'
import KanbanCancelBtn from '@/components/atoms/KanbanCancelBtn.vue'
import { Task } from '@/store/types.js'

@Component({
  components: {
    KanbanTaskEstimate,
    KanbanOkBtn,
    KanbanCancelBtn
  }
})
export default class KanbanTaskDelete extends Vue {
  @Prop()
  task!: Task;

  dialog = false

  dialogOn () : void {
    this.dialog = true
  }

  dialogOff () : void {
    this.dialog = false
  }

  deleteData () : void {
    this.dialogOff()
  }
}
</script>

<style>

</style>
