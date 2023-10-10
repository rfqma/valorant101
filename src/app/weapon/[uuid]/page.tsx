import { WeaponDetails } from "@/components/WeaponDetails"

const getWeaponDetails = async (uuid: string) => {
  try {
    const res = await fetch(`https://valorant-api.com/v1/weapons/${uuid}`, {
      method: 'GET',
      cache: 'no-store'
    })

    const data = await res.json()

    if (data.status !== 200) {
      throw new Error('Network response was not ok!')
    }

    if (data.status === 200) {
      if (data.data) {
        return data.data
      }
    }

  } catch (error) {
    console.log('Error fetching weapon: ', error)
  }
}

export default async function WeaponDetailsPage({ params }: { params: any }) {
  const { uuid } = params
  const weaponDetails = await getWeaponDetails(uuid)

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="container">
          <WeaponDetails weaponDetails={weaponDetails} />
        </div>
      </div>
    </>
  )
}