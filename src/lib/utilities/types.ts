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

export type WeaponDetail = {
    uuid: string
    displayName: string
    category: string
    displayIcon: string
    killStreamIcon: string
    weaponStats: WeaponStat
    shopData: WeaponShopData
}

export type WeaponStat = {
    fireRate: number
    magazineSize: number
    runSpeedMultiplier: number
    equipTimeSeconds: number
    reloadTimeSeconds: number
    firstBulletAccuracy: number
    wallPenetration: string
    altFireType: string
    adsStats: WeaponAdsStat
    damageRanges: WeaponDamageRange[]
}

export type WeaponAdsStat = {
    zoomMultiplier: number
    fireRate: number
    runSpeedMultiplier: number
    burstCount: number
    firstBulletAccuracy: number
}

export type WeaponDamageRange = {
    rangeStartMeters: number
    rangeEndMeters: number
    headDamage: number
    bodyDamage: number
    legDamage: number
}

export type WeaponShopData = {
    cost: number
    category: string
    categoryText: string
    gridPosition: WeaponGridPosition
    canBeTrashed: boolean
    newImage: string
}

export type WeaponGridPosition = {
    row: number
    column: number
}