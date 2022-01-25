import { createContext } from "react";
import { Message } from "../Api";
import { PriorityEnum } from "../enum/PriorityEnum";

interface IMessagesControlContext {
  stop: boolean,
  stopMessages: () => void,
  colError: Message[],
  colWarn: Message[],
  colInfo: Message[],
  clearMessages: () => void,
  clearMessage: (index:number, priority: PriorityEnum) => void,
}

export const MessagesControlContext = createContext<IMessagesControlContext>({} as IMessagesControlContext);