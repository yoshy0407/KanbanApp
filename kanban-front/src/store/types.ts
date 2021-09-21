export interface RootState {
  version: string
}

export interface KanbanState {
  boards: BoardState[];
}

export interface BoardState {
  id: number;
  name: string;
  fromDate: string;
  toDate: string;
}
