import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className='container bg-gray-800 max-w-lg min-h-screen'>
        <div className='container p-10'>
          <div className='flex flex-col p-6 gap-5 items-center'>
            <div className='flex flex-col text-center items-center gap-3'>
              <p className='font-poppins font-normal text-sm text-gray-300'>
                aplikasi webnye blom optimal ges, masih under development.
              </p>
              <p className='font-poppins font-normal text-sm text-gray-300'>
                kaya screen type styling, responsive styling, dan styling-styling lainnya.
                gpplah yg penting bisa dipake.
              </p>
              <Image
                src={'/gifs/anak_wida.gif'}
                alt={'anak_wida.gif'}
                width={200}
                height={200}
                unoptimized={true}
                className='rounded-2xl'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}