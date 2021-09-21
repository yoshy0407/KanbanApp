<template>
  <v-dialog
    transition="dialog-top-transition"
    max-width="600"
  >
    <template v-slot:activator="{ on, attrs }">
      <kanban-edit-btn v-on="on" v-bind="attrs"></kanban-edit-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar
          color="success"
          dark
        >ボード変更</v-toolbar>
        <v-card-title>以下のボードを変更します</v-card-title>
        <v-card-text>
          <div class="text-h6 pa-1">ID : {{ id }}</div>
          <v-text-field label="ボード名">{{ name }}</v-text-field>
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
import { Component, Vue, Prop } from 'vue-property-decorator'
import KanbanEditBtn from '@/components/atoms/KanbanEditBtn.vue'
import KanbanOkBtn from '@/components/atoms/KanbanOkBtn.vue'
import KanbanCancelBtn from '@/components/atoms/KanbanCancelBtn.vue'

@Component({
  components: {
    KanbanEditBtn,
    KanbanOkBtn,
    KanbanCancelBtn
  }
})
export default class KanbanBoardEdit extends Vue {
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
