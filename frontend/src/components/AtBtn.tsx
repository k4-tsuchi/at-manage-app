import { useEffect, useReducer, useState } from "react"
import AtStateReducer from "../Reducer/AtStateReducer";

import { AtState } from "../@types/typeList"

import { globalStateAtom, modalAtom, modalResultAtom } from "../Atom/atoms";
import { useAtom } from "jotai";

type Props = {
  name: string;
}

const AtBtn: React.FC<Props> = (props) => {

  const key = props.name;

  const init: AtState = {
    name: '',
    color: 'bg-gray-300',
    disabled: true
  }

  const [ globalState, setGlobalState ] = useAtom(globalStateAtom)
  const [ state, dispatch ] = useReducer(AtStateReducer, init)
  const [ _, forceUpdate] = useReducer(num => num + 1, 0)

  useEffect(() => {
    dispatch({local: key, global: globalState})
    forceUpdate()
  }, [globalState])

  const [saveValue, setSaveValue] = useState<string>('')
  const [ , setModal ] = useAtom(modalAtom)
  const [ result, setResult ] = useAtom(modalResultAtom)

  const changeState = () => {
    if (key === 'at_out') {
      setSaveValue(key)
      setModal(true)
    } else {
      setGlobalState(key)
    }
  }

  useEffect(() => {
    console.log(result)
    if (saveValue && result) {
      setGlobalState('start')
    } 
    setResult(undefined)
    setModal(false)
  }, [result])

  const wrapper = ' w-1/2 p-1 z-0'
  const btn = " w-full p-3 text-2xl text-white rounded"

  return (
    <>
      <div className={wrapper}>
        <button className={state.color + btn} onClick={changeState} disabled={state.disabled}>{state.name}</button>
      </div>
    </>
  )
}

export default AtBtn;