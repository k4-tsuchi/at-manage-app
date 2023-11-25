
const weeks = ['日', '月', '火', '水', '木', '金', '土']

export function getTargetMonth(month: string) {
  const split = month.split('/')
  const date = new Date(Number(split[0]), Number(split[1]))
  date.setMonth(date.getMonth(), 0)
  const dateList = Array(date.getDate())
  const calendar = dateList.fill(0).map((_, index: number) => {
    const day = index + 1
    date.setDate(day);
    return day.toString().padStart(2, '0') + "(" + weeks[date.getDay()] + ")"
  })
  return calendar
}