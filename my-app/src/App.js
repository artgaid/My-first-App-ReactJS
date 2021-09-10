import FirstComponent from "./Components/FirstComponent/FirstComponent";
import { MessageComponent } from "./Components/MessageComponent/MessageComponent";
import SecondComponent from './Components/SecondComponent/SecondComponent';
import { StyledComponent } from './Components/StyledComponent/StyledComponent';

const testProps = 'Hello guys, this is testProps';
const someObj = {
  text: 'This is SecondComponent',
  number: 7,
}
const messageText = 'Hi, this is Message Text'

function App() {
  return (
    <div className="App">
      <FirstComponent firstProps="1" secondProps={testProps} />
      <SecondComponent obj={someObj} />
      <StyledComponent />
      <MessageComponent Message={messageText} />
    </div>
  );
}

export default App;
