import React from 'react';
// import Clock from './pages/2-4/Clock';
// import Composition from './pages/2-5/Composition';
// import Extraction from './pages/2-5/Extraction';
// import ClassClock from './pages/2-6/ClassClock'
// import Event from './pages/2-7/Event';
// import Greeting from './pages/2-8/Greeting';
import List from './pages/2-9/List';
import Controlled from './pages/2-10/Controlled';
import UnControlled from './pages/2-10/UnControlled';

function App() {
  // const comment = {
  //   date: new Date(),
  //   text: 'I hope you enjoy learning React!',
  //   author: {
  //     name: 'Hello Kitty',
  //     avatarUrl: 'http://placekitten.com/g/64/64'
  //   }
  // };
  return (
    <>
      {/* <Clock /> */}
      {/* <Composition name='mj' /> */}
      {/* <Extraction 
        avatarUrl={comment.author.avatarUrl}
        name={comment.author.name}      
        text={comment.text}
        date={comment.date} /> */}
      {/* <ClassClock /> */}
      {/* <Event /> */}
      {/* <Greeting /> */}
      {/* <List/> */}
      <Controlled/>
      <UnControlled/>
    </>
  );
}

export default App;
