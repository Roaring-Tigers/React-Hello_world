import React from "react"; 

const Button = ({name, description, backgroundColor}) =>{ // props is an objects

     return(
        <div style={{backgroundColor: backgroundColor}}>
            <button> {name} </button>
            <p>{description}</p>
        </div>
     )
}

export default Button



//  // props = {name: "Apple", description: "Apple is an amazing fruit", backgroundColor: "red"}
//  console.log(props) 
//  // obj.name = "Cheeku"