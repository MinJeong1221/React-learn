/* eslint-disable react/prop-types */
import React from 'react';

const url = 'https://jsonplaceholder.typicode.com/users';

const Item = ({ name, email }) => {
  return <li>{`name:${name} email:${email}`}</li>;
};

function Mocking() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  const handleClickButton = () => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(json => setData(json))
      .catch(err => {
        setError(`오류가 발생했습니다: ${err}`);
      });
  };

  const handleClickButton2 = () => {
    fetch(url, {
      headers: {
        Accept: 'application / json',
      },
    })
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log('json', json);
        setData(json);
      });
  };

  if (error) {
    return <b>{error}</b>;
  }

  React.useEffect(() => {
    console.log('data', data);
  }, [data]);

  return (
    <div>
      <button onClick={handleClickButton}>GET DATA</button>
      <button onClick={handleClickButton2}>GET DATA2</button>
      {data && (
        <ul>
          {data.map(user => {
            <Item key={user.id} name={user.name} email={user.email}></Item>;
          })}
        </ul>
      )}
    </div>
  );
}

export default Mocking;
