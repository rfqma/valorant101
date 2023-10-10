import { MapDetail } from "@/lib/utilities/types"
import Image from "next/image"

export const MapDetails = ({ mapDetails }: { mapDetails: MapDetail }) => {
  return (
    <>
      <div className="bg-black rounded-xl">
        <div className="container">
          <div className="flex flex-col items-center gap-4 pb-6 pt-6">
            <div>
              <Image
                src={mapDetails.displayIcon}
                alt={mapDetails.displayName}
                width={300}
                height={300}
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
              <div className="flex flex-col gap-1 items-center">
                <span className="text-xs font-normal text-white">
                  X Multiplier
                </span>
                <span className="text-sm font-normal text-grey">
                  {mapDetails.xMultiplier}
                </span>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <span className="text-xs font-normal text-white">
                  Y Multiplier
                </span>
                <span className="text-sm font-normal text-grey">
                  {mapDetails.yMultiplier}
                </span>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <span className="text-xs font-normal text-white">
                  X Scalar
                </span>
                <span className="text-sm font-normal text-grey">
                  {mapDetails.xScalarToAdd}
                </span>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <span className="text-xs font-normal text-white">
                  Y Scalar
                </span>
                <span className="text-sm font-normal text-grey">
                  {mapDetails.yScalarToAdd}
                </span>
              </div>
            </div>
            <h2 className="text-grey font-bold">Region</h2>
            <div className="grid grid-cols-2 items-center gap-2 w-full">
              {
                mapDetails.callouts.map((callout, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-darkGreen rounded p-3 flex flex-col"
                    >
                      <span className="text-white text-xs font-bold">{callout.regionName}</span>
                      <span className="text-white text-xs font-semibold">{callout.superRegionName}</span>
                      <span className="text-white text-xs font-medium">{callout.location.x}</span>
                      <span className="text-white text-xs font-medium">{callout.location.y}</span>
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