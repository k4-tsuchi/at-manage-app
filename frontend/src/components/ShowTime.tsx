
import { useDate } from  '../components/Digits'
const ShowTime = () => {

  const { date } = useDate()
  return (
    <div className='text-center my-7'>

    <h1 className='text-3xl mb-2'>{date.day}</h1>
    <h2 className='text-6xl'>{date.time}</h2>

  </div>
  )
}

export default ShowTime;