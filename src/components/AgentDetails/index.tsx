'use client'

import { AgentAbility, AgentDetail } from "@/lib/utilities/types";
import Image from "next/image";
import { useState } from "react";
import { RiArrowDownDoubleFill } from 'react-icons/ri'

export const AgentDetails = ({ agentDetails }: { agentDetails: AgentDetail }) => {
  const [selectedAbility, setSelectedAbility] = useState<AgentAbility | null>(null)

  const showAbilityDescription = (ability: AgentAbility | null) => {
    if (ability === selectedAbility) {
      setSelectedAbility(null)
    } else {
      setSelectedAbility(ability)
    }
  }

  return (
    <>
      <div className="bg-black rounded-xl">
        <div className="container">
          <div className="flex flex-col items-center gap-4 pb-6">
            <div
              style={{
                backgroundImage: `url(${agentDetails.background || ''})`,
                backgroundSize: 'cover'
              }}
            >
              <Image
                src={agentDetails.fullPortrait}
                alt={agentDetails.displayName}
                width={350}
                height={350}
              />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-2xl font-bold text-white">
                {agentDetails.displayName}
              </h1>
              <span className="text-sm font-normal text-grey">
                {agentDetails.role.displayName}
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-base font-normal text-white">
                {agentDetails.description}
              </p>
            </div>
            <div
              className={`
            ${agentDetails.abilities.length > 4 ?
                  'grid grid-cols-3 gap-7 p-4'
                  :
                  'grid grid-cols-4 gap-6 p-4'
                }`}
            >
              {
                agentDetails.abilities.map((ability: AgentAbility, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => showAbilityDescription(ability)}
                      className="flex flex-col items-center gap-2 text-center cursor-pointer"
                    >
                      {
                        ability.displayIcon !== null ?
                          <Image
                            src={ability.displayIcon}
                            alt={ability.displayName}
                            width={35}
                            height={35}
                          />
                          :
                          <span className="text-sm font-normal text-grey">
                            No Icon
                          </span>
                      }
                      <span className="text-sm font-normal text-grey">
                        {ability.displayName}
                      </span>
                    </div>
                  )
                })
              }
            </div>
            <div className="flex flex-col items-center gap-5 text-center">
              {
                selectedAbility ?
                  <>
                    <RiArrowDownDoubleFill
                      size={40}
                      color={'grey'}
                    />
                    <div className='flex flex-col gap-2'>
                      <span className='text-xs font-bold text-white'>
                        Ability Description
                      </span>
                      <span className='text-xs font-semibold text-grey'>
                        {selectedAbility.slot}
                      </span>
                      <p className='text-sm font-normal text-white'>
                        {selectedAbility.description}
                      </p>
                    </div>
                  </>
                  :
                  null
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}