import Link from "next/link";
import { BsArrowRightShort } from 'react-icons/bs'

export default async function HomePage() {
  return (
    <>
      <div className='min-h-screen bg-white'>
        <div className='container'>
          <div className='flex flex-col items-center'>
            <div className="bg-white">
              <div className="container">
                <div className="flex flex-col items-center w-full gap-4 p-5 pb-10 rounded-lg shadow-xl">
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
                  <p className="text-sm font-semibold text-center text-black">
                    This is a simple demo app that uses{' '}
                    <Link
                      href={'https://dash.valorant-api.com'}
                      className="underline"
                    >
                      https://dash.valorant-api.com/
                    </Link>
                    {' '}to display some data.
                  </p>
                  <div className="flex flex-col gap-1">
                    <Link
                      href={'/agent'}
                      className="flex items-center gap-1"
                    >
                      <span className="text-sm hover:underline">agent page</span>
                      <BsArrowRightShort />
                    </Link>
                    <Link
                      href={'/map'}
                      className="flex items-center gap-1"
                    >
                      <span className="text-sm hover:underline">map page</span>
                      <BsArrowRightShort />
                    </Link>
                    <Link
                      href={'/weapon'}
                      className="flex items-center gap-1"
                    >
                      <span className="text-sm hover:underline">weapon page</span>
                      <BsArrowRightShort />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}