import React from 'react'

interface types{
  avatarUrl: string
  name: string,
  date?: Date
  text?: string,
  
}

function formatDate(date:Date) {
  return date.toLocaleDateString();
}

const UserInfo = (props:types)=>{
  return(
    <div className="UserInfo">
        <img className="Avatar"
          src={props.avatarUrl}
          alt={props.name}
        />
    </div>    
  )
}

function Extraction(props:types):React.ReactElement {
  return (
    <div className="Comment">
      <UserInfo avatarUrl={props.avatarUrl} name={props.name}/>
        <div className="UserInfo-name">
          {props.name}
        </div>      
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date as Date)}
      </div>
    </div>
  )
}

export default Extraction