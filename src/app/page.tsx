import Agent from "./agent/Agent"

export default function Home() {
  return (
    <>
      <div className='bg-gray-50 min-h-screen'>
        <div className='container p-10 max-w-4xl'>
          <div className='flex flex-col gap-5 items-center'>
            <div className='flex gap-5'>
              <div className=''>
                <Agent />
              </div>
              <div className='flex flex-col justify-between gap-5'>
                <div className='flex flex-col p-5 gap-5 rounded-xl shadow-xl items-center bg-gray-50 max-w-md'>
                  <p>
                    Agent's Voice Line dari <strong>https://valorant-api.com/v1/agents/</strong> lagi error/null
                  </p>
                  <p>
                    Agent's Voice Line dari <strong>https://valorant-api.com/v1/agents/</strong> lagi error/null
                  </p>
                </div>
                <div className='flex flex-col p-5 gap-5 rounded-xl shadow-xl items-center bg-gray-50 max-w-md'>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae enim, iusto impedit totam illum modi corporis voluptatum excepturi consectetur consequatur inventore nesciunt adipisci nihil ratione eligendi quibusdam assumenda aliquid in?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}