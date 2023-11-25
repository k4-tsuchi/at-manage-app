
import { modalResultAtom } from "../Atom/atoms"
import { useSetAtom } from "jotai"

const ModalWindow = (props: any) => {

  const setResult = useSetAtom(modalResultAtom)

  return (
    <>
      <div onClick={() => setResult(false)} className="fixed top-0 left-0 z-10 w-full h-full bg-ryuhow-blue bg-opacity-30"></div>
      <div className="fixed top-0 left-0 z-10">
        {props.children}
      </div>
    </>

  )
}

export default ModalWindow;