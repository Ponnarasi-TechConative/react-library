import React, { useState } from "react"

const Increment = () => {
  
  const [count, setCount] = useState(0)
  const handleIncrement = () =>{
    setCount(count + 1)
  }
  const handleDecrement = () =>{
    setCount(count -1 )
  }
    return (
      <div className="increment" style={{margin: "10px"}}> 
        <button className="btn btn-primary" onClick={handleIncrement}>+</button>
        <span style={{margin: "10px", "padding":"3px"}}>{count}</span>
        <button className="btn btn-primary" onClick={handleDecrement}>-</button>
      </div>
    )
}

export default Increment