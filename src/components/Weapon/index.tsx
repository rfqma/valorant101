import { WeaponDetail } from "@/lib/utilities/types"
import Image from "next/image"
import Link from "next/link"

export const Weapon = ({ weapon }: { weapon: WeaponDetail }) => {
  return (
    <>
      <Link href={`/weapon/${weapon.uuid}`}>
        <div className="overflow-hidden shadow-md rounded-xl bg-darkGreen">
          <div className="bg-white">
            <Image
              src={weapon.displayIcon}
              alt={weapon.displayName}
              width={400}
              height={400}
              className="object-cover w-full border-b border-body-color"
            />
          </div>
          <div className="flex flex-col px-3 py-2">
            <span className="text-base font-bold text-white">
              {weapon.displayName}
            </span>
            <span className="text-xs font-normal text-grey">
              {weapon.category.split('EEquippableCategory::')}
            </span>
          </div>
        </div>
      </Link>
    </>
  )
}