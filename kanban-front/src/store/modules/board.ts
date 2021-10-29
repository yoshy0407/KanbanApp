import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import { Board } from '../types'
import { ApiResponse } from '@/api/types'
import BoardApi from '@/api/board'
import store from '@/store/index'

export interface BoardStore {
  boards: Board[];
}

export interface SearchCondition {
  boardName: string;
  fromDate:Date;
  toDate:Date;
}

@Module({ dynamic: true, store: store, name: 'boards' })
export class BoardStoreImpl extends VuexModule implements BoardStore {
  // ステート（データなどをここに入れる）
  boards: Board[] = [];

  // getters (ステートの取得や加工して取得など)
  public get getBoards (): Board[] {
    return this.boards
  }

  /**
   * ページングしたボードの一覧を取得します
   */
  public get getBoardsPaging (): (pageNumber: number, perPageCount: number) => Board[] {
    return (pageNumber: number, perPageCount: number): Board[] => {
      const arrayPageNumber = pageNumber - 1
      const start = arrayPageNumber * perPageCount
      const end = (pageNumber * perPageCount) - 1
      return this.boards.slice(start, end)
    }
  }

  // ミューテーション（更新などデータの更新をする）
  /**
   * ボード一覧をセットします
   * @param boards ボード一覧
   */
  @Mutation
  public setBoards (boards: Board[]) : void {
    this.boards = boards
  }

  @Mutation
  public addBoard (board: Board) : void {
    this.boards.push(board)
  }

  /**
   * ボード一覧のリストの指定されたインデックスを置き換えます
   * @param index インデックス
   * @param board 置き換える内容のボード
   */
  @Mutation
  public replace (board:Board) : void {
    this.boards = this.boards.map(v => {
      if (v.boardId === board.boardId) {
        return board
      }
      return v
    })
  }

  /**
   * ボード一覧から指定されたインデックスの要素を削除します
   *
   * @param index 削除する要素のインデックス
   */
  @Mutation
  public remove (boardId: number) : void {
    this.boards = this.boards.filter(v => {
      return v.boardId !== boardId
    })
  }

  // アクション（APIを実行してデータを取得して、ミューテーションでデータを保存させる）
  /**
   * APIをコールしてボードの一覧を更新します
   * @param boardName ボード名
   * @param fromDate 期間（From）
   * @param toDate 期間(To)
   */
  @Action
  public callBoardApi (condition: SearchCondition) : void {
    const res: Promise<ApiResponse<Board>> =
      BoardApi.getBoard(condition.boardName, condition.fromDate, condition.toDate)
    res.then(resApi => {
      this.setBoards(resApi.res)
    })
  }

  @Action
  public callinitBoardApi () : void {
    const res: Promise<ApiResponse<Board>> = BoardApi.getBoardInit()
    res.then(resApi => {
      this.setBoards(resApi.res)
    })
  }

  /**
   * APIをコールしてボードを作成します
   *
   * @param board ボード
   */
  @Action
  public callCreateBoardApi (board: Board) : void {
    const res: Promise<ApiResponse<Board>> = BoardApi.createBoard(board)
    res.then(resApi => {
      this.addBoard(resApi.res[0])
    })
  }

  /**
   * APIをコールしてボードを更新します
   *
   * @param board 更新するデータのボード
   */
  @Action
  public callUpdateBoardApi (board: Board) : void {
    const res: Promise<ApiResponse<Board>> = BoardApi.updateBoard(board.boardId, board)
    res.then(resApi => {
      this.replace(resApi.res[0])
    })
  }

  /**
   * APIをコールしてボードを削除します
   * Actionは引数が２つ以上はダメなので、引数１つしか入れられない
   *
   * @param boardId 更新するデータのボード
   */
  @Action
  public callDeleteBoardApi (boardId: number) : void {
    const res: Promise<ApiResponse<void>> = BoardApi.deleteBoard(boardId)
    res.then(() => {
      this.remove(boardId)
    })
  }
}

export const boardStore = getModule(BoardStoreImpl)
