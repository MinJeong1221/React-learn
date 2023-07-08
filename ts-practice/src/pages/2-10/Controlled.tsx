import React, { useState } from 'react'

function Controlled() : React.ReactElement{
  const [name, setName] = useState('');
  const [essay, setEssay] = useState('');
  const [flavor, setFlavor] = useState('');
  const flavorOption = [
    {key: 0, value: 'Grapefruit'},
    {key: 1, value: 'Lime'},
    {key: 2, value: 'Coconut'},
    {key: 3, value: 'Mango'},
  ]

  const handleChange = (event: React.ChangeEvent)=>{
    if(event.target instanceof HTMLInputElement){
      setName(event.target.value)
    } else if(event.target instanceof HTMLTextAreaElement){
      setEssay(event.target.value)
    } else if(event.target instanceof HTMLSelectElement){
      setFlavor(event.target.value)
    }   
  }
  // const handleChangeEssay = (event: React.ChangeEvent<HTMLTextAreaElement>)=>{
  //   setEssay(event.target.value);
  // }
  // const handleChangeFlavor = (event: React.ChangeEvent<HTMLSelectElement>)=>{
  //   setFlavor(event.target.value);
  // }
  const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
    alert(`name: ${name}, essay: ${essay}, flavor: ${flavor}`);
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <label>
          Essay:
          <textarea value={essay} onChange={handleChange} />
        </label>
        <label>
          Pick your favorite flavor:
          <select value={flavor} onChange={handleChange}>
            {flavorOption.map((option) => (
              <option key={option.key}value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
  )
}

export default Controlled