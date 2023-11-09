
import { useEffect, useState } from "react"
import { useAtomValue } from "jotai"

import Header from "./Header"
import Timer from "./Timer"
import History from "./History"
import Nav from "./Nav"
import { getModeAtom } from "../Atom/atoms"


function View() {

  const mode = useAtomValue(getModeAtom)
  console.log(mode)
  // const [ dom, setDom ] = useState<JSX.Element>()

  // useEffect(() => {
  //   console.log(mode)
  //   switch(mode) {
  //     case 'timer':
  //       setDom(
  //           <Timer />
  //       )
  //       break

  //     case 'assignment':
  //         setDom(
  //           <History />
  //         )
  //   }
  // }, [mode])

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