import React from 'react';
// import { css } from '@emotion/css';
import styled from '@emotion/styled';
// import { css } from '@emotion/react';

const color = 'white';

import { css } from '@emotion/react';

const style = css`
  color: hotpink;
`;

// eslint-disable-next-line react/prop-types
const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
);

const anotherStyle = css({
  textDecoration: 'underline',
});

const AnotherComponent = () => (
  <div css={[anotherStyle, style]}>Some text with an underline.</div>
);
function Emotion() {
  return (
    <>
      <div
        className={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
      <Button>This my button component.</Button>
      <SomeComponent>
        <AnotherComponent />
      </SomeComponent>
    </>
  );
}

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export default Emotion;
