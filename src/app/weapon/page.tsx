import { Weapons } from "@/components/Weapons"

const getWeapons = async () => {
  try {
    const res = await fetch('https://valorant-api.com/v1/weapons', {
      method: 'GET',
      cache: 'no-store'
    })

    const data = await res.json()

    if (data.status !== 200) {
      throw new Error('Network response was not ok!')
    }

    if (data.status === 200) {
      if (data.data.length > 0) {
        return data.data
      } else {
        console.log('No weapons found!')
      }
    }
  } catch (error) {
    console.log('Error fetching weapons: ', error)
  }
}

export default async function WeaponPage() {
  const weapons = await getWeapons()

  return (
    <div className='min-h-screen bg-white'>
      <div className="container">
        <div className='flex flex-col items-center gap-5 mb-10'>
          <Weapons weapons={weapons} />
        </div>
      </div>
    </div>
  )
}