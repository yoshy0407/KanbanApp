import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import { Task, TaskWrapper } from '../types'
import store from '@/store/index'

export interface TaskStore {
  todoTask:TaskWrapper[]
  doingTask:TaskWrapper[]
  doneTask:TaskWrapper[]
}

const convertWrapper = function(task:Task) : TaskWrapper {
  return {
    task: task,
    isSearch: false
  }
}

@Module({ dynamic: true, store: store, name: 'boards' })
export class TaskStoreImpl extends VuexModule implements TaskStore {
  todoTask:TaskWrapper[] = []
  doingTask:TaskWrapper[] = []
  doneTask:TaskWrapper[] = []

  public get getTodoTask () : TaskWrapper[] {
    return this.todoTask
  }

  public get getDoingTask () : TaskWrapper[] {
    return this.doingTask
  }

  public get getDoneTask () : TaskWrapper[] {
    return this.doneTask
  }

  @Mutation
  public setTodoTask (todoTask: Task[] ) :void {
    this.todoTask = todoTask.map(convertWrapper)
  }

  @Mutation
  public setDoingTask (doingTask: Task[]) :void {
    this.doingTask = doingTask.map(convertWrapper)
  }

  @Mutation
  public setDoneTask (doneTask: Task[]) :void {
    this.doneTask = doneTask.map(convertWrapper)
  }

}
