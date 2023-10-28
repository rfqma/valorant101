'use client'

import { useEffect } from 'react'
import { AgentDetail } from "@/lib/utilities/types"
import { useRouter } from 'next/navigation'
import { Agent } from '../Agent'

export const Agents = ({ agents }: { agents: AgentDetail[] }) => {
  const router = useRouter()

  useEffect(() => {
    router.refresh()
  }, [router])

  return (
    <div className='container p-5 bg-white border border-gray-300 rounded-lg shadow-md'>
      <div className='lg:gap-4 lg:grid lg:grid-cols-5'>
        {
          agents.map((agent, index) => {
            return (
              agent.isPlayableCharacter ?
                <Agent agent={agent} key={index} />
                :
                null
            )
          })
        }
      </div>
    </div>
  )
}