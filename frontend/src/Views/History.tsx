import { useEffect, useState } from "react"
import { dateMonth } from "../Funcs/Digits"
import HistoryTable from "../components/HistoryTable"
import SelectMonth from "../components/SelectMonth"

export default function History() {

  const [ month, setMonth ] = useState<string>(dateMonth())

  return (
    <>
      <div className="py-20 px-4 w-full">
        <SelectMonth month={month}/>
        <HistoryTable month={month}/>
      </div>
    </>
  )
}