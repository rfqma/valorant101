import { WeaponDetail } from "@/lib/utilities/types"
import { Weapon } from "../Weapon"

export const Weapons = ({ weapons }: { weapons: WeaponDetail[] }) => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-4">
          {
            weapons.map((weapon, index) => {
              return (
                <Weapon key={index} weapon={weapon} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}