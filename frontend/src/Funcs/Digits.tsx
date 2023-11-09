
import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
// import { Date } from "../@types/typeList.d";

const digits = () => {

  const weeks = ['日', '月', '火', '水', '木', '金', '土']

  const d = new Date();
  const year = String(d.getFullYear());
  const month = String(d.getMonth() + 1);
  const day = String(d.getDate());
  const week = d.getDay();
  const hour = d.getHours().toString().padStart(2, '0');
  const minutes = d.getMinutes().toString().padStart(2, '0');
  const seconds = d.getSeconds().toString().padStart(2, '0');

  const date: string[] = [year, month, day, weeks[week], hour, minutes, seconds]

  return date;
}

export const day = () => {
  const date = digits()
  return date[1] + "月" + date[2] + "日(" + date[3] + ")"
}

export const dateDay = () => {
  const date = digits()
  return date[2]
}

export const minutes = () => {
  const date = digits()
  return date[4] + ':' + date[5]
}

export const time = () => {
  const date = digits()
  return date[4] + ':' + date[5] + ':' + date[6]
}

const getDateNow = () => {
  return {
    day: day(), 
    time: time()
  }
}

export const useDate = () => {
  const [date, setDate] = useState(getDateNow)

  useEffect(() => {
    setInterval(() => {
      setDate(getDateNow)
    }, 1000)
  }, [])

  return {date}
}




