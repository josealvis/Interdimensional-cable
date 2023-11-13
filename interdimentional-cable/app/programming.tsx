import { StaticImageData } from 'next/image'

const programming: IProgramming =
{
    date: new Date(),
    channelList: [
        {
            name: "NON-NPC",
            searchTxt: ["Oblivion NPC Conversation"],
            description: "",
            logoImg: null,
            logoUrl: "",
            channelType: "searchresult",
            videos: [{
                name:"Oblivion NPC Conversation: \"You have no hair sweetie!\"",
                description: "",
                videoId: "eG9oTr2ttJU",
                duration: 85
            },
            {
                name:"oblivion npc conversation pt. 46",
                description: "",
                videoId: "mHrwoGhtJMQ",
                duration: 106
            },
            {
                name:"Oblivion NPC Conversation",
                description: "",
                videoId: "MXqWdtsFqsc",
                duration: 101
            }
        ],
            includeVideoId:[]

        },
        {
            name: "ISPN Fight",
            searchTxt: ["car jitsu","chessboxing"],
            description: "Interdimansional Sport programming Network",
            logoImg: null,
            logoUrl: "",
            channelType: "searchresult",
            videos: [{
                name:"CarJitsu Quarter Final 2 - \‘Seatbelt Assassin\’",
                description: "",
                videoId: "g6xcBbsMx5s",
                duration: 904
            },
            {
                name:"Pointcrow vs DisguisedToast - Mogul Chessboxing Main Event",
                description: "",
                videoId: "j3AEKvsaYBE",
                duration: 1644
            },
            {
                name:"Chessboxing | Oktoberfist 23 | Full show, pt1 of 2",
                description: "",
                videoId: "8jnh2BXopkM",
                duration: 7921
            }
        ],
            includeVideoId:[]

        }
    ]

}


export default programming


export interface IProgramming {
    date: Date,
    channelList: Array<IChannel>
}

export interface IChannel {
    name: string,
    description: string,
    logoImg: StaticImageData |  null,
    logoUrl: string,
    channelType: string,
    videos: Array<IVideo>,
    searchTxt: Array<string>,
    includeVideoId: Array<string>,
}

export interface IVideo {
    name: string,
    description: string,
    videoId: string,
    duration: number,
}
