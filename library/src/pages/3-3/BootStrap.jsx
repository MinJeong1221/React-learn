import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function BootStrap() {
  const [show, setShow] = useState(true);
  return (
    <>
      <Alert show={show} variant="danger">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

export default BootStrap;
