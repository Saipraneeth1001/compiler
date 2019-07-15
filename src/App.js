import React from 'react';
import AceEditor from './components/reactAce/Ace';
import CustomInput from './components/CustomInput';
import ResultBox from './Result';


function App() {
  return (
    <div>
      <AceEditor />
      <div style={{marginLeft:'100px'}}><CustomInput /></div>
    <ResultBox style={{ margin:'20px'}}/>
    </div>
  );
}

export default App;
