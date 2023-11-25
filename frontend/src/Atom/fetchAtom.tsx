import { atom } from 'jotai'
import { CurrentReportId, globalStateAtom} from './atoms'
import { dateDay, dateMonth, minutes } from '../Funcs/Digits'

import { loadable } from "jotai/utils"
import { Create, End, Rest } from '../@types/typeList';

type getHistory = {
  id: Number,
  day: String,
  start_at: String,
  end_at: String,
  rest_span: String,
  active_span: String,
}

const url = 'https://localhost:8000/reports/';

export async function getFetch(month: String) {
  const res = await fetch(url + "?month=" + month)
  const json: getHistory[] = await res.json()
  return json
}

//月毎にデータを取得できるようにする
// export const getFetchAtom = atom(
//   () => {},
//   (get, set, _) => {

//   }
// )

const sendFetchAtom = atom(
  async (get) => {
    console.log(get(globalStateAtom))
    switch (get(globalStateAtom)) {
      case 'at_in':
        console.log(dateMonth())
        return await sendReportFetch(
          {
            month: dateMonth(),
            day: dateDay(),
            start_at: minutes()
          }, 
          "POST")
      case 'at_out':
        return await sendReportFetch(
          {end_at: minutes()},
          "DELETE",
          get(CurrentReportId)
        )
      case "rest_in":
        return await sendReportFetch(
          {time: minutes()},
          "POST",
          get(CurrentReportId) + "/rest" 
        )
      case "rest_out":
        return await sendReportFetch(
          {time: minutes()},
          "DELETE",
          get(CurrentReportId) + "/rest" 
        )
      default:
        return undefined
    }
  })

export const sendLoadableAtom = loadable(sendFetchAtom)

async function sendReportFetch(content: Create | Rest | End, method: string, params: String = "") {
  const res = await fetch(url + params, {
    method: method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(content)
  })
  return await res.json()
}

