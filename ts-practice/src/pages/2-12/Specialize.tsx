import React from 'react'
import FancyBorder from './FancyBorder'

interface Props{
    title: string,
    message: string
}

function Dialog(props: Props): React.ReactElement {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
      </FancyBorder>
    );
}

function Specialize(): React.ReactElement {
    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!" />
    )
  }

export default Specialize;