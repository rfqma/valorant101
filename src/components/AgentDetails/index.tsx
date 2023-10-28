'use client'

import { AgentAbility, AgentDetail } from "@/lib/utilities/types";
import Image from "next/image";
import { useState } from "react";
import { RiArrowDownDoubleFill } from 'react-icons/ri'
import cx from "clsx"

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
    <div className="container flex flex-col items-center gap-4 pb-6 bg-gray-900 rounded">
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
        <h1 className="text-3xl font-bold text-white">
          {agentDetails.displayName}
        </h1>
        <span className="text-sm font-light text-gray-400">
          {agentDetails.role.displayName}
        </span>
      </div>
      <div className="flex flex-col items-center text-center md:max-w-lg">
        <p className="text-base font-normal text-white">
          {agentDetails.description}
        </p>
      </div>
      <div className={cx(
        {
          'grid grid-cols-3 gap-7 p-4': agentDetails.abilities.length > 4,
          'grid grid-cols-4 gap-6 p-4': agentDetails.abilities.length <= 4
        }
      )}
      >
        {
          agentDetails.abilities.map((ability: AgentAbility, index) => {
            return (
              <div
                key={index}
                onClick={() => showAbilityDescription(ability)}
                className={cx(
                  'flex flex-col items-center gap-2 text-center cursor-pointer',
                  'transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
                )}
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
                    <span className="text-sm font-semibold text-gray-400">
                      No Icon
                    </span>
                }
                <span className="text-xs font-normal text-gray-400">
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
                <span className='text-base font-bold text-white'>
                  Ability Description
                </span>
                <span className='text-sm font-light text-gray-400'>
                  {selectedAbility.slot}
                </span>
                <p className='text-base font-normal text-white md:max-w-lg'>
                  {selectedAbility.description}
                </p>
              </div>
            </>
            :
            null
        }
      </div>
    </div>
  )
}