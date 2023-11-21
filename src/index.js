import React from "react"; 
import ReactDOM from "react-dom";
import "./style.css";


//JSX

const Hello=()=>{
     let a = 10

     let styleh1 = {textAlign: "center", border: "2px solid green"}

    return (
        <div className="hello">
            <h1 style={styleh1}>Hello World, {2+3} </h1>
            <p> and you happened some it has got activated okay It text to speech has got activated earlier earlier. How to disable it guys I'm not typing once again okay</p>
        </div>
    )
}


ReactDOM.render(<Hello />,  document.getElementById("root"))




// Create a react app, which displays your name, Your skills as(ordered List) and your hobbies (unordered list) in a react app





















// functon vs Functional Component
// function hello(){
//     return "hello"
// }

// hello()

// // functional Component
// function Hello(){
//     return <h1>Hello</h1>
// }

{/* <Hello> </Hello>
<Hello /> */}