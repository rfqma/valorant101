import { Maps } from "@/components/Maps"

const getMaps = async () => {
    try {
        const res = await fetch('https://valorant-api.com/v1/maps', {
            method: 'GET'
        })

        const data = await res.json()

        if (data.status !== 200) {
            throw new Error('Network response was not ok!')
        }

        if (data.status === 200) {
            if (data.data.length > 0) {
                return data.data
            } else {
                console.log('No maps found!')
            }
        }
    } catch (error) {
        console.log('Error fetching maps: ', error)
    }
}

export default async function MapPage() {
    const maps = await getMaps()

    return (
        <div className='min-h-screen bg-white'>
            <div className="container">
                <div className='flex flex-col items-center gap-5 mb-10'>
                    <Maps maps={maps} />
                </div>
            </div>
        </div>
    )
}