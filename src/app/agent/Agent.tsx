'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AgentDetails } from "@/lib/types"

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
            <div className='flex flex-col p-4 gap-5 rounded-xl shadow-2xl items-center bg-gray-900 mt-5'>
                <div className="px-2 py-1 bg-gray-600 rounded-xl">
                    <h1 className='font-poppins font-bold text-base text-gray-200'>Valorant Agents</h1>
                </div>
                <div className='grid grid-cols-5 gap-2'>
                    {
                        agents?.map((agent) => {
                            if (agent.isPlayableCharacter) {
                                return (
                                    <Link key={agent?.uuid} href={`/agent/detail/${agent.uuid}`}>
                                        <button className='flex flex-col p-1 pb-0 rounded-lg bg-gray-600 hover:bg-red-500 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
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