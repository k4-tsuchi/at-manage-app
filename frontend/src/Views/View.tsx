
import { useEffect, useState } from "react"
import { useAtom, useAtomValue, useSetAtom } from "jotai"

import Header from "./Header"
import Nav from "./Nav"
import { getModeAtom } from "../Atom/atoms"
import { getFetch } from "../Atom/fetchAtom"
import { sendFetchResponseAtom } from "../Atom/responseAtom"


function View() {

  const mode = useAtomValue(getModeAtom)

  const [fetchResponse, setFetchResponse] = useAtom(sendFetchResponseAtom)

  useEffect(() => {
    if (fetchResponse) {
      setFetchResponse(fetchResponse)
    }
  }, [fetchResponse])

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