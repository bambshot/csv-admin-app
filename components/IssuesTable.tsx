import React from 'react'
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper
} from '@material-ui/core'
import format from 'date-fns/format'
import type { Issues } from '$prisma/client'

type IssuesTableProps = {
  data: Issues[]
}

const IssuesTable = ({ data }: IssuesTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table size="medium" aria-label="issues table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="left">タイトル</TableCell>
            <TableCell align="left">カテゴリ</TableCell>
            <TableCell align="left">種別</TableCell>
            <TableCell align="left">優先度</TableCell>
            <TableCell align="left">ステータス</TableCell>
            <TableCell align="left">開始日</TableCell>
            <TableCell align="left">期限日</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((issue) => (
            <TableRow key={issue.id}>
              <TableCell component="th" scope="row">
                {issue.id}
              </TableCell>
              <TableCell align="left">{issue.title}</TableCell>
              <TableCell align="left">{issue.category}</TableCell>
              <TableCell align="left">{issue.type}</TableCell>
              <TableCell align="left">{issue.priority}</TableCell>
              <TableCell align="left">{issue.status}</TableCell>
              <TableCell align="left">
                {format(new Date(issue.start_date.toString()), 'yyyy-MM-dd')}
              </TableCell>
              <TableCell align="left">
                {format(new Date(issue.due_date.toString()), 'yyyy-MM-dd')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default IssuesTable
