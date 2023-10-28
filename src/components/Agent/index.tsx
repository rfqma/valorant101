import { AgentDetail } from '@/lib/utilities/types'
import cx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'

export const Agent = ({ agent }: { agent: AgentDetail }) => {
  return (
    <>
      <Link href={`/agent/${agent.uuid}`}>
        <button className={cx(
          'inline-flex items-center justify-start w-full gap-4 lg:pr-3 mt-1 lg:mt-0',
          'bg-gray-100 hover:bg-red-800 text-black hover:text-white',
          'border border-gray-300 rounded shadow-xs',
          'transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
        )}
        >
          <div>
            <Image
              src={agent.displayIconSmall}
              alt='agent small icon'
              width={50}
              height={50}
            />
          </div>
          <span className='text-base font-medium'>
            {agent.displayName}
          </span>
        </button>
      </Link>
    </>
  )
}