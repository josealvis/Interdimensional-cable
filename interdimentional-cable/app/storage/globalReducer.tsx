import { IGlobalStorage } from "./GlobalProvider";

export interface IAction {
  type: string,
  payload: any
}


export const ACTIONS = {
  NEXT_CHANNEL : "NEXT_CHANNEL",
  PREVIOUS_CHANNEL: "PREVIOUS_CHANNEL" 
}

export function globalReducer(storage: IGlobalStorage, action : IAction) {
    switch (action.type) {
      case ACTIONS.NEXT_CHANNEL: {
        let nextIndex = storage.currentChannelIndex + 1
        nextIndex = nextIndex > (storage.programming.channelList.length - 1) ? 0 : nextIndex;
        console.log(action.type, ": ", storage)
        return {...storage, currentChannelIndex: nextIndex }
      }
      case ACTIONS.PREVIOUS_CHANNEL: {
        let nextIndex = storage.currentChannelIndex - 1
        nextIndex = nextIndex < 0 ? (storage.programming.channelList.length - 1) : nextIndex;    
        return {...storage, currentChannelIndex: nextIndex }
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
  