import React from 'react';
import WrapperContent from './components/WrapperContent';
import MainBoard from './components/MainBoard';
import ControlButton from './components/ControlButton';

const App: React.FC<{}> = () => {
  return (
    <WrapperContent>
      <ControlButton />
      <MainBoard />
    </WrapperContent>
  );
}

export default App;
