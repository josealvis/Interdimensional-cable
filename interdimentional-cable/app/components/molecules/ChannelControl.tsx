import Image, { StaticImageData } from 'next/image'

import { ArrowDownBtn, ArrowUpBtn } from "../atoms/ArrowBtn"
import { IChannel } from '@/app/programming'


const ChannelControl = ({channel, upArrowCallback, downArrowCallback }: {channel:IChannel, upArrowCallback: Function, downArrowCallback: Function}) => {

    return (
        <div className=" flex flex-col items-center      ">
            <ArrowDownBtn onClick={upArrowCallback} />
            {channel.logoImg? 
             <Image src={channel.logoImg}  className='h-40 w-40 grow-0 shrink-0' alt="Picture of the author" />:
             <h2 className="font-bold text-3xl text-gray-300 text-center">{channel.name}</h2>        
        }
            <ArrowUpBtn onClick={downArrowCallback} />
        </div>)

}




export default ChannelControl