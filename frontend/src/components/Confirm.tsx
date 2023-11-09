
import { useAtom } from "jotai"
import { modalResultAtom } from "../Atom/atoms"

const Confirm: React.FC = () => {
  const [ , setResult] = useAtom(modalResultAtom)

  return (
    <>
      <div className="content w-3/4 rounded border-4 border-ryuhow-blue bg-white p-5">
        <h3 className="text-center text-3xl pb-10">退勤でよろしいですか？</h3>
        <ul className="flex justify-around mx-auto">
          <li className="btn btn-blue w-5/12"><input type="button" value="いいえ" onClick={() => setResult(false)} /></li>
          <li className="btn btn-red w-5/12"><input type="button" value="はい" onClick={() => setResult(true)} /></li>
        </ul>
      </div>
    </>
  )
}

export default Confirm