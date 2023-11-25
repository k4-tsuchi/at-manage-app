
import { atom } from "jotai";
import { sendLoadableAtom } from "./fetchAtom";
import { CurrentReportId, globalStateAtom } from "./atoms";

export const sendFetchResponseAtom = atom((get) => {
  const loadData = get(sendLoadableAtom)
  if (loadData.state === 'hasError') {
    console.log(loadData.error)
    return null
  };
  if (loadData.state === 'loading') {
    console.log('Loading...')
    return null
  };
  const data = loadData.data
  console.log(data)
  return data
}, 
  (_, set, data: any) => {
  if (data.start_at) {
    set(CurrentReportId, data.id)
  }
  if (data.end_at) {
    set(globalStateAtom, 'start')
  }
})
