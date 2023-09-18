'use client'

import { useEffect, useState } from "react"
import Image from 'next/image'
import { AgentDetails } from "@/app/lib/types"
import { RiArrowDownDoubleFill } from 'react-icons/ri'

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
    }, [uuid])

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
                        <div className='container bg-gray-800 max-w-lg min-h-screen'>
                            <div className='container p-10'>
                                <div className='flex flex-col p-6 gap-5 items-center'>
                                    <div
                                        style={{
                                            backgroundImage: `url(${agent.background || ''})`,
                                            backgroundSize: 'cover',
                                        }}
                                    >
                                        <Image src={agent.fullPortrait} alt={agent.displayName} width={400} height={400} />
                                    </div>
                                    <div className='flex flex-col items-center text-center gap-5'>
                                        <div className="px-2 bg-gray-700 rounded-xl">
                                            <span className='font-poppins font-normal text-sm text-gray-400'>{agent.role.displayName}</span>
                                        </div>
                                        <div>
                                            <h1 className='font-poppins font-bold text-3xl text-gray-200'>{agent.displayName}</h1>
                                        </div>

                                        <div className="flex flex-col gap-5 p-4 bg-gray-700 shadow-2xl rounded-xl">
                                            <p className='font-poppins font-normal text-sm text-gray-300'>{agent.description}</p>
                                            <div className='flex flex-col items-center'>
                                                <span className="font-poppins font-bold text-sm text-gray-300">Agent&apos;s Voice Line</span>
                                                {
                                                    agent.voiceLine.mediaList.length > 0
                                                        ?
                                                        (
                                                            <div className="mt-5">
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
                                        </div>
                                        <div className='grid grid-cols-4 gap-6 mt-5 p-4 bg-gray-700 shadow-2xl rounded-xl'>
                                            {
                                                agent.abilities.map((ability, index) => {
                                                    return (
                                                        <div onClick={() => showAbilityDescription(ability)} key={index} className='flex flex-col items-center gap-2 cursor-pointer'>
                                                            {
                                                                ability.displayIcon !== null
                                                                    ?
                                                                    (
                                                                        <Image src={ability.displayIcon} alt={ability.displayName} width={35} height={35} />
                                                                    )
                                                                    :
                                                                    <span className='font-poppins font-normal text-sm text-gray-300'>No Icon</span>
                                                            }
                                                            <span className='font-poppins font-normal text-xs text-gray-300'>{ability.displayName}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        {
                                            selectedAbility
                                                ?
                                                (
                                                    <>
                                                        <RiArrowDownDoubleFill
                                                            size="50px"
                                                            color='gray'
                                                        />
                                                        <div className='flex flex-col items-center text-center gap-2 mt-4 p-4 bg-gray-700 shadow-2xl rounded-xl'>
                                                            <div className="px-2 bg-gray-800 rounded-xl">
                                                                <span className='font-poppins font-normal text-sm text-gray-400'>{selectedAbility?.slot}</span>
                                                            </div>
                                                            <p className='font-poppins font-normal text-sm text-gray-300'>{selectedAbility?.description}</p>
                                                        </div>
                                                    </>
                                                )
                                                :
                                                ''
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    ''
            }
        </>
    )
}