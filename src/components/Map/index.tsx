import { MapDetail } from "@/lib/utilities/types"
import Image from "next/image"
import Link from "next/link"
import cx from 'clsx'

export const Map = ({ map }: { map: MapDetail }) => {
  return (
    <Link href={`/map/${map.uuid}`}>
      <div className={cx(
        'overflow-hidden bg-gray-900 border-4 border-gray-900 rounded-md shadow-sm',
        'hover:bg-gray-950 hover:border-gray-950',
        'transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'
      )}
      >
        <div>
          <Image
            src={map.listViewIcon}
            alt={map.displayName}
            width={600}
            height={600}
            className="w-full"
          />
        </div>
        <div className="flex flex-col p-1 md:p-2">
          <span className="text-base font-semibold text-white md:text-lg">
            {map.displayName}
          </span>
          <span className="text-xs font-normal text-gray-400 md:text-sm">
            {
              map.coordinates ? map.coordinates : 'No Coordinates'
            }
          </span>
          <span className="text-xs font-normal text-gray-400 md:text-sm">
            {
              map.tacticalDescription ? map.tacticalDescription : 'No Tactical Description'
            }
          </span>
        </div>
      </div>
    </Link>
  )
}