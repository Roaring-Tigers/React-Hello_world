import React from "react"  // 17.2
import Button from "./Components/Button"

const App=()=>{
    let a = 10

    let styleh1 = {textAlign: "center", border: "2px solid green"}

   return (
       <div className="hello">
           <h1 style={styleh1}>Hello World, {2+3} </h1>
           <p> and you happened some it has got activated okay It text to speech has got activated earlier earlier. How to disable it guys I'm not typing once again okay</p>
           
           <Button 
            name="Apple" 
             description="Apple is an amazing fruit"
             backgroundColor="red"
            /> 

           <Button  name="Mango" 
            description="Mango is an sweet fruit"
            backgroundColor="yellow"
            />
          

           <Button name="Orange" 
            description="Orange is an sour fruit"
            backgroundColor="orange"
           />


       </div>
   )
}

export default App