<template>
  <v-sheet
    v-bind:id="scrollId"
    class="overflow-y-auto"
    :max-height="maxSize"
  >
    <kanban-task-list
      :taskList="taskList"
    />
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { TaskWrapper } from '@/store/types.js'
import KanbanTaskList from '@/components/molecules/KanbanTaskList.vue'

@Component({
  components: {
    KanbanTaskList
  }
})
export default class KanbanTaskSheet extends Vue {
  @Prop()
  scrollId!:string;

  @Prop()
  taskList!:TaskWrapper[]

  get maxSize () :number {
    let number
    // vuetifyで保持するブレークポイント名から、サイズを変更する
    switch (this.$vuetify.breakpoint.name) {
      case 'xs': number = 180; break
      case 'sm': number = 180; break
      case 'md': number = 280; break
      case 'lg': number = 380; break
      case 'xl': number = 500; break
    }
    return number
  }
}
</script>

<style>

</style>
