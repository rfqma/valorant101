import { WeaponDetail } from "@/lib/utilities/types"
import { Weapon } from "../Weapon"

export const Weapons = ({ weapons }: { weapons: WeaponDetail[] }) => {
  return (
    <div className="container flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-5">
      {
        weapons.map((weapon, index) => {
          return (
            <Weapon weapon={weapon} key={index} />
          )
        })
      }
    </div>
  )
}