<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        :color="color"
        :elevation=" hover ? 24 : 6"
        height="160"
        width="160"
      >
        <v-card-title>
          <v-spacer></v-spacer>
          <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                x-small
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item-group
                color="primary"
              >
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-lead-pencil</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    編集
                  </v-list-item-content>
                </v-list-item>
                <kanban-task-delete
                  :task="taskWrapper.task"
                />
              </v-list-item-group>
            </v-list>
          </v-menu>
        </v-card-title>
        <v-card-text>
          {{  taskWrapper.task.taskName }}
        </v-card-text>
      </v-card>
    </template>
  </v-hover>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import KanbanTaskEstimate from '@/components/atoms/KanbanTaskEstimate.vue'
import KanbanTaskDelete from '@/components/molecules/KanbanTaskDelete.vue'
import { TaskWrapper } from '@/store/types.js'

@Component({
  components: {
    KanbanTaskEstimate,
    KanbanTaskDelete
  }
})
export default class KanbanTask extends Vue {
  @Prop()
  taskWrapper!: TaskWrapper;

  get color () : string {
    if (this.taskWrapper.isSearch) {
      return 'yellow'
    } else {
      return 'transparent'
    }
  }
}
</script>
<style>

</style>
