import React, { useState, useEffect } from 'react';
import generateMessage, { Message } from './Api';
import WrapperContent from './components/WrapperContent';
import MainBoard from './components/MainBoard';
import ControlButton from './components/ControlButton';

const App: React.FC<{}> = () => {
  const [newMessage, setNewMessage] = useState<Message>({} as Message);
  //const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const cleanUp = generateMessage((message: Message) => {
      setNewMessage(message);
      //setMessage(oldMessages => [...oldMessages, message]);
    });
    return cleanUp;
  }, [setNewMessage]);

  return (
    <WrapperContent>
      <h1>nuffsaid.com Coding Challenge</h1>
      <ControlButton />
      <MainBoard newMessage={newMessage} />
    </WrapperContent>
  );
}

export default App;
