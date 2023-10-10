import { MapDetail } from "@/lib/utilities/types"
import { Map } from "../Map"

export const Maps = ({ maps }: { maps: MapDetail[] }) => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-4">
          {
            maps.map((map, index) => {
              return (
                <Map key={index} map={map} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}