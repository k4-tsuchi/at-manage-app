import { atom } from 'jotai'
import { CurrentReportId, getDataAtom, globalStateAtom} from './atoms'
import { dateDay, day, minutes, time } from '../Funcs/Digits'

import { loadable } from "jotai/utils"

type Create = {
  day: String;
  start_at: String;
}

type Rest = {
  time: String;
}

type End = {
  end_at: String
}

const url = 'https://localhost:8000/reports/';

export async function getFetch() {
  const res = await fetch(url)
  const json = await res.json()
  console.log(json)
}

const sendFetchAtom = atom(
  async (get) => {
    console.log(get(globalStateAtom))
    switch (get(globalStateAtom)) {
      case 'at_in':
        return await sendReportFetch(
          {
            day: dateDay(),
            start_at: minutes()
          }, 
          "POST")
      case 'at_out':
        console.log(CurrentReportId)
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

