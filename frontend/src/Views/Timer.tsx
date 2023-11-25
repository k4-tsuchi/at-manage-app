import { useEffect, useState } from "react"
import { useAtomValue } from "jotai";

import AtBtn from '../components/AtBtn';
import ShowTime from '../components/ShowTime';
import Confirm from "../components/Confirm";
import ModalWindow from "../components/ModalWindow";

import { modalAtom } from "../Atom/atoms";

export default function Timer() {
  const at_items: string[] = ['at_in', 'at_out', 'rest_in', 'rest_out'];

  const [modalWindow, setModalWindow] = useState<JSX.Element>()
  const modal = useAtomValue(modalAtom)

  useEffect(() => {
    if (modal) {
      setModalWindow(
        <ModalWindow>
          <Confirm />
        </ModalWindow>
      )
    } else {
      setModalWindow(<></>)
    }
  }, [modal])


  return (
    <>
      {modalWindow}
      <div className='content'>
        <ShowTime />
        <div className='flex flex-wrap justify-around w-full m-auto'>
          {
            at_items.map((value: string) => (
              <AtBtn key={value} name={value} />
            ))
          }
        </div>
      </div>
    </>
  )
}