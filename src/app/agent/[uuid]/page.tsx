import { AgentDetails } from "@/components/AgentDetails"

interface Param {
    id: string
}

const getAgentDetails = async (uuid: string) => {
    try {
        const res = await fetch(`https://valorant-api.com/v1/agents/${uuid}`, {
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
        console.log('Error fetching agents: ', error)
    }
}

export default async function AgentDetailsPage({ params }: { params: any }) {
    const { uuid } = params
    const agentDetails = await getAgentDetails(uuid)

    return (
        <>
            <div className="min-h-screen bg-white">
                <div className="container">
                    <AgentDetails agentDetails={agentDetails} />
                </div>
            </div>
        </>
    )
}