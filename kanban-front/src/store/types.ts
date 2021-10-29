export interface Board {
  boardId: number;
  boardName: string;
  fromDate: string;
  toDate: string;
}

export interface Task {
  taskId: number;
  taskName: string;
  taskEstimate: number;
  estimateUnit: string;
  taskDescribe: string;
  taskTags: number[];
  taskStatus: string;
  boardId: number;
}

export interface TaskWrapper {
  task: Task;
  isSearch: false;
}
