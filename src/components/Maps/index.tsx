import { MapDetail } from "@/lib/utilities/types"
import { Map } from "../Map"

export const Maps = ({ maps }: { maps: MapDetail[] }) => {
  return (
    <div className="container flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5">
      {
        maps.map((map, index) => {
          return (
            <Map map={map} key={index} />
          )
        })
      }
    </div>
  )
}