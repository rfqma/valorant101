import { MapDetail } from "@/lib/utilities/types"
import Image from "next/image"

export const MapDetails = ({ mapDetails }: { mapDetails: MapDetail }) => {
  return (
    <>
      <div className="bg-black rounded-xl">
        <div className="container">
          <div className="flex flex-col items-center gap-4 pb-6 pt-6">
            <div className="bg-white rounded-full p-5">
              <Image
                src={mapDetails.displayIcon}
                alt={mapDetails.displayName}
                width={250}
                height={250}
              />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-2xl font-bold text-white">
                {mapDetails.displayName}
              </h1>
              <span className="text-sm font-normal text-grey">
                {mapDetails.coordinates}
              </span>
              <span className="text-sm font-normal text-grey">
                {mapDetails.tacticalDescription}
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-base font-normal text-white">
                {mapDetails.narrativeDescription}
              </p>
            </div>
            <div>
              <Image
                src={mapDetails.listViewIcon}
                alt={mapDetails.displayName}
                width={300}
                height={300}
                className="object-cover w-full rounded"
              />
            </div>
            <div className="flex gap-5">
              <span className="text-sm font-normal text-grey">
                {mapDetails.xMultiplier}
              </span>
              <span className="text-sm font-normal text-grey">
                {mapDetails.yMultiplier}
              </span>
              <span className="text-sm font-normal text-grey">
                {mapDetails.xScalarToAdd}
              </span>
              <span className="text-sm font-normal text-grey">
                {mapDetails.yScalarToAdd}
              </span>
            </div>
            <h2 className="text-grey font-bold">Region</h2>
            <div className="grid grid-cols-2 items-center gap-2 w-full">
              {
                mapDetails.callouts.map((callout, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-white rounded p-3 flex flex-col"
                    >
                      <span className="text-xs font-bold">{callout.regionName}</span>
                      <span className="text-xs font-semibold">{callout.superRegionName}</span>
                      <span className="text-xs font-medium">{callout.location.x}</span>
                      <span className="text-xs font-medium">{callout.location.y}</span>
                    </div>
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