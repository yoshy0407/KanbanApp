
exports.addApi = function (app) {
  boards = [
    {
      boardId: 1,
      boardName: 'テスト１',
      fromDate: '2021-1-1',
      toDate: '2021-1-31'
    },
    {
      boardId: 2,
      boardName: 'テスト２',
      fromDate: '2021-2-1',
      toDate: '2021-2-29'
    },
    {
      boardId: 3,
      boardName: 'テスト３',
      fromDate: '2021-3-1',
      toDate: '2021-3-31'
    },
    {
      boardId: 4,
      boardName: 'テスト４',
      fromDate: '2021-4-1',
      toDate: '2021-4-30'
    },
    {
      boardId: 5,
      boardName: 'テスト５',
      fromDate: '2021-4-1',
      toDate: '2021-4-30'
    },
    {
      boardId: 6,
      boardName: 'テスト４',
      fromDate: '2021-4-1',
      toDate: '2021-4-30'
    },
    {
      boardId: 7,
      boardName: 'テスト４',
      fromDate: '2021-4-1',
      toDate: '2021-4-30'
    },
    {
      boardId: 8,
      boardName: 'テスト４',
      fromDate: '2021-4-1',
      toDate: '2021-4-30'
    },
    {
      boardId: 9,
      boardName: 'テスト４',
      fromDate: '2021-4-1',
      toDate: '2021-4-30'
    },
    {
      boardId: 10,
      boardName: 'テスト４',
      fromDate: '2021-4-1',
      toDate: '2021-4-30'
    },
    {
      boardId: 11,
      boardName: 'テスト４',
      fromDate: '2021-4-1',
      toDate: '2021-4-30'
    },
    {
      boardId: 12,
      boardName: 'テスト４',
      fromDate: '2021-4-1',
      toDate: '2021-4-30'
    },
    {
      boardId: 13,
      boardName: 'テスト４',
      fromDate: '2021-4-1',
      toDate: '2021-4-30'
    },
    {
      boardId: 14,
      boardName: 'テスト４',
      fromDate: '2021-4-1',
      toDate: '2021-4-30'
    },
    {
      boardId: 15,
      boardName: 'テスト４',
      fromDate: '2021-4-1',
      toDate: '2021-4-30'
    },
    {
      boardId: 16,
      boardName: 'テスト４',
      fromDate: '2021-4-1',
      toDate: '2021-4-30'
    },
    {
      boardId: 17,
      boardName: 'テスト４',
      fromDate: '2021-4-1',
      toDate: '2021-4-30'
    },
    {
      boardId: 18,
      boardName: 'テスト４',
      fromDate: '2021-4-1',
      toDate: '2021-4-30'
    },
    {
      boardId: 19,
      boardName: 'テスト４',
      fromDate: '2021-4-1',
      toDate: '2021-4-30'
    },
    {
      boardId: 20,
      boardName: 'テスト４',
      fromDate: '2021-4-1',
      toDate: '2021-4-30'
    }

  ]

  app.get('/api/board/list', (req, res) => {
    var boardName = req.query.boardName
    var fromDate = req.query.fromDate
    var toDate = req.query.toDate

    var filteredBoards = boards.filter(function( record ) {
      var result = true
      if (boardName !== null) {
        result = boardName === record.boardName
      }
      if (fromDate !== null) {
        result = fromDate === record.fromDate
      }
      if (toDate !== null) {
        result = fromDate === record.toDate
      }
      return result
    })

    res.send({
      isSuccess: true,
      errors: '',
      res: boards
    })
  })
  app.post('/api/board', (req, res) => {
    // ボードIDの最大値を取得
    var maxBoardId = boards.reduce((v1, v2) => {
      return Math.max(v1, v2)
    })

    //新しいboardIdを取得
    req.body.boardId = maxBoardId + 1

    boards.push(req.body)
    res.send({
      isSuccess: true,
      errors: '',
      res: [
        req.body
      ]
    })
  })
  app.put('/api/board/:boardId', (req, res) => {
    var board = boards.filter(b => {
      if (b.boardId === req.param.boardId) {
        return req.body
      }
      return b
    })
    res.send({
      isSuccess: true,
      errors: '',
      res: [
        req.body
      ]
    })
  })
  app.delete('/api/board/:boardId', (req, res) => {
    boards = boards.filter(b => b.boardId != req.param.boardId)
    res.send({
      isSuccess: true,
      errors: '',
      res: []
    })
  })

}
