import { useState, useEffect, useCallback, ReactNode } from "react";
import generateMessage, { Message } from '../Api';
import { MessagesControlContext } from "../contexts/MessagesControlContext";
import { PriorityEnum } from "../enum/PriorityEnum";

type IMessageProviderType = {
  children: ReactNode
}

export default function MessagesProvider({children}: IMessageProviderType) {
  const [stop, setStop] = useState<boolean>(false)
  
  const [colError, setColError] = useState<Message[]>([]);
  const [colWarn, setColWarn] = useState<Message[]>([]);
  const [colInfo, setColInfo] = useState<Message[]>([]);

  const stopMessages = () => setStop(!stop)

  useEffect(() => {
    if(!stop){
      const cleanUp = generateMessage((message: Message) => {
        message.priority === PriorityEnum.Error && setColError(oldMessages => [message, ...oldMessages]);
        message.priority === PriorityEnum.Warn && setColWarn(oldMessages => [message, ...oldMessages]);
        message.priority === PriorityEnum.Info && setColInfo(oldMessages => [message, ...oldMessages]);
      });
      return cleanUp;
    }
  }, [stop]);

  const clearMessages = useCallback(() => {
    setColError([]);
    setColWarn([]);
    setColInfo([]);
  }, [])

  const clearMessage = useCallback((index: number, priority: PriorityEnum) => {
    switch(priority){
      case PriorityEnum.Error:
        setColError(oldMessages => oldMessages.filter((msg: Message, key: number) => key !== index));
        break;
      case PriorityEnum.Warn:
        setColWarn(oldMessages => oldMessages.filter((msg: Message, key: number) => key !== index));
        break;
      case PriorityEnum.Info:
        setColInfo(oldMessages => oldMessages.filter((msg: Message, key: number) => key !== index));
        break;
    }
  }, [])

  return (
    <MessagesControlContext.Provider value={{stopMessages, stop, colError, colWarn, colInfo, clearMessages, clearMessage}}>
      {children}
    </MessagesControlContext.Provider>
  )
}