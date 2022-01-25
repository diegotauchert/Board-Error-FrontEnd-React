import React from 'react';
import WrapperContent from './components/WrapperContent';
import MainBoard from './components/MainBoard';
import ControlButton from './components/ControlButton';
import Notification from './components/Notification';

const App: React.FC<{}> = () => {
  return (
    <WrapperContent>
      <Notification />
      <ControlButton />
      <MainBoard />
    </WrapperContent>
  );
}

export default App;
