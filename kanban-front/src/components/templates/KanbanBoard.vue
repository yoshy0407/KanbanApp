<template>
  <v-container fluid>
    <v-row dense>
      <v-col :cols=12>
        <v-card eleveation=7>
          <v-toolbar
          >
            <v-toolbar-title>ボード</v-toolbar-title>
            <v-spacer />
            <v-row
              justify="end"
            >
              <v-col
                cols="12"
                md="7"
              >
                <v-text-field
                  hide-details
                  prepend-icon="mdi-magnify"
                  single-line
                />
              </v-col>
            </v-row>
          </v-toolbar>
        </v-card>
      </v-col>
      <v-col :cols=4>
        <kanban-todo-list
          :todoList="todoTasks"
        />
      </v-col>
      <v-col :cols=4>
        <kanban-doing-list
          :doingTasks="doingTasks"
        />
      </v-col>
      <v-col :cols=4>
        <kanban-done-list
          :doneTasks="doneTasks"
        />
      </v-col>
    </v-row>

  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import KanbanTodoList from '@/components/organisms/KanbanTodoList.vue'
import KanbanDoingList from '@/components/organisms/KanbanDoingList.vue'
import KanbanDoneList from '@/components/organisms/KanbanDoneList.vue'
import { TaskWrapper } from '@/store/types.js'

@Component({
  components: {
    KanbanTodoList,
    KanbanDoingList,
    KanbanDoneList
  }
})
export default class KanbanBoard extends Vue {
  todoTaskList!: TaskWrapper[];
  doingTaskList!: TaskWrapper[];
  doneTaskList!: TaskWrapper[];

  get todoTasks () : TaskWrapper[] {
    return [
      {
        task: {
          taskId: 1,
          taskName: 'サンプルのメッセージが記載されるところですが、どれだけ長いものが入れられるか確認します',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 2,
          taskName: 'テストですテストですテストですテストです',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 3,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 4,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false

      },
      {
        task: {
          taskId: 5,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 6,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 7,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 8,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 7,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 8,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 9,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 10,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      }
    ]
  }

  get doingTasks () :TaskWrapper[] {
    return [
      {
        task: {
          taskId: 1,
          taskName: 'サンプルのメッセージが記載されるところですが、どれだけ長いものが入れられるか確認します',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 2,
          taskName: 'テストですテストですテストですテストです',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 3,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 4,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false

      },
      {
        task: {
          taskId: 5,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 6,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 7,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 8,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 7,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 8,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 9,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 10,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      }
    ]
  }

  get doneTasks () :TaskWrapper[] {
    return [
      {
        task: {
          taskId: 1,
          taskName: 'サンプルのメッセージが記載されるところですが、どれだけ長いものが入れられるか確認します',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 2,
          taskName: 'テストですテストですテストですテストです',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 3,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 4,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false

      },
      {
        task: {
          taskId: 5,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 6,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 7,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 8,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 7,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 8,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 9,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      },
      {
        task: {
          taskId: 10,
          taskName: 'サンプル',
          taskEstimate: 1,
          estimateUnit: '人日',
          taskDescribe: 'サンプルのタスク',
          taskTags: [1, 2, 3],
          taskStatus: 'ToDo',
          boardId: 1
        },
        isSearch: false
      }
    ]
  }
}
</script>

<style scoped>
</style>
