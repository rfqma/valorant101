'use client'

import { useEffect, useState } from "react"
import Image from 'next/image'
import { AgentDetails } from "@/app/lib/types"

export default function AgentDetail({ params }: { params: { uuid: string } }) {
    const { uuid } = params
    const [agent, setAgent] = useState<AgentDetails | null>(null)
    const [selectedAbility, setSelectedAbility] = useState<{ displayName: string, displayIcon: string, description: string, slot: string } | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        async function fetchAgent() {
            try {
                const response = await fetch(`https://valorant-api.com/v1/agents/${uuid}`)
                if (response.status !== 200) {
                    throw new Error('network response was not ok')
                }
                const data = await response.json()
                if (data.length === 0) {
                    console.log('no agents found')
                }
                setAgent(data.data)
            } catch (error) {
                console.log(error)
                console.error('error fetching agents: ', error)
            }
        }

        fetchAgent()
    }, [])

    const showAbilityDescription = (ability: { displayName: string, displayIcon: string, description: string, slot: string } | null) => {
        setSelectedAbility(ability)
    }

    const togglePlay = () => {
        const audioElement = document.getElementById('audioElement') as HTMLAudioElement
        if (audioElement) {
            if (isPlaying) {
                audioElement.pause()
            } else {
                audioElement.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <>
            {
                agent
                    ?
                    (
                        <div className='container p-10'>
                            <div
                                className='flex flex-col box-border p-5 border-4 gap-5 rounded-2xl items-center bg-slate-700'
                            >
                                <div
                                    className='rounded-2xl'
                                    style={{
                                        backgroundImage: `url(${agent.background || ''})`,
                                        backgroundSize: 'cover',
                                    }}
                                >
                                    <Image src={agent.fullPortrait} alt={agent.displayName} width={400} height={500} />
                                </div>
                                <div className='flex flex-col items-center text-center gap-5'>
                                    <div>
                                        <h1 className='font-poppins font-bold text-2xl text-white'>{agent.displayName}</h1>
                                        <span className='font-poppins font-normal text-sm text-white'>{agent.role.displayName}</span>
                                    </div>
                                    <div>
                                        <p className='font-poppins font-normal text-sm text-white'>{agent.description}</p>
                                    </div>
                                    <div>
                                        {
                                            agent.voiceLine.mediaList.length > 0
                                                ?
                                                (
                                                    <div>
                                                        <audio
                                                            id="audioElement"
                                                            controls
                                                        >
                                                            <source src={agent.voiceLine.mediaList[0].wave} type="audio/wav" />
                                                            Your browser does not support the audio element.
                                                        </audio>
                                                    </div>
                                                )
                                                :
                                                ''
                                        }
                                    </div>
                                    <div className='flex items-center gap-6 mt-5'>
                                        {
                                            agent.abilities.map((ability, index) => {
                                                return (
                                                    <div onClick={() => showAbilityDescription(ability)} key={index} className='flex flex-col items-center gap-2 cursor-pointer'>
                                                        <Image src={ability.displayIcon} alt={ability.displayName} width={35} height={35} />
                                                        <span className='font-poppins font-normal text-xs text-white'>{ability.displayName}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    {
                                        selectedAbility
                                            ?
                                            (
                                                <div className='flex flex-col gap-2 mt-4'>
                                                    <span className='font-poppins font-normal text-sm text-white'>Type: {selectedAbility?.slot}</span>
                                                    <p className='font-poppins font-normal text-sm text-white'>{selectedAbility?.description}</p>
                                                </div>
                                            )
                                            :
                                            ''
                                    }
                                </div>
                            </div>
                        </div>
                    )
                    :
                    'Loading...'
            }
        </>
    )
}