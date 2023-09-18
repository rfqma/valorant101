'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AgentDetails } from "@/app/lib/types"

export default function Agent() {
    const [agents, setAgents] = useState<AgentDetails[] | null>(null)

    useEffect(() => {
        async function fetchAgents() {
            try {
                const response = await fetch('https://valorant-api.com/v1/agents')
                if (response.status !== 200) {
                    throw new Error('network response was not ok')
                }
                const data = await response.json()
                if (data.length === 0) {
                    console.log('no agents found')
                }
                setAgents(data.data)
            } catch (error) {
                console.log(error)
                console.error('error fetching agents: ', error)
            }
        }

        fetchAgents()
    }, [])

    return (
        <>
            <div className='flex flex-col p-6 gap-5 rounded-xl shadow-2xl items-center bg-gray-800 max-w-lg'>
                <h1 className='font-poppins font-bold text-xl text-gray-100'>Valorant Agents</h1>
                <div className='grid grid-cols-5 gap-2'>
                    {
                        agents?.map((agent) => {
                            if (agent.isPlayableCharacter) {
                                return (
                                    <Link key={agent?.uuid} href={`/agent/detail/${agent.uuid}`}>
                                        <button className='flex flex-col items-center p-1 rounded-lg bg-gray-700 hover:bg-red-500 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
                                            <Image src={agent.displayIconSmall} alt={agent.displayName} width={50} height={50} />
                                        </button>
                                    </Link>
                                )
                            }
                            return null
                        })
                    }
                </div>
            </div>
        </>
    )
}