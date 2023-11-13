"use client";
import Image, { StaticImageData } from 'next/image'
import { useState, useEffect, useCallback } from "react";


import VideoScreen from './components/organisms/Screen'
import DetailBar from './components/organisms/DetailBar';

import programming, { IChannel, IVideo } from './programming'


export default function Home() {
  const [channelIdSelected, setChannelIdSelected] = useState(0);
  const [player, setPlayer] = useState(null);
  const currentChannel: IChannel = programming.channelList[channelIdSelected]
  const [youtubeIDIndex, setyoutubeID] = useState(0);

  const handleUserKeyPress = (event: { key: any, keyCode: number }) => {
    const { key, keyCode } = event;
    if (keyCode === 39) { nextChannelHandler() }
    if (keyCode === 37) { previusChannelHandler() }
  };

  const nextChannelHandler = () => {
    let nextIndex = channelIdSelected + 1
    nextIndex = nextIndex > (programming.channelList.length - 1) ? 0 : nextIndex;
    setChannelIdSelected(nextIndex)
  }

  const previusChannelHandler = () => {
    let nextIndex = channelIdSelected - 1
    nextIndex = nextIndex < 0 ? (programming.channelList.length - 1) : nextIndex;
    setChannelIdSelected(nextIndex)

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


