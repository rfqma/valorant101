import { MapDetail } from "@/lib/utilities/types"
import Image from "next/image"
import Link from "next/link"

export const Map = ({ map }: { map: MapDetail }) => {
  return (
    <>
      <Link href={`/map/${map.uuid}`}>
        <div className="overflow-hidden shadow-md rounded-xl bg-black">
          <div>
            <Image
              src={map.listViewIcon}
              alt={map.displayName}
              width={1000}
              height={1000}
              className="object-cover w-full border-b border-body-color"
            />
          </div>
          <div className="flex flex-col px-3 py-2">
            <span className="text-base font-bold text-white">
              {map.displayName}
            </span>
            <span className="text-xs font-normal text-grey">
              {
                map.coordinates ?
                  map.coordinates
                  :
                  'No Coordinates'
              }
            </span>
            <span className="text-xs font-normal text-grey">
              {
                map.tacticalDescription ?
                  map.tacticalDescription
                  :
                  'No Tactical Description'
              }
            </span>
          </div>
        </div>
      </Link>
    </>
  )
}