import Link from "next/link"

import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className='container p-10'>
        <div className='flex flex-col gap-5'>
          <Link href={'/agent'}>
            Go to Agent Page
          </Link>
          <Link href={'/map'}>
            Go to Map Page
          </Link>
          <p>
            aplikasi webnye blom optimal ges, masih under development.
          </p>
          <p>
            kaya screen type styling, responsive styling, dan styling-styling lainnya.
            gpplah yg penting bisa dipake.
          </p>
        </div>
        <Image
          src={'/gifs/anak_wida.gif'}
          alt={'anak_wida.gif'}
          width={400}
          height={400}
          unoptimized={true}
        />
      </div>
    </>
  )
}
