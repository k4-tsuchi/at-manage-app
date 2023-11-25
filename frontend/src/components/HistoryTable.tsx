import { useEffect, useState } from "react"
import { getFetch } from "../Atom/fetchAtom"
import { getTargetMonth } from "../Funcs/GetCalendar"

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"


type Calendar = {
  date: String,
  at_in: String,
  at_out: String,
  rest_span: String,
  active_span: String,
}

function createData(
  date: String,
  at_in: String = '',
  at_out: String = '',
  rest_span: String = '',
  active_span: String = '',
) {
  return { date, at_in, at_out, rest_span, active_span }
}

interface Props {
  month: string,
}

const HistoryTable: React.FC<Props> = (props) => {

  const [content, setContent] = useState<Calendar[]>([])

  useEffect(() => {
    getHistoryDate(props.month)
  }, [props.month])

  async function getHistoryDate(month: string) {
    const fetchDate = await getFetch(month)
    const date = getTargetMonth(month)
    const rows: Calendar[] = date.map((value, index) => {
      const result = fetchDate.filter(({ day }) => Number(day) === index + 1)
      if (result.length === 1) {
        return createData(value, result[0].start_at, result[0].end_at, result[0].rest_span, result[0].active_span)
      } 

      if (result.length > 1) {
        return createData(value, result[0].start_at, result[1].end_at, result[0].rest_span, result[0].active_span)
      } 

      return createData(value)
    })
    setContent(rows)
  }
  return (
    <TableContainer component={Paper}>
    <Table sx={{ border: 0 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>日付</TableCell>
          <TableCell>出勤</TableCell>
          <TableCell>退勤</TableCell>
          <TableCell>休憩</TableCell>
          <TableCell>実労働</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          content.map((row: Calendar, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className="w-full"
            >
              <TableCell component="th" scope="row">{row.date}</TableCell>
              <TableCell>{row.at_in}</TableCell>
              <TableCell>{row.at_out}</TableCell>
              <TableCell>{row.rest_span}</TableCell>
              <TableCell>{row.active_span}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default HistoryTable;