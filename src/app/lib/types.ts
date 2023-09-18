export type AgentDetails = {
    displayIconSmall: string
    uuid: string
    background: string
    displayName: string
    fullPortrait: string
    description: string
    isPlayableCharacter: boolean
    role: {
        displayName: string
    }
    abilities: [
        {
            displayName: string
            displayIcon: string
            description: string
            slot: string
        }
    ]
    voiceLine: {
        minDuration: number
        maxDuration: number
        mediaList: [
            {
                id: number,
                wwise: string,
                wave: string
            }
        ]
    }
}