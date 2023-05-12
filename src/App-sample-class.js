import React from "react"

class App extends React.Component{

   constructor(){
     super()

     this.state = {
         is_button_clicked: "Not Signed Up"
     }


   }

   changeButtonState = () => {

      this.setState({
         is_button_clicked: "Signed Up"
      })

   }


   render(){

     return <div>
               <h4>{this.state.is_button_clicked}</h4>
               <button onClick={this.changeButtonState}>{ this.state.is_button_clicked === "Signed Up" ? this.state.is_button_clicked : "Not Signed Up " }</button>
           </div>

   }


}

export default App
