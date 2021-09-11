import React from 'react';
import Message from './Components/MessegeComponent /MessageComponent';

import StyledText from "./Components/StyledText/StyledComponent";

const testText = 'HI WORLD '
const testFunction = () => {
  console.log('test');
}

console.log('render');


function App() {
  return (
    <>
      <StyledText text={testText} test={testFunction} />
      <Message />
    </>
  );
}

export default App;
