<template>
  <v-dialog
    transition="dialog-top-transition"
    max-width="600"
  >
    <template v-slot:activator="{ on, attrs }">
      <kanban-delete-btn v-on="on" v-bind="attrs"></kanban-delete-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar
          color="error"
          dark
        >ボード削除</v-toolbar>
        <v-card-title>以下のボードを削除します</v-card-title>
        <v-card-text>
          <div class="text-h6 pa-1">ID : {{ id }}</div>
          <div class="text-h6 pa-1">ボード名 : {{ name }}</div>
          <div class="text-h6 pa-1">期間 : {{ fromDate }} - {{ toDate }}</div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <kanban-ok-btn></kanban-ok-btn>
          <kanban-cancel-btn v-on:click="dialog.value = false"></kanban-cancel-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator'
import KanbanDeleteBtn from '@/components/atoms/KanbanDeleteBtn.vue'
import KanbanOkBtn from '@/components/atoms/KanbanOkBtn.vue'
import KanbanCancelBtn from '@/components/atoms/KanbanCancelBtn.vue'

@Component({
  components: {
    KanbanDeleteBtn,
    KanbanOkBtn,
    KanbanCancelBtn
  }
})
export default class KanbanBoardDelete extends Vue {
  @Prop()
  id!: number;

  @Prop()
  name!: string;

  @Prop()
  fromDate!: string;

  @Prop()
  toDate!: string;
}
</script>

<style>

</style>
