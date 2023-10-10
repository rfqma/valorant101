import Link from "next/link";

export default async function HomePage() {
  return (
    <>
      <div className='min-h-screen bg-white'>
        <div className='container'>
          <div className='flex flex-col items-center gap-5 mb-10'>
            <div className="bg-white">
              <div className="container">
                <div className="flex flex-col items-center w-full gap-4 p-5 rounded-lg shadow-xl">
                  <p className="text-sm font-semibold text-black">
                    Welcome to the{' '}
                    <Link
                      href={'https://valorant-api.com'}
                      className="underline"
                    >
                      Valorant API
                    </Link>
                    {' '}demo!
                  </p>
                  <p className="text-center text-sm font-semibold text-black">
                    This is a simple demo app that uses{' '}
                    <Link
                      href={'https://dash.valorant-api.com'}
                      className="underline"
                    >
                      https://dash.valorant-api.com/
                    </Link>
                    {' '}to display some data.
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