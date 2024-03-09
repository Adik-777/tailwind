import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Steps from './components/Steps';
import Title from './components/Title';
import Button from './components/Button';
import nextStepBtn from './data/nextStepBtn';
import goBackBtn from './data/goBackBtn';
import titleAray from './data/titleAray';
import subTitleAray from './data/subTitleAray';
import confirmBtn from './data/confirmBtn';

function App() {
  const [isClicked, setClicked] = useState(0);
  const [stepClicked, setStepClicked] = useState('stepNumberActive');

  const nextHandleClick = () => {
    setClicked(isClicked + 1);
    setStepClicked('stepNumberActive');
  };
  const backHandleClick = () => {
    setClicked(isClicked - 1);
    setStepClicked('stepNumberActive');
  };
  return (
    <div className="App">
      <Steps stepClicked={stepClicked} isClicked={isClicked} />
      <div className="flex-col">
        <Title
          title={titleAray[isClicked]}
          subTitle={subTitleAray[isClicked]}
        />
        <Form isClicked={isClicked} />
      </div>
      <Button
        handleClick={backHandleClick}
        type={goBackBtn.type}
        classBtn={isClicked === 0 ? 'hidden' : goBackBtn.className}
        title={goBackBtn.name}
      />
      <Button
        handleClick={nextHandleClick}
        type={nextStepBtn.type}
        classBtn={isClicked === 3 ? 'hidden' : nextStepBtn.className}
        title={nextStepBtn.name}
      />
      <Button
        handleClick={nextHandleClick}
        type={confirmBtn.type}
        classBtn={isClicked === 3 ? confirmBtn.className : 'hidden'}
        title={confirmBtn.name}
      />
    </div>
  );
}

export default App;
