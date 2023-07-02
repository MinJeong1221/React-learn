import React from 'react'

interface ItemType{
  id: number,
  text: string
}

function List() {
  // const numbers = [1,2,3,4,5,6]

  const List = [{id:0, text:'Hello World'},
                {id:0, text:'Hello React'},
                {id:0, text:'Hello js'}
              ]

  const ListItem = (props: ItemType)=>{
    return(
      <li key={props.id}>{props.text}</li>
    )
  }
  return (
    <>{List.map((item:ItemType)=>(
      <ListItem key={item.id} {...item}/>
    ))}</>
  )
}

export default List