import Link from "next/link";
import { Alert } from "@/components/Alert";

export default function HomePage() {
  return (
    <>
      <div className='min-h-screen bg-white'>
        <div className='container flex flex-col gap-5'>
          <Alert withIcon type='info'>
            <span className="text-base">
              Welcome to the{' '}
              <Link
                href={'https://valorant-api.com'}
                className="underline hover:text-info-500 font-medium"
              >
                Valorant API
              </Link>
              {' '}demo!
            </span>
          </Alert>
          <Alert withIcon type="info">
            <span className="text-base">
              This is a simple demo app that uses{' '}
              <Link
                href={'https://dash.valorant-api.com'}
                className="underline hover:text-info-500 font-medium"
              >
                https://dash.valorant-api.com/
              </Link>
              {' '}to display some data.
            </span>
          </Alert>
        </div>
      </div>
    </>
  )
}