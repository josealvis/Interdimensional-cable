"use client";
import Image, { StaticImageData } from 'next/image'
import { useState, useEffect, useCallback, useReducer, useContext } from "react";

//import { GlobalContext, GlobalDispatchContext} from './storage/GlobalContext';
import {IGlobalStorage, useGobalDispatch, useGobalStorage, GlobalContext} from './storage/GlobalProvider'


import VideoScreen from './components/organisms/Screen'
import DetailBar from './components/organisms/DetailBar';

import   { IChannel, IVideo } from './programming'


export default function Home() {
  const {programming,currentChannelIndex} = useGobalStorage();
  const GlobalDispatchContext = useGobalDispatch();
  const [player, setPlayer] = useState(null);
  const currentChannel: IChannel = programming.channelList[currentChannelIndex]
  const [youtubeIDIndex, setyoutubeID] = useState(0);

  const handleUserKeyPress = (event: { key: any, keyCode: number }) => {
    const { key, keyCode } = event;
    if (keyCode === 39) { nextChannelHandler() }
    if (keyCode === 37) { previusChannelHandler() }
  };

  const nextChannelHandler = () => {
       GlobalDispatchContext({type:"NEXT_CHANNEL"})
  }

  const previusChannelHandler = () => {
    GlobalDispatchContext({type:"PREVIOUS_CHANNEL"})

  }

  // if (player) {
  //   console.log("p[layer:", player)
  //   try{
  //   player.playVideo();
  //   player.cuePlaylist(currentChannel.videos.map(v => v.videoId), 0, 0);
  //   player.setLoop(true)
  //   player.playVideo();
  //   }catch (err){
  //     console.log(err)
  //   }
  // }

  useEffect(() => {
    // const id = setTimeout(() => {
    //   setpy(player)
    //   }, 10000);

    window.addEventListener('keydown', handleUserKeyPress);
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress, player]);

  return (

      <main className="container flex flex-col h-screen  min-w-full max-h-screen   min-h-screen bg-indigo-500">
        <VideoScreen
          //key={currentChannel.name} 
          setPlayer={setPlayer} videos={currentChannel.videos} />
        <DetailBar
          channel={currentChannel}
          video={currentChannel.videos[youtubeIDIndex]}
          nextCallback={nextChannelHandler}
          previusCallback={previusChannelHandler} />
      </main>
  )
}





