import {atom} from 'jotai'
import { getDataAtom, globalStateAtom } from './atoms'
import { dateDay, day, minutes, time } from '../Funcs/Digits'


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

const url = 'https://localhost:8000/reports';

export async function getFetch() {
  const res = await fetch(url)
  const json = await res.json()
  console.log(json)
}

export const sendFetchAtom = atom((get) => {
  switch (get(globalStateAtom)) {
    case 'at_in': 
      const content: Create = {
        day: dateDay(),
        start_at: minutes()
      }
      return sendFetch(content, "POST")
    case 'at_out':
      console.log('fetch_at_out')
      break
    case "rest_in":
      console.log('fetch_rest_in')
      break
    case "rest_out":
      console.log('fetch_rest_out')
      break
  }
})

// async function createReportFetch() {
//   const res = await fetch(url, {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       day: dateDay(),
//       start_at: minutes()
//     })
//   })
//   const json = res.json()
//   console.log(json)
// }

async function sendFetch(content: Create | Rest | End, method: string, params: string = "") {
  const res = await fetch(url + params, {
    method: method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(content)
  })
  const json = res.json()
  json.then((value) => {
    return value;
  }
  )
}

