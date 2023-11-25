import { atom } from "jotai";
import Timer from "./../Views/Timer"
import History from "./../Views/History"

export const globalStateAtom = atom<string>('start')

export const modeAtom = atom('TIMER')
export const getModeAtom = atom((get) => {
  switch (get(modeAtom)) {
    case 'TIMER':
      return <Timer />
    case 'ASSIGNMENT':
      return <History />
  }
})

export const modalAtom = atom<boolean>(false)
export const modalResultAtom = atom<boolean | undefined>(undefined)

export const getDataAtom = atom<boolean | undefined>(undefined)

export const CurrentReportId = atom<String>("")

export const modalSaveValueAtom = atom<String>("")


// ボタン毎にレンダリングされてしまうため、１つのatomにまとめておく
export const changeStateAtom = atom(
  () => {}, 
  (_get, set, key: string) => {
    if (key === 'at_out') {
      set(modalSaveValueAtom, key)
      set(modalAtom, true)
    } else {
      set(globalStateAtom, key)
    }
  })

// 柔軟にコードに埋め込みを行えるようにatomの関数で保管しておく
export const actionModalResultAtom = atom(
  () => {},
  (get, set, result: Boolean) => {
    if (get(modalSaveValueAtom) && result) {
      set(globalStateAtom, 'at_out')
    }
    set(modalResultAtom, undefined)
    set(modalAtom, false)
  })
