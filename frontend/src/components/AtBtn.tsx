import { useEffect, useReducer } from "react"
import AtStateReducer from "../Reducer/AtStateReducer";

import { AtState } from "../@types/typeList"

import { changeStateAtom, globalStateAtom } from "../Atom/atoms";
import {  useAtomValue, useSetAtom } from "jotai";

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

  const globalState = useAtomValue(globalStateAtom)
  const [ state, dispatch ] = useReducer(AtStateReducer, init)
  const [ _, forceUpdate] = useReducer(num => num + 1, 0)

  useEffect(() => {
    dispatch({local: key, global: globalState})
    forceUpdate()
  }, [globalState])

  const changeState = useSetAtom(changeStateAtom)

  const wrapper = ' w-1/2 p-1 z-0'
  const btn = " w-full p-3 text-2xl text-white rounded"

  return (
    <>
      <div className={wrapper}>
        <button className={state.color + btn} onClick={() => changeState(key)} disabled={state.disabled}>{state.name}</button>
      </div>
    </>
  )
}

export default AtBtn;