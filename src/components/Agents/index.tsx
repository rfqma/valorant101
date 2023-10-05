'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AgentDetail } from "@/lib/utilities/types"
import { useRouter } from 'next/navigation'

export const Agents = ({ agents }: { agents: AgentDetail[] }) => {
  const router = useRouter()

  useEffect(() => {
    router.refresh()
  }, [router])

  return (
    <>
      <div className='bg-white'>
        <div className='container'>
          <div className='flex flex-col items-center w-full gap-4 p-5 rounded-lg shadow-xl'>
            <div>
              <h1 className='text-xl font-bold text-black'>Valorant Agents</h1>
            </div>
            <div className='grid grid-cols-5 gap-2'>
              {
                agents.map((agent: AgentDetail) => {
                  return (
                    agent.isPlayableCharacter ?
                      <Link
                        key={agent.uuid}
                        href={`/agent/${agent.uuid}`}
                      >
                        <button className='p-1 transition duration-300 ease-in-out rounded-lg shadow-xl bg-darkGreen hover:bg-lightGreen hover:-translate-y-1 hover:scale-110'>
                          <Image
                            src={agent.displayIconSmall}
                            alt={agent.displayName}
                            width={50}
                            height={50}
                          />
                        </button>
                      </Link>
                      :
                      null
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}