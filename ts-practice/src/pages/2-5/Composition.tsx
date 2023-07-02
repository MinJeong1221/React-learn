import React from 'react'

interface types{
  name : string
}

function Composition(props:types) : React.ReactElement{
  return (
   <>
   <div>Hello, {props.name}</div>
   </>
  )
}

export default Composition