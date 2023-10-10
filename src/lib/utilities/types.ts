export type AgentDetail = {
    uuid: string
    displayName: string
    description: string
    displayIconSmall: string
    fullPortrait: string
    background: string
    isPlayableCharacter: boolean
    role: AgentRole
    abilities: AgentAbility[]
}

export type AgentRole = {
    displayName: string
}

export type AgentAbility = {
    slot: string
    displayName: string
    description: string
    displayIcon: string
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
    xMultiplier: number
    yMultiplier: number
    xScalarToAdd: number
    yScalarToAdd: number
    callouts: MapCallout[]
}

export type MapCallout = {
    regionName: string
    superRegionName: string
    location: MapCalloutLocation
}

export type MapCalloutLocation = {
    x: number
    y: number
}