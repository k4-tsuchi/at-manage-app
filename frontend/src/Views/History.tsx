import { useEffect } from "react"

const url = 'http://0.0.0.0:8181'

async function get_data() {
  const a = await fetch(url)
  const b = await a.json()
  console.log(b)
}

export default function History() {
  useEffect(() => {
    get_data()
  }, [])

  return (
    <div>hello</div>
  )
}