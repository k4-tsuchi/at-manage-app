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

