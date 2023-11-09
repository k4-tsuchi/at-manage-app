
import "./App.css"
import View from "./Views/View"
import { Provider } from "jotai"

function App() {

  return (
    <>
      <div className='container'>
        <Provider>
          <View />
        </Provider>
      </div>
    </>
  )
}

export default App
