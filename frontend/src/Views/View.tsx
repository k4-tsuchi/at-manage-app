
import { useEffect, useState } from "react"
import { useAtomValue, useSetAtom } from "jotai"

import Header from "./Header"
import Timer from "./Timer"
import History from "./History"
import Nav from "./Nav"
import { getDataAtom, getModeAtom } from "../Atom/atoms"
import { getFetch, sendFetchAtom } from "../Atom/fetchAtom"


function View() {

  const mode = useAtomValue(getModeAtom)
  useAtomValue(sendFetchAtom)
  // useAtomValue(getFetchAtom)
  // const setGetData = useSetAtom(getDataAtom)

  useEffect(() => {
    getFetch()
  }, [])

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