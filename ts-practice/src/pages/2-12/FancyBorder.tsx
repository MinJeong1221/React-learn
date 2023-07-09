import React from 'react'

interface Props {
    children: React.ReactNode;
    color: string
}

function FancyBorder(props: Props): React.ReactElement {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

export default FancyBorder;