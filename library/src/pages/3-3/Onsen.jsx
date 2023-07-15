import React from 'react';
import { Button } from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

function Onsen() {
  const handleClick = () => {
    alert('pressed');
  };
  return (
    <div>
      <Button onClick={handleClick} modifier="large--cta">
        Tap Me!!
      </Button>
      <Button onClick={handleClick} modifier="outline">
        Tap Me!!
      </Button>
      <Button onClick={handleClick} modifier="light">
        Tap Me!!
      </Button>
      <Button onClick={handleClick} modifier="quiet">
        Tap Me!!
      </Button>
      <Button onClick={handleClick} modifier="cta">
        Tap Me!!
      </Button>
      <br />
    </div>
  );
}

export default Onsen;
