import { useState } from "react"

function App(){

  //initialize your state
  const [newState, setState] = useState(1)


    const increaseNumber = () => {

        setState(newState + 1)

    }


      return <div>
              <span> {newState} </span>
              <button onClick={increaseNumber}>Increase</button>
          </div>

}

export default App

