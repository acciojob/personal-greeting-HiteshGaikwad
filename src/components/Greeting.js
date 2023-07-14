import React,{useState} from "react"

const Greeting=()=>{

    let [name,setName]= useState("")

    return (
        <div>
            <label>Enter your name:</label>
            <div>
            <input type="text" onChange={(event)=>setName(event.target.value)}/>
            </div>
            {name && <p>Hello {name}!</p>}

        </div>
    )
}

export default Greeting