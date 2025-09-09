
import React from 'react'
interface myButton{
    name : string,
}

export default function Button({name}:myButton) {
  return (
    <div>
      <button style={{backgroundColor:'green', height:'40px', width:'70px'}}> {name}</button>
    </div>
  );
}
