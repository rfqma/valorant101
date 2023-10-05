import { Agents } from "@/components/Agents"

const getAgents = async () => {
  try {
    const res = await fetch('https://valorant-api.com/v1/agents', {
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
        console.log('No agents found!')
      }
    }

  } catch (error) {
    console.log('Error fetching agents: ', error)
  }
}

export default async function HomePage() {
  const agents = await getAgents()

  return (
    <>
      <div className='min-h-screen bg-white'>
        <div className='container'>
          <div className='flex flex-col items-center gap-5 mb-10'>
            <div>
              <Agents agents={agents} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}