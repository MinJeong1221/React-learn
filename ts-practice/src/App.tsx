import React from 'react';
// import Clock from './pages/2-4/Clock';
// import Composition from './pages/2-5/Composition';
// import Extraction from './pages/2-5/Extraction';
// import ClassClock from './pages/2-6/ClassClock'
import Event from './pages/2-7/Event';

function App() {
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };
  return (
    <>
      {/* <Clock/> */}
      {/* <Composition name='mj'/> */}
      {/* <Extraction 
        avatarUrl={comment.author.avatarUrl}
        name={comment.author.name}      
        text={comment.text}
        date={comment.date}/> */}
      {/* <ClassClock/> */}
      <Event/>
    </>
  );
}

export default App;
