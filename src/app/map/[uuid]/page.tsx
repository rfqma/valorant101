import { MapDetails } from "@/components/MapDetails"

const getMapDetails = async (uuid: string) => {
  try {
    const res = await fetch(`https://valorant-api.com/v1/maps/${uuid}`, {
      method: 'GET'
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
    console.log('Error fetching map: ', error)
  }
}

export default async function MapDetailsPage({ params }: { params: any }) {
  const { uuid } = params
  const mapDetails = await getMapDetails(uuid)

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="container">
          <MapDetails mapDetails={mapDetails} />
        </div>
      </div>
    </>
  )
}