export type AgentDetail = {
    displayIconSmall: string
    uuid: string
    background: string
    displayName: string
    fullPortrait: string
    description: string
    isPlayableCharacter: boolean
    role: AgentRole
    abilities: AgentAbility[]
    voiceLine: AgentVoiceLine[]
}

export type AgentRole = {
    displayName: string
}

export type AgentAbility = {
    displayName: string
    displayIcon: string
    description: string
    slot: string
}

export type AgentVoiceLine = {
    minDuration: number
    maxDuration: number
    mediaList: AgentVoiceLineMediaList[]
}

export type AgentVoiceLineMediaList = {
    id: number,
    wwise: string,
    wave: string
}