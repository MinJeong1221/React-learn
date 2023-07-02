import React,{useState, useEffect} from 'react'

function Clock(): React.ReactElement {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  const tick = ()=> {
    setTime(new Date().toLocaleTimeString())
  }

  useEffect(() => {
    setInterval(tick, 1000)
  }, [])
  

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
}

export default Clock