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

export type MapDetail = {
    uuid: string
    displayName: string
    narrativeDescription: string
    tacticalDescription: string
    coordinates: string
    displayIcon: string
    listViewIcon: string
    splash: string
    assetPath: string
    mapUrl: string
    xMultiplier: number
    yMultiplier: number
    xScalarToAdd: number
    yScalarToAdd: number
    callouts: MapCallout[]
}

export type MapCallout = {
    regionName: string
    superRegionName: string
    location: MapCalloutLocation[]
}

export type MapCalloutLocation = {
    x: number
    y: number
}