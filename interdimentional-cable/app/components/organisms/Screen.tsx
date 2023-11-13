
'use client'
import { IVideo } from "@/app/programming";
import { useState, useEffect } from "react";
import YouTube, { YouTubeProps } from 'react-youtube';

const Screen = ({setPlayer, videos} : {setPlayer:Function, videos: Array<IVideo>}) => {

    const [currentVideoId , setCurrentVideoId] = useState(0)
    
    const  onEnd : YouTubeProps['onEnd'] = (event)=> {
        let player = event.target;
        console.log("end")
    //     setPlayer(player)
        setCurrentVideoId(currentVideoId+1)
         player.playVideo();


    }
    
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        let player = event.target;
        player.playVideo();
      }

      const opts: YouTubeProps['opts'] = {

        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          mute: 0,
          loop: 1,
          start: 0,
          controls:0
        },
      };
    
    return (
         // @ts-ignore
        <YouTube 
        className="flex grow  " 
        iframeClassName='video grow flex  w-full h-full' 
        videoId={videos[currentVideoId].videoId}
        opts={opts} 
        onReady={onPlayerReady}
        onEnd = {onEnd}
        />

    )

}



export default Screen