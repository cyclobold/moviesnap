import Button from "./Button"
function App(){

  function welcome(user){
    alert("welcome home " + user)

  }


  return <div>
            <div>Welcome Everyone</div>
            <Button name="James" greeting={(user) => welcome(user)}></Button>
          </div>


}

export default App