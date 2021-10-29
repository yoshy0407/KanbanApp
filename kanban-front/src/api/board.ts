import client from './client'
import { Board } from '@/store/types'
import { ApiResponse } from './types'

export default {
  /**
   * ボード一覧取得のAPIを実行します
   *
   * @param boardName ボード名
   * @param fromDate 期間（From）
   * @param toDate 期間()
   * @returns
   */
  getBoard (boardName: string | null, fromDate: Date | null, toDate: Date | null) : Promise<ApiResponse<Board>> {
    return new Promise((resolve, reject) => {
      client.get<ApiResponse<Board>>('/api/board/list', {
        params: {
          boardName,
          fromDate,
          toDate
        }
      })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  /**
   *
   * @returns
   */
  getBoardInit () : Promise<ApiResponse<Board>> {
    return new Promise((resolve, reject) => {
      client.get<ApiResponse<Board>>('/api/board/list')
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  /**
   * ボードを作成します
   *
   * @param board 作成するボードの情報（IDは未設定）
   */
  createBoard (board: Board) : Promise<ApiResponse<Board>> {
    return new Promise((resolve, reject) => {
      client.post('/api/board', board)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  /**
   * ボードを更新します
   * @param boardId ボードID
   * @param board 更新するボードの情報
   * @returns
   */
  updateBoard (boardId: number, board:Board) : Promise<ApiResponse<Board>> {
    return new Promise((resolve, reject) => {
      client.put('/api/board/' + boardId, board)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  /**
   * ボードを削除します
   *
   * @param boardId ボードID
   */
  deleteBoard (boardId: number): Promise<ApiResponse<void>> {
    return new Promise((resolve, reject) => {
      client.delete('/api/board/' + boardId)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
