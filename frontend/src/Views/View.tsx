
import { useEffect, useState } from "react"
import { useAtom, useAtomValue, useSetAtom } from "jotai"

import Header from "./Header"
import Timer from "./Timer"
import History from "./History"
import Nav from "./Nav"
import { CurrentReportId, getModeAtom } from "../Atom/atoms"
import { getFetch } from "../Atom/fetchAtom"
import { reportTargetIdAtom } from "../Atom/responseAtom"


function View() {

  const mode = useAtomValue(getModeAtom)

  useEffect(() => {
    getFetch()
  }, [])

  const report_id = useAtomValue(reportTargetIdAtom)
  const setReportId = useSetAtom(CurrentReportId)

  useEffect(() => {
    setReportId(report_id)
  }, [report_id])

  return (
    <>
      <div className='container'>
        <Header />
          {mode}
        <Nav />
      </div>
    </>
  )
}

export default View;