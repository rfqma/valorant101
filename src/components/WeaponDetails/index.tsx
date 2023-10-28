import { WeaponDetail } from "@/lib/utilities/types"
import Image from "next/image"

export const WeaponDetails = ({ weaponDetails }: { weaponDetails: WeaponDetail }) => {
  return (
    <div className="bg-black rounded-xl">
      <div className="container">
        <div className="flex flex-col items-center gap-4 pt-6 pb-6">
          <div className="p-10 rounded-full">
            <Image
              src={weaponDetails.displayIcon}
              alt={weaponDetails.displayName}
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-white">
              {weaponDetails.displayName}
            </h1>
            <span className="text-sm font-normal text-grey">
              {weaponDetails.category.split('EEquippableCategory::')}
            </span>
          </div>
          <div className="flex flex-col w-full gap-1">
            <div className="flex justify-between w-full border-b border-body-color">
              <span className="text-sm font-normal text-grey">Fire Rate</span>
              <span className="text-sm font-normal text-grey">{weaponDetails.weaponStats.fireRate}</span>
            </div>
            <div className="flex justify-between w-full border-b border-body-color">
              <span className="text-sm font-normal text-grey">Magazine Size</span>
              <span className="text-sm font-normal text-grey">{weaponDetails.weaponStats.magazineSize}</span>
            </div>
            <div className="flex justify-between w-full border-b border-body-color">
              <span className="text-sm font-normal text-grey">Run Speed Multiplier</span>
              <span className="text-sm font-normal text-grey">{weaponDetails.weaponStats.runSpeedMultiplier}</span>
            </div>
            <div className="flex justify-between w-full border-b border-body-color">
              <span className="text-sm font-normal text-grey">Equip Time Seconds</span>
              <span className="text-sm font-normal text-grey">{weaponDetails.weaponStats.equipTimeSeconds}</span>
            </div>
            <div className="flex justify-between w-full border-b border-body-color">
              <span className="text-sm font-normal text-grey">Reload Time Seconds</span>
              <span className="text-sm font-normal text-grey">{weaponDetails.weaponStats.reloadTimeSeconds}</span>
            </div>
            <div className="flex justify-between w-full border-b border-body-color">
              <span className="text-sm font-normal text-grey">First Bullet Accuracy</span>
              <span className="text-sm font-normal text-grey">{weaponDetails.weaponStats.firstBulletAccuracy}</span>
            </div>
            <div className="flex justify-between w-full border-b border-body-color">
              <span className="text-sm font-normal text-grey">Wall Penetration</span>
              <span className="text-sm font-normal text-grey">{weaponDetails.weaponStats.wallPenetration.split('EWallPenetrationDisplayType::')}</span>
            </div>

            <div className="flex justify-between w-full border-b border-body-color">
              <span className="text-sm font-normal text-grey">Alt. Fire Type</span>
              <span className="text-sm font-normal text-grey">{weaponDetails.weaponStats.altFireType ? weaponDetails.weaponStats.altFireType.split('EWeaponAltFireDisplayType::') : 'No'}</span>
            </div>
          </div>
          {
            weaponDetails.weaponStats.adsStats ?
              <div className="flex flex-col items-center w-full gap-1">
                <h2 className="font-bold text-grey">ADS Stats</h2>
                <div className="flex justify-between w-full border-b border-body-color">
                  <span className="text-sm font-normal text-grey">Zoom Multiplier</span>
                  <span className="text-sm font-normal text-grey">{weaponDetails.weaponStats.adsStats.zoomMultiplier}</span>
                </div>
                <div className="flex justify-between w-full border-b border-body-color">
                  <span className="text-sm font-normal text-grey">Fire Rate</span>
                  <span className="text-sm font-normal text-grey">{weaponDetails.weaponStats.adsStats.fireRate}</span>
                </div>
                <div className="flex justify-between w-full border-b border-body-color">
                  <span className="text-sm font-normal text-grey">Run Speed Multiplier</span>
                  <span className="text-sm font-normal text-grey">{weaponDetails.weaponStats.adsStats.runSpeedMultiplier}</span>
                </div>
                <div className="flex justify-between w-full border-b border-body-color">
                  <span className="text-sm font-normal text-grey">Burst Count</span>
                  <span className="text-sm font-normal text-grey">{weaponDetails.weaponStats.adsStats.burstCount}</span>
                </div>
                <div className="flex justify-between w-full border-b border-body-color">
                  <span className="text-sm font-normal text-grey">First Bullet Accuracy</span>
                  <span className="text-sm font-normal text-grey">{weaponDetails.weaponStats.adsStats.firstBulletAccuracy}</span>
                </div>
              </div>
              :
              null
          }
          <div className="flex flex-col items-center w-full gap-1">
            <h2 className="font-bold text-grey">Damage Ranges</h2>
            <div className="grid items-center w-full grid-cols-2 gap-2">
              {
                weaponDetails.weaponStats.damageRanges.map((damageRange, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col p-3 rounded bg-darkGreen"
                    >
                      <span className="text-xs font-bold text-white">{damageRange.rangeStartMeters}m Start Range</span>
                      <span className="text-xs font-bold text-white">{damageRange.rangeEndMeters}m End Range</span>
                      <span className="text-xs font-medium text-white">{damageRange.headDamage} Head Damage</span>
                      <span className="text-xs font-medium text-white">{damageRange.bodyDamage} Body Damage</span>
                      <span className="text-xs font-medium text-white">{damageRange.legDamage} Leg Damage</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="flex flex-col items-center w-full gap-1">
            <h2 className="font-bold text-grey">Shop Data</h2>
            <div className="flex justify-between w-full border-b border-body-color">
              <span className="text-sm font-normal text-grey">Price</span>
              <span className="text-sm font-normal text-grey">{weaponDetails.shopData.cost}</span>
            </div>
            <div className="flex justify-between w-full border-b border-body-color">
              <span className="text-sm font-normal text-grey">Category</span>
              <span className="text-sm font-normal text-grey">{weaponDetails.shopData.category}</span>
            </div>
            <div className="flex justify-between w-full border-b border-body-color">
              <span className="text-sm font-normal text-grey">Sell Availability</span>
              <span className="text-sm font-normal text-grey">{weaponDetails.shopData.canBeTrashed ? 'Yes' : 'No'}</span>
            </div>
            <div className="flex justify-between w-full border-b border-body-color">
              <span className="text-sm font-normal text-grey">Shop Location</span>
              <span className="text-sm font-normal text-grey">Row {weaponDetails.shopData.gridPosition.row}, Column {weaponDetails.shopData.gridPosition.column}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}