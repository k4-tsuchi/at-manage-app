
import { atom } from "jotai";
import { sendLoadableAtom } from "./fetchAtom";
import { CurrentReportId } from "./atoms";

export const reportTargetIdAtom = atom((get) => {
  const data = get(sendFetchResponseAtom)
  if (data && data.id !== undefined) {
    return data.id
  }
  return get(CurrentReportId)
})

const sendFetchResponseAtom = atom((get) => {
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
})
